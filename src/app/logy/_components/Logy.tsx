"use client";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, useSpring, cubicBezier } from "framer-motion";
import Image from "next/image";
import SplashScreen from "./SplashScreen";
import Chef from "./Chef";
import Footer from "./Footer";
import Text from "./Text";

export default function Logy() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const fadeRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState(0);
  const [imageTranslationHeight, setImageTranslationHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [finalImageWidth, setFinalImageWidth] = useState(0);
  const [showBg, setShowBg] = useState(false);
  const [distanceToWindowTop, setDistanceToWindowTop] = useState(0);
  console.log("height", height);
  console.log("distanceToWindowTop", distanceToWindowTop);

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
  useMotionValueEvent(scrollY, "change", (v) => {
    console.log("scrollY", v);
  });

  // background translation
  const bgTranslation = useTransform(scrollY, (v) => -Math.min(v, height - windowHeight));

  // gallery opacity
  const { scrollYProgress: fadeRefYProgress } = useScroll({ target: fadeRef, offset: ["start end", "end end"] });
  const galleryOpacity = useTransform(fadeRefYProgress, [0, 1], [1, 0]);
  const springConfig = {
    stiffness: 80, // lower = softer
    damping: 24, // higher = less bounce
    mass: 0.35,
    restDelta: 0.0001,
  };
  const galleryOpacitySpring = useSpring(galleryOpacity, springConfig);
  const textBg = useTransform(fadeRefYProgress, [0, 1], ["#FFFFFF00", "#FFFFFF"]);
  const textBgSpring = useSpring(textBg, springConfig);

  // window image
  const { scrollYProgress: textYProgress } = useScroll({ target: textRef, offset: ["start end", "end end"] });
  useMotionValueEvent(textYProgress, "change", (v) => {
    setShowBg(v >= 1);
  });

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

  return (
    <div className="w-full flex flex-col relative">
      <SplashScreen />

      <div className="fixed w-[100dvw] h-[100dvh] flex justify-center items-center z-[3]">
        <motion.img
          src="/logy4.jpg"
          alt="image4"
          width={4272}
          height={2848}
          className={`object-cover`}
          style={{ width: imageWidthSpring, height: imageHeightSpring, y: imageTranslation, opacity: galleryOpacitySpring }}
        />
      </div>

      {/*--- gallery  , y: galleryTranslation --- */}
      <motion.div className={`fixed w-full bg-white z-[2]`} style={{ y: bgTranslation }}>
        <div className="w-full h-screen"></div>
        <motion.div
          ref={imagesRef}
          className={`absolute top-[100%] py-24 w-full flex items-center justify-center gap-6 md:gap-16 bg-slate-200`}
          style={{ opacity: galleryOpacitySpring, y: galleryTranslation }}
        >
          {/* <div className="absolute w-full h-full bg-white z-[1]"></div> */}
          <div className="flex flex-col gap-6 md:gap-16">
            <div className="w-[clamp(160px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/logy2.jpg" alt="image1" fill className="object-cover" />
            </div>
            <div className="w-[clamp(160px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/logy3.jpg" alt="image2" fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-16">
            <div className="w-[clamp(160px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/logy1.jpg" alt="image3" fill className="object-cover" />
            </div>
            <div ref={imageRef} className="w-[clamp(160px,25vw,400px)] aspect-[4/5] relative"></div>
            <div className="w-[clamp(160px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/logy5.jpg" alt="image5" fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-16">
            <div className="w-[clamp(160px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/food1.jpg" alt="image6" fill className="object-cover" />
            </div>
            <div className="w-[clamp(160px,25vw,400px)] aspect-[4/5] relative">
              <Image src="/food2.jpg" alt="image7" fill className="object-cover" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/*--- text style={{ backgroundColor: textBg }}---*/}
      <div className="w-full bg-transparent" style={{ height: `${height}px` }}></div>
      <motion.div ref={textRef} className="px-6 w-full flex flex-col items-center relative">
        <div className="pb-[160px] px-6 lg:px-12 pt-12 w-full max-w-[600px] bg-white flex flex-col items-center z-[4]">
          <Image src="/icon-512.png" alt="logy-logo" width={200} height={200} />
          <Text />
          <div ref={fadeRef} className="absolute bottom-50 h-[250px]"></div>
        </div>
        <div className="absolute w-full h-full bg-white z-[1]"></div>
      </motion.div>

      {/*--- window ---*/}
      <div className="w-full h-[350px] bg-transparent"></div>
      <Image src="/logy6.jpg" alt="image4" width={4272} height={2848} className={`${showBg ? "fixed" : "hidden"} w-full h-full object-cover z-[-1]`} />

      <Chef />
      <Footer />
    </div>
  );
}
