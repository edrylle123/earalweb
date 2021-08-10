import React from "react";
import "../Cards.css";
import CardItem from "../CardItem";

function Services() {
  return (
    <div className="cards">
      <h1>Check out these Tutorials</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Tutorial 1"
              label="Accessing e-ARAL"
              path="/accessing"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Tutorial 2"
              label="How to Enroll Student to the Course"
              path="/enrol"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Tutorial 3"
              label="Forgotten Username or Password"
              path="/resetpassword"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Tutorial 4"
              label="How to Change Password"
              path="/changepassword"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Tutorial 5"
              label="How to use Forum"
              path="/howtouseforum"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Tutorial 6"
              label="New Account"
              path="/newaccount"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Tutorial 7"
              label="Taking a Quiz"
              path="/takingquiz"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Tutorial 8"
              label="Uploading Assignment or Activity"
              path="/uploading"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;