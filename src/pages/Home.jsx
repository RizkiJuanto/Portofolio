import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeProfile from '../assets/img/Rizki_Juanto.jpg'
import { BsDownload } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaFileDownload } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    
    <div className='flex flex-col min-h-screen '>
      <Navbar/>
      <div className="flex flex-grow flex-col mx-5 py-3 md:mt-24 md:mx-20">
        <div className="flex justify-center text-2xl mb-3 text-secondary lg:text-4xl">Home</div>
        <hr className='mb-5 border border-secondary '/>
        <div className="flex flex-col justify-center items-start md:flex-row md:justify-around lg:w-full lg:items-start mt-5">
          <div className="flex w-full justify-center md:items-start md:w-96 md:my-5 lg:w-96 lg:flex lg:justify-start">
            <motion.div
              className="md:absolute lg:absolute shadow-lg shadow-secondary h-32 w-32 md:h-48 md:w-48 lg:w-72 lg:h-72 rounded-full border-4 border-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <img className='absolute w-32 h-32 rounded-full md:w-48 md:h-48 lg:w-72 lg:h-72' src={HomeProfile} alt="" />
          
          </div>
          <div className="flex flex-col justify-center  md:justify-start md:ml-4 md:w-full lg:ml-20">
            <div className='flex flex-col text-center my-5 md:text-start md:text-xl md:w-full'>
              Hello My Name is,
              <p className='text-2xl text-secondary mb-5 md:text-4xl'>Rizki Juanto</p>
              <div className="flex flex-col mt-5">
                <p className='md:text-lg'>I'm</p>
                <div className="text-2xl text-secondary mb-5 md:text-3xl">
                  <TypeAnimation
                    sequence={[
                      "Web Developer",
                      1000,
                      "Full Stack Developer",
                      1000,
                      "Frontend Developer",
                      1000,
                      "Backend Developer",
                      1000,
                      
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                  />
                </div>
              </div>
              <p className='text-justify text-xs md:text-xl  '>I am a Web Developer. I have experience in developing web applications using modern technologies such as React, Node.js, and various related libraries and frameworks.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center md:flex md:flex-row lg:flex lg:flex-row md:justify-around md:mt-16 ">
          <div className="md:bg-primary md:border-3 md:border-4 border-2 border-secondary rounded-xl mb-3 hover:bg-white cursor-pointer">
            <div className="flex flex-col items-center text-xs rounded-xl w-28 my-3 md:flex md:flex-col md:items-center lg:text-lg md:text-sm lg:w-44 md:w-36 md:my-7 lg:my-7 hover:text-primary"><FaFileDownload className='text-4xl mb-3 lg:text-7xl md:text-5xl text-secondary md:mb-3'/> Download My CV</div>
          </div>
          <div className="md:bg-primary md:border-3 md:border-4 border-2 border-secondary rounded-xl mb-3 hover:bg-white cursor-pointer">
            <div className="flex flex-col items-center text-xs rounded-xl w-28 my-3 md:flex md:flex-col md:items-center lg:text-lg md:text-sm lg:w-44 md:w-36 md:my-7 lg:my-7 hover:text-primary"><BsPersonWorkspace className='text-4xl mb-3 lg:text-7xl md:text-5xl text-secondary md:mb-3'/> Ready To Work</div>
          </div>
          <div className="md:bg-primary md:border-3 md:border-4 border-2 border-secondary rounded-xl mb-3 hover:bg-white cursor-pointer">
            <div className="flex flex-col items-center text-xs rounded-xl w-28 my-3 md:flex md:flex-col md:items-center lg:text-lg md:text-sm lg:w-44 md:w-36 md:my-7 lg:my-7 hover:text-primary"><FaHandshake className='text-4xl mb-3 lg:text-7xl md:text-5xl text-secondary md:mb-3'/> Hire Me</div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
