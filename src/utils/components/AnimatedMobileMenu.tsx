export default function AnimatedMobileMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <button onClick={() => setIsOpen(!isOpen)} className="w-[32px] h-[32px] relative">
      {/* Top bar */}
      <div
        className={`absolute h-[3px] top-[4px] bg-white rounded transition-all duration-300 ease-in-out
        ${isOpen ? "rotate-45 translate-x-[-4px] translate-y-[10px] w-[38px]" : "translate-y-[0px] w-[32px]"}`}
      />

      {/* Middle bar */}
      <div
        className={`absolute h-[3px] top-[15px] w-full bg-white rounded transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-0" : "opacity-100"}`}
      />

      {/* Bottom bar */}
      <div
        className={`absolute h-[3px] bottom-[4px] bg-white rounded transition-all duration-300 ease-in-out
        ${isOpen ? "-rotate-45 translate-x-[-4px] translate-y-[-10px] w-[38px]" : "w-[32px]"}`}
      />
    </button>
  );
}
