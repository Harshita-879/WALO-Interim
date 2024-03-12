"use client";
import Image from "next/image";
import kycDone from "./kyc-done.svg";


export default function Done() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="h-[80%] w-[80%] bg-[#D8D0EE] mt-14 rounded-3xl flex justify-between items-center flex-col p-12">
            <h1 className="font-mplus font-medium text-2xl">You’ve completed your KYC verification!</h1>
            <Image src={kycDone} width={260} height={260} alt="kyc-done" />
            <button className="bg-[#6251A3] text-white tracking-wider rounded-xl p-4 m-4 px-6">CONTINUE TO HOME</button>
        </div>
    </div>
  );
}
