import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import seachImg from './search.svg';
import uploadImg from './upload.svg';
import digiLocker from './digiLocker.svg';

export default function Aadhar() {
    return (
        <div className="bg-[#ffffff] h-screen flex flex-col items-center justify-center">
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h1 className="text-4xl font-bold text-black ">KYC Verification</h1>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-black m-2">Complete your KYC verification below to start investing</h1>
                </div>
                <div>
                    <Image src={seachImg} width={100} height={100} alt="search" />
                </div>
            </div>
            <div className='bg-[#D8D0EE] flex flex-col items-center justify-center rounded-xl'>
                <div className="bg-white flex flex-col bg-opacity-10 p-5 rounded-xl">
                    <div className="flex items-center justify-start mr-12">
                        <Link href="/aadhar">
                            <button className="bg-[#6251A3] text-white font-bold rounded-xl p-4 m-4">Aadhaar Card</button>
                        </Link>
                        <Link href="/pan">
                            <button className="text-black font-bold rounded-xl p-4 m-4">PAN Card</button>
                        </Link>
                    </div>
                    <div className="border-t-2 border-white"></div>
                    <div className="flex items-center justify-center mt-8">
                        <div className="flex flex-col items-start justify-start mr-12"> 
                            <label className="text-lg font-bold">Enter your Aadhar Card Number</label>
                            <input className="bg-[#BDB3DF] p-4 m-4 w-96 placeholder-gray-500" type="text" placeholder="Enter your Aadhar Card Number here" />
                            <button className="bg-[#6251A3] text-white font-bold rounded-xl p-4 m-4 w-48">SUBMIT</button>
                        </div>
                        <div className="flex flex-col items-center justify-center ml-12"> 
                            <Image src={uploadImg} width={300} height={300} alt="upload" />
                            <Image src={digiLocker} width={300} height={300} alt="digiLocker" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
