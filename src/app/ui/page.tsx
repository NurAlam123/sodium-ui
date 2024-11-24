import CardTicker from "@/components/Cards/CardTicker";
import LogoTickerSanity from "@/components/LogoTicker/LogoTickerSanity";
import ProjectGrid from "@/components/ProjectGrid/ProjectGrid";

export default function Page() {
  return (
    <section>
      <LogoTickerSanity />
      <ProjectGrid />
      <CardTicker />
    </section>
  );
}
