import React from "react";
import "./styles.css";
import Navbar from "../../common/Navbar/Navbar";
const ChatBot = () => {
  return (
    <div className="Chatbot">
      <div class="gradient-background">
        <div className="block--background">
          <div className="chatbot__overview">
            <div>
              <Navbar />
            </div>
            <ul className="chatlist">
              <li className="bot__output bot__output--standard">Hey!</li>

              <li className="bot__output bot__output--standard">
                <span className="bot__output--second-sentence">
                  How are you feeling today?
                </span>
              </li>
            </ul>
          </div>
          <div className="chatbox-area">
            <form action="" id="chatform">
              <textarea
                placeholder="Talk to me!"
                className="chatbox"
                name="chatbox"
                minLength="2"
              ></textarea>
              <input className="submit-button" type="submit" value="send" />
            </form>
          </div>
          <div className="block--background"></div>
          <button type="button" class="btn btn-save">
            Save Chat
          </button>
          <button class="btn btn-clear">Clear History</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
