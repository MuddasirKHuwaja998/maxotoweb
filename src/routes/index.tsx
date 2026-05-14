import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Preloader } from "@/components/site/Preloader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { QuoteBand } from "@/components/site/QuoteBand";
import { Pricing } from "@/components/site/Pricing";
import { Partner } from "@/components/site/Partner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WaveSeparator } from "@/components/site/WaveSeparator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M.A.X.OTO Otocostruzioni · Apparecchi Acustici Digitali Made in Italy" },
      {
        name: "description",
        content:
          "M.A.X.OTO Otocostruzioni — produttore italiano di apparecchi acustici digitali certificati CE0051. Vendita diretta al paziente, prezzo sociale € 950. Sede a Napoli.",
      },
      { property: "og:title", content: "M.A.X.OTO Otocostruzioni · Apparecchi Acustici Digitali" },
      {
        property: "og:description",
        content: "Apparecchi acustici digitali certificati CE0051 al prezzo sociale di € 950. Direttamente dal produttore al paziente. Made in Italy.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-cream text-ink-soft">
      <Preloader />
      <SiteNav />
      <Hero />
      <WaveSeparator />
      <About />
      <WaveSeparator />
      <Products />
      <WaveSeparator />
      <Partner />
      <WaveSeparator />
      <QuoteBand />
      <WaveSeparator />
      <Pricing />
      <WaveSeparator />
      <Contact />
      <Footer />
    </main>
  );
}
