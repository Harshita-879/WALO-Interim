"use client";
import React from 'react';
import Image from 'next/image';
import getstarted from '@/assets/howtogetstarted.svg';

export default function GetStarted() {
    return(
        <div className='flex flex-col items-center'>
            <p className="font-mplus text-center font-semibold  text-3xl py-10">    
                HOW TO GET STARTED
            </p>
            <Image src={getstarted} alt="Get Started" />

        </div>
    )
}