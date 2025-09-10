import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Menu({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      {/*--- bg image, z-97 --- */}
      <Image
        src="/logy6.jpg"
        alt="image4"
        width={2200}
        height={1238}
        className={`${
          isOpen ? "opacity-100 scale-[1.2]" : "opacity-0 scale-[1]"
        } fixed h-[100dvh] w-[100dvw] object-cover [transition:opacity_0.6s_ease-in-out,scale_2.4s_ease-out] overflow-hidden z-[97]`}
      />
      {/*--- black screen, z-98 --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-black opacity-60 z-[98]"
          ></motion.div>
        )}
      </AnimatePresence>
      {/*--- menu content, z-99 --- */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[99] text-white">
          <div className={`flex flex-col xl:flex-row gap-[70px] xl:gap-[100px] text-center [transition:opacity_0.6s_ease-in-out,scale_2.4s_ease-out]`}>
            {["Home", "Concept", "Chef", "Reservation"].map((i) => (
              <div key={i} className="overflow-hidden">
                <motion.div className="text-4xl xl:text-5xl" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}>
                  {i}
                </motion.div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-[50px] xs:bottom-[100px] overflow-hidden">
            <motion.div className="flex gap-[50px] text-xl" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}>
              <p>Recruit</p>
              <p>Instagram</p>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
