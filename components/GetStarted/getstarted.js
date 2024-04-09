"use client";
import React from 'react';
import Image from 'next/image';
import getstarted from '@/assets/howtogetstarted.svg';
import getstarted_mobile from '../../assets/getstarted_mobile.svg';

export default function GetStarted() {
    return(
        <>
        <div className='flex flex-col items-center justify-center hidden lg:flex'>
            <p className="font-mplus text-center font-semibold  text-3xl py-10">    
                HOW TO GET STARTED
            </p>
            <Image src={getstarted} alt="Get Started" />
        </div>
        <div className='lg:hidden flex w-1440'>
            <Image src={getstarted_mobile} alt="Get Started" width={1440} />
            </div>
            </>
    )
}