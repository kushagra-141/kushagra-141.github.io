// Navbar with frosted-glass on scroll, active section, mobile menu
const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publication", label: "Publication" },
  { id: "education", label: "Education" },
];

function Navbar() {
  const y = useScrollY();
  const scrolled = y > 24;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", ...NAV_LINKS.map((l) => l.id)];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "backdrop-blur-xl bg-[#0a0f1e]/70 border-b border-white/[0.06]"
          : "bg-transparent")
      }
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 group"
        >
          <span className="font-mono text-cyan-300 text-sm tracking-tight">
            <span className="text-white/40">/</span>kg
            <span className="text-violet-300/80">.</span>
          </span>
          <span className="hidden sm:inline text-white/80 text-sm font-medium tracking-tight group-hover:text-white transition">
            Kushagra Gupta
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l, i) => {
            const isActive = active === l.id;
            return (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={
                  "relative px-3 py-2 text-sm tracking-tight transition " +
                  (isActive ? "text-white" : "text-white/60 hover:text-white/90")
                }
              >
                <span className="font-mono text-[10px] mr-1.5 text-cyan-300/60">
                  0{i + 1}
                </span>
                {l.label}
                {isActive && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-violet-400" />
                )}
              </button>
            );
          })}
          <a
            href={portfolioData.resume}
            className="ml-3 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/30 text-cyan-200 hover:bg-cyan-400/10 hover:border-cyan-400/60 transition flex items-center gap-2"
          >
            <IconExternal size={14} /> Resume
          </a>
        </div>

        <button
          className="md:hidden text-white/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#0a0f1e]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col">
            {NAV_LINKS.map((l, i) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-left py-3 text-white/80 hover:text-white border-b border-white/[0.04] last:border-b-0 flex items-center gap-3"
              >
                <span className="font-mono text-[10px] text-cyan-300/60">
                  0{i + 1}
                </span>
                {l.label}
              </button>
            ))}
            <a
              href={portfolioData.resume}
              className="mt-4 px-4 py-3 rounded-full text-sm font-medium border border-cyan-400/30 text-cyan-200 hover:bg-cyan-400/10 transition flex items-center justify-center gap-2"
            >
              <IconExternal size={14} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

window.Navbar = Navbar;
