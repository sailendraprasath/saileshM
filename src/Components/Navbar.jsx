/* eslint-disable react/prop-types */
import { FaSearch, FaHome, FaHeart, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcAbout } from "react-icons/fc";
import { IoIosArrowUp } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import Logo from "../assets/Logo.webp";
import WhishCount from "../Components/WhishCount";
import CartCount from "../Components/CartCount";
import { AllcardsData } from "../data";

const Navbar = ({ cartCount, whishCount }) => {
  const [search, setsearch] = useState("");

  const filterAllcardsData = AllcardsData.filter((currval) =>
    currval.title.toLowerCase().includes(search.toLowerCase())
  );

  const [MobileSearch, SetMobileSeacrh] = useState("");
  const MobileSearchFilterData = AllcardsData.filter((currval) =>
    currval.title.toLowerCase().includes(MobileSearch.toLowerCase())
  );

  const [Msearch, SetMsearch] = useState(false);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="fixed-navbar fixed top-0 w-full bg-white z-50 shadow-md">
        <div className="container mx-auto px-3">
          <div className="flex p-4 justify-between items-center">
            {/* Logo */}
            <div>
              <img src={Logo} alt="Logo" className="w-[60px]" />
            </div>

            {/* Search menu */}
            <div className="relative max-sm:hidden">
              <div className="items-center flex gap-2">
                <input
                  value={search}
                  name="title"
                  onChange={(event) => setsearch(event.target.value)}
                  type="text"
                  className="border-2 border-black outline-none rounded-lg w-[250px] pl-10 px-2"
                  placeholder="Search..."
                />
                <div className="bg-black text-white rounded-lg cursor-pointer p-2">
                  <FaSearch
                    size={25}
                    type="button"
                    name="title"
                    values={search}
                    onClick={() => {
                      const foundItem = filterAllcardsData[0]; // Assuming you want to navigate to the first result
                      if (foundItem) {
                        // Clear the input field and navigate to the first result
                        setsearch(""); // Clear the input field
                        navigate(`/card/${foundItem.id}`, {
                          state: { card: foundItem },
                        });
                      }
                    }}
                  />
                </div>
              </div>

              {/* Show filtered search results */}
              {search && (
                <div className="search-results-dropdown bg-gray-300 absolute left-0 w-full mt-2 max-h-[150px] overflow-y-scroll">
                  {filterAllcardsData.length > 0 ? (
                    filterAllcardsData.map((item, index) => (
                      <div
                        key={item.id}
                        className={`flex items-center px-6 py-2 cursor-pointer border-b last:border-none ${
                          index === 0 ? "bg-rose-200" : "hover:bg-rose-200"
                        }`}
                      >
                        <div
                          onClick={() => {
                            setsearch("");
                            navigate(`/card/${item.id}`, {
                              state: { card: item },
                            });
                          }}
                          className="flex flex-row space-x-4 w-full"
                        >
                          <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0">
                            <img src={item.img} alt={item.title} />
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="text-lg font-medium text-gray-900">
                              {item.title}
                            </p>
                            <p className="text-sm text-gray-500">{item.para}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-6 py-2 text-gray-500 text-center">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile search icon */}
            <div className="max-sm:block hidden">
              <div
                onClick={() => SetMsearch(!Msearch)}
                className="icon_wrapper hover:text-black hover:bg-white"
              >
                <FaSearch className="cursor-pointer duration-700 ml-1.5 mt-1 transition hover:duration-300" />
              </div>
            </div>

            {/* Hamburger menu */}
            <div>
              <div
                onClick={() => setNav(!nav)}
                className="icon_wrapper hover:text-black hover:bg-white"
              >
                <GiHamburgerMenu
                  size={30}
                  className="cursor-pointer duration-700 rotate-180 scale-90 transition hover:scale-125 hover:-rotate-180 hover:duration-300"
                />

                {nav && (
                  <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
                )}
                <div
                  className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ${
                    nav ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className="absolute right-4 top-6 cursor-pointer duration-700 rotate-180 scale-90 transition hover:scale-110 hover:-rotate-180 hover:duration-300"
                  />
                  <h2 className="text-2xl p-4">
                    <span className="font-bold">SMarket </span>
                  </h2>
                  <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                      <li className="text-xl py-4 flex">
                        <FaHome size={28} className="mr-4" />
                        <Link to="/">Home</Link>
                      </li>
                      <li className="text-xl py-4 flex">
                        <AiFillProduct size={28} className="mr-4" />
                        <Link to="/MerchandisePage">Products</Link>
                      </li>
                      <li className="text-xl py-4 flex">
                        <FcAbout size={28} className="mr-4" />
                        <Link to="/AboutPage">About</Link>
                      </li>
                      <li className="text-xl py-4 flex">
                        <MdContacts size={28} className="mr-4" />
                        <Link to="/Contactpage">Contact</Link>
                      </li>

                      {/* Cart and Wishlist */}
                      <div className="flex flex-row space-x-3 pt-3">
                        <div className="icon_wrapper relative hover:text-black hover:bg-white">
                          <FaShoppingCart className="-ml-2 cursor-pointer scale-110" />
                          <CartCount
                            count={cartCount}
                            className="w-[25px] h-[25px]"
                          />
                        </div>
                        <div>
                          <Link to="/Cartpage">Cart</Link>
                        </div>
                      </div>

                      <div className="flex flex-row space-x-3 pt-6">
                        <div className="icon_wrapper relative hover:text-black hover:bg-white">
                          <FaHeart className="-ml-2 cursor-pointer scale-110" />
                          <WhishCount
                            count={whishCount}
                            className="w-[25px] h-[25px]"
                          />
                        </div>
                        <div>
                          <Link to={"/WhishlistPage"}>WhishList</Link>
                        </div>
                      </div>

                      <li className="text-xl py-4 flex">
                        <IoMdPerson size={28} className="mr-4" />
                        <Link to="/profile">Profile</Link>
                      </li>

                      {/* Logout Button */}
                      <li className="text-xl py-4 flex">
                        <button
                          onClick={handleLogout}
                          className="flex items-center text-red-500 hover:text-red-700"
                        >
                          <AiOutlineClose size={28} className="mr-4" />
                          Logout
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile search menu */}
        {Msearch && (
          <div className="max-sm:block hidden">
            <div className="flex items-center -mt-[100px] transition-all duration-500 ease-in-out">
              <input
                value={MobileSearch}
                name="title"
                onChange={(event) => SetMobileSeacrh(event.target.value)}
                type="text"
                placeholder="Search products"
                className="p-2 outline-none border-2  rounded-lg border-Title mt-[100px] w-full opacity-100 transform translate-y-0 transition-transform duration-300 ease-in-out"
              />
              <IoIosArrowUp
                onClick={() => SetMsearch(!Msearch)}
                size={30}
                className="absolute right-2 mt-[100px] cursor-pointer duration-700 border-2 rounded-full border-black scale-90 transition hover:scale-110 hover:-rotate-180 hover:duration-300"
              />
              <FaSearch
                size={27}
                onClick={() => {
                  const foundItem = MobileSearchFilterData[0]; // Navigate to the first result
                  if (foundItem) {
                    SetMobileSeacrh(""); // Clear input field
                    navigate(`/card/${foundItem.id}`, {
                      state: { card: foundItem },
                    });
                  }
                }}
                className="absolute right-12 mt-[100px] cursor-pointer duration-700 scale-90 transition"
              />
            </div>
          </div>
        )}

        {MobileSearch && (
          <div className="search-results-dropdown bg-gray-300 absolute left-0 w-full mt-2 max-h-[150px] overflow-y-scroll">
            {MobileSearchFilterData.length > 0 ? (
              MobileSearchFilterData.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center px-6 py-2 cursor-pointer border-b last:border-none ${
                    index === 0 ? "bg-rose-200" : "hover:bg-rose-200"
                  }`} // Change color for the first item
                >
                  <div
                    onClick={() => {
                      SetMobileSeacrh(""); // Clear the input field
                      navigate(`/card/${item.id}`, {
                        state: { card: item },
                      });
                    }}
                    className="flex flex-row space-x-4 w-full"
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-lg font-medium text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">{item.para}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-2 text-gray-500 text-center">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
