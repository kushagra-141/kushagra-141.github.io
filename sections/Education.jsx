// Education — animated GPA progress bars
function GpaBar({ value, max, inView, delay = 0 }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setPct((value / max) * 100), delay);
    return () => clearTimeout(t);
  }, [inView, value, max, delay]);

  return (
    <div className="mt-4">
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">GPA</span>
        <span className="font-mono text-sm text-cyan-200 tabular-nums">
          {value.toFixed(2)} <span className="text-white/40">/ {max.toFixed(1)}</span>
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden relative">
        <div
          className="h-full rounded-full transition-all duration-[1600ms] ease-out relative"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
            boxShadow: "0 0 14px rgba(0,212,255,0.5)",
          }}
        >
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-white/30 blur-sm" />
        </div>
      </div>
    </div>
  );
}

function Education() {
  const [ref, inView] = useInView();
  return (
    <section id="education" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading index="06" kicker="Academics" title="Education" />

        <div ref={ref} className="grid md:grid-cols-2 gap-5">
          {portfolioData.education.map((e, i) => (
            <GlassCard key={i} className="p-7 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-30 blur-3xl pointer-events-none"
                   style={{ background: i === 0 ? "#00d4ff" : "#7c3aed" }} />
              <div className="relative">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-cyan-300/70">
                  0{i + 1} · {e.period}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white tracking-tight">{e.school}</h3>
                <div className="mt-1 text-white/60 text-sm">{e.degree}</div>
                <div className="mt-1 text-white/40 text-xs font-mono">{e.location}</div>

                <GpaBar value={e.gpa} max={e.gpaMax} inView={inView} delay={i * 200} />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Education = Education;
