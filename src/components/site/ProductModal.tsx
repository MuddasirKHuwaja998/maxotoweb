import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import cic from "@/assets/max/cic.png";

export type ModalProduct = {
  category: string;
  name: string;
  model?: string;
  ce?: string;
  poster: string;
  video: string;
  points: string[];
};

const ease = [0.16, 1, 0.3, 1] as const;

export const AMPLIFICATORI_PRODUCTS: ModalProduct[] = [
  {
    category: "Apparecchio Acustico · Dispositivo Medico",
    name: "M.A.X.OTO AI-Sense",
    model: "Modello 01",
    ce: "CE 0051",
    poster: cic,
    video:
      "https://dl.dropboxusercontent.com/scl/fi/c6djfqjtngbnn37418vrd/Amplimaxoto-cic.mp4?rlkey=nfk2e8nw6t7vymm807o1a3kmz&raw=1",
    points: [
      "Tecnologia digitale avanzata",
      "Garanzia 2 anni inclusa",
      "Certificato CE 0051 · Dispositivo Medico",
    ],
  },
];

// Backward-compat export
export const AMPLIFICATORI_MODAL = AMPLIFICATORI_PRODUCTS[0];

export function ProductModal({
  open,
  onClose,
  products = AMPLIFICATORI_PRODUCTS,
}: {
  open: boolean;
  onClose: () => void;
  products?: ModalProduct[];
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
        >
          <button
            aria-label="Chiudi"
            onClick={onClose}
            className="absolute inset-0 bg-ink/75 backdrop-blur-md"
          />

          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.55, ease }}
            className="relative w-full max-w-3xl bg-paper rounded-3xl shadow-[0_60px_120px_-40px_rgba(0,0,0,0.55)] border border-[var(--line)] overflow-hidden max-h-[92vh] overflow-y-auto"
          >
            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gold/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

            <button
              onClick={onClose}
              aria-label="Chiudi"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full border border-[var(--line)] bg-white/90 hover:bg-white text-ink-mute hover:text-ink transition flex items-center justify-center shadow-sm"
            >
              ✕
            </button>

            <div className="relative px-5 sm:px-10 pt-10 sm:pt-12 pb-2 text-center">
              <div className="eyebrow mb-5 justify-center">Apparecchiature Acustiche</div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.05] tracking-tight">
                M.A.X.OTO
                <em className="text-gold-deep"> AI-Sense.</em>
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-ink-soft text-sm sm:text-base leading-relaxed">
                Apparecchio acustico digitale certificato come dispositivo medico —
                progettato e prodotto in Italia con la qualità tecnica M.A.X.OTO.
              </p>
            </div>

            <div className="relative px-5 sm:px-10 py-8 sm:py-10">
              <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 items-start">
                {products.map((p, i) => (
                  <motion.article
                    key={p.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.12 }}
                    className="group"
                  >
                    <div className="relative w-full rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-[#f5f1e8] via-[#efe7d4] to-[#e6dcc4] aspect-[4/5] shadow-[0_30px_60px_-30px_rgba(58,64,73,0.35)]">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.45),_transparent_60%)]" />
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={p.poster}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
                      >
                        <source src={p.video} type="video/mp4" />
                      </video>
                      {p.model && (
                        <div className="absolute top-4 left-4 font-serif italic text-white/95 text-[11px] tracking-[0.3em] uppercase">
                          {p.model}
                        </div>
                      )}
                      {p.ce && (
                        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur text-[10px] tracking-[0.22em] uppercase text-ink font-semibold">
                          {p.ce}
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 waveform" aria-hidden>
                        {[0, 1, 2, 3].map((j) => (
                          <span key={j} style={{ animationDelay: `${j * 0.18}s` }} />
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}

                {products.map((p) => (
                  <motion.div
                    key={`${p.name}-info`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.25 }}
                    className="flex flex-col"
                  >
                    <h3 className="font-serif text-2xl sm:text-3xl text-ink leading-tight tracking-tight">
                      {p.name}
                    </h3>
                    {p.model && (
                      <div className="mt-2 text-[11px] tracking-[0.28em] uppercase text-gold-deep font-semibold">
                        {p.model}
                      </div>
                    )}
                    <div className="mt-1 text-[11px] tracking-[0.22em] uppercase text-ink-mute">
                      {p.category}
                    </div>
                    <ul className="mt-6 space-y-3">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-3 text-[14px] text-ink-soft"
                        >
                          <span className="mt-[9px] w-4 h-px bg-gold-deep/70 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
