// Publication — featured glowing card
function Publication() {
  const pub = portfolioData.publication;
  return (
    <section id="publication" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading index="05" kicker="Research" title="Publication" />

        <div className="relative">
          {/* glow halo */}
          <div className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl pointer-events-none"
               style={{ background: "radial-gradient(circle at 30% 30%, rgba(0,212,255,0.25), transparent 60%), radial-gradient(circle at 70% 70%, rgba(124,58,237,0.25), transparent 60%)" }} />

          <GlassCard className="relative p-8 md:p-12 overflow-hidden">
            {/* corner ornaments */}
            <div className="absolute top-0 right-0 w-72 h-72 opacity-50 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/20 to-transparent blur-3xl" />
            </div>

            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/5 relative">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-cyan-200">
                  {pub.venue} · {pub.year}
                </span>
              </div>
              <span className="font-mono text-xs text-white/40">PEER-REVIEWED</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight max-w-3xl">
              {pub.title}
            </h3>

            <p className="mt-6 text-white/65 leading-relaxed max-w-3xl">
              {pub.summary}
            </p>

            <div className="mt-6">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Classifiers</div>
              <div className="flex flex-wrap gap-1.5">
                {pub.classifiers.map((c) => (
                  <span key={c} className="px-2.5 py-1 rounded-md font-mono text-[11px] text-white/80 border border-white/10 bg-white/[0.03]">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={pub.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border border-cyan-400/40 bg-cyan-400/10 text-cyan-100 hover:bg-cyan-400/20 hover:shadow-[0_0_28px_-6px_rgba(0,212,255,0.6)] transition">
                <IconExternal size={14} /> Read on IEEE Xplore
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

window.Publication = Publication;
