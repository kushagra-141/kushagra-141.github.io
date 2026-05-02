// Projects — glass cards with tilt. Resume-only data, no fabricated links/details.
function ProjectCard({ p, index }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (y - 0.5) * -6;
    const ry = (x - 0.5) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-xl p-6 transition-transform duration-200 ease-out will-change-transform overflow-hidden"
      style={{ "--mx": "50%", "--my": "50%" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx) var(--my), rgba(0,212,255,0.10), transparent 50%)",
        }}
      />
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-cyan-300/70">
            0{index + 1} / Project
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white tracking-tight mb-3 group-hover:text-cyan-100 transition leading-snug">
          {p.title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed mb-5">{p.blurb}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-md font-mono text-[10px] text-white/70 border border-white/10 bg-white/[0.02]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading index="04" kicker="Selected work" title="Projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
