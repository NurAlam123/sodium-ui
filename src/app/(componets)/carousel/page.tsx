import CarouselOne from "@/components/carousel/carousel-one";
import CarouselTwo from "@/components/carousel/carousel-two";
import Box from "@/components/ui/Box";

export default function CarouselPage() {
  return (
    <main>
      <Box>
        <CarouselOne />
      </Box>

      <Box>
        <CarouselTwo />
      </Box>
    </main>
  );
}
