"use client";
import { motion } from "framer-motion";
import { Jomhuria } from "next/font/google";

const jomhuria = Jomhuria({ subsets: ["latin"], weight: ["400"] });

export default function Marquee() {
  return (
    <div
      className={`${jomhuria.className} text-white text-8xl w-full overflow-clip flex items-center justify-center`}
    >
      <motion.div initial={{x:"0%"}} animate={{x:'-25%'}} transition={{duration:20,repeat:Infinity,ease:'linear'}} className="flex">
        <div className="flex  ">
          {Array.from({ length: 10 }, (__, _) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <h1 className=" mt-2" key={_}>
              $DOSSI&nbsp;
            </h1>
          ))}
        </div>
        <div className="flex  ">
          {Array.from({ length: 10 }, (__, _) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <h1 className=" mt-2" key={_}>
              $DOSSI&nbsp;
            </h1>
          ))}
        </div>
        <div className="flex  ">
          {Array.from({ length: 10 }, (__, _) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <h1 className=" mt-2" key={_}>
              $DOSSI&nbsp;
            </h1>
          ))}
        </div>
        <div className="flex  ">
          {Array.from({ length: 10 }, (__, _) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <h1 className=" mt-2" key={_}>
              $DOSSI&nbsp;
            </h1>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
