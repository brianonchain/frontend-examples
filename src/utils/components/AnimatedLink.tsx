import { FaAngleRight } from "react-icons/fa6";

export default function AnimatedLink({ title }: { title: string }) {
  return (
    <div className="mt-10 flex flex-col items-start text-blue-300 text-lg font-medium">
      <div className="flex items-center gap-3 group/arrow cursor-pointer">
        <div className="flex relative">
          {title}
          <div className="absolute bottom-[-4px] w-0 h-[2px] bg-blue-300 group-hover/arrow:w-full transition-all duration-300"></div>
        </div>
        <div className="pt-[4px] flex items-center">
          <div className="h-[2px] w-0 group-hover/arrow:w-[11px] bg-blue-300 transition-all duration-300"></div>
          <FaAngleRight className="text-base translate-x-[-10px]" />
        </div>
      </div>
    </div>
  );
}
