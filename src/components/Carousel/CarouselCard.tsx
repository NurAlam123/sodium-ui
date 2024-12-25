import {
  femalePerson1,
  femalePerson2,
  femalePerson3,
  femalePerson4,
  malePerson1,
} from "@/assets/card_image";
import Image from "next/image";
import Title from "../ui/Title";

const images = [
  femalePerson1,
  femalePerson2,
  femalePerson3,
  femalePerson4,
  malePerson1,
];

const CarouselCard = () => {
  return (
    <>
      <Title title="Image_Carousel_Card" />
      <section className="my-20 relative mx-4 flex h-screen justify-center items-center md:mx-10 gap-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Person ${index + 1}`}
            width={480}
            height={480}
            className=" absolute rounded-xl aspect-square"
          />
        ))}
      </section>
    </>
  );
};

export default CarouselCard;
