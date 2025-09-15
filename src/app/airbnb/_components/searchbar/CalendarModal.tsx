import { useState } from "react";
import { motion } from "framer-motion";
import { DayPicker, getDefaultClassNames, type DateRange } from "react-day-picker";
import { dateMargins, type DateMargin } from "@/utils/constants/airbnb/constants";
import { useMediaQuery } from "@/utils/hooks";

export default function CalendarModal({
  dates,
  setDates,
  dateMargin,
  setDateMargin,
}: {
  dates: DateRange | undefined;
  setDates: (dates: DateRange) => void;
  dateMargin: DateMargin;
  setDateMargin: (dateMargin: DateMargin) => void;
}) {
  // hooks
  const defaultClassNames = getDefaultClassNames();
  const is750Up = useMediaQuery("(min-width: 750px)");

  // states
  const [topOption, setTopOption] = useState("Dates");
  const topOptions: string[] = ["Dates", "Months", "Flexible"];

  return (
    <div
      className="flex-1 md:flex-auto py-[16px] md:py-[24px] w-full h-full bg-white rounded-[16px] md:rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.15)] overflow-hidden"
      style={{ scrollbarGutter: "stable" }}
    >
      <motion.div
        className="px-[12px] md:px-[16px] w-full h-full flex flex-col gap-[20px] items-center overflow-y-auto overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/*--- top options ---*/}
        <div className="flex-none p-[6px] w-75 flex items-center gap-[6px] font-medium bg-slate-150 rounded-full select-none">
          {topOptions.map((i) => (
            <button
              key={i}
              className={`${topOption === i ? "bg-white" : "hover:bg-slate-250 cursor-pointer active:scale-96"} w-1/3 px-[16px] py-[8px] rounded-full`}
              onClick={() => setTopOption(i)}
            >
              {i}
            </button>
          ))}
        </div>

        {/*--- calendar ---*/}
        <DayPicker
          className="text-lg md:text-sm"
          classNames={{
            months: `w-full flex justify-evenly`,
            month: "relative",
            month_caption: `${defaultClassNames.month_caption} pb-[20px] flex items-center justify-center text-lg font-medium select-none`,
            // nav: `${defaultClassNames.nav}`,
            button_previous: `absolute left-0 top-[-11px] w-[50px] h-[50px] flex items-center justify-center rounded-full hover:bg-slate-150 transition-all duration-[200ms] ease-in-out`,
            button_next: `absolute right-0 top-[-11px] w-[50px] h-[50px] flex items-center justify-center rounded-full hover:bg-slate-150 transition-all duration-300 ease-in-out`,
            chevron: `[14px] w-[24px] h-[24px]`,
            weekday: `font-medium text-slate-400`,
            day: `[&:not(.rdp-selected):hover]:bg-slate-200 rounded-full`,
            day_button: `w-[45px] h-[45px] md:w-[42px] md:h-[42px] 850px:w-[50px] 850px:h-[50px] font-medium rounded-full cursor-pointer`,
            today: ``,
            selected: `${defaultClassNames.selected} font-bold rounded-full bg-slate-200`,
            range_start: `bg-black text-white rounded-full hover:bg-black`,
            range_end: `bg-black text-white rounded-full hover:bg-black`,
            disabled: `text-slate-300 pointer-events-none`,
          }}
          mode="range"
          selected={dates}
          onSelect={(selected) => setDates(selected as DateRange)}
          fixedWeeks={true}
          numberOfMonths={is750Up ? 2 : 1}
          navLayout="around"
          disabled={{ before: new Date() }}
        />

        {/*--- date margin ---*/}
        <div className="md:pl-[24px] my-auto w-full flex gap-[12px] md:gap-[8px] text-sm flex-wrap md:flex-nowrap">
          {dateMargins.map((i) => (
            <button
              key={`margin${i.value}`}
              className={`${
                dateMargin.value === i.value ? "ring-inset ring-[1.5px] ring-slate-700" : ""
              } flex-none px-[16px] py-[12px] md:py-[8px] rounded-full border-slate-250 border-[1px] cursor-pointer`}
              onClick={() => setDateMargin(i)}
            >
              {i.text}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
