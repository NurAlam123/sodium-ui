import CarouselOne from "@/components/Carousel/carousel-one";
import CarouselTwo from "@/components/Carousel/carousel-two";

export default function CarouselPage() {
  return (
    <main>
      <div className="relative h-svh overflow-hidden">
        <CarouselOne />
      </div>

      <div className="relative h-svh overflow-hidden">
        <CarouselTwo />
      </div>
    </main>
  );
}
