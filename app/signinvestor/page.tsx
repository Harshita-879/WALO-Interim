"use client";
import { useState } from "react";
import Image from "next/image";
import signupImg from "./signup.svg"
import Link from "next/link";

export default function LoginPage() {
  const [isChecked, setIsChecked] = useState(false);
  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
      <div className="bg-[#6251A3] h-screen flex  items-center justify-center ">
          <div className="bg-white  flex sm:bg-opacity-10 p-12 rounded-lg shadow-2xl ">
              <div className="text-white mr-8  hidden sm:block">
                  <p className="text-2xl">Welcome</p>
                  <p>Already have an account? <a href="/login" className="text-white-500 hover:underline">Login here</a></p>
                  <Image
                      src={signupImg}
                      alt="signupforBusiness"
                      height={300}
                      width={300}
                  />
              </div>
              <div className="bg-white p-8 rounded-lg ml-8 w-[60%]">
            <form className="space-y-4">
                <div>
                <label htmlFor="name" className="block text-gray-900 text-xl font-medium mb-1">Name</label>          
                <input type="text" id="name" name="name" placeholder="Enter name" className="block w-full border-b border-gray-300 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-gray-900 text-xl font-medium mb-1">Mobile Number</label>
                <input type="text" id="mobile" name="mobile" placeholder="Enter Phone No." className="block w-full border-b border-gray-300 focus:outline-none" />             
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-900 text-xl font-medium mb-1">Email ID</label>
                <input type="email" id="email" name="email" placeholder="@email.com" className="block w-full border-b border-gray-300 focus:outline-none" />
              </div>
              
               <button type="button" className="font-mplus text-sm bg-[#5AD192] py-2 px-4 rounded-lg font-semibold text-white hover:shadow-lg">
              <Link href='signbusiness/verification'>CONTINUE</Link>
            </button>
            </form>
        </div>
      </div>
      
    </div>
  );
}