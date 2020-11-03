import React from "react";

const Carousel = ({ images }) => {
  return (
    <div className="carousel-container">
      {images.map(url => {
        return <img src={url} alt=""/>
      })}
    </div>
  );

}

export default Carousel;