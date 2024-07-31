import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeProfile from '../assets/img/Rizki_Juanto.jpg'
import { BsDownload } from "react-icons/bs";

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <div className="mx-60 mt-20 h-fit mb-10">
        <div className="text-center text-5xl mb-16">Home</div>
        <hr className='border-secondary border-2'/>
        <div className="flex justify-around items-start gap-20 mt-10 mb-16">
          <div className="min-w-max">
            <img className='h-80 w-80 rounded-full' src={HomeProfile} alt="" />
          </div>
          <div className="w-full">
            <p className='text-3xl'>
            Hello I'm,
            <br />
            <p className='text-secondary text-6xl'>Rizki Juanto</p>
            <br />
            <p className='text-lg'>I am a Web Developer. I have experience in developing web applications using modern technologies such as React, Node.js, and various related libraries and frameworks.</p>
            </p>
            <div className="flex mt-14 justify-around">
              <button className="flex gap-3 text-lg"><BsDownload className='text-2xl'/> Download My CV</button>
              <div className="text-lg">Ready To Work</div>
              <div className="bg-primary px-3 rounded-full border-2 border-secondary ">
                <div className="text-lg text-secondary">Hire Me</div>
              </div>
            </div>
          </div>
        </div>
        <hr className='border-secondary border-2'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
