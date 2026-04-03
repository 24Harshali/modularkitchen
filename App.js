import React, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import KitchenShowcase from "./components/KitchenShowcase";
import Contact from "./components/Contact";
import PopupForm from "./components/PopupForm";

export default function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("popupShown");

    if (!seen) {
      setTimeout(() => {
        setShow(true);
        localStorage.setItem("popupShown", "true");
      }, 1000);
    }
  }, []);

  return (
    <>
      <PopupForm show={show} close={() => setShow(false)} />
      <Navbar open={() => setShow(true)} />
      <About />
      <KitchenShowcase />
      <Contact />
    </>
  );
}