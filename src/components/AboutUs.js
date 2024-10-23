import React from "react";
import "../CSS/AboutUs.css";

function AboutUs() {
  return (
    <div className="container">
      {/* Adjusted Heading Section */}
      <hr />
      <div className="heading-text">
        WELCOME TO THE ROYALDIVINE PRODUCE&nbsp;
        <span className="products-word">PRODUCTS</span>&nbsp;LLP
      </div>

      {/* New Mission, Vision, Strategy Section */}
      <div className="about-container">
        <div className="about-card mission">
          <h2>OUR MISSION</h2>
          <p>
            To focus on continuous improvements in our internal and external
            systems. To offer products at the most competitive price without
            compromising on quality.
          </p>
          <button className="read-more">READ MORE</button>
        </div>

        <div className="about-card vision">
          <h2>OUR VISION</h2>
          <p>
            To develop capabilities to become an end-to-end solutions provider.
            To grow into an organization that will be ethical in its dealings
            keeping in mind all stakeholders.
          </p>
          <button className="read-more">READ MORE</button>
        </div>

        <div className="about-card strategy">
          <h2>OUR STRATEGY</h2>
          <p>
            To devise newer technology and methods to reach quality spices in
            the quickest possible time to our customers and maintain the
            stronghold of Indian spices across the world.
          </p>
          <button className="read-more">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
