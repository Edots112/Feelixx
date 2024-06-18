"use client";
import Image from "next/image";
import { Jomhuria, Mochiy_Pop_One } from "next/font/google";
import { useStore } from "@/components/state";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import Link from "next/link";
import {
  BxlTelegram,
  Fa6BrandsXTwitter,
  LogosMetamaskIcon,
  MaterialSymbolsMailOutline,
} from "@/components/icons";
import { useRef } from "react";
import Lenis from "lenis";
import Timeline from "@/components/timeline";
import Game from "@/components/game";
import React from "react";
import MemeGenerator from "@/components/memeGenerator";

const jomhuria = Jomhuria({ subsets: ["latin"], weight: ["400"] });

const m_pop_one = Mochiy_Pop_One({ subsets: ["latin"], weight: ["400"] });
const MotionImage = motion(Image);
export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const cat_an_y = useSpring(
    useTransform(scrollYProgress, [0, 1], [-500, 700]),
    { bounce: 0 }
  );
  const fur_curved_an_y = useSpring(
    useTransform(scrollYProgress, [0, 1], [-1200, 1200]),
    { bounce: 0 }
  );

  const { setPageScrollPos } = useStore();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPageScrollPos(latest);
  });

  return (
    <main>
      <section
        id="home"
        ref={container}
        className="bg-[#F77F00] overflow-clip h-screen p-12 w-full grid  md:grid-cols-2 relative -z-10"
      >
        <div className=" flex items-center -z-0 justify-center">
          <MotionImage
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.4,
              type: "tween",
              stiffness: 60,
            }}
            style={{ y: cat_an_y }}
            className="mt-32 absolute top-2 scale-125  pl-12 "
            src="/cat.png"
            alt=""
            width={500}
            height={500}
          />
          <MotionImage
            style={{ y: fur_curved_an_y }}
            className="mt-32 absolute left-0  right-0  w-full object-cover   -z-20 bottom-0 t  "
            src="/curved.png"
            alt=""
            unoptimized
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex  flex-col z-10  text-[#000] md:text-[#fff] backdrop-invert md:backdrop-invert-0 md:bg-transparent bg-white/10 rounded-3xl overflow-hidden p-4 justify-center">
          <h1 className={`${jomhuria.className} text-huge `}>ChinaCat</h1>
          <p
            className={`${m_pop_one.className} md:text-xl w-3/4 -mt-6 text-sm`}
          >
            Purr-fectly Pawsperous and Playful, <br />
            China Cat Coin: Your Ticket to Feline-Fueled Fortunes
          </p>
        </div>
      </section>
      <section id="buy" className="scroll-pt-64">
        <div className="bg-[#FCBF49]  p-12 px-24 text-orange-950">
          <h1 className={`${jomhuria.className} text-8xl`}>How To Buy</h1>
          <div className="space-y-10 text-xl w-2/3">
            <div>
              <h1>01. Create A Wallet</h1>
              <p>
                <span className="text-yellow-100">Mobile users:</span> Download
                Phantom or your wallet of your choice from the app store or
                Google Play store for free.
                <br />
                <span className="text-yellow-100">Desktop users:</span> Download
                the Chrome extension by visiting
                {"  "}{" "}
                <Link
                  href={"https://phantom.app/"}
                  className="text-yellow-100 underline"
                >
                  phantom.app
                </Link>
                .
              </p>
            </div>

            <div>
              <h1>02. Purchase Cryptocurrency</h1>
              <p>
                Buy the cryptocurrency you need from an exchange like {"  "}
                <span className="text-yellow-100">Coinbase</span> or {"  "}
                <span className="text-yellow-100">Binance</span>. Transfer it to
                your wallet.
              </p>
            </div>

            <div>
              <h1>03. Connect Your Wallet</h1>
              <p>
                Connect your wallet to the {"  "}
                <span className="text-yellow-100">
                  decentralized exchange
                </span>{" "}
                where the coin is listed.
              </p>
            </div>

            <div>
              <h1>04. Buy The Coin</h1>
              <p>
                Select the coin you want to buy and {"  "}
                <span className="text-yellow-100">
                  complete the transaction
                </span>
                . Make sure to follow all on-screen prompts and {"  "}
                <span className="text-yellow-100">
                  double-check the details
                </span>{" "}
                {"  "}
                before confirming.
              </p>
            </div>
          </div>
        </div>
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg
          viewBox="0 0 1728 366"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M171.899 288.459C96.7166 288.459 7.08374 202.046 0 158.84V0H1727.96V211.821C1728.01 212.737 1728.01 213.595 1727.96 214.391V211.821C1727.03 196.217 1709.68 163.891 1644.37 140.823C1557.95 110.295 1328.44 116.801 1280.27 158.84C1232.1 200.879 1110.26 195.373 1073.42 171.351C1036.59 147.329 935.526 195.374 967.639 242.917C999.752 290.461 989.834 333 954.888 333C919.941 333 908.135 300.47 919.469 242.917C930.803 185.364 827.822 121.077 729.625 103.289C674.372 93.2797 603.062 115.3 582.283 115.3C561.504 115.3 498.223 129.813 469.416 157.339C440.609 184.864 474.61 333 440.136 333C419.096 333 392.694 293.924 423.608 228.404C437.303 199.377 401.884 73.7617 339.075 103.289C276.266 132.816 265.876 288.459 171.899 288.459Z"
            fill="#FCBF49"
          />
          <path
            d="M-4.5 194.5C2.58374 237.707 96.8179 326.404 172 326.404C265.978 326.404 277.691 163.527 340.5 134C403.309 104.473 416.195 204.473 402.5 233.5C371.587 299.02 428.96 355 450 355C484.474 355 454.693 188.525 483.5 161C512.307 133.475 580.221 123 601 123C621.779 123 673.747 112.991 729 123C827.197 140.789 919.334 192.447 908 250C896.666 307.553 920.054 358.5 955 358.5C989.946 358.5 1022.61 288.044 990.5 240.5C958.387 192.956 1053.73 177.241 1113 205.288C1161 228 1256.33 208.327 1304.5 166.288C1352.67 124.249 1539.58 129.972 1626 160.5C1695.14 184.922 1728.9 298.044 1727.96 312.391"
            stroke="#727272"
          />
          <path
            d="M-4 194.949C3.08374 238.155 97.3179 326.852 172.5 326.852C266.478 326.852 278.191 163.976 341 134.448C403.809 104.921 416.695 204.922 403 233.949C372.087 299.469 429.46 355.449 450.5 355.449C484.974 355.449 455.193 188.974 484 161.449C512.807 133.923 580.721 123.449 601.5 123.449C622.279 123.449 674.247 113.439 729.5 123.449C827.697 141.237 919.834 192.896 908.5 250.449C897.166 308.001 923.054 358 958 358C992.946 358 1023.11 288.492 991 240.948C958.887 193.405 1054.23 177.69 1113.5 205.736C1161.5 228.448 1256.83 208.775 1305 166.736C1353.17 124.698 1540.08 130.42 1626.5 160.948C1695.64 185.371 1729.4 298.493 1728.46 312.839"
            stroke="#FCBF49"
            stroke-width="12"
            stroke-dasharray="29 29"
            strokeLinecap="round"
          />
        </svg>
      </section>

      <Tokenomics />
      <Timeline />
      <section className="p-12 pt-32">
        <div className="w-full relative -z-10 overflow-hidden outline-4 outline-[#FCBF49] outline-dashed outline-offset-2  rounded-xl max-h-[70vh] aspect-video min-h-96 bg-gradient-to-t from-orange-500 to-red-600">
          <Game />
        </div>
      </section>
      <section className=" p-12 flex items-center justify-center">
        <div className=" grid grid-cols-3 gap-4 place-items-center  w-full h-full">
          {Array.from({ length: 20 }, (_, i) => (
            <Meme key={i} />
          ))}
        </div>
      </section>
      <section className="p-12">
        <h1 className="text-4xl">Meme Generator</h1>
        <MemeGenerator />
      </section>
      <section className="py-24"></section>
    </main>
  );
}

function Meme() {
  return (
    <motion.div
      initial={{ scale: 0.2 }}
      whileInView={{ scale: 1 }}
      className="w-full rounded-xl relative -z-10 overflow-hidden aspect-square flex bg-indigo-600 outline-2 outline-indigo-700 outline-dashed outline-offset-2 items-center justify-center"
    >
      <Image alt="" width={100} height={100} src={"/chinaroof.png"} />
    </motion.div>
  );
}
function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="md:p-24 p-8 md:pt-40 py-24 flex items-center"
    >
      <div>
        <h1 className="text-4xl">Tokenomics</h1>
        <p className="text-xl mt-2">
          Total Supply: 1,000,000,000 ChinaCat Coins <br />
          No Buy/Sell Tax: 0% transaction fees <br />
          Distribution: 50% to Community, 20% to Development, 15% to Marketing,
          10% to Liquidity, 5% to Charity
        </p>
      </div>
      <div className="md:flex hidden">
        <Image
          className=""
          src="/woolBall.png"
          alt=""
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
