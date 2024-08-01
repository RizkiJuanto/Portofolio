import React from 'react'
import { RiCopyrightLine } from "react-icons/ri";
import { IoLogoInstagram, IoLogoLinkedin,IoLogoGithub,IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='flex flex-col md:mb-10 md:px-14 bottom-0 mb-28 w-full items-center justify-center'>
      <div className="w-full mb-5 mt-5">
        <hr className='mx-5 border border-secondary '/>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex mb-6 gap-5">
            <div className="text-sm hover:text-secondary cursor-pointer">Source Code</div>
            <div className="text-sm hover:text-secondary cursor-pointer">Design</div>
            <div className="text-sm hover:text-secondary cursor-pointer">Assets</div>
            <div className="text-sm hover:text-secondary cursor-pointer">Documentation</div>
        </div>
        <div className="flex mb-6 gap-2">
            <div className="text-2xl md:text-3xl hover:text-secondary cursor-pointer"><IoLogoLinkedin/></div>
            <div className="text-2xl md:text-3xl hover:text-secondary cursor-pointer"><IoLogoInstagram/></div>
            <div className="text-2xl md:text-3xl hover:text-secondary cursor-pointer"><IoLogoGithub/></div>
            <div className="text-2xl md:text-3xl hover:text-secondary cursor-pointer"><IoLogoFacebook/></div>
        </div>
        <div className="flex gap-2 items-center text-sm md:text-base">Copyright <RiCopyrightLine className='md:text-lg'/> Rizki Juanto 2024</div>
      </div>
    </div>
  )
}

export default Footer
