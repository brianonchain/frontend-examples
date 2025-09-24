export default function MenuBar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <div className="fixed top-[32px] right-[24px] xs:top-[90px] xs:right-[60px] w-[240px] xs:w-[330px] h-[70px] xs:h-[90px] bg-white text-slate-900 shadow-[0px_0px_12px_1px_rgba(0,0,0,0.15)] flex z-[100]">
      <div className="grow flex h-full items-center justify-evenly text-base">
        <p>RESERVATION</p>
        <p className="xs:block hidden">|</p>
        <p className="xs:block hidden">CN</p>
      </div>
      <div className="bg-black w-[90px] h-full flex flex-col items-center justify-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className={`${isOpen ? "rotate-45" : "translate-y-[-8px]"} absolute w-[36px] h-[1px] bg-white transition-all duration-300 ease-in-out`}></div>
        <div className={`${isOpen ? "-rotate-45" : "translate-y-[8px]"} absolute w-[36px] h-[1px] bg-white transition-all duration-300 ease-in-out`}></div>
      </div>
    </div>
  );
}
