import CardTicker from "@/components/Cards/CardTicker";
import CarouselCard from "@/components/Carousel/CarouselCard";
import LogoCarousel from "@/components/Carousel/LogoCarousel";
import LogoTickerSanity from "@/components/LogoTicker/LogoTickerSanity";
import ProjectGrid from "@/components/ProjectGrid/ProjectGrid";

export interface ComponentType {
  id: string;
  component: React.FC;
  category: Category;
}

export enum Category {
  Carousel = "Carousel",
  Ticker = "Ticker",
  Grid = "Grid",
}

const components: ComponentType[] = [
  {
    id: "Image_Carousel_Card",
    component: CarouselCard,
    category: Category.Carousel,
  },
  {
    id: "Logo_Ticker",
    component: LogoTickerSanity,
    category: Category.Ticker,
  },
  {
    id: "Project_Grid",
    component: ProjectGrid,
    category: Category.Grid,
  },
  {
    id: "Image_Card_Ticker",
    component: CardTicker,
    category: Category.Ticker,
  },
  {
    id: "Logo_Carousel",
    component: LogoCarousel,
    category: Category.Carousel,
  },
];
export default components;
