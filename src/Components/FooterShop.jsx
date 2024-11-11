import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

const FooterShop = () => {
  return (
    <>
      <footer className="bg-rose-100 p-8 md:p-14">
        <div className="flex flex-col md:flex-row mx-auto justify-between px-4 space-y-8 md:space-y-0">
          <div className="text-center md:text-left md:w-1/3">
            <h1 className="text-xl md:text-2xl">About us</h1>
            <p className="text-sm md:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              inventore quidem commodi?
            </p>
            <button className="text-2xl mt-4">
              <Link
                to={"/AboutPage"}
                className="flex items-center justify-center md:justify-start"
              >
                Read More <FcAbout className="ml-2" size={30} />
              </Link>
            </button>
          </div>
          <div className="text-center md:text-left md:w-1/3">
            <h1 className="text-xl md:text-2xl">FooterShop</h1>
            <p className="text-sm md:text-base">
              Additional content goes here.
            </p>
          </div>
          <div className="text-center md:text-left md:w-1/3">
            <h1 className="text-xl md:text-2xl">FooterShop</h1>
            <p className="text-sm md:text-base">
              Additional content goes here.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterShop;
