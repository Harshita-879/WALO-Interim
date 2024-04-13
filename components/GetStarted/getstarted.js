"use client";
import React from 'react';
import Image from 'next/image';
import getstarted from '@/assets/howtogetstarted.svg';
import getstarted_mobile from '../../assets/getstarted_mobile.svg';

export default function GetStarted() {
    return(
        <div>
        <div className='hidden lg:flex lg:flex-col lg:items-center lg:justify-center'>
            <p className="font-mplus text-center font-semibold  text-3xl py-10 mb-10">    
                HOW TO GET STARTED
            </p>
            <Image src={getstarted} alt="Get Started" />
        </div>
        <div className='flex flex-col lg:hidden w-1440 mt-10'>
        <p className="font-mplus text-[#6251A3] text-center font-extrabold text-3xl py-5 mb-5">    
                HOW TO GET STARTED
            </p>
            <Image src={getstarted_mobile} alt="Get Started" width={1440} />
            </div>
            </div>
    )
};