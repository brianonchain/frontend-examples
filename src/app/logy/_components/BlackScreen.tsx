import { AnimatePresence, motion } from "framer-motion";
export default function BlackScreen({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 bg-black opacity-60 z-[99]"
        ></motion.div>
      )}
    </AnimatePresence>
  );
}
