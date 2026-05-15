import { motion, type Variants } from "framer-motion";
import riempitiva from "@/assets/foto-riempitiva-2.png";

const fade: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
};

export function About() {
  const stats = [
    ["9", "M+", "Italiani", "con ipoacusia"],
    ["2", "Anni", "Garanzia", "inclusa nel prezzo"],
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="glow-gold w-[40vw] h-[40vw] top-[10%] -right-[15vw] opacity-30" />

      <div className="container-x grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          className="lg:col-span-6 lg:sticky lg:top-32"
        >
          <div className="eyebrow mb-8">Chi Siamo</div>
          <h2 className="display-md">
            <span className="block">M.A.X.OTO Otocostruzioni</span>
            <em className="block">Made in Italy</em>
          </h2>
          <p className="lead mt-8">
            Nati a <strong className="text-ink font-semibold">Napoli</strong> inizialmente come costruttori di protesi acustiche,
            <br className="hidden md:inline" />
            {" "}in M.A.X.OTO abbattiamo le barriere dell'udito eliminando ogni intermediario.
          </p>
          <p className="lead mt-5">
            Da oggi operiamo su <strong className="text-ink font-semibold">scala nazionale</strong> offrendo nuove soluzioni,
            <br className="hidden md:inline" />
            {" "}offrendo una nuova gamma di amplificatori acustici professionali,
            <br className="hidden md:inline" />
            {" "}ideali per <strong className="text-ink font-semibold">difficoltà lievi o temporanee</strong>.
          </p>
          <p className="lead mt-5">
            Questi supporti sono semplici da usare
            <br className="hidden md:inline" />
            {" "}e <strong className="text-ink font-semibold">non richiedono nessuna prescrizione medica</strong>,
            <br className="hidden md:inline" />
            {" "}mantenendo gli standard tecnici che ci distinguono da anni.
          </p>
          <div className="mt-10 font-serif italic text-2xl text-gold-deep">
            Italian craftsmanship, oggi.
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="lg:col-span-6 lg:mt-32 space-y-6"
        >
          {/* Showcase image — hero-style cinematic float */}
          <motion.div
            variants={fade}
            className="relative aspect-[4/3] float-slow"
          >
            <div className="absolute inset-[-15%] rounded-[3rem] bg-gradient-to-br from-gold-soft/50 via-transparent to-gold/35 blur-3xl" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.65),_transparent_65%)]" />
            <img
              src={riempitiva}
              alt="M.A.X.OTO — gamma completa di apparecchi acustici"
              className="relative w-full h-full object-contain drop-shadow-[0_70px_90px_rgba(58,64,73,0.32)] scale-[1.15]"
            />
          </motion.div>

          {/* Two stat cards in a row */}
          <div className="grid sm:grid-cols-2 gap-5">
            {stats.map(([sym, num, lab, desc], i) => (
              <motion.div
                key={i}
                variants={fade}
                className="glass hover-gold rounded-3xl p-8 relative overflow-hidden group cursor-default"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="font-serif text-5xl text-ink leading-none flex items-baseline gap-1">
                  <span className="text-gold-deep italic text-3xl">{sym}</span>
                  <span>{num}</span>
                </div>
                <div className="text-[11px] tracking-[0.28em] uppercase text-ink mt-5 font-medium">{lab}</div>
                <div className="text-sm text-ink-mute mt-1.5">{desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
