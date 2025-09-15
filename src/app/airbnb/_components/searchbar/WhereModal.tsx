import { motion, AnimatePresence } from "framer-motion";
import { wherePlaces } from "@/utils/constants/airbnb/constants";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function WhereModal({
  setWhereText,
  whereText,
  setSelectedSearch,
  is750Up,
}: {
  whereText?: string;
  setWhereText: (whereText: string) => void;
  setSelectedSearch: (selectedSearch: string) => void;
  is750Up: boolean;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="flex-1 md:flex-auto py-[16px] w-full h-full bg-white rounded-[16px] md:rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.15)] overflow-hidden"
        initial={{ y: is750Up ? 0 : "-40px" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div className="px-[16px] w-full h-full overflow-y-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, ease: "easeOut" }}>
          <p className="md:hidden text-3xl font-semibold">Where?</p>
          <input
            className="md:hidden my-[12px] px-[16px] w-full h-[52px] text-lg md:text-base rounded-lg border border-slate-500 outline-[#FF395D] [transition:outline_300ms_ease-in-out] placeholder:text-slate-500"
            onChange={(e) => setWhereText(e.target.value)}
            value={whereText}
            placeholder="Search destinations..."
          />
          {wherePlaces.map((i) => (
            <button
              key={i.title}
              className="px-0 md:px-[8px] py-[6px] md:py-[8px] w-full flex items-center gap-[16px] text-start hover:bg-slate-100 rounded-lg cursor-pointer"
              onClick={() => {
                setWhereText(i.title);
                setSelectedSearch("checkIn");
              }}
            >
              <div className="flex-none w-[48px] h-[48px] flex items-center justify-center rounded-xl bg-slate-100">
                <i.icon className={`text-2xl md:text-xl ${i.color}`} />
              </div>
              <div className="">
                <p className="font-medium text-lg md:text-base line-clamp-1">{i.title}</p>
                <p className="text-slate-500 leading-tight line-clamp-1">{i.subtitle}</p>
              </div>
            </button>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
