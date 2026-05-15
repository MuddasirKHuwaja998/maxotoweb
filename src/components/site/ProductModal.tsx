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
      "https://dl.dropboxusercontent.com/scl/fi/m3pp5mnm593uddjmunbau/Maxoto-AI-Sense.mp4?rlkey=e5kifif7yqn46abrps1triu7t&raw=1",
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
            className="relative w-full max-w-5xl rounded-3xl shadow-[0_60px_120px_-40px_rgba(0,0,0,0.55)] border border-gold/30 overflow-hidden max-h-[94vh] overflow-y-auto bg-gradient-to-br from-[#fbf5e7] via-[#f5ecd6] to-[#ecdfbe]"
          >
            <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-gold/40 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-gold/30 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.55),_transparent_60%)] pointer-events-none" />

            <button
              onClick={onClose}
              aria-label="Chiudi"
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full border border-gold/40 bg-white/95 hover:bg-white text-ink-mute hover:text-ink transition flex items-center justify-center shadow-md"
            >
              ✕
            </button>

            <div className="relative px-5 sm:px-10 pt-12 sm:pt-14 pb-2 text-center">
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

            <div className="relative px-5 sm:px-10 lg:px-14 py-10 sm:py-12">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                >
                  {/* LEFT — large clean video */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.1 }}
                    className="lg:col-span-7"
                  >
                    <div className="relative w-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-white/70 via-[#f7eed7] to-[#ecdfbe] aspect-[4/3] shadow-[0_40px_80px_-30px_rgba(58,64,73,0.45)] border border-gold/25">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={p.poster}
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={p.video} type="video/mp4" />
                      </video>
                    </div>
                  </motion.div>

                  {/* RIGHT — info */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.22 }}
                    className="lg:col-span-5"
                  >
                    {p.model && (
                      <div className="text-[11px] tracking-[0.32em] uppercase text-gold-deep font-semibold mb-3">
                        {p.model}
                      </div>
                    )}
                    <h3 className="font-serif text-3xl sm:text-4xl text-ink leading-tight tracking-tight">
                      {p.name}
                    </h3>
                    <div className="mt-3 text-[11px] tracking-[0.22em] uppercase text-ink-mute">
                      {p.category}
                    </div>
                    {p.ce && (
                      <div className="inline-flex mt-5 items-center gap-2 px-3 py-1.5 rounded-full border border-gold/40 bg-white/70 backdrop-blur text-[10px] tracking-[0.28em] uppercase text-ink font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                        {p.ce}
                      </div>
                    )}
                    <ul className="mt-7 space-y-3.5">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-3 text-[15px] text-ink-soft"
                        >
                          <span className="mt-[10px] w-4 h-px bg-gold-deep/70 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
