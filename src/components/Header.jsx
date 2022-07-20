import React from "react";

import { Link } from "react-router-dom";

import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

/* Import Assets
================ */
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="movies8-logo" width={200} />
        </Link>
      </div>
      <div className="header-icons">
        <Link to="/">
          <BiHomeAlt />
        </Link>
        <Link to="/">Home</Link>
      </div>

      {/* <Link to="/">
          <BiHomeAlt />{" "}
        </Link> */}
      <div className="header-icons">
        <Link to="/favourites">
          <AiOutlineStar />
        </Link>
        <Link to="/favourites">Favorites</Link>
      </div>
    </header>
  );
}

export default Header;
