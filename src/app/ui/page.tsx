import { ArrowDown } from "@/assets/others";
import CardTicker from "@/components/Cards/CardTicker";
import CarouselCard from "@/components/Carousel/CarouselCard";
import LogoTickerSanity from "@/components/LogoTicker/LogoTickerSanity";
import ProjectGrid from "@/components/ProjectGrid/ProjectGrid";

export default function Page() {
  return (
    <section>
      <div className="fixed left-4 text-zinc-500 font-domino flex">
        <ArrowDown className="size-[150px] relative" />
        <h4 className="text-2xl relative right-16 rotate-90 h-fit top-12">
          Scroll Down
        </h4>
      </div>
      <LogoTickerSanity />
      <ProjectGrid />
      <CardTicker />
      <CarouselCard />
    </section>
  );
}
