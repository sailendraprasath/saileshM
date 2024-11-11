import Carousel from "../Components/Carousel";
import Groceris1 from "/src/assets/Grocires/Groceris1.jpg";
import Groceris2 from "/src/assets/Grocires/Groceris2.jpg";
import Groceris3 from "/src/assets/Grocires/Groceris3.jpg";

const Carousel1 = () => {
  const slides = [
    { image: Groceris1, alt: "Slide 1" },
    { image: Groceris2, alt: "Slide 2" },
    { image: Groceris3, alt: "Slide 3" },
  ];

  return (
    <div className="w-full p-4 md:px-0">
      <Carousel slides={slides} />
    </div>
  );
};

export default Carousel1;
