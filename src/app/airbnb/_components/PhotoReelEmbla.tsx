"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cities, type RoomInfo } from "@/utils/constants/airbnb/constants";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export default function PhotoReel({ city }: { city: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", dragFree: true, skipSnaps: false, containScroll: "trimSnaps" });

  emblaApi?.on("scroll", (emblaApi) => {
    const { limit, target, location, offsetLocation, scrollTo, translate, scrollBody } = emblaApi.internalEngine();

    let edge: number | null = null;

    if (location.get() >= limit.max) edge = limit.max;
    if (location.get() <= limit.min) edge = limit.min;

    if (edge !== null) {
      offsetLocation.set(edge);
      location.set(edge);
      target.set(edge);
      translate.to(edge);
      translate.toggleActive(false);
      scrollBody.useDuration(0).useFriction(0);
      scrollTo.distance(0, false);
    } else {
      translate.toggleActive(true);
    }
  });

  // states
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  // this useEffect will fire whenever a new slide is selected
  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      <p className="mt-[12px] pl-[12px] md:pl-[32px] text-2xl font-semibold">{city}</p>
      <div ref={emblaRef} className="mt-[4px] px-[12px] md:px-[32px] overflow-hidden select-none">
        <div className="flex gap-[12px]">
          {cities[city].map((room, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-[170px] md:w-[260px] aspect-[6/5] relative overflow-hidden">
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
