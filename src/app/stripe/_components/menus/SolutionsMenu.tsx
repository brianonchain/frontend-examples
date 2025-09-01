import Link from "next/link";
import { FaUser, FaUsers, FaBuilding, FaCheck } from "react-icons/fa";

const items1 = ["Enterprises", "Small and medium teams", "Startups", "Nonprofits"];
const items2 = ["DevSecOps", "DevOps", "CI/CD", "View all use cases"];
const items3 = ["Healthcare", "Financial services", "Manufacturing", "Government", "View all industries"];

export default function PricingDropdown() {
  return (
    <div className="flex gap-6 text-sm">
      <div className="pr-6 border-r border-slate-200 space-y-6">
        <div className="space-y-3">
          <p className="menuBold">By Company Size</p>
          {items1.map((item, index) => (
            <div className="hover:text-blue-500 hover:cursor-pointer" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <p className="menuBold">By Use Case</p>
          {items2.map((item, index) => (
            <div className="hover:text-blue-500 hover:cursor-pointer" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3 pr-10">
        <p className="menuBold">By Industry</p>
        {items3.map((item, index) => (
          <div className="hover:text-blue-500 hover:cursor-pointer" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
