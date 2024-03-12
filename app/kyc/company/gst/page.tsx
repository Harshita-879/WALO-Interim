import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import seachImg from './search.svg';
import uploadImg from './upload.svg';
import digiLocker from './digiLocker.svg';
import line from './lineCompany.svg';
import upload from './uploadGrp.svg';

export default function Aadhar() {
    
    return (
        <div className="bg-[#ffffff] h-screen flex flex-col items-center justify-center">
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h1 className="text-4xl md:text-4xl font-bold text-black ">KYC Verification</h1>
                </div>
                <div>
                    <h1 className="text-xl font-light md:font-bold text-gray-600 md:text-black m-2 text-center">Complete your KYC verification below to get funded</h1>
                </div>
                <div>
                    <Image src={seachImg} width={100} height={100} alt="search" className='hidden md:block'/>
                </div>
            </div>
            <div className='bg-[#D8D0EE] hidden md:flex flex-col items-center justify-center rounded-xl'>
                <div className="bg-white flex flex-col bg-opacity-10 p-5 rounded-xl">
                    <div className="flex items-center justify-between mr-12">
                        <Link href="/kyc/company">
                            <button className="text-black font-bold rounded-xl p-4 m-4">Aadhaar Card</button>
                        </Link>
                        <Link href="/kyc/company/pan">
                            <button className="text-black font-bold rounded-xl p-4 m-4">PAN Card</button>
                        </Link>
                        <Link href="/kyc/company/bankverification">
                            <button className="text-black font-bold rounded-xl p-4 m-4">Bank Verification</button>
                        </Link>
                        <Link href="/kyc/company/gst">
                            <button className="bg-[#6251A3] text-white font-bold rounded-xl p-4 m-4">GST Invoice</button>
                        </Link>
                    </div>
                    <div className="border-t-2 border-white"></div>
                    <div className="flex items-center justify-center mt-8">
                        <div className="flex flex-col items-start justify-start mr-12"> 
                            <label className="text-lg mx-4 font-bold">Enter your GST Invoice Reference Number</label>
                            <input className="bg-[#BDB3DF] p-4 m-4 w-96 placeholder-gray-500" type="text" placeholder="Enter your GST Invoice Reference number here" />
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
                <Image src={line} height={10} alt="line" className='p-6 w-96'/>
                <h1 className="text-xl font-light md:font-bold text-black m-2 w-full text-left">4. GST Invoice</h1>
                <input className="p-4 m-4 w-80 placeholder-gray-500 border border-[#6251A3]" type="text" placeholder="GST Invoice reference number " />
                <Image src={upload} height={300} className='w-80' alt="upload" />
                <h4 className='text-[#6251A3] py-3'>Format: PDF, PNG, JPG</h4>
                    <Link href="/kyc/company/done">
                        <button className="bg-[#6251A3] text-white font-bold rounded-xl p-4 m-4 w-48">SUBMIT</button>
                    </Link>

            </div>
        </div>
    );
}
