import React from "react";
import Navbar from "../../common/Navbar/Navbar";
import "./styles.css";
const Home = () => {
  return (
    <div className="Home">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="Heading">
          <p>Your Mental </p>
          <p>Health Matters</p>
        </div>

        <button type="button" className="try_now">
          Try Now <span class="arrow">&#8594;</span>
        </button>
      </div>

      <div class="container">
        <div class="card card-1">
          <h3 class="title">Personal Therapist</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
        </div>

        <div class="card card-2">
          <h3 class="title">Journal</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
        </div>

        <div class="card card-3">
          <h3 class="title">Zen Mode</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
        </div>

        <div class="card card-4">
          <h3 class="title">Medicine Reminder</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
