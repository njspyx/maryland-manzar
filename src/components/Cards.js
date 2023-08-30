import React from "react";
import "../styles/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <h3>Recent</h3>
          <ul className="cards__items">
            <CardItem src="img-9.jpg" text="Nam tellus enim" path="/" />
            <CardItem src="img-9.jpg" text="blandit quis ultricies" path="/" />
          </ul>
          <h3>Archive</h3>
          <ul className="cards__items">
            <CardItem src="img-9.jpg" text="congue eu metus" path="/" />
            <CardItem src="img-9.jpg" text="lacinia faucibus sapien" path="/" />
            <CardItem src="img-9.jpg" text="lacinia faucibus sapien" path="/" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
