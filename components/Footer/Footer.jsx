import Link from "next/link";
import Image from "next/image";
import waloLogo from "@/public/LandingPage/walo.svg"
import instaIcon from "@/public/mobileNav/SocialMedia/insta2.svg"
import fbIcon from "@/public/mobileNav/SocialMedia/facebook2.svg"
import twIcon from "@/public/mobileNav/SocialMedia/twitter2.svg"
import linkIcon from "@/public/mobileNav/SocialMedia/linkedIn2.svg"
import WaloIcon from "@/public/LandingPage/icon.svg"
const Footer = () => {
  return (
    <div className="w-1440 h-276 pt-[21px] pb-[25px] bg-[#D8D0EE] py-4">
      <div>
        <div className="flex justify-between ">
          <div className="flex pl-[5%] ">
            
        <Image className="mr-[10%] hidden md:block"
            src={WaloIcon}
          alt="footerIcon"
          height={42}
          width={40}
        />
        <Image className=""
          src={waloLogo}
          alt="footerIcon"
          height={56}
          width={158}
            />
        </div>
          <p className="text-2xl leading-9 mr-16 hidden md:block">Lorep ipsum dolor sit amet, consecturet</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;
