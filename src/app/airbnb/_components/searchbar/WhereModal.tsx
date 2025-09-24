import { motion, AnimatePresence } from "framer-motion";
import { wherePlaces } from "@/utils/constants/airbnb/constants";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function WhereModal({
  setWhereText,
  whereText,
  setSelectedSearch,
  isDesktopNav,
  mobileModal,
}: {
  whereText?: string;
  setWhereText: (whereText: string) => void;
  setSelectedSearch: (selectedSearch: string) => void;
  isDesktopNav: boolean;
  mobileModal?: boolean;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="flex-1 desktopNav:flex-auto desktopNav:py-[16px] w-full h-full bg-white rounded-[16px] desktopNav:rounded-[24px] desktopNav:shadow-[0_2px_10px_rgba(0,0,0,0.15)] overflow-hidden"
        initial={{ y: !isDesktopNav && !mobileModal ? "-40px" : 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="desktopNav:px-[16px] w-full h-full desktopNav:overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <input
            className="desktopNav:hidden my-[12px] px-[16px] w-full h-[52px] text-lg desktopNav:text-base rounded-lg border border-slate-500 outline-[#FF395D] [transition:outline_300ms_ease-in-out] placeholder:text-slate-500"
            onChange={(e) => setWhereText(e.target.value)}
            value={whereText}
            placeholder="Search destinations..."
          />
          {wherePlaces.map((i) => (
            <button
              key={i.title}
              className="px-0 py-[6px] desktopNav:p-[8px] w-full flex items-center gap-[16px] text-start hover:bg-slate-100 rounded-lg cursor-pointer"
              onClick={() => {
                setWhereText(i.title);
                setSelectedSearch("checkIn");
              }}
            >
              <div className="flex-none w-[48px] h-[48px] flex items-center justify-center rounded-xl bg-slate-100">
                <i.icon className={`text-2xl desktopNav:text-xl ${i.color}`} />
              </div>
              <div className="">
                <p className="font-medium text-lg desktopNav:text-base line-clamp-1">{i.title}</p>
                <p className="text-slate-500 leading-tight line-clamp-1">{i.subtitle}</p>
              </div>
            </button>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
