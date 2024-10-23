import React from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import "../CSS/ProductDetail.css"; // Import the CSS file

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="info-container">
        <h1>{product.name}</h1>
        <p className="price">Price: ₹{product.price}</p>
        <p>Rating: {Math.random() < 0.5 ? 4 : 4.5} stars</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <div className="details">
          <h2>Details</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          {/* Add more detailed information about the product here */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
