import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { Modal } from "react-bootstrap"; // Ensure you have this import
import "../CSS/Cart.css";

function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  // Shipping is 100 if subtotal is less than 300, otherwise it's free
  const shipping = subtotal < 300 && subtotal > 0 ? 100 : 0;
  const total = subtotal + shipping;

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const calculateSGST = (price) => (price * 0.1).toFixed(2);
  const calculateCGST = (price) => (price * 0.1).toFixed(2);
  const calculateTotalCost = (price) => {
    const sgst = parseFloat(calculateSGST(price));
    const cgst = parseFloat(calculateCGST(price));
    const shipping = subtotal < 300 ? 100 : 0; // Adjust based on subtotal
    const total = Number(price) + sgst + cgst + shipping;
    return total.toFixed(2); // Use toFixed after total is calculated
  };

  return (
    <div className="cart-page">
      <div className="cart-items-section">
        <h1 className="cart-title">Cart Items</h1>
        {cart.length === 0 ? (
          <p className="cart-empty-message">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div className="cart-item-card" key={index}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </div>
              <div className="cart-item-quantity">
                <button
                  className="quantity-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span> {/* Display quantity */}
                <button
                  className="quantity-button"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary-section">
        <div className="cart-summary">
          <p>Subtotal: ₹{subtotal}</p>
          <p>Shipping: ₹{shipping}</p>
          <h2>Total: ₹{total}</h2>
          <button className="buy-now-button" onClick={handleShowModal}>
            Buy Now
          </button>
        </div>
      </div>

      {/* Modal for Buy Now */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div className="d-flex" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "300px",
                    height: "auto",
                    marginRight: "20px",
                    marginTop: "15px",
                  }}
                />
                <div>
                  <p
                    style={{
                      marginTop: "15px",
                    }}
                  >
                    <strong>Product:</strong> {item.name}
                  </p>
                  <p>
                    <strong>Price:</strong> ₹{item.price}
                  </p>
                  <p>
                    <strong>SGST (10%):</strong> ₹{calculateSGST(item.price)}
                  </p>
                  <p>
                    <strong>CGST (10%):</strong> ₹{calculateCGST(item.price)}
                  </p>
                  <p>
                    <strong>Total Payable:</strong> ₹
                    {calculateTotalCost(item.price)}
                  </p>
                </div>
              </div>
            ))
          )}
          <hr />
          <h4 className="text-center mt-4">Cart Summary:</h4>
          <div className="text-center row mt-4">
            <div className="col-6 text-left">
              <p>Subtotal:</p>
              <p>Shipping:</p>
              <h2>Total:</h2>
            </div>
            <div className="col-6 text-right">
              <p>₹{subtotal}</p>
              <p>₹{shipping}</p>
              <h2>₹{total}</h2>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              // Here you can implement the logic to confirm the purchase
              alert("Purchase confirmed!"); // Replace with actual purchase logic
              handleCloseModal();
            }}
          >
            Confirm Purchase
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
