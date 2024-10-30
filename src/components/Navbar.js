import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { CartContext } from "../CartContext";
import "../CSS/Navbar.css";

const productData = [
  // Your product data...
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const { getCartCount } = useContext(CartContext); // Get the cart count

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query state
  };

  // Filter products based on search query
  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className={`navbar-container ${menuOpen ? "active" : ""}`}>
        {/* Logo */}
        <div className="navbar-left">
          <img
            src="https://www.royaldryfruit.com/images/logo.png"
            alt="logo"
            className="logo"
          />

          {/* Hamburger Menu */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation Links */}
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li className="dropdown">
              <Link to="/products">Products</Link>
              {/* Dropdown Menu */}
              <ul className="dropdown-menu">
                <li>
                  <Link to="/products?category=Dry-fruits">Dry-fruits</Link>
                </li>
                <li>
                  <Link to="/products?category=Spices">Spices</Link>
                </li>
                <li>
                  <Link to="/products?category=Packed-food">Packed Food</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="navbar-right">
         

          {/* Cart Icon */}
          <div className="cart-icon">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>Cart ({getCartCount()})</span>
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com/Royal-Nuts-Dryfruits-372794883258616"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://x.com/royaldryfruit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="##">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Display filtered products based on search */}
      <div className="filtered-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>Price: ₹{product.price}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Navbar;
