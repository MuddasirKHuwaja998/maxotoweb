export function WaveSeparator() {
  return (
    <div aria-hidden className="w-full flex justify-center items-center py-12 lg:py-16 bg-transparent">
      <svg
        width="100%"
        height="14"
        viewBox="0 0 1200 14"
        preserveAspectRatio="none"
        className="block max-w-[860px] px-6 opacity-90"
        fill="none"
      >
        <defs>
          <linearGradient id="waveGoldThin" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(205,174,121,0)" />
            <stop offset="20%" stopColor="rgba(205,174,121,0.55)" />
            <stop offset="50%" stopColor="#b8945a" />
            <stop offset="80%" stopColor="rgba(205,174,121,0.55)" />
            <stop offset="100%" stopColor="rgba(205,174,121,0)" />
          </linearGradient>
        </defs>
        <path
          d="M0 7 Q 75 1, 150 7 T 300 7 T 450 7 T 600 7 T 750 7 T 900 7 T 1050 7 T 1200 7"
          stroke="url(#waveGoldThin)"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
