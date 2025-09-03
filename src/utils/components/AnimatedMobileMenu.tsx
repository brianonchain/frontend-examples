export default function AnimatedMobileMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden w-[40px] h-[40px] relative">
      {/* Top bar */}
      <div
        className={`absolute h-[3px] left-[8px] top-[8px] bg-white rounded transition-all duration-300 ease-in-out
        ${isOpen ? "rotate-45 translate-x-[-4px] translate-y-[10px] w-[38px]" : "translate-y-[0px] w-[32px]"}`}
      />

      {/* Middle bar */}
      <div
        className={`absolute h-[3px] left-[8px] top-[19px] w-[32px] bg-white rounded transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-0" : "opacity-100"}`}
      />

      {/* Bottom bar */}
      <div
        className={`absolute h-[3px] left-[8px] bottom-[8px] bg-white rounded transition-all duration-300 ease-in-out
        ${isOpen ? "-rotate-45 translate-x-[-4px] translate-y-[-10px] w-[38px]" : "w-[32px]"}`}
      />
    </button>
  );
}
