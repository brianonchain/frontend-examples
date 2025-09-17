import { motion, type Transition, AnimatePresence } from "framer-motion";
import { FaAirbnb } from "react-icons/fa";
import { LuGlobe, LuAlignJustify } from "react-icons/lu";

export default function IconBar({ selectedMenu, setSelectedMenu, mobileModal }: { selectedMenu: string; setSelectedMenu: (menu: string) => void; mobileModal: boolean }) {
  const items = ["Homes", "Experiences", "Services"];
  const spring: Transition = { type: "spring", stiffness: 400, damping: 12, mass: 0.8, restDelta: 0.001 };

  return (
    <AnimatePresence>
      <div className="mt-auto md:mt-[20px] mx-[32px] xs:mx-[50px] md:mx-0 w-full flex items-center">
        {/*--- logo ---*/}
        <div className="hidden desktopNav:block w-1/4">
          <FaAirbnb className="text-4xl text-red-500" />
        </div>
        {/*--- icons ---*/}
        <div className={`${mobileModal ? "w-[230px]" : "w-[290px]"} mx-auto md:w-[300px] grid grid-cols-3 font-medium border-2 border-transparent items-center relative`}>
          {items.map((i, index) => (
            <div
              key={i}
              className={`${index === 0 ? "justify-self-start" : index === 1 ? "justify-self-center" : "justify-self-end"} flex flex-col items-center cursor-pointer group`}
              onClick={() => setSelectedMenu(i)}
            >
              <motion.img
                src={`/airbnb/${i}.png`}
                alt={i}
                width={94}
                height={94}
                className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
                whileHover={{ scale: 1.1 }}
                transition={spring}
                initial={{ scale: mobileModal ? 0 : 1 }}
                animate={{ scale: 1, transition: { duration: 0.3, ease: "easeOut", delay: index === 0 ? 0 : index === 1 ? 0.1 : 0.2 } }}
              />
              <p>{i}</p>
            </div>
          ))}
          {/*--- underline ---*/}
          <div
            className={`${
              selectedMenu === "Homes" ? "left-0 translate-x-0" : selectedMenu === "Experiences" ? "left-1/2 -translate-x-1/2" : "left-[100%] -translate-x-full"
            } absolute bottom-[-2px] bg-black h-[3px] md:h-[2px] rounded-full transition-all duration-300 ease-in-out`}
            style={{ width: `${selectedMenu === "Homes" ? "48px" : selectedMenu === "Experiences" ? "81px" : "56px"}` }}
          ></div>
        </div>
        {/*--- options ---*/}
        <div className="hidden desktopNav:flex w-1/4 justify-end items-center gap-[16px]">
          <button className="hidden xl:block px-[20px] h-[40px] font-medium rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-300 ease-out">
            Become a host
          </button>
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-300 ease-out">
            <LuGlobe className="text-xl" />
          </button>
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-300 ease-out">
            <LuAlignJustify className="text-xl" />
          </button>
        </div>
      </div>
    </AnimatePresence>
  );
}
