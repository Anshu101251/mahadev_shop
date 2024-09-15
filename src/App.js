import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import About from "./screen/About";
import Contact from "./screen/Contact";
import Menu from "./screen/Menu";
import Product from "./screen/Shop/Product";
import ProductDetail from "./screen/Shop/ProductDetails";
import Cart from "./screen/Shop/Cart";
import Checkout from "./screen/Shop/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-details" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
