import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "./Container";

export default function BannerSlider() {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/35VpnbY0/download-19.jpg",
      title: "PUBG - Battleground Royale",
      desc: "Survive, loot, and conquer in PUBG’s legendary battle royale world. Drop into the battlefield and prove your skill in every fight.",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/0j8Q8WrT/Asalto.jpg",
      title: "Call of Duty: Mobile Warfare",
      desc: "Experience console-quality shooting with fast-paced action, iconic maps, and stunning visuals on mobile.",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/Tx0BZkTc/The-Game-Free-Fire-Is-Next-Level.jpg",
      title: "Garena Free Fire: Revolution",
      desc: "Fast-paced 10-minute matches where survival is everything. Squad up and dominate the arena!",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-md shadow-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              {/* Banner Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-[400px] md:h-[650px] object-cover brightness-[0.6]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
