import React from "react";

function CategoryCreator({ content }) {
  return (
    <div className="category-card" style={{ backgroundColor: content.bgcolor }}>
      {content.text}
    </div>
  );
}

export default CategoryCreator;
