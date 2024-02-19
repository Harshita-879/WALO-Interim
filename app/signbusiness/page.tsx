"use client"
import { useState } from "react";
import Image from "next/image";
import signupBusinessImg from "./signup.svg";
import Link from "next/link";

export default function LoginPage2() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-[#6251A3] h-screen flex items-center justify-center">

        <div className="bg-white flex bg-opacity-10 p-8 rounded-xl shadow-2xl border-gray">
          <div className=" mx-auto my-[5%] text-white pr-4">
            <p className="text-2xl">Welcome</p>
            <p>Already have an account? <a href="/login" className="text-white-500 hover:underline">Login here</a></p>
            <div className="hidden md:block">
              <Image src={signupBusinessImg} alt="signupforBusiness" height={300} width={300} />
            </div>
        </div>  
          <div className="bg-white p-4 md:p-8 rounded-lg ml-4 md:ml-8 w-[60%]">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-900 text-lg md:text-xl font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  className="block w-full border-b border-gray-300 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-900 text-lg md:text-xl font-medium mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter company name"
                  className="block w-full border-b border-gray-300 focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-900 text-lg md:text-xl font-medium mb-1">
                Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="@email.com"
                  className="block w-full border-b border-gray-300 focus:outline-none"
                />
                </div>
                <div>
                <label htmlFor="mobile" className="block text-gray-900 text-lg md:text-xl font-medium mb-1">
                  Phone    Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter Phone No."
                  className="block w-full border-b border-gray-300 focus:outline-none"
                />
              </div>
              <button type="button" className="font-mplus text-sm bg-[#5AD192] py-2 px-4 rounded-lg font-semibold text-white hover:shadow-lg">
              <Link href='signbusiness/verification'>CONTINUE</Link>
            </button>
            </form>
          </div>
          <div className="md:hidden mt-4 flex justify-center">
            <Image src={signupBusinessImg} alt="signupforBusiness" height={200} width={200} />
          </div>
        </div>
      </div>
    
  );
}
