import React from "react";
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "eb0a1a9c-8b8e-4c65-ac30-414e484ac366"); // Add access key for Web3Forms

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        toast.success("Form Submitted Successfully!");
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.");
    }
  };
  return (
    <>
      <div className="bg-rose-300/75 mt-20 p-10">
        <div className="flex  mx-auto items-center  flex-col container font-welcome space-y-3 space-x-6 ">
          <h1 className="text-5xl max-sm:text-3xl font-extrabold text-Contact1  ">
            Contact US
          </h1>
          <p className="text-center   max-sm:text-[15px]  text-3xl">
            115 mela kailasapuram thathaneri main road madurai
          </p>
          <p className="text-xl">(06384000472)</p>
        </div>
      </div>
      <div>
        <iframe
          className="mx-auto flex relative  w-full h-[250px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62883.09643963476!2d78.08162382365258!3d9.917834336827589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1727863648482!5m2!1sen!2sin"
        ></iframe>
      </div>
      <div className="bg-rose-300/75 p-12">
        <div className="flex  mx-auto items-center  flex-col container font-welcome space-y-3 space-x-6 ">
          <h1 className="text-5xl max-sm:text-3xl font-extrabold text-Contact1  ">
            Opening hours
          </h1>
          <p className="text-3xl max-sm:text-base">
            Monday - Sunday: 9am - 10pm
          </p>
        </div>
      </div>
      <div className="p-10">
        <div className="flex  mx-auto items-center  flex-col container font-welcome space-y-5 space-x-6 ">
          <h1 className="text-4xl max-sm:text-2xl font-extrabold text-black ">
            Sailesh Super Market
          </h1>
          <p>Contact @TheSuperMarket.com </p>
        </div>
      </div>
      <div className="bg-rose-300/75 p-10">
        <div className="flex  mx-auto items-center  flex-col container font-welcome space-y-3 space-x-6 ">
          <h1 className="text-5xl max-sm:text-3xl font-extrabold text-Contact1  ">
            Social Media
          </h1>
          <div className="flex flex-row text-4xl space-x-8">
            <FaSquareFacebook />
            <IoLogoYoutube />
            <FaInstagram />
          </div>
        </div>
      </div>
      <section className="contact bg-white p-16 max-md:p-6 rounded-lg shadow-lg w-full max-w-full mx-auto min-h-[500px] flex flex-col justify-center">
        <form onSubmit={onSubmit} className="w-full ">
          <h2 className="max-sm:text-3xl font-semibold font-welcome text-4xl  mb-6 text-center text-gray-800">
            Reach Out to Us
          </h2>

          {/* Full Name */}
          <div className="input-box mb-4">
            <label className="block mb-2 text-gray-800">Full Name</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-rose-500 transition duration-300">
              <AiOutlineUser className="text-gray-500 text-xl mr-2" />
              <input
                type="text"
                className="field w-full bg-transparent focus:outline-none p-2"
                placeholder="Enter Your name"
                name="name"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="input-box mb-4">
            <label className="block mb-2 text-gray-800">Email Address</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-rose-500 transition duration-300">
              <AiOutlineMail className="text-gray-500 text-xl mr-2" />
              <input
                type="email"
                className="field w-full bg-transparent focus:outline-none p-2"
                placeholder="Enter Your email"
                name="email"
                required
              />
            </div>
          </div>

          {/* Your Message */}
          <div className="input-box mb-6">
            <label className="block mb-2 text-gray-800">Your Message</label>
            <div className="flex items-start border-b-2 border-gray-300 focus-within:border-rose-500 transition duration-300">
              <AiOutlineMessage className="text-gray-500 text-xl mr-2 mt-2" />
              <textarea
                className="field w-full bg-transparent focus:outline-none p-2 h-24 resize-none"
                placeholder="Enter your message"
                name="message"
                required
              ></textarea>
            </div>
          </div>

          {/* Result message */}
          <div className="text-center mb-4 text-sm text-gray-800">{result}</div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Toast container to display notifications */}
        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
