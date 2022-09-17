import React, { useState } from "react";

import logo_desktop from "../../assets/logo-desktop.svg";
import menu_open from "../../assets/menu-buguer-open.svg";
import menu_close from "../../assets/menu-buguer-close.svg";

import blur2 from "../../assets/blur-2.png";

export function Header() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
    console.log(nav);
  }

  return (
    <div className="w-full h-24 mb-24 flex items-center justify-between px-20 py-8 fixed top-0 left-0 border-b border-border_menu_mobile smd:border-none z-50">
      <img className="w-12" src={logo_desktop} alt="logo da rocketseat" />
      <img className="hidden smd:block absolute top-0 right-0 select-none" src={blur2} alt="blur-2" />

      <ul className="smd:flex items-center gap-8 hidden">
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Recompensas</a></li>
        <li><a href="#">Gift Cards</a></li>
        <li><a href="#">Lojas</a></li>
      </ul>

      <button
        className="smd:flex border-solid border border-button px-6 py-2 rounded-lg
      hover:bg-button hover:text-slate-300 transition-all duration-300 hidden
      "
      >
        PEGAR MEU CAFÉ
      </button>

      <button className="smd:hidden transition-all duration-300 hover:scale-110" onClick={handleNav}>
        {nav ? (
          <img src={menu_close} alt="" />
        ) : (
          <img src={menu_open} alt="" />
        )}
      </button>

      <div className={
        nav ? "fixed left-0 top-24 w-[100%] h-screen smd:hidden bg-background ease-in duration-500"
          : "fixed left-[-100%] top-24 ease-in duration-500"
      }>

        <ul className="flex flex-col">
          <li className="bg-background h-16 border-b border-border_menu_mobile">
            <div className="border-l-4 border-button h-full flex items-center pl-8">
              <a href="#" className="text-text_color_menu_mobile font-bold">Home</a>
            </div>
          </li>

          <li className="bg-background h-16 border-b border-border_menu_mobile">
            <div className="border-l-4 border-transparent h-full flex items-center pl-8">
              <a href="#" className="text-border_menu_mobile">Menu</a>
            </div>
          </li>

          <li className="bg-background h-16 border-b border-border_menu_mobile">
            <div className="border-l-4 border-transparent h-full flex items-center pl-8">
              <a href="#" className="text-border_menu_mobile">Recompensas</a>
            </div>
          </li>

          <li className="bg-background h-16 border-b border-border_menu_mobile">
            <div className="border-l-4 border-transparent h-full flex items-center pl-8">
              <a href="#" className="text-border_menu_mobile">Gift Cards</a>
            </div>
          </li>

          <li className="bg-background h-16 border-b border-border_menu_mobile">
            <div className="border-l-4 border-transparent h-full flex items-center pl-8">
              <a href="#" className="text-border_menu_mobile">Lojas</a>
            </div>
          </li>
        </ul>

      </div>
    </div>

  );
}
