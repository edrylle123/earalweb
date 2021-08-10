import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Tutorials!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Accessing-earal"
              label="Tutorial 1"
              path="accessing"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Enroll Students"
              label="Tutorial 2"
              path="/enrol"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Forgotten Username"
              label="Tutorial 3"
              path="/resetpassword"
            />
            <CardItem
              src="images/img-4.jpg"
              text="How to Change Password"
              label="Tutorial 4"
              path="/changepassword"
            />
            <CardItem
              src="images/img-5.jpg"
              text="How to use Forum"
              label="Tutorial 5"
              path="/howtouseforum"
            />
            <CardItem
              src="images/img-6.jpg"
              text="New Account"
              label="Tutorial 6"
              path="/newaccount"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Taking a Quiz"
              label="Tutorial 7"
              path="/takingquiz"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Uploading an Assignment"
              label="Tutorial 8"
              path="/uploading"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;