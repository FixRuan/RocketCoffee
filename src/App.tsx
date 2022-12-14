import React from "react";
import { Header } from "./components/Header";

import { About } from "./components/About";

export function App() {
  return (
    <div className="w-full bg-background">
      <Header />
      <About />
    </div>
  );
}
