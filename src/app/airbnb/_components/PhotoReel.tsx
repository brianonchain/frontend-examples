"use client";
import { useState, useEffect, useCallback, useRef, Fragment } from "react";
import { cities, type RoomInfo } from "@/utils/constants/airbnb/constants";
import Image from "next/image";
import { FaStar, FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function PhotoReel({ city, imageWidth }: { city: string; imageWidth: number }) {
  // refs
  const viewportRef = useRef<HTMLDivElement>(null);

  // states
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const prev = () => {
    viewportRef.current?.scrollBy({ left: -(imageWidth + 12), behavior: "smooth" });
    setPrevBtnDisabled(true);
  };
  const next = () => {
    viewportRef.current?.scrollBy({ left: imageWidth + 12, behavior: "smooth" });
    setNextBtnDisabled(true);
  };

  // keep disabled state in sync with trackpad / manual scroll
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth; // furthest scrollLeft
      const x = el.scrollLeft;
      const EPS = 10; // tolerance for rounding
      setPrevBtnDisabled(x <= EPS);
      setNextBtnDisabled(x >= max - EPS);
    };

    // run once and on scroll/resize
    update();
    const onScroll = () => requestAnimationFrame(update);
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [imageWidth]); // rerun if card width changes

  if (imageWidth <= 0) return null;

  return (
    <>
      <div className="mt-[12px] px-[12px] md:px-[32px] flex items-center">
        <p className="text-2xl font-semibold">{city}</p>
        <div className="hidden md:flex ml-auto items-center gap-[8px]">
          <button
            disabled={prevBtnDisabled}
            onClick={prev}
            className={`${prevBtnDisabled ? "bg-slate-50 text-slate-300" : "bg-slate-150"} w-[32px] h-[32px] rounded-full flex items-center justify-center border border-slate-200`}
          >
            <FaAngleLeft />
          </button>
          <button
            disabled={nextBtnDisabled}
            onClick={next}
            className={`${nextBtnDisabled ? "bg-slate-50 text-slate-300" : "bg-slate-150"} w-[32px] h-[32px] rounded-full flex items-center justify-center border border-slate-200`}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className="mt-[4px] md:mt-[8px] md:px-[32px]">
        <div
          ref={viewportRef}
          className="px-[12px] md:px-0 scroll-pl-[12px] md:scroll-pl-0 flex gap-[12px] snap-x snap-mandatory overflow-x-auto overflow-y-hidden select-none scrollbar-none"
        >
          {cities[city].map((room, index) => (
            <div key={index} className="flex flex-col snap-start snap-always">
              <div className="aspect-[6/5] relative overflow-hidden" style={{ width: imageWidth }}>
                <Image src={`/airbnb/airbnb${room.image}.jpg`} alt={room.title} fill className="object-cover rounded-2xl" />
              </div>
              <div className="mt-[4px]">
                <p className="font-medium leading-[1.2]">{room.title}</p>
                <p className="text-sm leading-[1.2] text-slate-500">${room.price} for 2 nights</p>
                <div className="text-sm text-slate-500 flex items-center gap-[2px]">
                  <FaStar className="text-xs pb-[2px]" />
                  <p className="leading-[1.2]">{room.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
