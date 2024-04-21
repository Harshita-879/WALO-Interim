import Image from "next/image";
import waloFooter from '@/assets/walofooter.svg';
import {Quicksand} from 'next/font/google';

const quicksand = Quicksand ({
 subsets: ['latin'],
 weight: ['400','500']
})

const Footer = () => {
 return (
    <main className={quicksand.className}>
      <div className="w-1440 bg-gradient-to-r from-[#D8D0EE] to-[#D8D0EE] sm:pb-1">
        <div className="sm:pt-2 mt-12">
          <div className="flex justify-between items-center">
            <div className="flex pl-[5%]">
              <Image className="mr-[10%] md:block h-14"
                 src={waloFooter}
                alt="footerIcon"
              />
            </div>
            <p className="ml-16 text-sm sm:text-2xl font-bold leading-9 mr-[5%] md:block" style={{ color: '#6251A3' }}>Driving Growth, One Business at a Time.</p>
          </div>
        </div>
      </div>
    </main>
 )
};

export default Footer;
