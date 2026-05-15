export function WaveSeparator() {
  return (
    <div
      aria-hidden
      className="w-full flex justify-center items-center py-10 sm:py-14 lg:py-16 bg-transparent"
    >
      <svg
        width="100%"
        height="22"
        viewBox="0 0 1200 22"
        preserveAspectRatio="none"
        className="block w-full max-w-[920px] px-6"
        fill="none"
      >
        <defs>
          <linearGradient id="waveGoldRibbon" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(184,148,90,0)" />
            <stop offset="15%" stopColor="rgba(184,148,90,0.5)" />
            <stop offset="50%" stopColor="#b8945a" />
            <stop offset="85%" stopColor="rgba(184,148,90,0.5)" />
            <stop offset="100%" stopColor="rgba(184,148,90,0)" />
          </linearGradient>
        </defs>

        {/* Left wavy ribbon */}
        <path
          d="M10 11 Q 70 5, 130 11 T 250 11 T 370 11 T 490 11 T 560 11"
          stroke="url(#waveGoldRibbon)"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right wavy ribbon */}
        <path
          d="M640 11 Q 700 17, 760 11 T 880 11 T 1000 11 T 1120 11 T 1190 11"
          stroke="url(#waveGoldRibbon)"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
        />

        {/* Center ornament — elegant ribbon knot */}
        <g transform="translate(600 11)">
          <circle r="3.2" fill="#b8945a" />
          <circle r="1.4" fill="#fbf5e7" />
          <path
            d="M -22 0 Q -14 -5, -6 0 Q -14 5, -22 0 Z"
            fill="rgba(184,148,90,0.85)"
          />
          <path
            d="M 22 0 Q 14 -5, 6 0 Q 14 5, 22 0 Z"
            fill="rgba(184,148,90,0.85)"
          />
        </g>

        {/* Terminal dots */}
        <circle cx="4" cy="11" r="1.2" fill="rgba(184,148,90,0.55)" />
        <circle cx="1196" cy="11" r="1.2" fill="rgba(184,148,90,0.55)" />
      </svg>
    </div>
  );
}
