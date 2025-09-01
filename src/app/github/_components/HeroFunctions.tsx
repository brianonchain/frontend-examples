import { motion } from "framer-motion";

export default function HeroFunctions({ heroFunction }: { heroFunction: { name: string } }) {
  return (
    <div className="mt-152 md:mt-190 px-3 sm:px-10 w-full max-w-[calc(1180px+10rem)] flex flex-col items-center z-[1]">
      <div className="px-5 pt-5 w-full h-[500px] flex justify-center bg-white/30 border border-violet-400 rounded-t-3xl shadow-[0px_0px_200px_20px_#7769D1]">
        {heroFunction.name === "Code" && (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ scale: { duration: 0.4, ease: "easeOut" } }}
            className="w-full h-full flex items-center justify-center bg-slate-900 rounded-t-2xl"
          >
            Code
          </motion.div>
        )}
        {heroFunction.name === "Plan" && (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ scale: { duration: 0.4, ease: "easeOut" } }}
            className="w-[80%] h-full flex items-center justify-center bg-slate-900 rounded-t-2xl"
          >
            Plan
          </motion.div>
        )}
        {heroFunction.name === "Collaborate" && (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ y: { duration: 0.4, ease: "easeOut" } }}
            className="w-full h-full flex items-center justify-center bg-slate-900 rounded-t-2xl"
          >
            Collaborate
          </motion.div>
        )}
        {heroFunction.name === "Automate" && (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ scale: { duration: 0.4, ease: "easeOut" } }}
            className="w-[80%] h-full flex items-center justify-center bg-slate-900 rounded-t-2xl"
          >
            Automate
          </motion.div>
        )}
        {heroFunction.name === "Secure" && (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ scale: { duration: 0.4, ease: "easeOut" } }}
            className="w-full h-full flex items-center justify-center bg-slate-900 rounded-t-2xl"
          >
            Secure
          </motion.div>
        )}
      </div>
    </div>
  );
}
