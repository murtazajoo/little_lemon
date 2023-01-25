import React from "react";
import image from "../assets/logo-icon-two.jpg";
import "./css/footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3>Doormat Navigation</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order</li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>
            <address>102, grren colony wuyan</address>
          </li>
          <li>90876654</li>
          <li>132jyu@mail.com</li>
        </ul>
      </div>
      <div>
        <h3>Social Media</h3>
        <ul>
          <li>instagram</li>
          <li>facebook</li>
        </ul>
      </div>
    </footer>
  );
}
