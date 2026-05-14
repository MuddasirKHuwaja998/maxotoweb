export function WaveSeparator() {
  return (
    <div aria-hidden className="w-full flex justify-center py-8 lg:py-10 bg-transparent">
      <svg
        width="100%"
        height="24"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        className="max-w-[860px] opacity-80"
      >
        <path
          d="M0 12 C 100 0, 200 24, 300 12 S 500 0, 600 12 S 800 24, 900 12 S 1100 0, 1200 12"
          fill="none"
          stroke="url(#waveGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="waveGold" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(205,174,121,0)" />
            <stop offset="50%" stopColor="#cdae79" />
            <stop offset="100%" stopColor="rgba(205,174,121,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
