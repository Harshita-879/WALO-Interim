"use client";
import Image from 'next/image';
import VerifyImg from './verify.svg'

// export default function VerifyPage() {
//   return (
//     <div className="bg-[#6251A3] min-h-screen flex items-center justify-center">
//       <div className="bg-white bg-opacity-10 p-4 md:p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center">
//         <div className="text-white mb-4 md:mb-0 md:mr-8">
//           <Image
//             src={VerifyImg}
//             alt="login"
//             height={250}
//             width={250}
//           />
//         </div>
//         <div className='md:ml-8 font-mplus text-white text-lg flex flex-col'>

//           <p className='font-mplus text-xl font-medium'>Verification Code</p>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             placeholder="Verification Code"
//             className="px-3 py-2 my-2 md:my-4 border rounded-md z-100 text-black outline-none text-sm"
//             pattern="[0-9]{10}"
//             required
//           />
//           <br />
//           <button type="button" className="font-mplus text-xs bg-[#5AD192] px-2 py-2 rounded text-white shadow-2xl">
//             CONTINUE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import Image from "next/image";
// import Link from "next/link";


export default function VerifyLogin() {
  return (
    <div className="bg-[#6251A3] h-screen flex  items-center justify-center ">
      <div className="bg-white flex bg-opacity-10 p-12 rounded-xl  shadow-2xl">
        <div className=" mx-auto my-auto text-white ">
          <Image
            src={VerifyImg}
            alt="signupforBusiness"
            height={275}
            width={275}
          />
        </div>
        <div className=' font-mplus flex justify-center mx-8 my-[5%]  text-white text-lg'>
          <div className="">
            <p className='font-mplus text-2xl font-medium'>Verification Code</p>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Verification Code"
              className="px-8 py-3 my-6 w-full border rounded-md  text-black outline-none text-sm shadow-lg"
              pattern="[0-9]{10}"
              required
            />
            <br />
            <button type="button" className=" font-mplus text-sm border-2 border-[#5AD192] py-1.5 px-8 mr-2 rounded text-[#5F6APE] shadow-lg">
              Back
            </button>
            <button type="button" className="font-mplus text-sm bg-[#5AD192] py-2 px-6 rounded text-white shadow-lg">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};
