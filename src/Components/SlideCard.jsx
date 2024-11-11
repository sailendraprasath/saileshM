/* eslint-disable react/prop-types */
import { useState } from "react";
import Sidebar from "../Components/Slidebar";
import Cards from "../Components/Cards";
import { AllcardsData } from "../data";
import { Link } from "react-router-dom";

const SlideCard = ({ addToCart, addToWhish }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  return (
    <>
      <div className="bg-rose-300 p-4 px-10 caret-transparent select-none shadow-sm shadow-black/90  mb-[150px] mt-[110px] rounded-tr-[80px] max-sm:rounded-md rounded-bl-[50px]  text-left">
        <h1 className="text-white text-2xl  md:text-3xl lg:text-4xl font-bold">
          PRODUCTS
        </h1>
        <p className="text-white text-sm md:text-base lg:text-lg mt-2">
          <Link className="cursor-pointer" to={"/"}>
            HOME
          </Link>
          / PRODUCTS
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        <Sidebar setSelectedCategory={setSelectedCategory} />
        <div className="lg:w-3/4 w-full p-4 flex-grow">
          <Cards
            addToCart={addToCart}
            addToWhish={addToWhish}
            selectedCategory={selectedCategory}
            AllcardsData={AllcardsData}
          />
        </div>
      </div>
    </>
  );
};

export default SlideCard;
