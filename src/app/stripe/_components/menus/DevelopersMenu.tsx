import Link from "next/link";
import { FaUser, FaUsers, FaBuilding, FaCheck } from "react-icons/fa";

export default function PricingDropdown() {
  return (
    <div className="py-4 px-4">
      <div className="grid grid-cols-3 gap-4">
        {/* Personal */}
        <div className="text-center p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
          <FaUser className="mx-auto text-2xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-sm mb-1">Personal</h3>
          <div className="text-2xl font-bold mb-2">Free</div>
          <ul className="text-xs text-slate-600 space-y-1 mb-3">
            <li className="flex items-center gap-1">
              <FaCheck className="text-green-500 text-[10px]" />
              Public repositories
            </li>
            <li className="flex items-center gap-1">
              <FaCheck className="text-green-500 text-[10px]" />
              Community support
            </li>
          </ul>
          <Link href="/pricing/personal" className="block w-full py-1 px-2 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors">
            Get started
          </Link>
        </div>

        {/* Team */}
        <div className="text-center p-4 rounded-lg border-2 border-blue-500 hover:border-blue-600 transition-colors relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded">Popular</div>
          <FaUsers className="mx-auto text-2xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-sm mb-1">Team</h3>
          <div className="text-2xl font-bold mb-2">$4/user</div>
          <ul className="text-xs text-slate-600 space-y-1 mb-3">
            <li className="flex items-center gap-1">
              <FaCheck className="text-green-500 text-[10px]" />
              Private repositories
            </li>
            <li className="flex items-center gap-1">
              <FaCheck className="text-green-500 text-[10px]" />
              Team management
            </li>
          </ul>
          <Link href="/pricing/team" className="block w-full py-1 px-2 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors">
            Start trial
          </Link>
        </div>

        {/* Enterprise */}
        <div className="text-center p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
          <FaBuilding className="mx-auto text-2xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-sm mb-1">Enterprise</h3>
          <div className="text-2xl font-bold mb-2">$21/user</div>
          <ul className="text-xs text-slate-600 space-y-1 mb-3">
            <li className="flex items-center gap-1">
              <FaCheck className="text-green-500 text-[10px]" />
              Advanced security
            </li>
            <li className="flex items-center gap-1">
              <FaCheck className="text-green-500 text-[10px]" />
              24/7 support
            </li>
          </ul>
          <Link href="/pricing/enterprise" className="block w-full py-1 px-2 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors">
            Contact sales
          </Link>
        </div>
      </div>

      <div className="text-center mt-4 pt-4 border-t border-slate-200">
        <Link href="/pricing/compare" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
          Compare all plans →
        </Link>
      </div>
    </div>
  );
}
