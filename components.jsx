// Reusable primitives + hooks
const { useState, useEffect, useRef, useCallback, useMemo } = React;

// ---------- Hooks ----------
function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

// ---------- Icons (inline SVG, lucide-style) ----------
const Icon = ({ d, size = 20, stroke = "currentColor", className = "", children }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children || <path d={d} />}
  </svg>
);

const IconGitHub = (p) => (
  <Icon {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </Icon>
);
const IconLinkedIn = (p) => (
  <Icon {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);
const IconMail = (p) => (
  <Icon {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </Icon>
);
const IconDownload = (p) => (
  <Icon {...p}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </Icon>
);
const IconExternal = (p) => (
  <Icon {...p}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </Icon>
);
const IconMenu = (p) => (
  <Icon {...p}>
    <path d="M3 12h18" />
    <path d="M3 6h18" />
    <path d="M3 18h18" />
  </Icon>
);
const IconClose = (p) => (
  <Icon {...p}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Icon>
);
const IconMapPin = (p) => (
  <Icon {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);
const IconArrow = (p) => (
  <Icon {...p}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Icon>
);
const IconSparkle = (p) => (
  <Icon {...p}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
  </Icon>
);

// ---------- Section heading ----------
function SectionHeading({ index, title, kicker }) {
  return (
    <div className="mb-14 flex items-end justify-between flex-wrap gap-6">
      <div>
        <div className="font-mono text-xs tracking-[0.25em] uppercase text-cyan-300/70 mb-3">
          <span className="text-violet-300/60">{index}</span>
          <span className="mx-2 text-white/20">/</span>
          <span>{kicker}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          {title}
        </h2>
      </div>
      <div className="hidden md:block h-px flex-1 ml-8 bg-gradient-to-r from-cyan-400/40 via-violet-400/20 to-transparent" />
    </div>
  );
}

// ---------- Glass card wrapper ----------
function GlassCard({ children, className = "", ...rest }) {
  return (
    <div
      className={
        "rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-xl " +
        "shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] " +
        className
      }
      {...rest}
    >
      {children}
    </div>
  );
}

Object.assign(window, {
  useInView,
  useScrollY,
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconDownload,
  IconExternal,
  IconMenu,
  IconClose,
  IconMapPin,
  IconArrow,
  IconSparkle,
  SectionHeading,
  GlassCard,
});
