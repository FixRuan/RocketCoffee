import React from "react";
import { Header } from "./components/Header";

import blur1 from "./assets/blur-1.png";
import blur2 from "./assets/blur-2.png";

export function App() {
  return (
    <div className="w-full min-h-screen bg-background relative">
      <Header />

      <img className="hidden smd:block absolute bottom-0 left-0 select-none" src={blur1} alt="blur-1" />
      <img className="hidden smd:block absolute top-0 right-0 select-none" src={blur2} alt="blur-2" />
    </div>
  );
}
