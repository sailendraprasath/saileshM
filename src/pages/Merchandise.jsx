/* eslint-disable react/prop-types */
import SlideCard from "../Components/SlideCard";

const Merchandise = ({ addToCart, addToWhish }) => {
  return (
    <>
      <SlideCard addToCart={addToCart} addToWhish={addToWhish} />
    </>
  );
};

export default Merchandise;
