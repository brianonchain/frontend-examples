"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaAngleDown, FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

// Import dropdown components
import ProductMenu from "./menus/ProductMenu";
import ResourcesMenu from "./menus/ResourcesMenu";
import OpenSourceMenu from "./menus/OpenSourceMenu";
import EnterpriseMenu from "./menus/EnterpriseMenu";
import SolutionsMenu from "./menus/SolutionsMenu";

const navItems = [
  { title: "Product", menu: ProductMenu },
  { title: "Solutions", menu: SolutionsMenu },
  { title: "Resources", menu: ResourcesMenu },
  { title: "Open Source", menu: OpenSourceMenu },
  { title: "Enterprise", menu: EnterpriseMenu },
];

const mobileItems = ["Platform", "Solutions", "Resources", "Open Source", "Enterprise", "Pricing"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu

  return (
    <>
      <div className="fixed w-full h-17 px-3 md:px-8 flex items-center justify-between text-white bg-githubBlue z-100">
        {/*--- mobile bars ---*/}
        <IoIosMenu className="lg:hidden text-4xl text-white" onClick={() => setIsOpen(!isOpen)} />

        {/*--- ICON & LINKS ---*/}
        <div className="flex items-center gap-2">
          <FaGithub className="mr-1 text-3xl text-white" />
          <div className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <div key={item.title} className="group">
                <button className="px-3 pt-1 pb-2 flex items-center gap-1.5 hover:text-slate-300 transition-colors duration-200">
                  {item.title} <FaAngleDown className="text-[0.9rem] text-slate-500 group-hover:text-slate-600 group-hover:translate-y-[0.125rem] transition-all duration-300" />
                </button>
                <div className="absolute text-slate-500 opacity-0 invisible group-hover:visible group-hover:opacity-100 scale-95 group-hover:scale-100 p-6 bg-white border border-slate-300 rounded-lg transition-all duration-200 ease-out">
                  {item.menu && <item.menu />}
                </div>
              </div>
            ))}
            <button className="px-3 pt-1 pb-2 flex items-center gap-1.5 hover:text-slate-300 transition-colors duration-200">Pricing</button>
          </div>
        </div>

        {/*--- search bar + dashboard + profile icon ---*/}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex px-3 h-9 xl:w-50 items-center gap-2 text-sm text-slate-400 bg-slate-800 border border-slate-500 rounded-md">
            <FaMagnifyingGlass />
            <p className="hidden xl:block">Search</p>
          </div>
          <div className="px-3 h-9 flex items-center text-sm border border-slate-500 rounded-md">Dashboard</div>
          <div className="hidden lg:block w-10 h-10 rounded-full bg-slate-400"></div>
        </div>
      </div>

      {/*--- mobile menu ---*/}
      <AnimatePresence>
        {isOpen && (
          <>
            <div className={`fixed inset-0 z-10`} onClick={() => setIsOpen(false)}></div>
            <motion.aside
              className="p-7 fixed left-0 top-17 flex flex-col gap-8 z-20 w-full h-full bg-white rounded-t-2xl text-xl font-semibold"
              key="searchModal"
              initial={{ opacity: 0, x: "-5%" }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, x: "-100%", transition: { duration: 0 } }}
            >
              {mobileItems.map((i) => (
                <p>{i}</p>
              ))}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
