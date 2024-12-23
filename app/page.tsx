import { MarqueeImagens } from "@/components/MarqueeImages";
import Navbar from "@/components/Navbar";
import Inicio from "@/components/Sections/Inicio";
import Sobre from "@/components/Sections/Sobre";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <Navbar />
        <Inicio />
        <MarqueeImagens />
        <Sobre />
      </main>
    </div>
  );
}
