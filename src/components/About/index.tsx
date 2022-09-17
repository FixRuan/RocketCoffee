import React from "react";

import coffee from "../../assets/rocket-coffee.png";

import blur1 from "../../assets/blur-1.png";

export function About() {
  return (
    <div className="mt-24 flex items-center justify-center w-full pt-4 flex-col relative">
      <h1 className="text-8xl font-bold tracking-tighter">Great Coffee</h1>
      <h1 className="text-8xl font-bold tracking-tighter tshadow text-black">{"<Great Coffee/>"}</h1>

      <img src={coffee} alt="coffee" />
      <img className="hidden smd:block absolute bottom-0 left-0 select-none" src={blur1} alt="blur-1" />
    </div>
  );
}
