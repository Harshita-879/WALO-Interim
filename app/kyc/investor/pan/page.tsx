import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import seachImg from './search.svg';
import uploadImg from './upload.svg';
import digiLocker from './digiLocker.svg';
import line from './linePAN.svg';
import upload from './uploadGrp.svg';

export default function Pan() {
    return (
        <div className="bg-[#ffffff] h-screen flex flex-col items-center justify-center">
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h1 className="text-4xl  md:text-4xl font-bold text-black ">KYC Verification</h1>
                </div>
                <div>
                    <h1 className="text-xl md:font-bold font-bold text-black m-2">Complete your KYC verification below to start investing</h1>
                </div>
                <div>
                    <Image src={seachImg} width={100} height={100} alt="search" className='hidden md:block'/>
                </div>
            </div>
            <div className='bg-[#D8D0EE] hidden md:flex flex-col items-center justify-center rounded-xl'>
                <div className="bg-white flex flex-col bg-opacity-10 p-5 rounded-xl">
                    <div className="flex items-center justify-start mr-12">
                        <Link href="/kyc/investor">
                            <button className="text-black font-bold rounded-xl p-4 m-4">Aadhar Card</button>
                        </Link>
                        <Link href="/kyc/investor/pan">
                            <button className="bg-[#6251A3] text-white font-bold rounded-xl p-4 m-4">PAN Card</button>
                        </Link>
                    </div>
                    <div className="border-t-2 border-white"></div>
                    <div className="flex items-center justify-center mt-8">
                        <div className="flex flex-col items-start justify-start mr-12"> 
                            <label className="text-lg mx-4 font-bold">Enter your PAN Card Number</label>
                            <input className="bg-[#BDB3DF] p-4 m-4 w-96 placeholder-gray-500" type="text" placeholder="Enter your PAN Card Number here" />
                            <button className="bg-[#6251A3] text-white font-bold rounded-xl p-4 m-4 w-48">SUBMIT</button>
                        </div>
                        <div className="flex flex-col items-center justify-center ml-12"> 
                            <Image src={uploadImg} width={300} height={300} alt="upload" />
                            <h4 className='text-[#6251A3] py-3'>Format: PDF, PNG, JPG</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[90%]  flex flex-col justify-start items-center md:hidden'>
                {/* importing the line: */}
                <Image src={line} width={300} height={10} alt="line" className='p-6'/>
                <h1 className="text-xl font-light md:font-bold text-black m-2 w-full text-left">2. PAN card</h1>
                <input className="p-4 m-4 w-80 placeholder-gray-500 border border-[#6251A3]" type="text" placeholder="Enter your PAN Card Number here" />
                <Image src={upload} height={300} className='w-80' alt="upload" />
                <h4 className='text-[#6251A3] py-3'>Format: PDF, PNG, JPG</h4>
                    <Link href="/kyc/investor/done">
                        <button className="bg-[#6251A3] text-white font-bold rounded-xl p-4 m-4 w-48">SUBMIT</button>
                    </Link>

            </div>
        </div>
    );
}
