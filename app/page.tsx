import { Footer } from "@/components/Footer";
import { MarqueeImagens } from "@/components/MarqueeImages";
import { Navbar } from "@/components/Navbar";
import Faq from "@/components/Sections/Faq";
import Inicio from "@/components/Sections/Inicio";
import Precos from "@/components/Sections/Precos";
import Recursos from "@/components/Sections/Recursos";
import Sobre from "@/components/Sections/Sobre";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <Navbar />
        <Inicio />
        <MarqueeImagens />
        <Sobre />
        <Recursos />
        <Precos />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}
