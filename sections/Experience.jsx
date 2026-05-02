// Experience — vertical timeline, slide-in cards, accordion bullets
function ExpCard({ exp, side, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [open, setOpen] = useState(false);

  return (
    <div
      ref={ref}
      className={
        "relative grid md:grid-cols-9 gap-4 transition-all duration-700 " +
        (inView ? "opacity-100 translate-x-0" : "opacity-0 " + (side === "L" ? "-translate-x-8" : "translate-x-8"))
      }
    >
      {/* Left side content (md only) */}
      <div className={"md:col-span-4 " + (side === "L" ? "md:order-1" : "md:order-3")}>
        {side === "L" && (
          <ExpInner exp={exp} index={index} open={open} setOpen={setOpen} align="right" />
        )}
      </div>

      {/* Center spine */}
      <div className="md:col-span-1 md:order-2 hidden md:flex justify-center relative">
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/30 via-violet-400/20 to-cyan-400/10" />
        <div className="relative mt-6">
          <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_18px_2px_rgba(0,212,255,0.6)]" />
          <div className="absolute inset-0 rounded-full animate-ping bg-cyan-300/60" />
        </div>
      </div>

      {/* Right side content */}
      <div className={"md:col-span-4 " + (side === "L" ? "md:order-3" : "md:order-1")}>
        {side === "R" && (
          <ExpInner exp={exp} index={index} open={open} setOpen={setOpen} align="left" />
        )}
      </div>

      {/* Mobile: always show */}
      <div className="md:hidden col-span-1">
        <div className="flex gap-4">
          <div className="relative pt-2">
            <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_18px_2px_rgba(0,212,255,0.6)]" />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-cyan-400/30 to-transparent" />
          </div>
          <div className="flex-1 pb-2">
            <ExpInner exp={exp} index={index} open={open} setOpen={setOpen} align="left" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpInner({ exp, index, open, setOpen, align }) {
  return (
    <GlassCard
      className={
        "p-6 group cursor-pointer transition-all duration-300 hover:border-cyan-400/30 " +
        (align === "right" ? "md:text-right" : "")
      }
      onClick={() => setOpen((v) => !v)}
    >
      <div className={"flex items-center gap-3 mb-2 " + (align === "right" ? "md:justify-end" : "")}>
        <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-300/60">
          0{index + 1}
        </span>
        <span className="font-mono text-[11px] text-white/40">{exp.period}</span>
      </div>
      <h3 className="text-xl font-semibold text-white tracking-tight">{exp.role}</h3>
      <div className="text-cyan-300/90 text-sm mt-1">{exp.company}</div>
      <div className="text-white/40 text-xs mt-1 font-mono">{exp.location}</div>

      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: open ? 400 : 0, opacity: open ? 1 : 0 }}
      >
        <ul className={"mt-5 space-y-2.5 text-sm text-white/70 " + (align === "right" ? "md:text-right" : "")}>
          {exp.bullets.map((b, i) => (
            <li key={i} className={"flex gap-2 " + (align === "right" ? "md:flex-row-reverse" : "")}>
              <span className="text-cyan-300/60 mt-1.5 font-mono text-[10px] flex-none">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={"mt-4 flex items-center gap-1.5 text-[11px] text-white/40 font-mono group-hover:text-cyan-300/80 transition " + (align === "right" ? "md:justify-end" : "")}>
        <span>{open ? "COLLAPSE" : "EXPAND"}</span>
        <span className={"transition-transform duration-300 " + (open ? "rotate-90" : "")}>▸</span>
      </div>
    </GlassCard>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading index="03" kicker="Trajectory" title="Experience" />
        <div className="space-y-8">
          {portfolioData.experience.map((exp, i) => (
            <ExpCard key={i} exp={exp} side={i % 2 === 0 ? "L" : "R"} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.Experience = Experience;
