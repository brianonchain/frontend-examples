import { motion } from "framer-motion";

export default function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      className="absolute top-1/2 -translate-y-1/2 right-[8px] w-[30px] h-[30px] rounded-full hover:bg-slate-150 text-sm font-bold z-[1]"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      &#10005;
    </motion.button>
  );
}
