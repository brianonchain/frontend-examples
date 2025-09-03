import { motion } from "framer-motion";

export default function Graphic3() {
  return (
    <motion.div
      key="three"
      className="my-12 lg:my-0 w-full max-w-[350px] h-[500px] bg-white/10 rounded-2xl shadow-[0px_0px_20px_0px_#7769D1] flex items-center justify-center text-5xl font-bold"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" }, // slower, smoother entrance
      }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      3
    </motion.div>
  );
}
