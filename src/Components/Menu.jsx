import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeart, FaHome } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { Link } from "react-router-dom";
import WhishCount from "../Components/WhishCount";
import { FcAbout } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import CartCount from "../Components/CartCount";

const Menu = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div
        onClick={() => setNav(!nav)}
        className="icon_wrapper hover:text-black  hover:bg-white  "
      >
        <GiHamburgerMenu
          size={30}
          className="cursor-pointer duration-700 rotate-180 scale-90 transition hover:scale-125 hover:-rotate-180  hover:duration-300"
        />
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
        ) : (
          ""
        )}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-6 cursor-pointer duration-700 rotate-180 scale-90 transition hover:scale-110 hover:-rotate-180  hover:duration-300"
          />
          <h2 className="text-2xl p-4">
            The<span className="font-bold">Rose</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex ">
                <FaHome size={28} className="mr-4" />
                <Link to="/">Home</Link>
              </li>
              <li className="text-xl py-4 flex ">
                <FcAbout size={28} className="mr-4" />
                <Link to="/AboutPage">About</Link>
              </li>
              <li className="text-xl py-4 flex ">
                <MdContacts size={28} className="mr-4" />
                <Link to="/Contactpage">Contact</Link>
              </li>

              {/* i put here Cart  */}
              <div className="flex flex-row space-x-3 pt-3">
                <div className="icon_wrapper relative hover:text-black   hover:bg-white ">
                  <FaShoppingCart className="-ml-2 cursor-pointer scale-110" />
                  <CartCount className="w-[25px] h-[25px]   " />
                </div>
                <div>
                  <Link to="/Cartpage">Cart</Link>
                </div>
              </div>

              <div className="flex flex-row space-x-3 pt-6">
                <div className="icon_wrapper relative hover:text-black   hover:bg-white ">
                  <FaHeart className="-ml-2 cursor-pointer scale-110" />
                  <WhishCount className="w-[25px] h-[25px]   " />
                </div>
                <div>
                  <h1>Whislist</h1>
                </div>
              </div>

              <li className="text-xl py-4 flex ">
                <TbTruckDelivery size={28} className="mr-4" />
                Orders
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
