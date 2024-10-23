import React from "react";
import "../CSS/Clients.css"; // Import the CSS file for styles

const clientsData = [
  { id: 1, logo: "https://www.royaldryfruit.com/images/clients/1.png" },
  { id: 2, logo: "https://www.royaldryfruit.com/images/clients/2.png" },
  { id: 3, logo: "https://www.royaldryfruit.com/images/clients/3.png" },
  { id: 4, logo: "https://www.royaldryfruit.com/images/clients/4.png" },
  { id: 5, logo: "https://www.royaldryfruit.com/images/clients/5.png" },
  { id: 6, logo: "https://www.royaldryfruit.com/images/clients/6.png" },
  { id: 7, logo: "https://www.royaldryfruit.com/images/clients/7.png" },
  { id: 8, logo: "https://www.royaldryfruit.com/images/clients/8.png" },
];

const Clients = () => {
  const extendedLogos = [...clientsData, ...clientsData]; // Duplicate the logos for continuous scrolling

  return (
    <div className="clients-container">
      <h1 className="clients-heading">Our Clients</h1>
      <div className="clients-slider">
        {extendedLogos.map((clientsData, index) => (
          <div key={index} className="client-logo">
            <img src={clientsData.logo} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
