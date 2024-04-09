"use client"
import Image from 'next/image';

export default function Hero4() {
    return (
        <div className="bg-custom-purple text-white flex flex-col items-center lg:ml-64 rounded-xl justify-center h-80 lg:w-2/3 gap-8 mb-20 my-8 mx-4 lg:mx-0">
            <div>
                <h1 className="mt-8 lg:mt-0 text-3xl font-medium">Let's get in touch</h1>
            </div>
            <div className='lg:hidden'>
                <p className='flex items-center justify-center text-center mx-4 text-lg'>
                We'd love to help improve your experience with WALO
                get in touch with us to know more about how to get started and for a more
                personalised experience
                </p>
            </div>
            <div className='w-2/3 hidden lg:inline'>
                <p className='flex items-center justify-center'>We'd love to help improve your experience with WALO</p>
                <p className='flex items-center justify-center'>get in touch with us to know more about how to get started and for a more</p>
                <p className='flex items-center justify-center'>personalised experience</p>
            </div>
            <div>
                <button
                    className="bg-custom-green text-white py-4 px-8 font-bold text-lg rounded-full mb-8 lg:mb-0">
                    Get in Touch
                    </button>
            </div>
        </div>

    );
}