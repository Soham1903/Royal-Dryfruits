import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../CSS/Products.css";
import { CartContext } from "../CartContext";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import { Modal } from "react-bootstrap"; // Import Bootstrap Modal

function Products({ products }) {
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [alert, setAlert] = useState({ message: "", show: false });
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFromUrl = queryParams.get("category") || "all";
    setSelectedCategory(categoryFromUrl);
  }, [location.search]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAlert({ message: `${product.name} added to cart!`, show: true });
    setTimeout(() => {
      setAlert({ message: "", show: false });
    }, 3000);
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const calculateSGST = (price) => {
    const sgst = Number(price) * 0.1;
    return sgst.toFixed(2); // Use toFixed after ensuring it's a number
  };

  const calculateCGST = (price) => {
    const cgst = Number(price) * 0.1;
    return cgst.toFixed(2); // Use toFixed after ensuring it's a number
  };

  const calculateTotalCost = (price) => {
    const sgst = parseFloat(calculateSGST(price)); // Make sure it's parsed as a float
    const cgst = parseFloat(calculateCGST(price)); // Make sure it's parsed as a float
    const total = Number(price) + sgst + cgst;
    // Ensure price is a number
    return total.toFixed(2); // Use toFixed after total is calculated
  };

  return (
    <div>
      <h1>Products</h1>
      <h4>Category: {selectedCategory}</h4>
      <div className="filter-buttons">
        <button
          onClick={() => handleCategoryChange("all")}
          className={selectedCategory === "all" ? "active" : ""}
        >
          All
        </button>
        {Array.from(new Set(products.map((product) => product.category))).map(
          (category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          )
        )}
      </div>

      {alert.show && (
        <div
          className="alert alert-success position-absolute"
          style={{ top: "20px", right: "20px", zIndex: 9999 }}
        >
          {alert.message}
        </div>
      )}

      <div className="product-list">
        {filteredProducts.map((product, index) => {
          return (
            <div className="product-card" key={index}>
              <Link to={`/products/${product.id}`}>
                <div className="product-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <div className="price-rating">
                  <p className="price">₹{product.price}</p>
                  <div className="star-rating">
                    <span style={{ color: "black" }}>Rating: </span>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={i < 4 ? "filled-star" : "empty-star"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="product-buttons">
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(product)}
                >
                  Cart
                </button>
                <button
                  className="buy-now-button"
                  onClick={() => handleBuyNow(product)}
                >
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for product details */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        {selectedProduct && (
          <div className="modal-content">
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  style={{
                    width: "150px",
                    height: "auto",
                    marginRight: "20px",
                  }}
                />
                <div>
                  <p>
                    <strong>Price:</strong> ₹{selectedProduct.price}
                  </p>
                  <p>
                    <strong>SGST (10%):</strong> ₹
                    {calculateSGST(selectedProduct.price)}
                  </p>
                  <p>
                    <strong>CGST (10%):</strong> ₹
                    {calculateCGST(selectedProduct.price)}
                  </p>

                  <p>
                    <strong>Total Payable:</strong> ₹
                    {calculateTotalCost(selectedProduct.price)}
                  </p>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  handleCloseModal();
                }}
              >
                Confirm Purchase
              </button>
            </Modal.Footer>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Products;
