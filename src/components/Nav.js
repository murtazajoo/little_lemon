import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import "./css/nav.css";
import ham from "../assets/🦆 icon _hamburger menu_.svg";
export default function Nav() {
  const [menuState, setMenuState] = useState(false);
  const handleHamMenu = () => {
    setMenuState(!menuState);
    document.body.style.cssText = !menuState
      ? "height:100vh;overflow-y:hidden;"
      : "height:100%;overflow-y:scroll;";
  };
  return (
    <nav>
      <div>
        <img src={logo} alt="little-lemon logo" />
      </div>
      <div onClick={handleHamMenu} className="hamburger">
        <img src={ham} alt="" />
      </div>
      <ul className={`menu ${menuState ? "shownav" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
