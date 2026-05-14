import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import aiSense from "@/assets/max/ai-sense.png";
import cic from "@/assets/max/cic.png";
import ric from "@/assets/max/ric.png";

type Product = {
  category: string;
  badge?: string;
  name: string;
  poster: string;
  video: string;
  points: string[];
  note?: string;
};

const apparecchi: Product[] = [
  {
    category: "Apparecchio Acustico · Dispositivo Medico",
    badge: "CE 0051",
    name: "M.A.X.OTO AI-Sense",
    poster: aiSense,
    video:
      "https://dl.dropboxusercontent.com/scl/fi/m3pp5mnm593uddjmunbau/Maxoto-AI-Sense.mp4?rlkey=e5kifif7yqn46abrps1triu7t&raw=1",
    points: ["Tecnologia digitale avanzata", "Garanzia 2 anni inclusa"],
  },
];

const amplificatori: Product[] = [
  {
    category: "Amplificatore · Supporto Acustico",
    name: "Amplimaxoto CIC",
    poster: cic,
    video:
      "https://dl.dropboxusercontent.com/scl/fi/c6djfqjtngbnn37418vrd/Amplimaxoto-cic.mp4?rlkey=nfk2e8nw6t7vymm807o1a3kmz&raw=1",
    points: ["Discreto, intracanale", "Pronto all'uso, senza prescrizione"],
  },
  {
    category: "Amplificatore · Supporto Acustico",
    name: "Amplimaxoto RIC",
    poster: ric,
    video:
      "https://dl.dropboxusercontent.com/scl/fi/1bubpc4fj2dp8qbifgeq5/Amplimaxoto-ric.mp4?rlkey=zsp6ulpzrosjpnfj6e2t2jdh5&raw=1",
    points: ["Ricaricabile, ultraleggero", "Comfort retroauricolare"],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.1, ease } },
};

function ProductStoryCard({ p, index }: { p: Product; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative"
    >
      {/* Header: name + category */}
      <div className="mb-8 flex items-start justify-between gap-6">
        <div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-gold-deep mb-3 font-medium">
            — Modello 0{index + 1}
          </div>
          <h3 className="font-serif text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight">
            {p.name}
          </h3>
          <div className="mt-3 text-[12px] tracking-[0.22em] uppercase text-ink-mute">
            {p.category}
          </div>
        </div>
        {p.badge && (
          <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/5">
            <span className="pulse-dot" />
            <span className="text-[10px] tracking-[0.28em] uppercase text-gold-deep font-medium">
              {p.badge}
            </span>
          </div>
        )}
      </div>

      {/* Visual stage — compact, refined */}
      <div className="relative mx-auto md:mx-0 w-full max-w-[420px] rounded-[1.75rem] overflow-hidden bg-gradient-to-b from-[#f5f1e8] via-[#efe7d4] to-[#e6dcc4] aspect-[4/5] shadow-[0_40px_80px_-40px_rgba(58,64,73,0.35)]">
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
        {/* corner number */}
        <div className="absolute top-5 left-5 font-serif italic text-white/90 text-xs tracking-[0.3em]">
          0{index + 1}
        </div>
        {/* golden waveform overlay */}
        <div className="absolute bottom-5 right-5 waveform" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} style={{ animationDelay: `${i * 0.18}s` }} />
          ))}
        </div>
      </div>

      {/* Footer: highlights */}
      <ul className="mt-7 space-y-2.5">
        {p.points.map((pt) => (
          <li key={pt} className="flex items-start gap-3 text-[15px] text-ink-soft">
            <span className="mt-[10px] w-4 h-px bg-gold-deep/70 shrink-0" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function ChapterTitle({
  eyebrow,
  title,
  emphasis,
  description,
  descriptionNode,
  meta,
}: {
  number?: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  description?: string;
  descriptionNode?: ReactNode;
  meta?: { k: string; v: string }[];
}) {
  const hasRight = !!(description || descriptionNode || (meta && meta.length));
  return (
    <div className="relative mb-12 lg:mb-16">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease }}
          className={`grid gap-10 lg:gap-16 items-end ${hasRight ? "lg:grid-cols-12" : ""}`}
        >
          {/* LEFT — title */}
          <div className={hasRight ? "lg:col-span-7" : ""}>
            <div className="eyebrow mb-6">{eyebrow}</div>
            <h2 className="display-xl">
              <span className="block">{title}</span>
              <em className="block">{emphasis}</em>
            </h2>
          </div>

          {hasRight && (
            <div className="lg:col-span-5">
              <div className="relative pl-8 border-l border-gold/40">
                {descriptionNode ? <div className="lead">{descriptionNode}</div> : description ? <p className="lead">{description}</p> : null}
                {meta && meta.length > 0 && (
                  <div className={`mt-8 grid gap-4 ${meta.length > 1 ? "grid-cols-2" : "grid-cols-1 max-w-xs"}`}>
                    {meta.map((m) => (
                      <div
                        key={m.k}
                        className="hover-gold rounded-2xl border border-[var(--line)] bg-white/70 backdrop-blur p-5 cursor-default"
                      >
                        <div className="font-serif text-2xl text-ink leading-none">{m.k}</div>
                        <div className="text-[11px] tracking-[0.22em] uppercase text-ink-mute mt-2">
                          {m.v}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="products" ref={ref} className="relative bg-paper overflow-hidden">
      {/* Section opener — balanced two-column intro */}
      <div className="relative pt-20 lg:pt-28 pb-10">
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(205,174,121,0.10),_transparent_65%)]"
        />
        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, ease }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="eyebrow mb-7 justify-center">I Nostri Prodotti</div>
            <div className="relative pt-6">
              <p className="font-serif italic text-2xl lg:text-3xl text-ink leading-snug">
                "Dai nostri laboratori alla tua attività:
                <br />
                l'eccellenza che massimizza la tua redditività."
              </p>
              <div className="mt-7 flex items-center gap-4 justify-center">
                <span className="waveform" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </span>
                <span className="text-[11px] tracking-[0.28em] uppercase text-ink-mute font-semibold">
                  CE 0051 · Garanzia 2 Anni
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CHAPTER I — Amplificatori (Lifestyle) */}
      <div className="relative pt-16 lg:pt-20 pb-16 lg:pb-24">
        <ChapterTitle
          number="I"
          eyebrow="Supporti Acustici · Non Medicali"
          title="Amplificatori"
          emphasis="Acustici."
          descriptionNode={
            <>
              Soluzioni immediate per difficoltà uditive lievi o temporanee.
              <br />
              Pronti all'uso, senza prescrizione, con la qualità tecnica M.A.X.OTO.
            </>
          }
          meta={[{ k: "Pronti all'uso", v: "Nessuna configurazione" }]}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.22 } } }}
          className="container-x"
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {amplificatori.map((p, i) => (
              <ProductStoryCard key={p.name} p={p} index={i} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Chapter divider */}
      <div className="container-x">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--line)] to-transparent" />
      </div>

      {/* CHAPTER II — Apparecchi Acustici (Medical) */}
      <div className="relative pt-20 lg:pt-28 pb-20 lg:pb-28">
        <ChapterTitle
          number="II"
          eyebrow="Dispositivi Medici · CE 0051"
          title="Apparecchi"
          emphasis="Acustici."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.2 } } }}
          className="container-x"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <ProductStoryCard p={apparecchi[0]} index={0} />
            </div>
            <motion.aside
              variants={fadeUp}
              className="lg:col-span-5 self-center"
            >
              <div className="text-[11px] tracking-[0.28em] uppercase text-gold-deep mb-5 font-bold">
                — Apparecchi Prescritti
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl text-ink leading-tight mb-6">
                Protesi acustiche digitali, <em>su misura.</em>
              </h3>
              <p className="lead">
                <strong className="text-ink font-semibold">Prescritte e adattate</strong> da audioprotesisti qualificati. Compensano l'udito con elaborazione digitale, riduzione del rumore e direzionalità adattiva — sono <em>dispositivi medici</em> regolamentati.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Calibrazione personalizzata su audiogramma",
                  "Riduzione attiva del rumore ambientale",
                  "Assistenza post-vendita inclusa",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] text-ink-soft">
                    <span className="mt-[10px] w-4 h-px bg-gold-deep/70 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-xs text-ink-mute mt-16 max-w-3xl italic leading-relaxed mx-auto text-center"
          >
            Il dispositivo non è progettato per il trattamento, la compensazione o la riabilitazione di patologie
            dell'apparato uditivo. Non sostituisce in alcun modo la protesi acustica, la cui prescrizione e adattamento
            sono di esclusiva competenza medica e audioprotesica.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
