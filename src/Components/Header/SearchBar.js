import React, { useState, useEffect } from "react";
import whiteSearchIcon from "../../assets/assets_Homework_Front-End_01/search-copy.png";
import blackSearchIcon from "../../assets/assets_Homework_Front-End_02/search-copy.png";

function SearchBar() {
  const [icon, setIcon] = useState();

  useEffect(() => {
    setIcon(whiteSearchIcon);
  }, []);

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="How can we make you laugh today?"
        onFocus={() => setIcon(blackSearchIcon)}
        onBlur={() => setIcon(whiteSearchIcon)}
      />
      <img src={icon} alt="search icon" />
    </div>
  );
}

export default SearchBar;
