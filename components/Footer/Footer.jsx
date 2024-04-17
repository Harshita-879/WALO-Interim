import Image from "next/image";
import waloFooter from '@/assets/walofooter.svg';
const Footer = () => {
  return (
    <div className="w-1440 bg-gradient-to-r from-[#D8D0EE] to-[#a796d4] sm:pb-4">
      <div className="sm:pt-4 mt-12">
        <div className="flex justify-between items-center">
          <div className="flex pl-[5%]">
            
        <Image className="mr-[10%] md:block"
            src={waloFooter}
          alt="footerIcon"
          // height={300}
          // width={400}
        />
        </div>
          <p className="ml-16 text-sm sm:text-2xl font-bold leading-9 mr-[5%] md:block" style={{ color: '#6251A3' }}>Driving Growth, One Business at a Time.</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;
