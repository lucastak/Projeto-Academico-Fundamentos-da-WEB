import { useState } from "react";
import SearchInput from "../SearchInput";
import "./styles.css";
import { Link } from "react-router-dom";
import ScrollTotop from "../ScrollToTop";
import WhatsCTA from "../WhatsCTA";

export default function Header() {
  const [openMenuMobile, setMenuMobile] = useState(false);

  const handleClickMenuMobile = () => {
    setMenuMobile(!openMenuMobile);
  };

  return (
    <header className="header-container">
      <div className="header-wrapper">
        <button
          className="header-menuhamburguer"
          onClick={handleClickMenuMobile}
        >
          {openMenuMobile === false ? (
            <img
              src={require("../../assets/menuhamburguer-icon.png")}
              alt="Ícone de navegação"
            />
          ) : (
            <img
              className="header__close-icon"
              src={require("../../assets/close-icon.png")}
              alt="Ícone de fechar o menu mobile"
            />
          )}
        </button>
        <a className="header-m3-academy-logo" href="/">
          <img
            src={require("../../assets/m3-academy-logo.png")}
            alt="Logo da m3 Academy"
          />
        </a>

        <div className="header-input-wrapper">
          <SearchInput />
        </div>

        <div className="header-usermenu">
          <a className="usermenu-login">ENTRAR</a>
          <a>
            <img
              src={require("../../assets/cart-icon.png")}
              alt="Ícone de um carrinho de compras"
            />
          </a>
        </div>
      </div>
      <div className="header-input-wrapper-mobile">
        <SearchInput />
      </div>
      <nav className="navigation__container">
        <ul>
          <li className="navigation__links">
            <Link to={"/cursos"}>
              <a href="/">CURSOS</a>
            </Link>
          </li>
          <li className="navigation__links">
            <Link to="/saiba-mais">
              <a href="/">SAIBA MAIS</a>
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        className={
          openMenuMobile === false
            ? "navigation__container-mobile close-menu"
            : "navigation__container-mobile"
        }
      >
        <ul className="navigation__links-container">
          <Link to={"/cursos"}>
            <li className="navigation__links-mobile">
              <a href="/">CURSOS</a>
            </li>
          </Link>
          <Link to="/saiba-mais">
            <li className="navigation__links-mobile">
              <a href="/">SAIBA MAIS</a>
            </li>
          </Link>
        </ul>
      </nav>

      <ScrollTotop />
      <WhatsCTA />
    </header>
  );
}
