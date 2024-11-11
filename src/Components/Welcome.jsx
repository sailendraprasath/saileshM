import { motion } from "framer-motion";
const WelcomeMotion = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});
const Welcome = () => {
  return (
    <>
      <motion.div
        variants={WelcomeMotion(0)}
        initial="hidden"
        animate="visible"
        className="flex mx-auto  items-center mt-32 flex-col container font-welcome  space-x-6 font-bold text-transparent bg-clip-text  bg-gradient-to-r from-white to-red-500"
      >
        <h1 className="text-7xl max-sm:text-4xl">Welcome to</h1>
        <h1 className="text-7xl max-sm:text-4xl">The super market</h1>
      </motion.div>
    </>
  );
};

export default Welcome;
