export function WaveSeparator() {
  return (
    <div aria-hidden className="w-full flex justify-center items-center py-10 lg:py-14 bg-transparent">
      <div className="flex items-center gap-5 w-full max-w-[1100px] px-6">
        {/* left ornament */}
        <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-gold-deep/30 to-gold-deep/50" />
        <svg
          width="320"
          height="22"
          viewBox="0 0 320 22"
          className="shrink-0"
          fill="none"
        >
          <defs>
            <linearGradient id="waveGoldElegant" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgba(205,174,121,0)" />
              <stop offset="50%" stopColor="#cdae79" />
              <stop offset="100%" stopColor="rgba(205,174,121,0)" />
            </linearGradient>
            <linearGradient id="waveGoldFaint" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgba(205,174,121,0)" />
              <stop offset="50%" stopColor="rgba(205,174,121,0.5)" />
              <stop offset="100%" stopColor="rgba(205,174,121,0)" />
            </linearGradient>
          </defs>
          {/* main wave */}
          <path
            d="M0 11 C 30 2, 60 20, 90 11 S 150 2, 180 11 S 240 20, 270 11 S 320 2, 320 11"
            stroke="url(#waveGoldElegant)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          {/* faint echo wave */}
          <path
            d="M0 14 C 40 8, 80 18, 120 14 S 200 8, 240 14 S 320 18, 320 14"
            stroke="url(#waveGoldFaint)"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
          {/* center diamond */}
          <g transform="translate(160 11)">
            <circle r="2.4" fill="#cdae79" />
            <circle r="5" fill="none" stroke="#cdae79" strokeOpacity="0.4" strokeWidth="0.6" />
          </g>
        </svg>
        <span className="hidden sm:block flex-1 h-px bg-gradient-to-l from-transparent via-gold-deep/30 to-gold-deep/50" />
      </div>
    </div>
  );
}
