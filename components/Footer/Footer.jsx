import Image from "next/image";
import waloLogo from "@/public/LandingPage/walo.svg"
import WaloIcon from "@/public/LandingPage/icon.svg"
const Footer = () => {
  return (
    <div className="w-1440 h-276 sm:pt-[21px] sm:pb-[25px] lg:bg-gradient-to-r from-[#D8D0EE] to-[#a796d4] lg:py-4">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex pl-[5%]">
            
        <Image className="mr-[10%] md:block sm:max-w-10 max-w-6"
            src={WaloIcon}
          alt="footerIcon"
          // height={42}
          // width={40}
        />
        <Image className="sm:max-w-44 max-w-28"
          src={waloLogo}
          alt="footerIcon"
          // height={56}
          // width={158}
            />
        </div>
          <p className="ml-16 text-sm sm:text-2xl font-bold leading-9 mr-[5%] md:block" style={{ color: '#6251A3' }}>CAPITAL THAT SCALES WITH YOU</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;
