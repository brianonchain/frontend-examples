"use client";
// next
import { useState, useEffect, useRef } from "react";
// others
import { motion, AnimatePresence } from "framer-motion";
import { type DateRange } from "react-day-picker";
// images
import { FaMagnifyingGlass } from "react-icons/fa6";
// components
import IconBar from "./IconBar";
import MobileModal from "./MobileModal";
import CalendarModal from "./searchbar/CalendarModal";
import WhereModal from "./searchbar/WhereModal";
import WhoModal from "./searchbar/WhoModal";
import SearchButton from "./searchbar/SearchButton";
import CloseButton from "./searchbar/CloseButton";
// hooks
import { useMediaQuery, useBodyScrollLock } from "@/utils/hooks";
// constants
import { dateMargins, type DateMargin } from "@/utils/constants/airbnb/constants";

export default function Navbar() {
  // refs
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // hooks
  const isDesktopNav = useMediaQuery("(min-width: 750px) and (min-height: 480px)");

  // states
  const [selectedMenu, setSelectedMenu] = useState("Homes");
  const [selectedSearch, setSelectedSearch] = useState<string | null>(null);
  const [mobileModal, setMobileModal] = useState(false);
  // search states
  const [whereText, setWhereText] = useState("");
  const [dates, setDates] = useState<DateRange | undefined>(undefined);
  const [dateMargin, setDateMargin] = useState<DateMargin>(dateMargins[0]);
  const [whoCount, setWhoCount] = useState<Record<string, number>>({ Adults: 0, Children: 0, Infants: 0, Pets: 0 });
  const [whoText, setWhoText] = useState("Add guests");

  // hooks that depend on states
  useBodyScrollLock(mobileModal);

  // if isDesktopNav, then add event listener
  useEffect(() => {
    if (isDesktopNav) {
      const onPointerDown = (e: PointerEvent) => {
        if (!searchRef.current) return;
        if (!searchRef.current.contains(e.target as Node)) {
          setSelectedSearch(null);
        }
      };
      document.addEventListener("pointerdown", onPointerDown);
      return () => document.removeEventListener("pointerdown", onPointerDown);
    }
  }, [isDesktopNav]);

  // when checkIn date is clicked, the white bar will move to checkOut
  useEffect(() => {
    if (selectedSearch === "checkIn" && dates && dates.from === dates.to) {
      setSelectedSearch("checkOut");
    }
  }, [dates]);

  // set whoText
  useEffect(() => {
    // if all 0
    if (whoCount.Adults === 0 && whoCount.Children === 0 && whoCount.Infants === 0 && whoCount.Pets === 0) {
      setWhoText("Add guests");
      return;
    }

    const guestCount = whoCount.Adults + whoCount.Children;
    setWhoText(
      `${guestCount === 1 ? "1 guest" : guestCount + " guests"}${whoCount.Infants === 0 ? "" : ", " + whoCount.Infants + " infants"}${
        whoCount.Pets === 0 ? "" : ", " + whoCount.Pets + " pets"
      }`
    );
  }, [whoCount]);

  return (
    <>
      {/*--- MOBILE MODAL ---*/}
      <MobileModal
        mobileModal={mobileModal}
        setMobileModal={setMobileModal}
        selectedSearch={selectedSearch}
        setSelectedSearch={setSelectedSearch}
        whereText={whereText}
        setWhereText={setWhereText}
        dates={dates}
        setDates={setDates}
        dateMargin={dateMargin}
        setDateMargin={setDateMargin}
        whoCount={whoCount}
        setWhoCount={setWhoCount}
        whoText={whoText}
        isDesktopNav={isDesktopNav}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      {/*--- NAVBAR ---*/}
      <div className="sticky w-full h-[150px] desktopNav:h-[200px] flex justify-center bg-white shadow-md z-[2]">
        <div className="px-[24px] lg:px-[40px] w-full max-w-[1600px] h-full flex flex-col items-center">
          {/*--- mobile: "start your search" ---*/}
          <button
            className="desktopNav:hidden mt-[12px] w-full h-[56px] text-slate-800 font-semibold bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center gap-2"
            onClick={() => {
              setMobileModal(true);
              setSelectedSearch("where");
            }}
          >
            <FaMagnifyingGlass />
            Start your search
          </button>
          {/*--- icon bar ---*/}
          <IconBar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} mobileModal={mobileModal} />
          {/*--- desktop: search bar ---*/}
          <div
            ref={searchRef}
            className={`${
              selectedSearch ? "bg-slate-150" : "bg-white"
            } hidden desktopNav:flex mx-auto my-auto w-full max-w-[850px] h-[64px] rounded-full border border-slate-300 shadow-lg select-none relative`}
          >
            {/*--- where ---*/}
            <div
              className={`${
                selectedSearch ? "hover:bg-slate-250" : "hover:bg-slate-200"
              } pl-[32px] w-[32%] h-full flex flex-col justify-center hover:rounded-full cursor-pointer peer/where`}
              onClick={() => {
                setSelectedSearch("where");
                inputRef.current?.focus();
              }}
            >
              <div className="text-sm font-medium leading-[1.1] z-[1]">Where</div>
              <input
                ref={inputRef}
                className="outline-none placeholder:text-slate-400 z-[1]"
                value={whereText}
                onChange={(e) => setWhereText(e.target.value)}
                placeholder="Search destinations"
              />
            </div>
            {/*--- check in---*/}
            <div
              className={`${
                selectedSearch ? "hover:bg-slate-250" : "hover:bg-slate-200"
              } pl-[20px] w-[18%] h-full flex flex-col justify-center rounded-full cursor-pointer relative peer/checkIn`}
              onClick={() => setSelectedSearch("checkIn")}
            >
              <div className="text-sm font-medium leading-[1.1] z-[1]">Check in</div>
              <div className={`${dates?.from ? "font-semibold" : "text-slate-400"} z-[1]`}>
                {dates?.from ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(dates.from) : "Add dates"}
              </div>
              <AnimatePresence>{selectedSearch === "checkIn" && dates?.from && <CloseButton onClick={() => setDates(undefined)} />}</AnimatePresence>
            </div>
            {/*--- check out ---*/}
            <div
              className={`${
                selectedSearch ? "hover:bg-slate-250" : "hover:bg-slate-200"
              } pl-[20px] w-[18%] h-full flex flex-col justify-center rounded-full cursor-pointer relative peer/checkOut`}
              onClick={() => setSelectedSearch("checkOut")}
            >
              <div className="text-sm font-medium leading-[1.1] z-[1]">Check out</div>
              <div className={`${dates?.to ? "font-semibold" : "text-slate-400"} z-[1]`}>
                {dates?.to ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(dates.to) : "Add dates"}
              </div>
              <AnimatePresence>
                {selectedSearch === "checkOut" && dates?.to && (
                  <CloseButton
                    onClick={() => {
                      setDates(undefined);
                      setSelectedSearch("checkIn");
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
            {/*--- who ---*/}
            <div
              className={`${
                selectedSearch ? "hover:bg-slate-250" : "hover:bg-slate-200"
              } pl-[20px] pr-[8px] w-[32%] h-full flex items-center rounded-full cursor-pointer relative peer/who`}
              onClick={() => setSelectedSearch("who")}
            >
              <div className="grow pr-[16px] overflow-hidden z-[1] relative">
                <div className="text-sm font-medium leading-[1.1]">Who</div>
                <div className={`${whoText === "Add guests" ? "text-slate-400" : "font-semibold"} truncate`}>{whoText}</div>
                <AnimatePresence>
                  {selectedSearch === "who" && whoText !== "Add guests" && <CloseButton onClick={() => setWhoCount({ Adults: 0, Children: 0, Infants: 0, Pets: 0 })} />}
                </AnimatePresence>
              </div>
              <SearchButton selectedSearch={selectedSearch} />
            </div>
            {/*--- dividers ---*/}
            <div
              className={`${
                selectedSearch === "where" || selectedSearch === "checkIn" ? "invisible" : ""
              } absolute left-[32%] w-[1px] h-[60%] top-1/2 -translate-y-1/2 bg-slate-300 peer-hover/where:bg-transparent peer-hover/checkIn:bg-transparent`}
            />
            <div
              className={`${
                selectedSearch === "checkIn" || selectedSearch === "checkOut" ? "invisible" : ""
              } absolute left-[50%] w-[1px] h-[60%] top-1/2 -translate-y-1/2 bg-slate-300 peer-hover/checkIn:bg-transparent peer-hover/checkOut:bg-transparent`}
            />
            <div
              className={`${
                selectedSearch === "checkOut" || selectedSearch === "who" ? "invisible" : ""
              } absolute left-[68%] w-[1px] h-[60%] top-1/2 -translate-y-1/2 bg-slate-300 peer-hover/checkOut:bg-transparent peer-hover/who:bg-transparent`}
            />
            {/*--- moving white bar ---*/}
            <div
              className={`${
                selectedSearch === "where"
                  ? "w-[32%] h-full left-0 opacity-100 scale-[1]"
                  : selectedSearch === "checkIn"
                  ? "w-[18%] h-full left-[32%] opacity-100 scale-[1]"
                  : selectedSearch === "checkOut"
                  ? "w-[18%] h-full left-[50%] opacity-100 scale-[1]"
                  : selectedSearch === "who"
                  ? "w-[32%] h-full left-[68%] opacity-100 scale-[1]"
                  : "opacity-0 scale-[0.5]"
              } absolute bg-white rounded-full shadow-lg transition-all duration-300ms ease-in-out`}
            />
            {/*--- modals ---*/}
            <AnimatePresence>
              {selectedSearch && (
                <motion.div
                  className="absolute top-[calc(100%+10px)] origin-top max-h-[530px] z-[2]"
                  initial={{ left: selectedSearch === "who" ? "50%" : "0%", scale: 0.7 }}
                  animate={{
                    width: selectedSearch === "where" || selectedSearch === "who" ? "50%" : "100%",
                    height: selectedSearch === "who" ? "auto" : "calc(100dvh - 200px - 30px)",
                    left: selectedSearch === "who" ? "50%" : "0%",
                    scale: 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {selectedSearch === "where" && <WhereModal setWhereText={setWhereText} setSelectedSearch={setSelectedSearch} isDesktopNav={isDesktopNav} />}
                  {(selectedSearch === "checkIn" || selectedSearch === "checkOut") && (
                    <CalendarModal dates={dates} setDates={setDates} dateMargin={dateMargin} setDateMargin={setDateMargin} />
                  )}
                  {selectedSearch === "who" && <WhoModal whoCount={whoCount} setWhoCount={setWhoCount} />}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
