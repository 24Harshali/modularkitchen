import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Hero() {
  return (
    <div className="hero">

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
        loop={true}
        className="hero-slider"
      >
        <SwiperSlide>
          <img src="/kitchen1.jpg" alt="kitchen1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/kitchen2.jpg" alt="kitchen2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/kitchen4.jpg" alt="kitchen4" />
        </SwiperSlide>
      </Swiper>

      {/* CLEAN OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <h1>
          Designing Spaces That Feel <br />
          <span>Truly Yours</span>
        </h1>

        <p>Luxury Interiors Crafted for Modern Living</p>

        <button className="hero-btn">Explore Kitchens</button>
      </div>

    </div>
  );
}