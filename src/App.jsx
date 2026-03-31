import { useState } from "react";
import "./App.css";
import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/footer/Footer";
import Home from "./components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUp from "./components/pages/signup/SignUp";
import About from "./components/pages/about/About";
import Products from "./components/pages/products/Products";
import Pricing from "./components/pages/pricing/Pricing";
import Support from "./components/pages/support/Support";
import NotFound from "./components/common/notfound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
