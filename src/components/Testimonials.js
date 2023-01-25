import React from "react";
import "./css/testtimonials.css";
import image from "../assets/restaurant chef B.jpg";
import "./css/OneReview.css";

export default function Testimonials() {
  function OneReview(props) {
    return (
      <>
        <div className="review">
          <div className="rating">Rating:{props.rating}</div>
          <div className="review-person">
            <img src={props.image} alt={props.name + "'s iamges"} />
            <p>{props.name}</p>
          </div>
          <p className="review-text">{props.text}</p>
        </div>
      </>
    );
  }

  return (
    <section className="reviews-section">
      <h2>Testimonials</h2>
      <div className="all-reviews">
        <OneReview
          name="Michel"
          image={image}
          rating="⭐⭐⭐⭐☆"
          text="Excellent. Always a favorite. They did a great job expanding their patio dining."
        />
        <OneReview
          name="Jodi"
          image={image}
          rating="⭐⭐⭐⭐⭐"
          text="Hidden gem and would absolutely come back for delicious food that is reasonably priced.."
        />
        <OneReview
          name=" Filosa"
          image={image}
          rating="⭐⭐⭐⭐⭐"
          text="High quality dining, great value, made from scratch, excellent service, lovely patio, incredible bakery, local favorite for decades."
        />
        <OneReview
          name="Dave"
          image={image}
          rating="⭐⭐⭐⭐☆"
          text="heaven! cant wait to go back. from the food, to the awesome service, all of it was perfect."
        />
      </div>
    </section>
  );
}
