"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

//Import gifs
import Image from "next/image";

import flexible from "@/assets/flexible.svg";
import founderfriendly from "@/assets/founderfriendly.svg";
import fair from "@/assets/fair.svg";
import frequent from "@/assets/frequent.svg";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";


export default function Cards() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(4);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the initial state based on window width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="ht-600 lg:bg-[#6251A3] text-sm mb-8">
      <p className="font-mplus text-[#6251A3] lg:text-white text-center font-semibold  text-3xl py-8">
        Why Choose WALO
      </p>
      <div className="mx-auto w-[90%] h-[85%] items-center justify-center mt-4  text-center md:ml-auto shadow-md rounded-lg" style={{ boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)" }}>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 20000 }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="mb-20 ">
            <div className="relative">
                  <Image
                    src={flexible}
                    alt="flexible"
                    className="mx-auto"
                    height={286}
                    width={286}
                  />
                </div>
          </SwiperSlide>

          <SwiperSlide className="mb-20">
            <div className="relative">               
                      <Image
                        src={founderfriendly}
                        alt="founderfriendly"
                        className="mx-auto"
                        height={286}
                        width={286}
                      />
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-20 ">
            <div className="relative">
                  <Image
                    src={fair}
                    alt="fair"
                    className="mx-auto"
                    height={286}
                    width={286}
                  />
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-20 ">
            <div className="relative">
                  <Image
                    src={frequent}
                    alt="frequent"
                    className="mx-auto"
                    height={286}
                    width={286}
                  />
                </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
