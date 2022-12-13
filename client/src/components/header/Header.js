import React, { useState } from "react";
import "./Header.css";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [Icon, UpdateIcon] = useState(true);

  const setIcon = () => {
    UpdateIcon((value) => !value);
    console.log(Icon);
  };
  const MenuIcon = "https://img.icons8.com/material-outlined/2x/menu.png";
  const ClearIcon = "https://img.icons8.com/ios-filled/2x/multiply.png";
  return (
    <>
      <div className={`header ${Icon ? "header-sml-hide" : "header-sml-show"}`}>
       <a href="/#home"> <img className="logo" src={Logo} alt="img" /></a>
        <nav className="menu-icon" onClick={setIcon}>
          <img className="icon" src={Icon ? MenuIcon : ClearIcon} alt="img" />{" "}
        </nav>
        <div
          className={`list-content  ${
            Icon ? "list-content-hide" : "list-content-show"
          } `}
        >
          <nav className="list-item">
            <ul>
              <li>
                <a href="/#home">Home</a>
              </li>
              <li>
                <a href="/#project">Project</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
