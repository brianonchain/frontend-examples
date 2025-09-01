"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import { AnimatePresence } from "framer-motion";

const heroFunctions = [
  { name: "Code", index: 0 },
  { name: "Plan", index: 1 },
  { name: "Collaborate", index: 2 },
  { name: "Automate", index: 3 },
  { name: "Secure", index: 4 },
];

const images = ["/icon-512.png", "/logoOpenGraph.png", "/icon-192.png"];

export default function Stripe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.5 } // when 50% of block visible
    );

    blocksRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col items-center text-slate-800">
      {/*--- gradient background (2 divs needed to prevent x-overflow) ---*/}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="moving-gradients [clip-path:polygon(0_0,100%_0,100%_40%,0_80%)]"></div>
      </div>

      <div className="px-3 xs:px-8 lg:px-12 w-full max-w-[1200px] relative">
        <Hero />

        <div className="w-full flex">
          {/*--- Text column ---*/}
          <div className="w-[40%] text-lg font-medium">
            <div
              className="h-[700px] flex items-center"
              data-index={0}
              ref={(el) => {
                blocksRef.current[0] = el;
              }}
            >
              <div className="space-y-5">
                <p className="font-bold text-stripePurple">Modular solutions</p>
                <p className="stripeHeader">A fully integrated suite of financial and payments products</p>
                <p className="pt-4 text-slate-600">
                  Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform. Use Stripe to handle all of your payments-related
                  needs, manage revenue operations, and launch (or invent) new business models.
                </p>
              </div>
            </div>
            <div
              className="h-[700px] flex items-center"
              data-index={1}
              ref={(el) => {
                blocksRef.current[1] = el;
              }}
            >
              <div className="space-y-5">
                <p className="font-bold text-stripePurple">Payments</p>
                <p className="stripeHeader">Accept and optimize payments, globally</p>
                <p className="pt-3 text-slate-600">Increase authorization rates, offer local payment methods to boost conversion, and reduce fraud using AI.</p>
                <button className="stripeButton">Start with Payments</button>
                <div className="pt-6 text-base">
                  <p className="font-semibold">See also</p>
                  <p>
                    <span className="stripeBold">Tax</span> for automating tax registration, collection, and filing
                  </p>
                  <p>
                    <span className="stripeBold">Radar</span> for AI-powered fraud protection
                  </p>
                  <p>
                    <span className="stripeBold">Terminal</span> for custom in-person payments
                  </p>
                </div>
              </div>
            </div>
            <div
              className="h-[700px] flex items-center"
              data-index={2}
              ref={(el) => {
                blocksRef.current[2] = el;
              }}
            >
              <div className="space-y-4">
                <p className="font-bold text-stripePurple">Billing</p>
                <p className="stripeHeader">Capture recurring revenue</p>
                <p className="pt-4 text-slate-600">Manage flat rate, usage-based, and hybrid pricing models, minimize churn, and automate finance operations.</p>
                <button className="stripeButton">Start with Billing</button>
                <div className="pt-6 text-base">
                  <p className="font-semibold">See also</p>
                  <p>
                    <span className="stripeBold">Invoicing</span> for invoice creation, collection, and tracking
                  </p>
                  <p>
                    <span className="stripeBold">Usage-based billing</span> for metering, billing, and consumption insights
                  </p>
                  <p>
                    <span className="stripeBold">Sigma</span> for custom revenue reports—no SQL required
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*--- Sticky column ---*/}
          <div className="w-[60%]">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeIndex === 0 && (
                  <motion.div
                    key="one"
                    className="w-[350px] h-[500px] bg-white/10 rounded-2xl shadow-[0px_0px_20px_0px_#E64D7E] flex items-center justify-center text-5xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 2, ease: "easeInOut" }, // slower, smoother entrance
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
                  >
                    1
                  </motion.div>
                )}
                {activeIndex === 1 && (
                  <motion.div
                    key="two"
                    className="w-[350px] h-[500px] bg-white/10 rounded-2xl shadow-[0px_0px_20px_0px_#FF7557] flex items-center justify-center text-5xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 2, ease: "easeInOut" }, // slower, smoother entrance
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
                  >
                    2
                  </motion.div>
                )}
                {activeIndex === 2 && (
                  <motion.div
                    key="three"
                    className="w-[350px] h-[500px] bg-white/10 rounded-2xl shadow-[0px_0px_20px_0px_#7769D1] flex items-center justify-center text-5xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 2, ease: "easeInOut" }, // slower, smoother entrance
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
                  >
                    3
                  </motion.div>
                )}

                {/* <motion.img
                  key={activeIndex}
                  src={images[activeIndex]}
                  alt="Stripe demo"
                  className="w-[300px] h-[300px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                /> */}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//
