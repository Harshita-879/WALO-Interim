"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

//Import gifs
import Image from "next/image";
import Heart from "@/assets/Heart.gif";

import handShake from "@/assets/handShake.svg";
import Graph from "@/assets/Graph.gif";
import Piechart from "@/assets/Pie.gif";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

const TiltInterval = ({ children }) => {
  const [isTilted, setIsTilted] = useState(false);

  useEffect(() => {
    const tiltInterval = setInterval(() => {
      setIsTilted((prevState) => !prevState);
      setTimeout(() => {
        setIsTilted((prevState) => !prevState);
      }, 100); // Adjust delay duration as needed
    }, 2500); // Adjust interval duration as needed

    return () => clearInterval(tiltInterval);
  }, []);

  return children({ isTilted });
};

export default function Cards() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the initial state based on window width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="ht-600 bg-[#6251A3] text-sm ">
      <p className="font-mplus text-white text-center font-semibold  text-xl py-4">
        Why Choose WALO
      </p>
      <div className=" mx-auto w-[90%] h-[85%] items-center justify-items-center mt-10  text-center ml-8 md:ml-auto">
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
              <div className="w-[85%] h-[200px] md:h-[300px] rounded-xl bg-white bg-opacity-20 flex flex-col ">
                <div className="bg-white w-[80%] h-[120px] shadow-lg rounded-xl mx-auto mt-6 mb-5 relative z-10 ">
                  <Image
                    src={Graph}
                    alt="Graph"
                    className="mx-auto"
                    height={180}
                    width={170}
                  />
                </div>
                <div className="py-4">
                  <p className="text-white text-left relative z-10 px-6">
                    <span className="text-white text-left font-bold mb-xl">
                      Unlock High growth potential
                    </span>
                    <br />
                    {typeof window !== "undefined" && window.innerWidth <= 768
                      ? null
                      : "Participate in exciting startups with the potential for significant returns, diversifying your portfolio beyond traditional assets."}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-20">
            <div className="relative">
              <TiltInterval>
                {({ isTilted }) => (
                  <div className="w-[85%] h-[200px] md:h-[300px] rounded-xl bg-white bg-opacity-20 flex flex-col ">
                    <div className="bg-white w-[78%] h-[115px] md:w-[80%] md:h-[120px] shadow-lg rounded-xl mx-auto mt-6 mb-5 relative z-10 flex justify-center items-center">
                      <Image
                        src={handShake}
                        alt="Hand shake"
                        className={`${isTilted ? "rotate-3" : ""} `}
                        height={60}
                        width={120}
                      />
                    </div>
                    <p className=" text-white text-left relative z-10 px-6">
                      <span className="text-white text-left font-bold mb-xl">
                        Flexible Commitment
                      </span>
                      <br />
                      {typeof window !== "undefined" && window.innerWidth <= 768
                        ? null
                        : "Invest an amount you're comfortable with, without the all-or-nothing pressure of traditional equity investment."}
                    </p>
                  </div>
                )}
              </TiltInterval>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-20 ">
            <div className="relative">
              <div className="w-[85%] h-[200px] md:h-[300px] rounded-xl bg-white bg-opacity-20 flex flex-col ">
                <div className="bg-white  w-[80%] h-[120px] shadow-lg rounded-xl mx-auto mt-6 mb-5 relative z-10 flex justify-center items-center">
                  <Image
                    src={Heart}
                    alt="Heart"
                    height={80}
                    width={80}
                    className={`md:h-[70%] md:w-[60%] h-[70%] w-[70%]`}
                  />
                </div>

                <p className=" text-white text-left relative z-10 px-6">
                  <span className="text-white text-left font-bold mb-xl">
                    User-Friendly Platform
                  </span>
                  <br />
                  {typeof window !== "undefined" && window.innerWidth <= 768
                    ? null
                    : "Streamlined experience for both companies and investors to seamlessly connect and transact."}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-20 ">
            <div className="relative">
              <div className="w-[85%] h-[200px] md:h-[300px] rounded-xl bg-white bg-opacity-20 flex flex-col ">
                <div className="bg-white w-[80%] h-[120px]  shadow-lg rounded-xl mx-auto mt-6 mb-5 relative z-10 flex justify-center items-center">
                  <Image
                    src={Piechart}
                    alt=""
                    height={70}
                    width={70}
                    className={`  md:h-[70%] md:w-[70%] h-[70%] w-[70%]`}
                  />
                </div>
                <div>
                  <p className=" text-white text-left relative z-10 px-6">
                    <span className="text-white text-left font-bold mb-xl">
                      Portfolio Management
                    </span>
                    <br />
                    {typeof window !== "undefined" && window.innerWidth <= 768
                      ? null
                      : "Effective portfolio management tools"}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mb-20 ">
            <div className="relative">
              <div className="w-[85%] h-[200px] md:h-[300px] rounded-xl bg-white bg-opacity-20 flex flex-col ">
                <div className="bg-white w-[80%] h-[120px] shadow-lg rounded-xl mx-auto mt-6 mb-5 relative z-10 ">
                  {/* <Image src={Heart} alt='Heart' className="bg-white" height={80} width={140} /> */}
                </div>
                <p className=" text-white text-left relative z-10 px-6">
                  <span className="text-white text-left font-bold mb-xl">
                    User-Friendly Platform
                  </span>
                  <br />
                  {typeof window !== "undefined" && window.innerWidth <= 768
                    ? null
                    : "Streamlined experience for both companies and investors to seamlessly connect and transact."}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
