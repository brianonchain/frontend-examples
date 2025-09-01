import Link from "next/link";
import { FaBook, FaVideo, FaFileAlt, FaGraduationCap } from "react-icons/fa";

export default function ResourcesMenu() {
  const items1 = ["AI", "DevOps", "Security", "Software Development", "View All"];
  const items2 = ["Learning Pathways", "Events & Webinars", "Ebooks & Whitepapers", "Customer Stories", "Partners", "Executive Insights"];

  return (
    <div className="flex gap-6">
      <div className="pr-6 border-r border-slate-200 space-y-3">
        <p className="menuBold">Topics</p>
        {items1.map((i, index) => (
          <div key={index} className="text-slate-600 hover:text-blue-500 hover:cursor-pointer">
            {i}
          </div>
        ))}
      </div>
      <div className="space-y-3 pr-10">
        <p className="menuBold">Explore</p>
        {items2.map((i, index) => (
          <div key={index} className="text-slate-600 hover:text-blue-500 hover:cursor-pointer">
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
