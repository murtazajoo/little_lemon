import React from "react";
import image from "../assets/logo-twojpg.jpg";
import "./css/about.css";
export default function Header() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          <p>About us</p>
          Little Lemon is charming neighbourhood bistro that serves simple food
          and classiccocktails in a lively but casual environment. The restraunt
          features a locally-sorced menu with daily specials
        </p>
      </div>
      <div>
        <img src={image} alt="restaurant - food" />
      </div>
    </section>
  );
}
