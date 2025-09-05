"use client";
import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, useSpring } from "framer-motion";
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
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [finalImageWidth, setFinalImageWidth] = useState(0);
  const [fixImage, setFixImage] = useState(false);
  const [isGalleryFixed, setIsGalleryFixed] = useState(false);
  const [showBg, setShowBg] = useState(false);

  // gallery image size
  const { scrollYProgress: imageScaleYProgress } = useScroll({ target: imagesRef, offset: ["start end", "center center"] });
  const imageWidth = useTransform(imageScaleYProgress, [0, 1], [windowWidth, finalImageWidth]);
  const imageHeight = useTransform(imageScaleYProgress, [0, 1], [windowHeight, (finalImageWidth * 5) / 4]);
  useMotionValueEvent(imageScaleYProgress, "change", (v) => {
    setFixImage(v >= 1);
  });

  // text ref
  const { scrollYProgress: textScrollYProgress } = useScroll({ target: textRef, offset: ["start end", "end end"] });
  useMotionValueEvent(textScrollYProgress, "change", (v) => {
    setIsGalleryFixed(v > 0);
  });

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
  useMotionValueEvent(fadeRefYProgress, "change", (v) => {
    setShowBg(v >= 1);
  });
  const textRefBg = useTransform(fadeRefYProgress, [0, 1], ["#ffffff00", "#ffffffff"]);

  useLayoutEffect(() => {
    const imagesEl = imagesRef.current;
    if (!imagesEl) return;
    setHeight(imagesEl.getBoundingClientRect().height + window.innerHeight);

    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    const imageEl = imageRef.current;
    if (!imageEl) return;
    setFinalImageWidth(imageEl.getBoundingClientRect().width);
  }, []);

  return (
    <div className="w-full flex flex-col relative">
      <SplashScreen />

      {/*--- gallery ---*/}
      <motion.div className={`${isGalleryFixed ? "fixed bottom-0" : "absolute"} w-full`} style={{ opacity: galleryOpacitySpring }}>
        <div className="w-full h-screen"></div>
        <div ref={imagesRef} className={`py-24 w-full flex items-center justify-center gap-6 md:gap-16 bg-slate-300`}>
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
              <Image src="/logy4.jpg" alt="image3" fill className="object-cover" />
            </div>
            <div ref={imageRef} className="w-[clamp(160px,25vw,400px)] aspect-[4/5] relative">
              <motion.img
                src="/logy1.jpg"
                alt="image4"
                width={4272}
                height={2848}
                className={`${fixImage ? "" : "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} z-10 object-cover`}
                style={{ width: imageWidth, height: imageHeight }}
              />
            </div>
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
        </div>
      </motion.div>

      {/*--- text ---*/}
      <div className="w-full bg-transparent" style={{ height: `${height}px` }}></div>
      <motion.div ref={textRef} className="px-3 w-full flex flex-col items-center relative z-[100]" style={{ backgroundColor: textRefBg }}>
        <div className="px-12 pt-12 w-full max-w-[600px] bg-white flex flex-col items-center">
          <Image src="/icon-512.png" alt="logy-logo" width={200} height={200} />
          <Text />
          <div ref={fadeRef} className="h-[150px]"></div>
          <div className="h-[50px]"></div>
        </div>
      </motion.div>

      {/*--- window ---*/}
      <motion.img src="/logy6.jpg" alt="image4" width={4272} height={2848} className={`${showBg ? "fixed inset-0 w-full h-full object-cover" : "hidden"}`} />
      <div className="w-full h-[350px] bg-transparent border"></div>

      <Chef />
      <Footer />
    </div>
  );
}
