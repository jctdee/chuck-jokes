import React from "react";
import rightArrow from "../../assets/assets_Homework_Front-End_01/path.png";

function Footer() {
  return (
    <footer>
      <p>GOT JOKES? GET PAID</p>
      <p>FOR SUBMITTING!</p>
      <p>
        SUBMIT JOKE
        <img src={rightArrow} alt="right arrow" />
      </p>
    </footer>
  );
}

export default Footer;
