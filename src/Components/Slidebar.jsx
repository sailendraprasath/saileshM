/* eslint-disable react/prop-types */
import { useState } from "react";
import { categories } from "../data";

const Sidebar = ({ setSelectedCategory }) => {
  const [selectedCategory, setSelectedCategoryState] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory !== category) {
      setSelectedCategoryState(category);
      setSelectedCategory(category);
    }
  };

  return (
    <div className="w-full caret-transparent select-none md:h-[600px] md:mb-[150px] h-[600px] max-sm:h-[400px] mt-[-20px] max-sm:mt-[-90px] lg:w-1/4 bg-rose-200 p-4">
      <h2 className="text-xl font-welcome font-bold text-black/90 text-center mb-4">
        VARIETIES CATALOG
      </h2>
      <div className="overflow-y-auto h-[500px] max-sm:h-[300px]">
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <div
                onClick={() => handleCategoryClick(category)}
                className={`font-welcome cursor-pointer text-lg p-2 rounded-lg ${
                  selectedCategory === category
                    ? "bg-rose-400 border-4 border-black/55 text-white"
                    : "bg-white"
                }`}
              >
                {category}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
