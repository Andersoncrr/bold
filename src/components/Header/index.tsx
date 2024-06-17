import React from "react";
import "./styles/header.scss";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="site-header">
      <Image src="/bold.svg" alt="bold" width={100} height={40} />
      <ol className="site-header__menu">
        <li className="site-header__menu-item">Mi negocio</li>
        <li className="site-header__menu-item">
          Ayuda <Image src="/help.svg" width={20} height={20} alt="help" />
        </li>
      </ol>
    </header>
  );
};
