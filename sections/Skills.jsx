// Skills — interactive tag cloud filtered by category
function Skills() {
  const cats = ["All", ...Object.keys(portfolioData.skills)];
  const [active, setActive] = useState("All");

  const allSkills = useMemo(() => {
    const out = [];
    Object.entries(portfolioData.skills).forEach(([cat, list]) => {
      list.forEach((s) => out.push({ name: s, cat }));
    });
    return out;
  }, []);

  const isHi = (s) => active === "All" || s.cat === active;

  return (
    <section id="skills" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading index="02" kicker="Toolkit" title="Skills" />

        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map((c) => {
            const a = active === c;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={
                  "px-4 py-2 rounded-full text-sm font-medium tracking-tight transition-all duration-300 border " +
                  (a
                    ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-100 shadow-[0_0_24px_-6px_rgba(0,212,255,0.6)]"
                    : "border-white/10 text-white/60 hover:text-white hover:border-white/20")
                }
              >
                {c}
                <span className="ml-2 font-mono text-[10px] text-white/40">
                  {c === "All"
                    ? allSkills.length
                    : portfolioData.skills[c].length}
                </span>
              </button>
            );
          })}
        </div>

        <GlassCard className="p-8 md:p-10">
          <div className="flex flex-wrap gap-2.5">
            {allSkills.map((s, i) => {
              const hi = isHi(s);
              return (
                <span
                  key={s.name + i}
                  className={
                    "px-3.5 py-2 rounded-lg font-mono text-[13px] tracking-tight transition-all duration-500 border " +
                    (hi
                      ? "bg-gradient-to-br from-white/[0.06] to-white/[0.02] border-white/15 text-white"
                      : "bg-white/[0.01] border-white/5 text-white/25")
                  }
                  style={{
                    transform: hi ? "translateY(0) scale(1)" : "translateY(2px) scale(0.97)",
                    boxShadow: hi && active !== "All"
                      ? "0 0 20px -8px rgba(0,212,255,0.5), inset 0 1px 0 rgba(255,255,255,0.04)"
                      : "none",
                  }}
                >
                  {s.name}
                  <span className="ml-2 text-[9px] tracking-[0.15em] uppercase text-white/30">
                    {s.cat}
                  </span>
                </span>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

window.Skills = Skills;
