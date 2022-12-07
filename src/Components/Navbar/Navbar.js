import React, { useState } from "react";
import { navItems } from "./navItems";
import downArrow from "../../assets/assets_Homework_Front-End_01/path_2.png";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("none");

  function setActive(e) {
    let id;

    if (activeMenu === e.target.innerText) {
      id = e.target.offsetParent.id;
      document.getElementById(id).classList.toggle("active");
      setActiveMenu("none");
    } else if (activeMenu === e.target.firstChild.innerText) {
      id = e.target.id;
      document.getElementById(id).classList.toggle("active");
      setActiveMenu("none");
    } else {
      if (e.target.nodeName === "LI") {
        id = e.target.offsetParent.id;
        setActiveMenu(e.target.innerText);
      } else {
        id = e.target.id;
        setActiveMenu(e.target.firstChild.innerText);
      }
      Array.from(document.getElementsByClassName("nav-item")).forEach((doc) =>
        doc.classList.remove("active")
      );
      document.getElementById(id).classList.add("active");
    }
  }

  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <>
            <div id={`nav-${index}`} className="nav-item" onClick={setActive}>
              <li key={`nav-${index}`}>{item.title}</li>
              {Object.hasOwn(item, "submenu") && item.title === activeMenu && (
                <div className={`item-arrow`}>
                  <img src={downArrow} alt="down arrow" />
                </div>
              )}
              {Object.hasOwn(item, "submenu") && item.title === activeMenu && (
                <div className="item-dropdown">
                  <div className="triangle"></div>
                  {item.submenu &&
                    item.submenu.map((sub) => (
                      <p style={{ color: "white" }}>{sub.title}</p>
                    ))}
                </div>
              )}
            </div>
          </>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
