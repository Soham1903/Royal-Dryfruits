import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Caraousal from "./components/Caraousal";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext";
import ProductDetail from "./components/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  const productData = [
    {
      id: 1, // Add unique IDs
      name: "Dryfruits Chocolates",
      image:
        "https://images.deepai.org/art-image/7bce9e4451a549aa91b4f5009aa31dd0/product-packaging-design-for-a-company-called_MeZ8lHX.jpg",
      price: "100",
      category: "Packed-food",
    },
    {
      id: 2,
      name: "Orange Dryfruits Mixture",
      image:
        "https://images.deepai.org/art-image/bc3464c1fd4a42299e7f843f6b9f36f3/product-packaging-design-for-a-company-called_bUtfzvr.jpg",
      price: "150",
      category: "Packed-food",
    },
    {
      id: 3,
      name: "Mix Dryfruits Powder",
      image:
        "https://images.deepai.org/art-image/20d2edb5e7bf4967a92b4eba87c290cd/product-packaging-design-for-a-company-called_K1H2nq8.jpg",
      price: "200",
      category: "Packed-food",
    },
    {
      id: 4,
      name: "Dates",
      image:
        "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/322548_1100-800x825.jpg",
      price: "200",
      category: "Dry-fruits",
    },
    {
      id: 5,
      name: "Raisins",
      image:
        "https://assets.bonappetit.com/photos/5c6ec5a5ab44ef2ce1a3c4d6/1:1/w_2868,h_2868,c_limit/Basically-Raisins.jpg",
      price: "250",
      category: "Dry-fruits",
    },
    {
      id: 6,
      name: "Cashews",
      image:
        "https://vaaradhifarms.com/cdn/shop/files/amer_med_roasted_cashews_in_a_white_bown_on_top_of_a_wooden_cou_2b1dd2d1-1690-45f2-ad3b-e79afcd643ab.png?v=1714074548&width=2048",
      price: "120",
      category: "Dry-fruits",
    },
    {
      id: 7,
      name: "Turmeric Powder",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/2/HT/UO/NO/144518197/dry-turmeric-powder-500x500.jpg",
      price: "220",
      category: "Spices",
    },
    {
      id: 8,
      name: "Red-Chilly Powder",
      image:
        "https://nuttyyogi.com/cdn/shop/products/RedChilli_Powder_DSC8307.jpg?v=1606373488",
      price: "320",
      category: "Spices",
    },
    // Add more products as needed
  ];
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Caraousal />
                  <Clients />
                  <AboutUs />
                  <Footer />
                </>
              }
            />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<AboutUs />} />
            <Route
              path="/products"
              element={<Products products={productData} />}
            />
            <Route
              path="/products/:productId"
              element={<ProductDetail products={productData} />}
            />{" "}
            {/* New route for product details */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
