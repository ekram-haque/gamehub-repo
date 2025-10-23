import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Container from './container';

export default function BannerSlider() {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/xqfRq2Sw/Pubg-Gaming-Logo-Png-sandy-zooming-On-Instagram.jpg",
      title: "PUBG - Battleground Royale",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/hJTws6GG/download-6.jpg",
      title: "Call of Duty",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/LhYgdVRD/Free-Fire-x-NARUTO-SHIPPUDEN-Apps-on-Google-Play.jpg",
      title: "Free Fire",
    },
  ];

  return (
    <div className='py-[50px]'>
       

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl shadow-lg "
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-[400px] md:h-[700px] object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 h-full w-full bg-black/50 p-5 text-white flex flex-col justify-center text-center text-lg font-bold">
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
       
    </div>
  );
}
