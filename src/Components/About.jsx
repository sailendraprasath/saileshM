import About1 from "../assets/About/About1.png";
import { motion } from "framer-motion";

import AboutImg1 from "../assets/About/About1.png";

const AboutMotion = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, delay: delay },
  },
});

const About = () => {
  return (
    <>
      <div className="bg-rose-400 "></div>
      <div>
        <motion.h2
          variants={AboutMotion(0)}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center font-extrabold text-4xl font-welcome text-About"
        >
          About US..!!
        </motion.h2>

        {/* First Section */}
        <div className="flex justify-center items-center max-sm:flex-col px-4 pt-6 mx-auto gap-3">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 1.5 }}
            className="bg-rose-400 rounded-xl"
          >
            <img
              src={About1}
              alt="About"
              className="rounded-tr-full max-sm:w-[300px]"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 10 }}
            transition={{ duration: 1.5 }}
            className="text-center font-About font-bold text-2xl max-sm:text-xl text-transparent bg-clip-text  bg-gradient-to-r from-slate-700 to-red-500"
          >
            <p>
              Rose Supermarket in Madurai offers a wide variety of products,
              making it a convenient one-stop shop for all your needs. The store
              is well-stocked, and you can find almost everything you might be
              looking for.
            </p>
          </motion.div>
        </div>
      </div>
      <div>
        <motion.h2
          variants={AboutMotion(0)}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center font-bold mt-4 text-3xl font-welcome text-About"
        >
          Why choose US..!!
        </motion.h2>
      </div>
      <div className="px-4 max-w-full">
        <motion.div className="flex flex-wrap justify-center font-welcome text-About gap-6 sm:gap-4 md:gap-6 lg:gap-[150px] py-10">
          {/* First Image with Text */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px]"
          >
            <img
              src={AboutImg1}
              alt=""
              className="rounded-lg border-4 w-full h-auto"
            />
            <p className="text-center font-semibold text-sm sm:text-base md:text-lg pt-2">
              Wide Product Selection
            </p>
          </motion.div>

          {/* Second Image with Text */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center font-welcome text-About w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px]"
          >
            <img
              src={AboutImg1}
              alt=""
              className="rounded-lg border-4 w-full h-auto"
            />
            <p className="text-center font-semibold text-sm sm:text-base md:text-lg pt-2">
              Competitive Pricing
            </p>
          </motion.div>

          {/* Third Image with Text */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px]"
          >
            <img
              src={AboutImg1}
              alt=""
              className="rounded-lg border-4 w-full h-auto"
            />
            <p className="text-center font-semibold text-sm sm:text-base md:text-lg pt-2">
              Customer-Centric Service
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
