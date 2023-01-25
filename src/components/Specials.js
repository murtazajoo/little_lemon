import React from "react";
import imgSalad from "../assets/greek salad.jpg";
import imgBruchetta from "../assets/bruchetta.png";
import imgDessert from "../assets/lemon dessert.jpg";
import "./css/specials.css";
import "./css/specialItem.css";

export default function Specials() {
  function SpecialItem(props) {
    return (
      <div className="card">
        <img src={props.image} alt={props.name + "-image"} />
        <div className="card-body">
          <div className="card-tiltle">
            <h3>{props.name}</h3>
            <p>{props.price}</p>
          </div>
          <p className="card-dis">{props.discription}</p>
          <a href="d">Order a deliver</a>
        </div>
      </div>
    );
  }

  return (
    <section className="specials">
      <div className="specials_title">
        <h2>This Week Specials !</h2>
        <button className="btn">Online Menu</button>
      </div>
      <div className="special-items">
        <SpecialItem
          name="Greek Salad"
          price="$12.99"
          image={imgSalad}
          discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, incidunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
        ratione."
        />
        <SpecialItem
          name="Bruchetta"
          price="$5.99"
          image={imgBruchetta}
          discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, incidunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
        ratione."
        />
        <SpecialItem
          name="Lemon Dessert"
          price="$8.00"
          image={imgDessert}
          discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, incidunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
        ratione."
        />
      </div>
    </section>
  );
}
