import React, { useState, useEffect } from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import KitchenShowcase from "./components/KitchenShowcase";
import Process from "./components/Process";
import Materials from "./components/Materials";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import PopupForm from "./components/PopupForm";
import Staff from "./components/Staff"; // ✅ NEW FILE

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

      <section id="home"><Hero /></section>

      {/* 2nd SLIDE */}
      <section id="about"><About /></section>

      <section id="kitchen"><KitchenShowcase /></section>

      <section id="process"><Process /></section>

      <section id="materials"><Materials /></section>

     

      {/* NEW */}
      <section id="staff"><Staff /></section>

      <section id="contact"><Contact /></section>
       <section id="reviews"><Reviews /></section>
    </>
  );
}