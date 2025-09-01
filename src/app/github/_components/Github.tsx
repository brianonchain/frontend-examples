"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TitleIcons from "./TitleIcons";
import HeroFunctions from "./HeroFunctions";
import Sponsors from "./Sponsors";
import Accelerate from "./Accelerate";

const heroFunctions = [
  { name: "Code", index: 0 },
  { name: "Plan", index: 1 },
  { name: "Collaborate", index: 2 },
  { name: "Automate", index: 3 },
  { name: "Secure", index: 4 },
];

export default function Github() {
  const [heroFunction, setHeroFunction] = useState(heroFunctions[0]);

  return (
    <div className="w-full flex flex-col items-center text-white relative">
      {/*--- gitubBlue bg ---*/}
      <div className="w-full flex flex-col items-center bg-githubBlue relative">
        <TitleIcons />
        <HeroFunctions heroFunction={heroFunction} />
        {/*--- top-bottom background gradient ---*/}
        <div className="absolute bottom-0 w-full h-[250px] bg-gradient-to-b from-transparent via-[#2F2C79] via-50% to-[#386A91]"></div>
      </div>

      {/*--- githubDarkBlue bg ---*/}
      <div className="w-full flex flex-col items-center bg-githubDarkBlue text-white z-10">
        {/*--- hero functions ---*/}
        <div className="px-3 sm:px-10 w-full max-w-[calc(1200px+10rem)] flex flex-col items-center">
          <div className="hidden md:flex mt-10 p-2 gap-1 border border-slate-500 rounded-full font-medium relative">
            {heroFunctions.map((i) => (
              <button
                key={i.index}
                className={`${heroFunction === i ? "bg-gradient-to-b from-slate-800 to-slate-900" : ""} w-30 h-10 rounded-full hover:bg-slate-800`}
                onClick={() => setHeroFunction(i)}
              >
                {i.name}
              </button>
            ))}
            <div
              className={`absolute w-30 h-10 rounded-full border-[1.5px] border-slate-200 transition-all duration-500 pointer-events-none ${
                heroFunction.index === 0
                  ? "left-[calc(0rem+0.5rem)]"
                  : heroFunction.index === 1
                  ? "left-[calc(7.5rem+0.5rem+0.25rem)]"
                  : heroFunction.index === 2
                  ? "left-[calc(15rem+0.5rem+0.5rem)]"
                  : heroFunction.index === 3
                  ? "left-[calc(22.5rem+0.5rem+0.75rem)]"
                  : "left-[calc(30rem+0.5rem+1rem)]"
              }`}
            ></div>
          </div>
          <select className="block md:hidden mt-10 p-2 gap-1 border border-slate-500 rounded-full font-medium relative">
            {heroFunctions.map((i) => (
              <option key={i.index} className="">
                {i.name}
              </option>
            ))}
          </select>
          <p className="w-[80%] mt-10 text-center font-medium text-slate-400">Code quickly and more securely with GitHub Copilot embedded throughout your workflows.</p>
        </div>

        <Sponsors />

        <div className="px-3 sm:px-10 w-full max-w-[calc(1200px+10rem)] flex flex-col items-center">
          <Accelerate />
          <div className="w-full h-screen"></div>
        </div>
      </div>
    </div>
  );
}
