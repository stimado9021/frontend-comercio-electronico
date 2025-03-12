"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode,  Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideShow = ({ images, title, className }: Props) => {
 
  return (
    <div className={className}>
      <Swiper
        style={{
          width:'90vw',
          height: '500px',
        }}  
        pagination
        navigation={true}
        autoplay={{
          delay:2500
        }}
       
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={600}
              height={500}
              src={`/products/${image}`}
              className="object-fill"
              alt={title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
  );
};
