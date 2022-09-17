import React from "react";

import logo_desktop from "../../assets/logo-desktop.svg";
import menu_open from "../../assets/menu-buguer-open.svg";

export function Header() {
  return (
    <div className="w-full h-24 flex items-center justify-between px-20 py-8 z-50 fixed top-0 left-0">
      <img className="w-12" src={logo_desktop} alt="logo da rocketseat" />

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

      <div className="smd:hidden">
        <img src={menu_open} alt="" />
      </div>
    </div>

  );
}
