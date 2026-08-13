import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import PriceLists from "./components/PriceLists";
import PriceListConstruction from "./components/PriceListConstruction";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";

function App() {
  return (
    <Router>
      <Nav />
      <Cookies />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<ContactUs />} />
        <Route path="/prislista-tradfallning" element={<PriceLists />} />
        <Route path="/prislista-bygg" element={<PriceListConstruction />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
