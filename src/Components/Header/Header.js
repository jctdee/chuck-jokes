import React from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-elements">
          <Title />
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default Header;
