export function WaveSeparator() {
  return (
    <div
      aria-hidden
      className="relative w-full flex justify-center items-center py-16 lg:py-24 bg-transparent overflow-hidden"
    >
      {/* Full-width gold hairline behind the ribbon for a true 'end of section' feel */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#b8945a]/40 to-transparent" />

      <svg
        width="100%"
        height="40"
        viewBox="0 0 1600 40"
        preserveAspectRatio="none"
        className="relative block w-full px-0"
        fill="none"
      >
        <defs>
          <linearGradient id="ribbonGold" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(184,148,90,0)" />
            <stop offset="12%" stopColor="rgba(184,148,90,0.55)" />
            <stop offset="50%" stopColor="#caa460" />
            <stop offset="88%" stopColor="rgba(184,148,90,0.55)" />
            <stop offset="100%" stopColor="rgba(184,148,90,0)" />
          </linearGradient>
          <linearGradient id="ribbonGoldSoft" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(205,174,121,0)" />
            <stop offset="50%" stopColor="rgba(205,174,121,0.7)" />
            <stop offset="100%" stopColor="rgba(205,174,121,0)" />
          </linearGradient>
          <radialGradient id="ribbonDot" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#e8cc8a" />
            <stop offset="60%" stopColor="#b8945a" />
            <stop offset="100%" stopColor="rgba(184,148,90,0)" />
          </radialGradient>
        </defs>

        {/* Primary ribbon wave */}
        <path
          d="M0 20 Q 100 4, 200 20 T 400 20 T 600 20 T 800 20 T 1000 20 T 1200 20 T 1400 20 T 1600 20"
          stroke="url(#ribbonGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Mirrored softer ribbon to create the woven gift-ribbon feel */}
        <path
          d="M0 20 Q 100 36, 200 20 T 400 20 T 600 20 T 800 20 T 1000 20 T 1200 20 T 1400 20 T 1600 20"
          stroke="url(#ribbonGoldSoft)"
          strokeWidth="0.7"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />

        {/* Center ornament */}
        <circle cx="800" cy="20" r="9" fill="url(#ribbonDot)" opacity="0.55" />
        <circle cx="800" cy="20" r="2.2" fill="#caa460" />
        <line x1="770" y1="20" x2="788" y2="20" stroke="#b8945a" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
        <line x1="812" y1="20" x2="830" y2="20" stroke="#b8945a" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      </svg>
    </div>
  );
}
