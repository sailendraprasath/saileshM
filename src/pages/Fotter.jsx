import Logo from "../assets/Logo.webp";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br caret-transparent select-none  from-rose-400 to-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
            <div className="relative inline-block">
              <img
                src={Logo}
                alt="Logo"
                className="w-[150px] h-[150px] object-cover rounded-full border-4 border-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full border-4 border-gradient-to-br from-rose-400 to-white blur-sm opacity-60 pointer-events-none"></div>
            </div>

            <div className="flex space-x-4 text-xl text-gray-800">
              <BsTwitter
                size={30}
                className="hover:text-blue-500 transition-transform hover:duration-300 duration-200 transform hover:rotate-12"
              />
              <FaSquareInstagram
                size={30}
                className="hover:text-rose-700 transition-transform hover:duration-300 duration-200 transform hover:rotate-12"
              />
              <BsYoutube
                size={30}
                className="hover:text-red-600 transition-transform hover:duration-300 duration-200 transform hover:rotate-12"
              />
              <FaFacebookF
                size={30}
                className="hover:text-blue-600 transition-transform hover:duration-300 duration-200 transform hover:rotate-12"
              />
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 text-center md:text-left w-full md:w-auto">
            <div>
              <h3 className="font-semibold font-poppins text-gray-900 text-3xl mb-4 relative group">
                TheSuperMarket
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </h3>
              <ul className="space-y-2 text-center">
                {" "}
                {/* Center align the list items */}
                <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  Quality
                </li>
                <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  Help
                </li>
                <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  Share
                </li>
                <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  Careers
                </li>
                <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  Testimonials
                </li>
                <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  Work
                </li>
              </ul>
            </div>
            <div className="ml-9 max-sm:ml-0">
              <h3 className="font-semibold font-poppins  text-gray-900 text-4xl mb-4 relative group">
                Contact
                <span className="absolute -left-2 -bottom-1 w-full h-[2px] bg-gray-900 scale-x-0  group-hover:scale-x-75 transition-transform duration-300 origin-left"></span>
              </h3>
              <ul className="space-y-2">
                <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  (909090909090)
                </li>
                <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  @TheSuperMarket.com
                </li>
                {/* <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  press@food.com
                </li>
                <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  contact@food.com
                </li> */}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-poppins text-gray-900 text-4xl mb-4 relative group">
                Legal
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-900 scale-x-0 group-hover:scale-x-50 transition-transform duration-300 origin-left"></span>
              </h3>
              <ul className="space-y-2">
                <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:text-gray-900 transition duration-200 cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-800">
          © 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
