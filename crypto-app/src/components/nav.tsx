"use client";
import Link from "next/link";
import { useStore } from "./state";
import Image from "next/image";
import { Jomhuria } from "next/font/google";
import {
  BxlTelegram,
  CoinMarketCap,
  DexScreenerIcon,
  DexToolsIcon,
  Fa6BrandsXTwitter,
  LogosMetamaskIcon,
  MaterialSymbolsMailOutline,
} from "./icons";
import Marquee from "./marquee";
const jomhuria = Jomhuria({ subsets: ["latin"], weight: ["400"] });

export default function Nav() {
  const { pageScrollPos } = useStore();

  return (
    <div>
      <div
        style={{
          borderColor:
            pageScrollPos >= 200 ? "rgb(255,251,235)" : "transparent",
        }}
        className=" fixed w-full p-8 flex items-center bg-[#F77F00] text-amber-50 border-b-4 transition-colors duration-300 "
      >
        <div className=" flex-grow flex items-center relative">
          <h1
            style={{
              left: pageScrollPos >= 200 ? "0rem" : "-3rem",
              opacity: pageScrollPos >= 200 ? 1 : 0,
            }}
            className={`${jomhuria.className} text-[2.5rem] relative p-0 h-8  -translate-y-3 transition-all duration-300 font-black`}
          >
            ChinaCat
          </h1>
        </div>
        <div className="md:flex hidden gap-12">
          <Link href={"#home"}>Home</Link>
          <Link href={"#buy"}>How To Buy</Link>
          <Link href={"#tokenomics"}>Tokenomics</Link>
          <Link href={"#roadmap"}>Roadmap</Link>
        </div>
      </div>

      {/*  */}

      <div className=" w-full bg-[#F77F00] border-t-2 border-amber-50 h-24 fixed bottom-0 flex">
        <div className="flex gap-8 items-center justify-center p-4  h-full border-r-2 border-amber-50 w-min ">
          <Link className="block  " href={""}>
            <BxlTelegram className=" text-amber-50 size-6" />
          </Link>
          <Link className="block  " href={""}>
            <Fa6BrandsXTwitter className=" text-amber-50 size-6" />
          </Link>
          {/* <Link className="block  " href={""}>
            <DexToolsIcon className=" text-amber-50 size-6" />
          </Link> */}

          {/* <Link className="block  " href={""}>
            <CoinMarketCap className=" text-amber-50 size-6" />
          </Link> */}
          <Link className="block  " href={""}>
            <Image src="/pumpfa.png" alt="test" width={24} height={24} />
          </Link>
        </div>
        <div className="flex-grow w-32">
          <Marquee />
        </div>
        <div
          className={`${jomhuria.className}  border-l-2 border-amber-50 w-min min-w-48 text-7xl text-white`}
        >
          <Link
            className=" w-full h-full p-6 flex items-center justify-center text-center"
            href={"/"}
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
}
