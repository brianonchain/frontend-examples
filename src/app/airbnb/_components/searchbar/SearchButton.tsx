import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchButton({ selectedSearch }: { selectedSearch: string | null }) {
  return (
    <button
      className={`${
        selectedSearch ? "w-[50px] lg:w-[100px]" : "w-[50px]"
      } flex-none h-[50px] flex items-center justify-center gap-2 rounded-full text-white bg-[#FF395D] hover:bg-[#E42A4C] transition-all duration-300 ease-out z-[1]`}
    >
      <FaMagnifyingGlass />
      {selectedSearch && <p className="hidden lg:block font-medium">Search</p>}
    </button>
  );
}
