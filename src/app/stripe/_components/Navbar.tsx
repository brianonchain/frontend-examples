"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaStripe, FaAngleDown, FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import AnimatedMobileMenu from "@/utils/components/AnimatedMobileMenu";

// Import dropdown components
import ProductsMenu from "./menus/ProductsMenu";
import SolutionsMenu from "./menus/SolutionsMenu";
import DevelopersMenu from "./menus/DevelopersMenu";
import ResourcesMenu from "./menus/ResourcesMenu";

const navItems = [
  { title: "Products", menu: ProductsMenu },
  { title: "Solutions", menu: SolutionsMenu },
  { title: "Resources", menu: ResourcesMenu },
  { title: "Developers", menu: DevelopersMenu },
];

const mobileItems = ["Platform", "Solutions", "Resources", "Open Source", "Enterprise", "Pricing"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu

  return (
    <>
      <div className="relative w-full h-17 pl-6 pr-8 md:px-8 flex items-center justify-between text-white font-medium bg-transparent z-20">
        {/*--- mobile bars ---*/}
        {/* <IoIosMenu className="lg:hidden text-4xl" /> */}
        <AnimatedMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        {/*--- ICON & LINKS ---*/}
        <div className="flex items-center gap-2">
          <FaStripe className="mr-1 text-6xl" />
          <div className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <div key={item.title} className="group">
                <button className="px-3 pt-1 pb-2 flex items-center gap-1.5 hover:text-slate-200 transition-colors duration-200">
                  {item.title} <FaAngleDown className="text-[0.9rem] group-hover:text-slate-200 group-hover:translate-y-[0.125rem] transition-all duration-300" />
                </button>
                <div className="absolute text-slate-500 opacity-0 invisible group-hover:visible group-hover:opacity-100 scale-95 group-hover:scale-100 p-6 bg-white border border-slate-300 rounded-lg transition-all duration-200 ease-out">
                  {item.menu && <item.menu />}
                </div>
              </div>
            ))}
            <button className="px-3 pt-1 pb-2 flex items-center gap-1.5 hover:text-slate-300 transition-colors duration-200">Pricing</button>
          </div>
        </div>

        {/*--- sign in & contact sales ---*/}
        <div className="hidden lg:flex items-center gap-4">
          <button className="">Sign in</button>
          <button className="px-3 h-9">Contact sales</button>
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
                <p key={i}>{i}</p>
              ))}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
