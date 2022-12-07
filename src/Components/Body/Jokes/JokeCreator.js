import React from "react";
import orangeLight from "../../../assets/assets_Homework_Front-End_02/orange-light.png";
import rightArrow from "../../../assets/assets_Homework_Front-End_01/path.png";

function JokeCreator({ content, viewContent }) {
  function handleClick(e) {
    e.preventDefault();
    const color = JSON.parse(localStorage.getItem("categoryColors")).filter(
      (category) => category.text === content.header
    )[0].bgcolor;
    viewContent({
      header: content.header,
      body: content.body,
      bgcolor: color,
    });
  }

  return (
    <div className="joke-card">
      <div className="card-heading">
        <img src={orangeLight} alt="orange light" />
        <span>{content.header}</span>
      </div>
      <div className="card-content">{content.body}</div>
      <div className="card-footer" onClick={handleClick}>
        SEE STATS
        <img src={rightArrow} alt="right arrow" />
      </div>
    </div>
  );
}

export default JokeCreator;
