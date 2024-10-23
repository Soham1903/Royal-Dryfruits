import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CSS/Caraousal.css"; // Import CSS for the carousel

function Caraousal() {
  return (
    <div className="carousel-container">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img
            src="https://www.royaldryfruit.com/images/22-slide.jpg"
            alt="almonds"
          />
          <h2 className="legend">Premium Quality Grade A Almonds Nuts </h2>
        </div>
        <div>
          <img
            src="https://www.royaldryfruit.com/images/11-slide.jpg"
            alt="Mix Dryfruits"
          />
          <p className="legend">Exclusive Dryfruits Collection</p>
        </div>
        <div>
          <img
            src="https://www.royaldryfruit.com/images/1-slide.jpg"
            alt="Spices"
          />
          <p className="legend">
            We Offer Quality Cerals And Spices with 100% Customer Satsifaction
          </p>
        </div>
        <div>
          <img
            src="https://www.royaldryfruit.com/images/2-slide.jpg"
            alt="Pulses"
          />
          <p className="legend">Leading Stocklist of Pulses & Grains</p>
        </div>
        <div>
          <img
            src="https://www.royaldryfruit.com/images/4-slide.jpg"
            alt="Herbs"
          />
          <p className="legend">Herbs</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Caraousal;
