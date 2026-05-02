// About — animated counters
function Counter({ value, suffix = "", decimals = 0, inView }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading index="01" kicker="Profile" title="About" />

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-5 text-white/70 leading-relaxed text-lg">
            <p>
              I'm a master's student in Computer Science at <span className="text-white">Rochester Institute of Technology</span>,
              graduating in 2026. My focus is the seam between
              <span className="text-cyan-300"> machine learning</span>,
              <span className="text-cyan-300"> computer vision</span>, and the data-engineering work that makes both possible.
            </p>
            <p>
              Across <span className="text-white">four internships</span> I've automated ingestion pipelines with Airflow, built
              Tableau dashboards for a financial-services lender, mentored 40+ undergraduates as a teaching assistant, and run
              SOC&nbsp;1 / SOC&nbsp;2 risk assessments on third-party vendors.
            </p>
            <p>
              On the research side, I co-authored an <span className="text-violet-300">IEEE&nbsp;Xplore</span> paper applying
              classical ML to voice-disorder detection in Parkinson's disease, and I keep a sideline of vision and systems
              projects — CLIP/DINOv2 fine-tuning, mean-shift segmentation, and CUDA image-processing kernels.
            </p>

            <div className="pt-4 flex flex-wrap gap-2 font-mono text-[11px] tracking-wider">
              {["AI / ML", "COMPUTER VISION", "BIG DATA", "SOFTWARE ENG"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.02] text-white/50">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div ref={ref} className="md:col-span-2 grid grid-cols-2 gap-4">
            {portfolioData.about.stats.map((s, i) => (
              <GlassCard key={s.label} className="p-5 relative overflow-hidden group min-w-0">
                <div
                  className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  style={{
                    background:
                      i % 2
                        ? "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.18), transparent 60%)"
                        : "radial-gradient(circle at 50% 0%, rgba(0,212,255,0.18), transparent 60%)",
                  }}
                />
                <div className="font-mono text-[10px] tracking-[0.2em] text-white/40 mb-3">
                  0{i + 1}
                </div>
                <div className="text-3xl md:text-[2.5rem] font-semibold text-white tracking-tight tabular-nums leading-none whitespace-nowrap">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} inView={inView} />
                </div>
                <div className="mt-2 text-sm text-white/50">{s.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
