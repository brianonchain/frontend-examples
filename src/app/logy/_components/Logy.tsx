"use client";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, useSpring, cubicBezier, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import SplashScreen from "./SplashScreen";
import Chef from "./Chef";
import Footer from "./Footer";
import Text from "./Text";
import MenuBar from "./MenuBar";
import Menu from "./Menu";
import Logo from "./Logo";
import { MarginType } from "@/utils/types";

export default function Logy() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLDivElement | null>(null);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState(0);
  const [imageTranslationHeight, setImageTranslationHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [finalImageWidth, setFinalImageWidth] = useState(0);
  const [showBg, setShowBg] = useState(false);
  const [distanceToWindowTop, setDistanceToWindowTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // console.log("windowHeight", windowHeight);

  const springConfigImage = {
    stiffness: 200, // lower = softer
    damping: 28, // higher = less bounce
    mass: 1,
    restDelta: 0.001,
  };

  // image size
  const { scrollY, scrollYProgress: imageScaleYProgress } = useScroll({ target: imagesRef, offset: ["start end", "center center"] });
  const imageWidth = useTransform(imageScaleYProgress, [0, 1], [windowWidth, finalImageWidth], { ease: cubicBezier(0, 0, 0.58, 1) });
  const imageHeight = useTransform(imageScaleYProgress, [0, 1], [windowHeight, (finalImageWidth * 5) / 4], { ease: cubicBezier(0, 0, 0.58, 1) });
  const imageWidthSpring = useSpring(imageWidth, springConfigImage);
  const imageHeightSpring = useSpring(imageHeight, springConfigImage);

  // image translation
  const { scrollYProgress: imageTranslationYProgress } = useScroll({ target: imagesRef, offset: ["center center", "end end"] });
  const imageTranslation = useTransform(imageTranslationYProgress, [0, 1], [0, -imageTranslationHeight]);

  // gallery translation
  const galleryTranslation = useTransform(scrollY, (v) => -Math.max(0, v - distanceToWindowTop));

  // background translation
  const bgTranslation = useTransform(scrollY, (v) => -Math.min(v, height - windowHeight));

  // window image
  const { scrollYProgress: textYProgress } = useScroll({ target: textRef, offset: ["start end", "end end"] });
  useMotionValueEvent(textYProgress, "change", (v) => {
    setShowBg(v >= 1);
  });

  // gallery opacity
  const galleryOpacity = useTransform(textYProgress, [0.8, 1], [1, 0]);
  const springConfig = {
    stiffness: 80, // lower = softer
    damping: 24, // higher = less bounce
    mass: 0.35,
    restDelta: 0.0001,
  };
  const galleryOpacitySpring = useSpring(galleryOpacity, springConfig);

  useLayoutEffect(() => {
    const imagesEl = imagesRef.current;
    if (!imagesEl) return;
    const _height = imagesEl.getBoundingClientRect().height + window.innerHeight;
    setHeight(_height);

    setImageTranslationHeight(imagesEl.getBoundingClientRect().height / 2 - window.innerHeight / 2);

    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    const imageEl = imageRef.current;
    if (!imageEl) return;
    setFinalImageWidth(imageEl.getBoundingClientRect().width);

    const textEl = textRef.current;
    if (!textEl) return;
    setDistanceToWindowTop(textEl.getBoundingClientRect().height + _height - window.innerHeight);
  }, []);

  console.log("windowHeight", windowHeight);

  const hit = useInView(windowRef, {
    margin: `-32px 0px -${windowHeight ? windowHeight - 32 : 700}px 0px` as MarginType,
    amount: "some", // fire as soon as any pixel crosses the margin line
    once: false, // keep updating as you scroll
  });

  const logoColor = hit ? "white" : "black";

  return (
    <div className="w-full flex flex-col relative">
      <SplashScreen />
      <Logo ref={logoRef} fill={logoColor} />
      {/*--- z-100 --- */}
      <MenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/*--- menu, z-99 --- */}
      <Menu isOpen={isOpen} />

      {/*--- floating image, z=3  width={4272} height={2848}--- */}
      <div className={`${isOpen ? "opacity-0" : "opacity-100"} fixed inset-0 flex justify-center items-center [transition:opacity_0.6s_ease-in-out] z-[3] overflow-hidden`}>
        <motion.img
          src="/logy/logy4.jpg"
          alt="image4"
          width={4272}
          height={2848}
          className={`w-full h-full object-cover`}
          style={{ width: imageWidthSpring, height: imageHeightSpring, y: imageTranslation, opacity: galleryOpacitySpring }}
        />
      </div>

      {/*--- gallery, z=2 --- */}
      <motion.div className={`${isOpen ? "opacity-0" : "opacity-100"} [transition:opacity_0.6s_ease-in-out] fixed w-full bg-white z-[2]`} style={{ y: bgTranslation }}>
        <div className="w-full h-[100dvh]"></div>
        <motion.div
          ref={imagesRef}
          className={`absolute top-[100%] py-24 w-full flex items-center justify-center gap-6 md:gap-16 bg-slate-200`}
          style={{ opacity: galleryOpacitySpring, y: galleryTranslation }}
        >
          <div className="flex flex-col gap-6 md:gap-16">
            <div className="w-[clamp(200px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/logy/logy2.jpg" alt="image1" fill className="object-cover" />
            </div>
            <div className="w-[clamp(200px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/logy/logy3.jpg" alt="image2" fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-16">
            <div className="w-[clamp(200px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/logy/logy1.jpg" alt="image3" fill className="object-cover" />
            </div>
            <div ref={imageRef} className="w-[clamp(200px,25vw,400px)] aspect-[4/5] relative"></div>
            <div className="w-[clamp(200px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/logy/logy5.jpg" alt="image5" fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-16">
            <div className="w-[clamp(200px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/logy/food1.jpg" alt="image6" fill className="object-cover" />
            </div>
            <div className="w-[clamp(200px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/logy/food2.jpg" alt="image7" fill className="object-cover" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/*--- transparent spacer ---*/}
      <div className="w-full bg-transparent" style={{ height: `${height}px` }}></div>
      {/*--- text---*/}
      <motion.div ref={textRef} className="px-6 w-full flex flex-col items-center relative bg-red-300">
        <div className="pb-[160px] px-6 lg:px-12 pt-12 w-full max-w-[600px] bg-white flex flex-col items-center z-[4]">
          <Image src="/icon-512.png" alt="logy-logo" width={200} height={200} />
          <Text />
        </div>
        <div className="absolute w-full h-full bg-white z-[1]"></div>
      </motion.div>

      {/*--- window ---*/}
      <div ref={windowRef} className="w-full h-[350px] bg-transparent relative"></div>
      <Image
        src="/logy/logy6.jpg"
        alt="image4"
        width={2200}
        height={1238}
        className={`${showBg ? "" : "hidden"} fixed h-[100dvh] w-[100dvw] object-cover [transition:opacity_0.6s_ease-in-out,scale_2.4s_ease-out]`}
      />
      <Chef />
      <Footer />
    </div>
  );
}
