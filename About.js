import React from "react";

export default function About() {
  return (
    <div className="section" id="about">
      <h2>About Livara Homes</h2>

      <p style={{textAlign:"center", maxWidth:"900px", margin:"auto"}}>
        Every space begins as a blank canvas. At Livara Homes, we design
        thoughtful interiors that combine functionality, elegance, and comfort.
        With modern technology, premium materials, and expert craftsmanship,
        we transform spaces into beautiful homes.
      </p>

      <div className="grid" style={{marginTop:"40px"}}>
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" />
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" />
        <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" />
      </div>
    </div>
  );
}