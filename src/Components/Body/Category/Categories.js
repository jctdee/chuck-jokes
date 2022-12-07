import React, { useState, useEffect } from "react";
import CategoryCreator from "./CategoryCreator";
import axios from "axios";
import { getPastelColor } from "pastel-color";
import downArrow from "../../../assets/assets_Homework_Front-End_01/path-copy-7.png";

function Categories({ category }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let categoriesWithColor = [];

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => {
        setCategories(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) return null;

  // MISSING feature - check if categories length is same as array grabbed from local storage.. will add later if finished
  if (!localStorage.getItem("categoryColors")) {
    addColorToCategory();
    localStorage.setItem("categoryColors", JSON.stringify(categoriesWithColor));
  } else {
    categoriesWithColor = [
      ...JSON.parse(localStorage.getItem("categoryColors")),
    ];
  }

  // functions start here

  function addColorToCategory() {
    for (let i = 0; categoriesWithColor.length !== categories.length; i++) {
      const randomColor = getPastelColor().hex;
      if (!categoriesWithColor.includes(randomColor)) {
        categoriesWithColor.push({
          text: categories[i],
          bgcolor: randomColor,
        });
      }
    }
  }

  function onClickCategory(e) {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    category({
      text: e.target.innerText.toLowerCase(),
      bgcolor: e.target.style.backgroundColor,
    });
  }

  return (
    <>
      <div className="categories-container" onClick={onClickCategory}>
        {categoriesWithColor.map((category, index) => (
          <CategoryCreator key={`category-${index}`} content={category} />
        ))}
        <div
          className="category-card"
          style={{
            backgroundColor: "transparent",
            color: "#cfb995",
            border: "1px solid #cfb995",
            borderRadius: "3px",
          }}
        >
          VIEW ALL
          <img src={downArrow} alt="down arrow" />
        </div>
      </div>
    </>
  );
}

export default Categories;
