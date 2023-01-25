import React from "react";
import image from "../assets/restauranfood.jpg";
import "./css/header.css";
export default function Header() {
  return (
    <header>
      <div className="header-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaunt, focused on traditional
          recipies served with modern twist
        </p>
        <button className="btn">Reserve a Table</button>
      </div>
      <div>
        <img src={image} alt="restaurant - food" />
      </div>
    </header>
  );
}
