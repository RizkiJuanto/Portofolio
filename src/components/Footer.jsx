import React from 'react'
import { RiCopyrightLine } from "react-icons/ri";
import { IoLogoInstagram, IoLogoLinkedin,IoLogoGithub,IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='flex flex-col inset-x-0 bottom-0 h-48 w-full items-center justify-center'>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex mb-6 gap-5">
            <div className="">Source Code</div>
            <div className="">Design</div>
            <div className="">Assets</div>
            <div className="">Documentation</div>
        </div>
        <div className="flex mb-6 gap-5">
            <div className="text-5xl"><IoLogoLinkedin/></div>
            <div className="text-5xl"><IoLogoInstagram/></div>
            <div className="text-5xl"><IoLogoGithub/></div>
            <div className="text-5xl"><IoLogoFacebook/></div>
        </div>
        <div className="flex gap-2 items-center">Copyright <RiCopyrightLine/> Rizki Juanto 2024</div>
      </div>
    </div>
  )
}

export default Footer
