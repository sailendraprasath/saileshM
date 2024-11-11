import About_Grocires from "../assets/About/About_Grocires.png";
import { motion } from "framer-motion";

import About from "../Components/About";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const About2 = () => {
  return (
    <>
      <About />
      <div className="">
        <div className="  pb-24  ">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl font-extrabold  font-welcome text-About"
          >
            Categories
          </motion.h1>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center  justify-center gap-4"
          >
            <motion.div
              variants={iconVariants(1.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-400 p-4"
            >
              <img src={About_Grocires} alt="" className="w-[80px]" />
              <h1 className="text-center pt-2">Grocires</h1>
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-400 p-4"
            >
              <img src={About_Grocires} alt="" className="w-[80px]" />
              <h1 className="text-center pt-2">Grocires</h1>
            </motion.div>
            <motion.div
              variants={iconVariants(1)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-400 p-4"
            >
              <img src={About_Grocires} alt="" className="w-[80px]" />
              <h1 className="text-center pt-2">Grocires</h1>
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-400 p-4"
            >
              <img src={About_Grocires} alt="" className="w-[80px]" />
              <h1 className="text-center pt-2">Grocires</h1>
            </motion.div>
            <motion.div
              variants={iconVariants(1.2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-400 p-4"
            >
              <img src={About_Grocires} alt="" className="w-[80px]" />
              <h1 className="text-center pt-2">Grocires</h1>
            </motion.div>
            <motion.div
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-400 p-4"
            >
              <img src={About_Grocires} alt="" className="w-[80px]" />
              <h1 className="text-center pt-2">Grocires</h1>
            </motion.div>
            <motion.div
              variants={iconVariants(1.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-400 p-4"
            >
              <img src={About_Grocires} alt="" className="w-[80px]" />
              <h1 className="text-center pt-2">Grocires</h1>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About2;
