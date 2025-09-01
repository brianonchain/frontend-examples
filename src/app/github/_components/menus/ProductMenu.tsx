import Link from "next/link";
import { FaRocket, FaBluesky, FaCode, FaCloud, FaBagShopping, FaBed, FaBolt, FaBookOpen, FaBuildingUser, FaCcVisa } from "react-icons/fa6";

const items = [
  {
    title: "GitHub Copilot",
    description: "Write better code with AI",
    icon: FaRocket,
  },
  {
    title: "GitHub Spark",
    description: "Build and deploy intelligent apps",
    icon: FaBluesky,
    badge: "New",
  },
  {
    title: "GitHub Models",
    description: "Manage and compare prompts",
    icon: FaCode,
    badge: "New",
  },
  {
    title: "GitHub Advanced Security",
    description: "Find and fix vulnerabilities",
    icon: FaCloud,
  },
  {
    title: "Actions",
    description: "Automate any workflow",
    icon: FaBagShopping,
  },
  {
    title: "Codespaces",
    description: "Instant dev environments",
    icon: FaBed,
  },
  {
    title: "Issues",
    description: "Plan and track work",
    icon: FaBolt,
  },
  {
    title: "Code Review",
    description: "Manage code changes",
    icon: FaBookOpen,
  },
  {
    title: "Discussions",
    description: "Collaborate outside of code",
    icon: FaBuildingUser,
  },
  {
    title: "Code Search",
    description: "Find more, search less",
    icon: FaCcVisa,
  },
];

const rightItems = ["Why GitHub", "All features", "Documentation", "GitHub Skills", "Blog"];

export default function ProductDropdown() {
  return (
    <div className="flex gap-6">
      <div className="grid grid-cols-2 gap-6">
        {items.map((i, index) => (
          <div key={index} className="flex gap-4 items-center hover:text-blue-500 hover:cursor-pointer group/item">
            <i.icon className="text-xl" />
            <div>
              <p className="font-semibold text-slate-800 group-hover/item:text-blue-500">{i.title}</p>
              <p className="text-sm leading-tight">{i.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-l border-slate-300 pl-6 pr-10 flex flex-col gap-4 text-sm">
        <p className="font-semibold text-base text-slate-800">Explore</p>
        {rightItems.map((i, index) => (
          <div key={index} className="text-slate-600 hover:text-blue-500 hover:cursor-pointer">
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
