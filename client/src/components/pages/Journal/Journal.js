import React from "react";
import "./styles.css";

import Navbar from "../../common/Navbar/Navbar";

import journal_card from "../../common/journal_card/journal_card";

const Journal = () => {
  return (
    <div classname="journal">
      <div class="gradient-background">
        <div>
          <Navbar />
        </div>
        <div class="quote">
          <p>"A Journal is your compeletly </p>
          <p>unaltered voice"</p>
        </div>

        <div class="card_container">
          <div class="front">
            <div class="inner">
              <p>Your Words Matter</p>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <div class="input-container">
                <div class="scrolling-container" maxlength="3000">
                  <input
                    type="text"
                    id="userInput"
                    placeholder="Enter text"
                    onkeydown="handleKeyDown(event)"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <button type="button" class="btn btn-save2">
            Save Chat
          </button>
          <button class="btn btn-new">New </button>
      </div>
    </div>
  );
};

export default Journal;
