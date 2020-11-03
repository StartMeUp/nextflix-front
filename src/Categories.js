import React from "react";
import Category from "./Category"

const Categories = ({ data }) => {
  return (
    <>
      {data.map(item => {
        return (
          <Category category={item.category} images={item.images} />
        )
      })}
    </>
  );
}

export default Categories;