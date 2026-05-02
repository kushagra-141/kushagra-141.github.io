// Footer
function Footer() {
  return (
    <footer className="relative pt-24 pb-12 px-6 md:px-10 overflow-hidden">
      {/* grid background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{
             backgroundImage:
               "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
             backgroundSize: "60px 60px",
             maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
             WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
           }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          <div>
            <div className="font-mono text-cyan-300 text-sm">/kg<span className="text-violet-300">.</span></div>
            <div className="mt-3 text-white/80 font-semibold tracking-tight text-lg">{portfolioData.name}</div>
            <div className="mt-1 text-white/40 text-sm">{portfolioData.location}</div>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Connect</div>
            <div className="flex gap-2.5">
              {[
                { href: portfolioData.github, Icon: IconGitHub, label: "GitHub" },
                { href: portfolioData.linkedin, Icon: IconLinkedIn, label: "LinkedIn" },
                { href: "mailto:" + portfolioData.email, Icon: IconMail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a key={label}
                   href={href}
                   target={href.startsWith("http") ? "_blank" : undefined}
                   rel="noreferrer"
                   aria-label={label}
                   className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/60 hover:text-cyan-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_0_24px_-6px_rgba(0,212,255,0.6)] transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Get in touch</div>
            <div className="flex flex-col gap-1">
              <a href={"mailto:" + portfolioData.email} className="text-cyan-200 hover:text-cyan-100 transition font-mono text-sm">
                {portfolioData.email}
              </a>
              <a href={"mailto:" + portfolioData.personalEmail} className="text-cyan-200 hover:text-cyan-100 transition font-mono text-sm">
                {portfolioData.personalEmail}
              </a>
            </div>
            <div className="mt-3 text-white/50 text-sm">
              Open to roles as a Data Scientist, Machine Learning Engineer, or Software Developer.
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-white/35">
          <span>© {new Date().getFullYear()} {portfolioData.name}. Built with React + Tailwind.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Last deployed · {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
