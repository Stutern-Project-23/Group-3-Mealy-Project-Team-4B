// import { Link } from "react-router-dom";
import React from "react";
import swallow from "../assets/homepage-food.png";
import food2 from "../assets/homepage--food-2.png";
import platters from "../assets/platters-couch-img.png";
import gorysCafe from "../assets/gorys-cafe-img.png";
import breakfasthub from "../assets/breakfast-hub-img.png";
import thinSandwich from "../assets/thinSandwich.png";
import pancakes from "../assets/pancakes.png";
import star from "../assets/star.png";
import "../styles/Homepage.css";
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      {/* <Header/> */}
      <section className="section--1">
        <div className="section--1--wrapper">
          <h2 className="section--1--h2">
            Delightful Eats Delivered with Ease!
          </h2>
          <p className="section--1--p">
            Enjoy a hassle-free dining experience as we bring the best
            restaurants and dishes right to your doorstep.
          </p>
          <button className="section--1--btn">Get Started</button>
        </div>
        <img className="swallow" src={swallow} alt="swallow food" />
      </section>

      <section className="section--2">
        <img className="food--2" src={food2} alt="food2" />
        <div className="section--2--divider">
          <h2 className="section--2--h2">About Us</h2>
          <p className="section--2--p">
            Our food delivery app brings your favorite dishes to your doorstep.
            From local to popular restaurants, we connect you to a wide
            selection of delicious meals.
          </p>
        </div>
      </section>

      <section className="section--3">
        <h2 className="section--3--h2">Most Popular Restaurants</h2>
        <div className="restaurant--div">
          <div className="restaurant">
            <img
              className="restaurant--img"
              src={breakfasthub}
              alt="breakfast hub img"
            />
            <h3 className="restaurant--name">Breakfast Hub</h3>
            <img
              className="thinSandwich"
              src={thinSandwich}
              alt="restaurant menu icon"
            />
            <div>
              <img src={pancakes} alt="pancakes" />
            </div>
            <div className="star-rating">
              <img src={star} alt="star rating" />
              <img src={star} alt="star rating" />
              <img src={star} alt="star rating" />
              <img src={star} alt="star rating" />
              <img src={star} alt="star rating" />
              <div className="rating-experience">
                <p className="rating-number" >4.5 (Excellent) </p>
              </div>
            </div>
          </div>


        </div>
      </section>

     
      <Footer/>
    </div>
  );
};

export default Homepage;
