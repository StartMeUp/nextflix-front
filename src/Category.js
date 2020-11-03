import React from "react";
import Carousel from "./Carousel"

const Category = ({category, images}) => {
  return (
    <div className="category-container">
      <h2>{category}</h2>
      <Carousel images={images} />
    </div>
  );
}

export default Category;