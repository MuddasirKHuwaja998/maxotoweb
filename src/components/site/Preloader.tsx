import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/max/logo.png";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2400);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--dark-3)] overflow-hidden"
        >
          {/* Ambient gold glow */}
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,_rgba(205,174,121,0.25),_transparent_60%)] blur-3xl" />
          </div>

          {/* Floating gold particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[10, 22, 34, 46, 58, 70, 82, 94, 16, 28, 40, 52, 64, 76, 88].map((l, i) => (
              <motion.span
                key={i}
                className="absolute w-1 h-1 rounded-full bg-gold"
                style={{
                  left: `${l}%`,
                  top: `${(i * 13) % 90 + 5}%`,
                  boxShadow: "0 0 12px rgba(205,174,121,0.7)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: [0, 0.9, 0], y: [-20, -80] }}
                transition={{
                  duration: 2.4,
                  delay: i * 0.08,
                  ease,
                  repeat: Infinity,
                  repeatDelay: 0.4,
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center">
            {/* Rotating gold ring */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease }}
              className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] flex items-center justify-center"
            >
              <motion.svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <defs>
                  <linearGradient id="ringGold" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#cdae79" stopOpacity="0" />
                    <stop offset="50%" stopColor="#e3cfa8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8b7449" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="92"
                  fill="none"
                  stroke="url(#ringGold)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeDasharray="40 580"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="92"
                  fill="none"
                  stroke="rgba(205,174,121,0.12)"
                  strokeWidth="0.6"
                />
              </motion.svg>

              {/* Logo reveal */}
              <motion.img
                src={logo}
                alt="M.A.X.OTO"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.4, ease, delay: 0.3 }}
                className="relative w-[120px] sm:w-[150px] h-auto object-contain drop-shadow-[0_8px_30px_rgba(205,174,121,0.6)] brightness-110"
              />
            </motion.div>

            {/* Hairline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease, delay: 0.6 }}
              className="mt-10 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
            />

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.9 }}
              className="mt-6 text-[10px] sm:text-[11px] tracking-[0.42em] uppercase text-white/70 font-sans font-semibold"
            >
              Otocostruzioni · Made in Italy
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-3 font-serif italic text-gold-soft text-base sm:text-lg shimmer-text"
            >
              Dal produttore al tuo orecchio.
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
