"use client";
import { useState, useEffect, useCallback, Fragment, useLayoutEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import type { EmblaCarouselType } from "embla-carousel";
import Navbar from "./Navbar";
import { cities } from "@/utils/constants/airbnb/constants";
import { Source_Sans_3 } from "next/font/google";
import PhotoReel from "./PhotoReel";

const sans3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function Airbnb() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = viewportRef.current;
    if (!el) return;

    function handleResize() {
      if (!viewportRef.current) return;
      const { matches: is750AndUp } = window.matchMedia("(min-width: 750px)");
      const { matches: is1200AndUp } = window.matchMedia("(min-width: 1200px)");
      const { matches: is1400AndUp } = window.matchMedia("(min-width: 1400px)");

      const numberOfImages = is1400AndUp ? 7 : is1200AndUp ? 6 : is750AndUp ? 4 : 2; // # images shown
      const margin = is750AndUp ? 64 : 12; // left margin
      const gap = 12; // gap between images
      const teaser = is750AndUp ? 0 : 40; // # amount of teaser image shown
      const width = Math.floor((el!.clientWidth - margin - (numberOfImages - 1) * gap - teaser) / numberOfImages);
      setImageWidth(width);
    }

    // Observe size changes of the container (includes orientation, splits, etc.)
    const ro = new ResizeObserver(() => requestAnimationFrame(handleResize));
    ro.observe(el);

    handleResize();
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={viewportRef} className={sans3.className}>
      <Navbar />
      <div className="pt-[8px] pb-50 w-full flex justify-center">
        <div className="w-full max-w-[1600px]">
          {Object.keys(cities).map((city) => (
            <Fragment key={city}>
              <PhotoReel city={city} imageWidth={imageWidth} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
