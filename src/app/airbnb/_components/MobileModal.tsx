import { AnimatePresence, motion } from "framer-motion";
import { DateRange } from "react-day-picker";
// constants
import { DateMargin, dateMargins } from "@/utils/constants/airbnb/constants";
// components
import WhereModal from "./searchbar/WhereModal";
import CalendarModal from "./searchbar/CalendarModal";
import WhoModal from "./searchbar/WhoModal";
import TopBar from "./TopBar";
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
  is750Up,
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
  is750Up: boolean;
  selectedMenu: string;
  setSelectedMenu: (selectedMenu: string) => void;
}) {
  return (
    <AnimatePresence>
      {mobileModal && (
        <div className="px-[12px] fixed inset-0 flex flex-col gap-[12px] z-10 bg-slate-100">
          {/*--- icons ---*/}
          <div className="h-[80px] flex items-center justify-center">
            <TopBar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} mobileModal={mobileModal} />
            <button className="absolute right-[20px] w-[42px] h-[42px] rounded-full bg-white shadow-md hover:shadow-md font-bold" onClick={() => setMobileModal(false)}>
              &#10005;
            </button>
          </div>
          {/*--- where ---*/}
          {selectedSearch === "where" ? (
            <WhereModal whereText={whereText} setWhereText={setWhereText} setSelectedSearch={setSelectedSearch} is750Up={is750Up} />
          ) : (
            <div className="px-[20px] w-full h-[60px] flex items-center justify-between bg-white rounded-2xl shadow-md" onClick={() => setSelectedSearch("where")}>
              <p className="text-base font-medium text-slate-500">Where</p>
              <p className="text-base font-medium text-slate-900">{whereText ? whereText : "Search destinations"}</p>
            </div>
          )}
          {/*--- checkIn / checkOut ---*/}
          {selectedSearch === "checkIn" || selectedSearch === "checkOut" ? (
            <CalendarModal dates={dates} setDates={setDates} dateMargin={dateMargin} setDateMargin={setDateMargin} />
          ) : (
            <motion.div
              className="px-[20px] w-full h-[60px] flex items-center justify-between bg-white rounded-2xl shadow-md"
              onClick={() => setSelectedSearch("checkIn")}
              initial={{ opacity: 0, translateY: "-80px" }}
              animate={{ opacity: 1, translateY: "0px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-base font-medium text-slate-500">When</p>
              <p className="text-base font-medium text-slate-900">
                {dates?.from
                  ? `${new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(dates.from)} \u2014 ${new Intl.DateTimeFormat("en-US", {
                      month: "short",
                      day: "numeric",
                    }).format(dates.to)}`
                  : "Add dates"}
              </p>
            </motion.div>
          )}
          {/*--- who ---*/}
          {selectedSearch === "who" ? (
            <WhoModal whoCount={whoCount} setWhoCount={setWhoCount} />
          ) : (
            <motion.div
              className="px-[20px] w-full h-[60px] flex items-center justify-between bg-white rounded-2xl shadow-md"
              onClick={() => setSelectedSearch("who")}
              initial={{ opacity: 0, translateY: "-120px" }}
              animate={{ opacity: 1, translateY: "0px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-base font-medium text-slate-500">Who</p>
              <p className="text-base font-medium text-slate-900">{whoText}</p>
            </motion.div>
          )}

          {/*--- bottom bar ---*/}
          <motion.div
            className="px-[8px] h-[80px] flex items-center justify-between"
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
      )}
    </AnimatePresence>
  );
}
