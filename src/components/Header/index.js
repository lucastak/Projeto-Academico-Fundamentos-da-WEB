import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container-header">
      <div className="container">
        <a className="logo" href="/">
          Filmaria
        </a>
        <Link to="/favoritos" className="favoritos">
          Favoritos
        </Link>
      </div>
    </header>
  );
}
