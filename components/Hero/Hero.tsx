"use client"
import Image from 'next/image';
import { useState,useEffect } from 'react';
import heroImg from '@/public/LandingPage/hero.gif';
import playImg from '@/public/LandingPage/play.svg';

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const scrollCircular = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-55%);
  }
  75% {
    transform: translateY(-55%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const List = styled.ul`
  float: right;
  margin: 0;
  padding: 0;
  
`;

const Box = styled.div`
  height: 40px;
  margin: auto;
  overflow: hidden;
  position: relative;
  clip-path: polygon(0 10%, 100% 10%, 100% 90%, 0 90%);
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  animation: ${scrollCircular} 4s linear infinite;
`;

const Li = styled.li`
  opacity: 1;
  height: 30px;
  padding: 0px 15px 50px 15px;
  list-style: none;
  margin-bottom: 10px;
`;

const Hero = () => {
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-evenly my-2 mt-20 lg:mt-0 mx-10 lg:mx-0'>
      <div className='m-6 lg:m-0 lg:w-2/5 xl:w-1/3 lg:order-2 flex flex-col items-center justify-center'>
        <span className='font-mplus font-bold sm:text-3xl lg:text-4xl flex lg:mb-2 text-2xl whitespace-nowrap mb-6'>
          Scale your
          <span>
            <Box className='pt-0.5 lg:pt-0'>
              <Ul className="font-mplus font-extrabold text-transparent text-2xl  lg:text-4xl bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #5F6D9E, #5AD192)' }}>
                <Li>Business</Li>
                <Li>Working Capital</Li>
              </Ul>
            </Box>
          </span>
        </span>
        <div className='h-auto mt-3 flex flex-col items-center justify-center'>
           <p className='font-mplus font-bold lg:font-bold mb-6 text-sm md:text-lg'>
      {isMobile ? (
        "WALO redefines the landscape, empowering you to invest directly in high-growth companies shaping the future."
      ) : (
        "Get rid of traditional financing options and bridge the gap and boost your business with WALO. WALO connects ambitious founders of high-potential startups with investors to grow working capital, without sharing any ownership or taking debts."
      )}
    </p>
        </div>
        <div className='flex flex-col lg:flex-row items-center w-full m-8 lg:m-0 whitespace-normal'>
          <button type="button" className="h-10 w-full lg:w-32  font-mplus bg-[#5AD192] py-2 px-4  rounded-lg lg:rounded-full text-white ">
            Get Started
          </button>
        </div>
      </div>
      <div className="hidden lg:m-0  lg:order-1 w-9/12 lg:w-auto lg:flex flex-col items-center justify-center">
        <Image className='mt-16 ' src={heroImg} alt="Hero-sec" width={420} height={380} />
      </div>
    </div>
  );
};

export default Hero;













