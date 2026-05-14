import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export type ModalProduct = {
  category: string;
  badge?: string;
  name: string;
  poster: string;
  video: string;
  points: string[];
};

export function ProductModal({
  product,
  onClose,
}: {
  product: ModalProduct | null;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (product) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            aria-label="Chiudi"
            onClick={onClose}
            className="absolute inset-0 bg-ink/70 backdrop-blur-md"
          />
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-cream rounded-3xl shadow-[0_60px_120px_-40px_rgba(0,0,0,0.55)] border border-[var(--line)] overflow-hidden max-h-[92vh] overflow-y-auto"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gold/25 blur-3xl pointer-events-none" />
            <button
              onClick={onClose}
              aria-label="Chiudi"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-[var(--line)] bg-white/80 hover:bg-white text-ink-mute hover:text-ink transition flex items-center justify-center"
            >
              ✕
            </button>

            <div className="relative grid md:grid-cols-2 gap-0">
              <div className="relative bg-gradient-to-b from-[#f5f1e8] via-[#efe7d4] to-[#e6dcc4] aspect-[4/5] md:aspect-auto md:min-h-[480px] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45),_transparent_60%)]" />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={product.poster}
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={product.video} type="video/mp4" />
                </video>
                <div className="absolute bottom-5 right-5 waveform" aria-hidden>
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.18}s` }} />
                  ))}
                </div>
              </div>

              <div className="p-7 sm:p-9 flex flex-col justify-center">
                {product.badge && (
                  <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full border border-gold/40 bg-gold/5 mb-5">
                    <span className="pulse-dot" />
                    <span className="text-[10px] tracking-[0.28em] uppercase text-gold-deep font-medium">
                      {product.badge}
                    </span>
                  </div>
                )}
                <h3 className="font-serif text-3xl sm:text-4xl text-ink leading-[1.05] tracking-tight">
                  {product.name}
                </h3>
                <div className="mt-3 text-[11px] tracking-[0.22em] uppercase text-ink-mute">
                  {product.category}
                </div>
                <ul className="mt-7 space-y-2.5">
                  {product.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-3 text-[15px] text-ink-soft"
                    >
                      <span className="mt-[10px] w-4 h-px bg-gold-deep/70 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const AMPLIFICATORI_MODAL: ModalProduct = {
  category: "Amplificatori · Supporti Acustici",
  name: "Amplimaxoto",
  poster: "",
  video:
    "https://dl.dropboxusercontent.com/scl/fi/1bubpc4fj2dp8qbifgeq5/Amplimaxoto-ric.mp4?rlkey=zsp6ulpzrosjpnfj6e2t2jdh5&raw=1",
  points: [
    "Ricaricabile, ultraleggero, comfort retroauricolare (RIC)",
    "Versione intracanale CIC, discreta e pronta all'uso",
    "Senza prescrizione medica · Made in Italy",
  ],
};
