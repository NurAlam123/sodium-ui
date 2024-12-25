import CardTicker from "@/components/Cards/CardTicker";
import CarouselCard from "@/components/Carousel/CarouselCard";
import LogoTickerSanity from "@/components/LogoTicker/LogoTickerSanity";
import ProjectGrid from "@/components/ProjectGrid/ProjectGrid";

const components = [
  {
    id: "Image_Carousel_Card",
    component: CarouselCard,
  },
  {
    id: "Logo_Ticker",
    component: LogoTickerSanity,
  },
  {
    id: "Project_Grid",
    component: ProjectGrid,
  },
  {
    id: "Image_Card_Ticker",
    component: CardTicker,
  },
];
export default components;
