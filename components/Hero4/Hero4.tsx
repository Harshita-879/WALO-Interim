"use client";
import Image from "next/image";

export default function Hero4() {
  return (
    <div className="bg-custom-purple text-white flex flex-col items-center lg:ml-64 rounded-xl justify-center h-80 lg:w-2/3 md:gap-8 gap-5 mb-8 sm:my-8 mx-4 lg:mx-0">
      <div>
        <h1 className="mt-8 lg:mt-0 text-3xl font-medium">
          Let's get in touch
        </h1>
      </div>
      <div className="lg:hidden">
        <p className="flex items-center justify-center text-center mx-10 text-lg">
          We'd love to help improve your experience with WALO. Get in touch with
          us to know more about how to get started and for a more personalised
          experience
        </p>
      </div>
      <div className="w-2/3 hidden lg:inline">
        <p className="flex items-center justify-center">
          We'd love to help improve your experience with WALO
        </p>
        <p className="flex items-center justify-center">
          Get in touch with us to know more about how to get started and we'd
          love
        </p>
        <p className="flex items-center justify-center">
          to help your business grow.
        </p>
      </div>
      <div>
        <button
          className="bg-custom-green text-white py-4 px-8 font-bold text-lg rounded-full mb-8 md:mb-0"
          onClick={() => {
            window.location.href = "https://forms.gle/nw8pX7A7mHnZ6u177";
          }}
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}
