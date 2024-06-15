"use client";
import Link from "next/link";
import { useStore } from "./state";
import Image from "next/image";
import { Jomhuria } from "next/font/google";
const jomhuria = Jomhuria({ subsets: ["latin"], weight: ["400"] });

export default function Nav() {
  const { pageScrollPos } = useStore();

  return (
    <div
      style={{ borderColor: pageScrollPos >= 200 ? "black" : "transparent" }}
      className=" fixed w-full p-8 flex items-center bg-[#CEAB71] border-b transition-colors duration-300 "
    >
      <div className=" flex-grow flex items-center relative">
        <Image
          className=" h-10  w-auto z-10"
          src="/logo.png"
          alt=""
          width={400}
          height={400}
        />
        <h1
          style={{
            left: pageScrollPos >= 200 ? "0rem" : "-3rem",
            opacity: pageScrollPos >= 200 ? 1 : 0,
          }}
          className={`${jomhuria.className} text-3xl relative  transition-all duration-300 font-black`}
        >
          BeaGCoin  
        </h1>
      </div>
      <div className="md:flex hidden gap-12">
        <Link href={""}>Home</Link>
        {/* <Link href={""}>About</Link> */}
        <Link href={""}>Tokenomics</Link>
        <Link href={""}>Roadmap</Link>
        <Link href={""}>Team</Link>
        <Link href={""}>Community</Link>
      </div>
    </div>
  );
}
