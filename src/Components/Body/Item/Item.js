import React from "react";
import likeHand from "../../../assets/assets_Homework_Front-End_02/hand.png";
import dislikeHand from "../../../assets/assets_Homework_Front-End_02/hand-copy.png";
import leftArrow from "../../../assets/assets_Homework_Front-End_02/arrow-left.png";
import rightArrow from "../../../assets/assets_Homework_Front-End_02/arrow-left-copy.png";

function Item({ content, goBack }) {
  return (
    <>
      <div className="back-arrow" onClick={goBack}>
        <img src={leftArrow} alt="back arrow" />
      </div>
      <div className="viewing-container">
        <div className="viewing-card">
          <div
            className="card-heading"
            style={{ backgroundColor: content.bgcolor }}
          >
            {content.header}
          </div>
          <div className="card-content">
            <h1>Lorem Ipsum</h1>
            {content.body}
          </div>
        </div>
        <div className="bottom-elements">
          <div className="like-buttons">
            <div className="like-button">
              <img src={likeHand} alt="like" />
            </div>
            <div className="dislike-button">
              <img src={dislikeHand} alt="dislike" />
            </div>
          </div>
          <div className="next-prev-buttons">
            <div className="prev-button">
              <img src={leftArrow} alt="left arrow" />
              PREV. JOKE
            </div>
            <div className="next-button">
              NEXT JOKE
              <img src={rightArrow} alt="right arrow" />
            </div>
          </div>
        </div>
        <div className="top-jokes-container">
          <p>THE TOP 10 JOKES THIS WEEK</p>
          <ul>
            <li>Smoking Joke</li>
            <li>My Boss Joke</li>
            <li>Dirty Millionaire Joke</li>
            <li>Knock Knock</li>
            <li>The Drunk Police Officer</li>
            <li>My Hip Dad</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Item;
