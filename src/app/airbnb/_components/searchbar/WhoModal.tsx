import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

const whoOptions = [
  {
    title: "Adults",
    subtitle: "Ages 13 or above",
  },
  {
    title: "Children",
    subtitle: "Ages 2-12",
  },
  {
    title: "Infants",
    subtitle: "Under 2",
  },
  {
    title: "Pets",
    subtitle: "Bringing a service animal?",
  },
];

export default function WhoModal({ whoCount, setWhoCount }: { whoCount: Record<string, number>; setWhoCount: (whoCount: Record<string, number>) => void }) {
  return (
    <div className="desktopNav:py-[8px] w-full h-full bg-white rounded-[16px] desktopNav:rounded-[24px] desktopNav:shadow-[0_2px_10px_rgba(0,0,0,0.15)] overflow-hidden">
      <motion.div
        className="desktopNav:px-[24px] w-full h-full flex flex-col desktopNav:overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {whoOptions.map((i, index) => (
          <div key={i.title} className={`grow desktopNav:flex-auto pt-[16px] desktopNav:py-[20px] flex items-center ${index === 0 ? "" : "border-t"} border-slate-200`}>
            {/*--- text ---*/}
            <div>
              <p className="text-lg font-medium">{i.title}</p>
              <p className="text-slate-500">{i.subtitle}</p>
            </div>
            {/*--- counter ---*/}
            <div className="ml-auto flex items-center">
              <button
                className={`w-[40px] h-[40px] rounded-full border border-slate-200 hover:border-slate-600 flex items-center justify-center disabled:opacity-20`}
                onClick={() => {
                  if (whoCount.Adults === 0) {
                    setWhoCount({ ...whoCount, Adults: whoCount.Adults + 1, [i.title]: whoCount[i.title] - 1 });
                  } else {
                    setWhoCount({ ...whoCount, [i.title]: whoCount[i.title] - 1 });
                  }
                }}
                disabled={
                  whoCount.Infants > 0 || whoCount.Pets > 0 || whoCount.Children > 0
                    ? i.title === "Adults"
                      ? whoCount[i.title] === 1
                      : whoCount[i.title] === 0
                    : whoCount[i.title] === 0
                }
              >
                <FaMinus className="text-sm" />
              </button>
              <div className="w-[50px] text-lg text-center font-medium">{whoCount[i.title]}</div>
              <button
                className="w-[40px] h-[40px] rounded-full border border-slate-200 hover:border-slate-600 flex items-center justify-center"
                onClick={() => {
                  if (whoCount.Adults === 0) {
                    setWhoCount({ ...whoCount, Adults: whoCount.Adults + 1, [i.title]: whoCount[i.title] + 1 });
                  } else {
                    setWhoCount({ ...whoCount, [i.title]: whoCount[i.title] + 1 });
                  }
                }}
              >
                <FaPlus className="text-sm" />
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
