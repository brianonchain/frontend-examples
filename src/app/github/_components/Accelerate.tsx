import Icon3D from "./Icon3D";
import AnimatedLink from "@/utils/components/AnimatedLink";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

type Item = {
  title: string;
  subtitle: string;
  link: string;
};

const items: Item[] = [
  { title: "Automate any workflow", subtitle: "Start building instantly with a comprehensive dev environment in the cloud.", link: "Check out GitHub Codespaces" },
  { title: "Get up and running in seconds", subtitle: "Start building instantly with a comprehensive dev environment in the cloud.", link: "Check out GitHub Codespaces" },
  { title: "Build on the go", subtitle: "Manage projects and chat with GitHub Copilot from anywhere.", link: "Download GitHub Mobile" },
  { title: "Integrate the tools you love", subtitle: "Sync with 17,000+ integrations and a growing library of Copilot Extensions.", link: "Visit GitHub Marketplace" },
];

export default function Accelerate() {
  const [selectedItem, setSelectedItem] = useState(items[0].title);

  return (
    <div className="mt-20 w-full flex flex-col items-center">
      <Icon3D />
      <h1 className="mt-4">Accelerate Performance</h1>
      <p className="mt-4 text-slate-300 text-2xl font-semibold text-center max-w-210">
        With GitHub Copilot embedded throughout the platform, you can simplify your toolchain, automate tasks, and improve the developer experience.
      </p>

      <div className="mt-20 w-full h-150 flex justify-center items-center bg-[#7769D1]/10 border border-slate-500 rounded-t-3xl relative">
        {/*--- radial gradient ---*/}
        <div className="absolute left-1/2 top-3/10 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#AC98E8,#4338A0_30%,transparent_100%)] blur-[50px] z-[-1]"></div>
        <div className="w-110 h-130 p-3 bg-white/20 rounded-2xl">
          <div className="p-6 w-full h-full flex flex-col gap-4 bg-slate-100 text-slate-600 rounded-xl">
            <p className="text-slate-100 mb-4">The search functionality is now fully implemented. Users can:</p>
            <ol className="list-decimal list-inside  space-y-1 mb-6">
              <li>Search for running races by name using the search box</li>
              <li>See filtered results matching their search term</li>
              <li>Navigate through paginated search results</li>
              <li>The search term is preserved when navigating between pages</li>
            </ol>
            <p className="mb-6">Is there anything specific about the implementation you’d like me to explain or would you like to update and run tests for validation?</p>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-[2fr_1fr] border border-slate-700 text-slate-500">
        <div className="row-span-2 p-12 flex flex-col gap-4 border-r border-slate-700 text-2xl font-bold">
          <p>
            <span className="text-slate-100">Work 55% faster.</span> Increase productivity with AI-powered coding assistance, including code completion, chat, and more.
          </p>
          <AnimatedLink title="Explore GitHub Copilot" />
        </div>
        <div className="p-12 border-b border-slate-700 text-2xl font-bold">
          <p>Duolingo boosts developer speed by 25% with GitHub Copilot</p>
          <AnimatedLink title="Read customer story" />
        </div>
        <div className="p-12 text-2xl font-bold">
          <p>2024 Gartner® Magic Quadrant™ for AI Code Assistants</p>
          <AnimatedLink title="Read industry report" />
        </div>
      </div>

      <div className="h-120 w-full grid grid-cols-2 border-l border-r border-b border-slate-700 text-slate-500">
        {/*--- left cell ---*/}
        <div className="px-6 border-r border-slate-700">
          {items.map((item, index) => (
            <div key={index} className={`py-6 flex flex-col cursor-pointer group ${index === items.length - 1 ? "" : "border-b"}`} onClick={() => setSelectedItem(item.title)}>
              <div className="flex items-center justify-between">
                <p className={`${item.title === selectedItem ? "text-slate-100" : "group-hover:text-slate-100"} text-2xl font-bold`}>{item.title}</p>
                {item.title !== selectedItem && <FaPlus className="text-blue-400" />}
              </div>
              <div
                className={`${
                  item.title === selectedItem ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                } grid [transition:opacity_500ms_ease-out,grid_300ms_ease-out]`}
              >
                <div className="flex flex-col overflow-hidden">
                  <p className="pt-[8px] text-lg font-medium">{item.subtitle}</p>
                  <AnimatedLink title={item.link} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*--- right cell ---*/}
        <div className="w-full h-full flex justify-center items-center bg-white/5 relative overflow-hidden">
          {/*--- radial gradient ---*/}
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_10%,#AC98E8,#4338A0_40%,transparent_100%)] blur-[40px] z-[-1]"></div>
          {/*--- image ---*/}
          <div className="p-3 w-[500px] h-[300px] bg-white/10 border border-slate-500 rounded-2xl shadow-[0px_0px_80px_0px_#7769D1]">
            <div className="w-full h-full flex justify-center items-center bg-githubDarkBlue rounded-xl">{selectedItem}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
