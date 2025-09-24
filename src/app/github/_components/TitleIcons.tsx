import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { useTransform, useScroll, motion, useSpring } from "framer-motion";

export default function TitleIcons() {
  // hooks
  const { scrollY } = useScroll();

  const titleOpacity = useTransform(scrollY, [200, 450], [1, 0]);
  const titleScale = useTransform(scrollY, [0, 250], [1, 0.9]);
  const iconOpacity = useTransform(scrollY, [0, 250], [1, 0]);
  const iconScale = useTransform(scrollY, [0, 250], [1, 0.9]);

  const springConfig = {
    stiffness: 80, // lower = softer
    damping: 24, // higher = less bounce
    mass: 0.35,
    restDelta: 0.0001,
  };
  const titleOpacitySpring = useSpring(titleOpacity, springConfig);
  const iconOpacitySpring = useSpring(iconOpacity, springConfig);
  const iconScaleSpring = useSpring(iconScale, springConfig);
  const titleScaleSpring = useSpring(titleScale, springConfig);

  return (
    <>
      {/*--- title ---*/}
      <motion.div
        className="mt-40 fixed w-full px-4 sm:px-8 md:max-w-[740px] lg:max-w-[960px] flex flex-col items-center z-[1]"
        style={{ opacity: titleOpacitySpring, scale: titleScaleSpring }}
      >
        <p className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-bold text-center">Build and ship software on a single, collaborative platform</p>
        <p className="py-8 text-lg sm:text-xl text-center">Join the world’s most widely adopted AI-powered developer platform.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-green-700 border-2 border-green-700 hover:bg-green-800 hover:border-green-800 px-6 py-2.5 rounded-lg text-base font-semibold">
            Free Enterprise Trial
          </button>
          <button className="bg-transparent border-2 border-white hover:border-slate-500 px-6 py-2.5 rounded-lg text-base font-semibold">Explore Upcoming Releases</button>
        </div>
      </motion.div>
      {/*--- icons & spotlight ---*/}
      <motion.div className="mt-120 fixed my-12 w-90 h-60 hidden md:block" style={{ opacity: iconOpacitySpring, scale: iconScaleSpring }}>
        {/*--- spotlight ---*/}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[400px] bg-[radial-gradient(circle_at_50%_100%,#FFE0FF,#4338A0_30%,transparent_80%)] blur-[50px]" />

        {/*--- icons ---*/}
        <motion.div
          initial={{ y: 350, rotate: 10, opacity: 0 }}
          animate={{ y: 90, rotate: -30, opacity: 1 }}
          transition={{ duration: 4, ease: [0.19, 1, 0.22, 1], delay: 0.8, opacity: { duration: 0.1, delay: 0.8 } }}
          className="absolute left-[0%] z-10"
        >
          <Image src="/github/icon1.svg" alt="icon1" width={60} height={60} />
        </motion.div>
        <motion.div
          initial={{ y: 350, rotate: 10, opacity: 0 }}
          animate={{ y: 160, rotate: -20, opacity: 1 }}
          transition={{ duration: 4, ease: [0.19, 1, 0.22, 1], delay: 1.2, opacity: { duration: 0.1, delay: 1.2 } }}
          className="absolute left-[40%] z-10"
        >
          <Image src="/github/icon2.svg" alt="icon2" width={60} height={60} />
        </motion.div>
        <motion.div
          initial={{ y: 350, rotate: -10, opacity: 0 }}
          animate={{ y: 50, rotate: 20, opacity: 1 }}
          transition={{ duration: 4, ease: [0.19, 1, 0.22, 1], delay: 0.4, opacity: { duration: 0.1, delay: 0.4 } }}
          className="absolute left-[80%] z-10"
        >
          <Image src="/github/icon3.svg" alt="icon3" width={60} height={60} />
        </motion.div>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 40, opacity: 1 }}
          transition={{ duration: 4, ease: [0.19, 1, 0.22, 1], delay: 1.4 }}
          className="absolute left-[10%] z-10"
        >
          <FaStar className="text-slate-200 text-[0.5rem] z-10" />
        </motion.div>
        <motion.div
          initial={{ y: 220, opacity: 0 }}
          animate={{ y: 160, opacity: 1 }}
          transition={{ duration: 4, ease: [0.19, 1, 0.22, 1], delay: 1.3 }}
          className="absolute left-[25%] z-10"
        >
          <FaStar className="text-slate-200 text-[0.5rem] z-10" />
        </motion.div>
        <motion.div
          initial={{ y: 140, opacity: 0 }}
          animate={{ y: 80, opacity: 1 }}
          transition={{ duration: 4, ease: [0.19, 1, 0.22, 1], delay: 1.2 }}
          className="absolute left-[50%] z-10"
        >
          <FaStar className="text-slate-200 text-[0.5rem] z-10" />
        </motion.div>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 4, ease: [0.19, 1, 0.22, 1], delay: 1.1 }}
          className="absolute left-[60%] z-10"
        >
          <FaStar className="text-slate-200 text-[0.5rem] z-10" />
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 140, opacity: 1 }}
          transition={{ duration: 4, ease: [0.19, 1, 0.22, 1], delay: 1 }}
          className="absolute left-[80%] z-10"
        >
          <FaStar className="text-slate-200 text-[0.5rem] z-10" />
        </motion.div>
      </motion.div>
    </>
  );
}
