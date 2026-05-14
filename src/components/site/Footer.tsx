import logo from "@/assets/max/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-[var(--dark-3)] text-white/70 pt-24 pb-10">
      {/* Top hairline thread */}
      <div className="container-x">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-16" />
      </div>

      <div className="container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <img
              src={logo}
              alt="M.A.X.OTO"
              className="h-12 w-auto object-contain mb-6 brightness-110"
            />
            <p className="font-serif italic text-xl leading-snug text-white/90 mb-4">
              Dal produttore al tuo orecchio.
              <br />
              Senza intermediari, senza compromessi.
            </p>
            <p className="text-sm leading-relaxed text-white/55">
              Otocostruzioni italiana. Apparecchi acustici digitali certificati
              <span className="text-gold"> CE 0051</span>, progettati e prodotti a Napoli, consegnati direttamente al paziente.
            </p>
          </div>

          {/* Spacer for balance */}
          <div className="hidden lg:block lg:col-span-1" />

          {[
            ["Prodotti", [
              ["M.A.X.OTO AI-Sense", "#products"],
              ["Amplimaxoto CIC", "#products"],
              ["Amplimaxoto RIC", "#products"],
            ]],
            ["Azienda", [
              ["Chi Siamo", "#about"],
              ["Prezzi", "#pricing"],
              ["Diventa Partner", "#partner"],
              ["Contatti", "#contact"],
            ]],
            ["Contatti", [
              ["+39 081 287408", "tel:+39081287408"],
              ["info@maxoto.it", "mailto:info@maxoto.it"],
              ["Napoli, Italia", "#contact"],
            ]],
          ].map(([h, items]) => (
            <div key={h as string} className="lg:col-span-2">
              <h5 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5 font-sans font-semibold">
                {h as string}
              </h5>
              <ul className="space-y-3">
                {(items as [string, string][]).map(([t, href]) => (
                  <li key={t}>
                    <a
                      href={href}
                      className="text-sm text-white/70 hover:text-gold transition-colors duration-500"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] tracking-[0.22em] uppercase text-white/40">
          <div className="flex items-center gap-3">
            <span className="pulse-dot" />
            <span>© 2026 M.A.X.OTO Otocostruzioni · Made in Italy</span>
          </div>
          <div className="text-white/55">Certificato 1682/MDD · CE 0051</div>
        </div>
      </div>
    </footer>
  );
}
