import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/max/hero.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] pt-32 lg:pt-36 pb-24 overflow-hidden">
      {/* ambient glows */}
      <div className="glow-gold w-[70vw] h-[70vw] -top-[25vw] -right-[25vw] opacity-70" />
      <div className="glow-gold w-[45vw] h-[45vw] top-[45vh] -left-[18vw] opacity-40" />

      {/* drifting dots — bubble particles */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {[6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 9, 21, 33, 45, 57, 69, 81, 93].map((l, i) => {
          const size = 3 + (i % 5);
          return (
            <span
              key={i}
              className="drift-dot"
              style={{
                left: `${l}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${(i * 0.7) % 14}s`,
                animationDuration: `${10 + (i % 6) * 2.5}s`,
                opacity: 0.6 + (i % 3) * 0.15,
              }}
            />
          );
        })}
      </div>

      <motion.div style={{ opacity }} className="container-x relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT — content (preserved) */}
        <div className="lg:col-span-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease }}
            className="eyebrow mb-8"
          >
            Otocostruzioni · Made in Italy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="font-serif font-light tracking-[-0.035em] leading-[0.95] text-ink text-[clamp(2.4rem,6.2vw,5.6rem)]"
          >
            <span className="block">Amplificatori</span>
            <span className="block italic text-gold-deep">acustici.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.95 }}
            className="lead mt-7"
          >
            Produciamo <strong className="text-ink font-semibold">amplificatori acustici professionali</strong>
            <br className="hidden sm:inline" />
            {" "}direttamente dal costruttore al rivenditore —
            <br className="hidden sm:inline" />
            {" "}solo <strong className="text-ink font-semibold">qualità italiana</strong>.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease, delay: 1.15 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("maxoto:open-test"))}
              className="btn btn-gold"
            >
              Prenota Test Gratuito <span className="arr">→</span>
            </button>
            <a href="#products" className="btn btn-outline">Scopri i Prodotti</a>
          </motion.div>
        </div>

        {/* RIGHT — bigger cinematic image + static badge */}
        <div className="lg:col-span-6 relative">
          {/* Welcome cinematic strip above image */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.3 }}
            className="mb-4 flex items-center gap-3 justify-end pr-2"
          >
            <span className="h-px w-10 bg-gold-deep/60" />
            <span className="font-serif italic text-gold-deep text-sm tracking-[0.35em] uppercase overflow-hidden">
              {"Benvenuto".split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.06, duration: 0.7, ease }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
            </span>
            <span className="waveform" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </span>
          </motion.div>

          <motion.div
            style={{ y, scale, rotate: rot }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease, delay: 0.4 }}
            className="relative aspect-[4/3] lg:aspect-[5/4] float-slow"
          >
            <div className="absolute inset-[-15%] rounded-[3rem] bg-gradient-to-br from-gold-soft/50 via-transparent to-gold/35 blur-3xl" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.65),_transparent_65%)]" />
            <img
              src={hero}
              alt="M.A.X.OTO — apparecchi acustici e amplificatori"
              className="relative w-full h-full object-contain drop-shadow-[0_70px_90px_rgba(58,64,73,0.32)] scale-[1.22] lg:scale-[1.28]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Stats — single row, full width below the grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease }}
        className="container-x relative mt-14 lg:mt-20"
      >
        <div className="grid grid-cols-2 gap-6 sm:gap-12 border-t border-[var(--line)] pt-8 max-w-2xl mx-auto sm:mx-0">
          {[
            ["9M+", "Italiani con ipoacusia"],
            ["2 Anni", "Garanzia inclusa"],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink leading-none">{n}</div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-ink-mute mt-2 sm:mt-3">{l}</div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
