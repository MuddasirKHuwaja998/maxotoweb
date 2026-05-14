import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import corner from "@/assets/max/corner.png";

export function Partner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="partner" ref={ref} className="relative py-20 lg:py-28 bg-paper overflow-hidden">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        <motion.div style={{ y }} className="lg:col-span-6 relative order-2 lg:order-1 group">
          <div className="absolute inset-[-10%] rounded-[3rem] bg-gradient-to-br from-gold-soft/45 via-transparent to-gold/30 blur-3xl pointer-events-none" />
          <div className="relative mx-auto w-full max-w-[520px] rounded-[1.75rem] overflow-hidden bg-gradient-to-b from-[#f5f1e8] via-[#efe7d4] to-[#e6dcc4] aspect-[4/5] shadow-[0_40px_80px_-40px_rgba(58,64,73,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5),_transparent_60%)]" />
            <img
              src={corner}
              alt="Diventa partner M.A.X.OTO"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute top-5 left-5 font-serif italic text-white/90 text-xs tracking-[0.3em]">
              Partner
            </div>
            <div className="absolute bottom-5 right-5 waveform" aria-hidden>
              {[0, 1, 2, 3].map((i) => (
                <span key={i} style={{ animationDelay: `${i * 0.18}s` }} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 order-1 lg:order-2"
        >
          <div className="eyebrow mb-7">Diventa Partner</div>
          <h2 className="display-md">
            <span className="block">Crea il tuo corner</span>
            <em className="block">insieme a noi.</em>
          </h2>
          <p className="lead mt-7">
            Vendi i nostri <strong className="text-ink font-semibold">Amplificatori Acustici professionali</strong> nel tuo punto vendita.
            <br className="hidden md:inline" />
            {" "}Direttamente dal produttore, <strong className="text-ink font-semibold">senza intermediari</strong>, con la qualità Made in Italy
            <br className="hidden md:inline" />
            {" "}e il supporto tecnico continuo di M.A.X.OTO.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              ["i", "Vendita diretta produttore, margini su misura."],
              ["ii", "Formazione tecnica gratuita per il tuo team."],
              ["iii", "Materiali POS e supporto marketing dedicato."],
              ["iv", "Assistenza continua e ricambi rapidi."],
            ].map(([n, t]) => (
              <li key={n} className="flex items-start gap-5">
                <span className="font-serif italic text-gold-deep text-sm w-6 flex-shrink-0 pt-1">{n}.</span>
                <span className="text-ink-soft">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-gold">Diventa Partner <span className="arr">→</span></a>
            <a href="tel:+39081287408" className="btn btn-outline">Chiama 081 287408</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
