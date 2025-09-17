import { useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DateRange } from "react-day-picker";
// constants
import { DateMargin, dateMargins } from "@/utils/constants/airbnb/constants";
// components
import WhereModal from "./searchbar/WhereModal";
import CalendarModal from "./searchbar/CalendarModal";
import WhoModal from "./searchbar/WhoModal";
import IconBar from "./IconBar";
// icons
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function MobileModal({
  mobileModal,
  setMobileModal,
  selectedSearch,
  setSelectedSearch,
  whereText,
  setWhereText,
  dates,
  setDates,
  dateMargin,
  setDateMargin,
  whoCount,
  setWhoCount,
  whoText,
  isDesktopNav,
  selectedMenu,
  setSelectedMenu,
}: {
  mobileModal: boolean;
  setMobileModal: (mobileModal: boolean) => void;
  selectedSearch: string | null;
  setSelectedSearch: (selectedSearch: string) => void;
  whereText: string;
  setWhereText: (whereText: string) => void;
  dates: DateRange | undefined;
  setDates: (dates: DateRange | undefined) => void;
  dateMargin: DateMargin;
  setDateMargin: (dateMargin: DateMargin) => void;
  whoCount: Record<string, number>;
  setWhoCount: (whoCount: Record<string, number>) => void;
  whoText: string;
  isDesktopNav: boolean;
  selectedMenu: string;
  setSelectedMenu: (selectedMenu: string) => void;
}) {
  const [windowHeight, setWindowHeight] = useState<string | null>(null);

  useLayoutEffect(() => {
    console.log(selectedSearch);
  }, [selectedSearch]);

  return (
    <AnimatePresence>
      {mobileModal && (
        <div className="fixed inset-0 bg-slate-100 flex justify-center z-10 overflow-y-auto">
          <div className="w-full max-w-[420px] h-[100svh] min-h-[660px] flex flex-col gap-[12px] px-[12px]">
            {/*--- top bar ---*/}
            <div className="flex-none h-[80px] flex items-center justify-center">
              <IconBar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} mobileModal={mobileModal} />
              <button className="absolute right-[20px] w-[42px] h-[42px] rounded-full bg-white shadow-md hover:shadow-md font-bold" onClick={() => setMobileModal(false)}>
                &#10005;
              </button>
            </div>
            {/*--- where ---*/}
            <div
              className={`${
                selectedSearch === "where" ? "min-h-0" : "min-h-[60px]"
              } py-[18px] w-full flex flex-col bg-white rounded-2xl shadow-md transition-all duration-[500ms] ease-in-out`}
              onClick={() => setSelectedSearch("where")}
            >
              <div className={`${selectedSearch === "where" ? "overflow-y-auto" : ""} px-[20px] overflow-hidden`}>
                {/*--- button / preview ---*/}
                <div className="flex items-center justify-between">
                  <p className={`${selectedSearch === "where" ? "text-black text-2xl" : "text-slate-500 text-base"} font-medium transition-all duration-[500ms] ease-in-out`}>
                    Where{selectedSearch === "where" ? "?" : ""}
                  </p>
                  <p className={`${selectedSearch === "where" ? "opacity-0" : "opacity-100"} font-medium transition-all duration-0 ease-in-out`}>
                    {whereText ? whereText : "Search destinations"}
                  </p>
                </div>
                {/*--- modal ---*/}
                <div
                  className={`${
                    selectedSearch === "where" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  } grid [transition:opacity_300ms_ease-in-out,grid_500ms_ease-in-out]`}
                >
                  <div className="overflow-hidden">
                    <WhereModal whereText={whereText} setWhereText={setWhereText} setSelectedSearch={setSelectedSearch} isDesktopNav={isDesktopNav} mobileModal={mobileModal} />
                  </div>
                </div>
              </div>
            </div>
            {/*--- checkIn / checkOut ---*/}
            <motion.div
              className={`${
                selectedSearch === "checkIn" ? "min-h-0" : "min-h-[60px]"
              } py-[18px] w-full flex flex-col justify-center bg-white rounded-2xl shadow-md transition-all duration-[500ms] ease-in-out`}
              onClick={() => setSelectedSearch("checkIn")}
              initial={{ opacity: 0, translateY: "-80px" }}
              animate={{ opacity: 1, translateY: "0px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className={`${selectedSearch === "checkIn" ? "overflow-y-auto" : ""} px-[20px] overflow-hidden`}>
                {/*--- button / preview ---*/}
                <div className="flex-none flex items-center justify-between">
                  <p className={`${selectedSearch === "checkIn" ? "text-black text-2xl" : "text-slate-500 text-base"} font-medium transition-all duration-[500ms] ease-in-out`}>
                    When{selectedSearch === "checkIn" ? "?" : ""}
                  </p>
                  <p className="font-medium">
                    {dates?.from
                      ? `${new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(dates.from)} \u2014 ${new Intl.DateTimeFormat("en-US", {
                          month: "short",
                          day: "numeric",
                        }).format(dates.to)}`
                      : "Add dates"}
                  </p>
                </div>
                {/*--- modal ---*/}
                <div
                  className={`${
                    selectedSearch === "checkIn" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  } grid [transition:opacity_300ms_ease-in-out,grid_500ms_ease-in-out]`}
                >
                  <div className="overflow-hidden">
                    <CalendarModal dates={dates} setDates={setDates} dateMargin={dateMargin} setDateMargin={setDateMargin} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/*--- who ---*/}
            <motion.div
              className={`${
                selectedSearch === "who" ? "min-h-0" : "min-h-[60px]"
              } flex-1 py-[18px] w-full flex flex-col bg-white rounded-2xl shadow-md transition-all duration-[500ms] ease-in-out`}
              onClick={() => setSelectedSearch("who")}
              initial={{ opacity: 0, translateY: "-80px" }}
              animate={{ opacity: 1, translateY: "0px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className={`${selectedSearch === "who" ? "overflow-y-auto" : ""} px-[20px] overflow-hidden`}>
                {/*--- button / preview ---*/}
                <div className="flex-none flex items-center justify-between">
                  <p className={`${selectedSearch === "who" ? "text-black text-2xl" : "text-slate-500 text-base"} font-medium transition-all duration-[500ms] ease-in-out`}>
                    Who{selectedSearch === "who" ? "?" : ""}
                  </p>
                  <p className="font-medium">{whoText}</p>
                </div>
                {/*--- modal ---*/}
                <div
                  className={`${
                    selectedSearch === "who" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  } grid [transition:opacity_300ms_ease-in-out,grid_500ms_ease-in-out]`}
                >
                  <div className="overflow-hidden">
                    <WhoModal whoCount={whoCount} setWhoCount={setWhoCount} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/*--- bottom bar ---*/}
            <motion.div
              className="flex-none px-[8px] h-[80px] flex items-center justify-between"
              initial={{ opacity: 0, translateY: "40px" }}
              animate={{ opacity: 1, translateY: "0px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                className="font-medium underline underline-offset-4"
                onClick={() => {
                  setWhereText("");
                  setDates(undefined);
                  setDateMargin(dateMargins[0]);
                  setWhoCount({ Adults: 0, Children: 0, Infants: 0, Pets: 0 });
                  setSelectedSearch("where");
                }}
              >
                Clear all
              </button>
              <button className="w-[120px] h-[48px] flex items-center justify-center gap-[10px] font-medium text-white bg-[#FF395D] hover:bg-[#E42A4C] rounded-lg">
                <FaMagnifyingGlass />
                Search
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
