import React from "react";

import coffee from "../../assets/rocket-coffee.png";

import blur1 from "../../assets/blur-1.png";
import arrow from "../../assets/arrow.svg";
import mobile_blur from "../../assets/blur-mobile.png";

export function About() {
  return (
    <div className="relative z-40">
      <div className="mt-24 flex items-center justify-center w-full pt-4 flex-col relative">

        <div className="smd:hidden flex flex-col mt-4 px-6">
          <span className="text-4xl text-center mb-8">
            O café que fará seu <br /> código decolar para <br /> o próximo nível.
          </span>

          <button className="flex border border-button w-[180px] self-center items-center justify-center rounded-lg py-2 gap-2 mb-12 hover:bg-button transition-all duration-300">
            PEGAR MEU CAFÉ
            <img src={arrow} alt="" />
          </button>
        </div>

        <h1 className="text-5xl smd:text-8xl font-bold tracking-tighter">Great Coffee</h1>
        <h1 className="text-5xl smd:text-8xl font-bold tracking-tighter tshadow text-black">{"<Great Coffee/>"}</h1>

        <img className="mt-14 smd:mt-0" src={coffee} alt="coffee" />
        <img className="hidden smd:block absolute bottom-0 left-0 select-none -z-10" src={blur1} alt="blur-1" />
      </div>
      <img className="smd:hidden absolute bottom-0 w-full" src={mobile_blur} alt="blur" />
    </div>
  );
}
