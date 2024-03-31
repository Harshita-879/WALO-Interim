"use client"
import Image from 'next/image';

export default function Hero4() {
    return (
        <div className="bg-custom-purple text-white flex flex-col items-center ml-64 rounded-xl justify-center h-80 w-2/3 gap-8 mb-20">
            <div>
                <h1 className="text-3xl">Find working capital solutions that</h1>
                <h1 className="text-3xl flex items-center justify-center">works for your business</h1>
            </div>
            <div>
                <p>start getting paid early and discover options for getting more working</p>
                <p className='flex items-center justify-center'>capital into your business, so you can invest in your growth</p>
            </div>
            <div>
                <button
                    className="bg-custom-green text-white py-4 px-8 font-bold text-lg rounded-full"
                    >Get in Touch</button>
            </div>
        </div>

    );
}