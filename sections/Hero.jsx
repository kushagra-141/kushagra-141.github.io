// Hero with constellation canvas + typewriter
function ConstellationCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    let particles = [];
    let raf = 0;
    let mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.floor((W * H) / 14000);
      particles = new Array(Math.min(target, 110)).fill(0).map(() => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.4,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      // particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        // mouse repel
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dm = Math.hypot(dx, dy);
        if (dm < 120) {
          p.x += (dx / dm) * 0.6;
          p.y += (dy / dm) * 0.6;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, 0.7)";
        ctx.fill();
      }
      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            const alpha = (1 - d / 130) * 0.35;
            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // mouse links
        const a = particles[i];
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 160) {
          const alpha = (1 - dm / 160) * 0.6;
          ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}

function Typewriter({ words, typingSpeed = 80, deletingSpeed = 40, hold = 1500 }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    if (!del && sub === word) {
      const t = setTimeout(() => setDel(true), hold);
      return () => clearTimeout(t);
    }
    if (del && sub === "") {
      setDel(false);
      setIdx((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setSub((s) => (del ? s.slice(0, -1) : word.slice(0, s.length + 1)));
      },
      del ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [sub, del, idx, words, typingSpeed, deletingSpeed, hold]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-cyan-300">{sub}</span>
      <span
        className="ml-1 inline-block w-[2px] self-stretch bg-cyan-300"
        style={{ animation: "tw-blink 1s steps(2) infinite" }}
      />
    </span>
  );
}

function GlowButton({ href, onClick, children, primary = false, icon }) {
  const base =
    "group relative inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-tight transition-all duration-300";
  const cls = primary
    ? base +
      " bg-cyan-400/10 text-cyan-100 border border-cyan-400/40 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_-5px_rgba(0,212,255,0.5)]"
    : base +
      " text-white/80 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20";
  return (
    <a href={href} onClick={onClick} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
      {icon}
      <span>{children}</span>
      {primary && (
        <span className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition" style={{
          boxShadow: "0 0 0 1px rgba(0,212,255,0.4), 0 0 40px -2px rgba(0,212,255,0.4)"
        }} />
      )}
    </a>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0">
        <ConstellationCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/40 via-transparent to-[#0a0f1e]" />
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full opacity-30 blur-[120px]"
             style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)" }} />
        <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] rounded-full opacity-25 blur-[120px]"
             style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[0.95] text-white">
            Kushagra
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
              Gupta
            </span>
            <span className="text-cyan-300">.</span>
          </h1>

          <div className="mt-8 font-mono text-lg md:text-2xl text-white/70">
            <span className="text-white/40">&gt; </span>
            <Typewriter words={portfolioData.roles} />
          </div>

          <p className="mt-6 max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
            CS master's student at RIT building things across machine learning, computer vision, and big-data engineering.
            Four internships, an IEEE Xplore publication, and a stack that runs from PyTorch and DINOv2 to Airflow, Spark, and CUDA.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <GlowButton href={portfolioData.github} primary icon={<IconGitHub size={16} />}>
              GitHub
            </GlowButton>
            <GlowButton href={portfolioData.linkedin} icon={<IconLinkedIn size={16} />}>
              LinkedIn
            </GlowButton>
            <GlowButton href={"mailto:" + portfolioData.email} icon={<IconMail size={16} />}>
              {portfolioData.email}
            </GlowButton>
            <a
              href={portfolioData.resume}
              className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium tracking-tight transition-all duration-300 text-white/80 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20"
            >
              <IconExternal size={16} />
              <span>View Resume</span>
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-white/40 text-sm font-mono">
            <IconMapPin size={14} />
            <span>{portfolioData.location}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 font-mono text-[10px] tracking-[0.3em]">
        <span>SCROLL</span>
        <span className="block w-px h-10 bg-gradient-to-b from-cyan-400/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

window.Hero = Hero;
