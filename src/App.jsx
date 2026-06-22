import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PriceLists from "./components/PriceLists";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
      <Home />
      <PriceLists />
      <ContactUs />
    </div>
  );
}
export default App;
