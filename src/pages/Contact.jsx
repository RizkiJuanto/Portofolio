import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IoLogoInstagram, IoLogoLinkedin,IoLogoGithub,IoLogoFacebook } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col min-fit">
        <Navbar/>
        <div className="flex flex-grow flex-col mx-5 py-3 md:mt-24 md:mx-20">
            <div className="flex justify-center text-2xl mb-3 text-secondary lg:text-4xl">Contact</div>
            <hr className='mb-5 border border-secondary'/>
            <div className="flex flex-col mx-10">
                <div className="flex flex-col mb-5">
                    <div className="font-semibold text-lg w-fit border-b-2 border-secondary mb-3">See Me In</div>
                    <div className="flex flex-col my-3 md:flex-row md:flex-wrap gap-3 md:justify-start lg:justify-between">
                        <div className="flex bg-gray-600 justify-center w-full rounded my-3 py-1 md:w-64 md:h-16 lg:w-44   ">
                            <div className="flex justify-start w-32 gap-3 my-2 items-center">
                                <div className="text-white text-3xl md:text-4xl "><IoLogoGithub /></div>
                                <div className="text-white w-full ">Github</div>
                            </div>
                        </div>
                        <div className="flex bg-blue-600 justify-center w-full rounded my-3 py-1 md:w-64 md:h-16 lg:w-44  ">
                            <div className="flex justify-start w-32 gap-3 my-2 items-center">
                                <div className="text-white text-3xl md:text-4xl "><IoLogoLinkedin /></div>
                                <div className="text-white w-full ">Linked In</div>
                            </div>
                        </div>
                        <div className="flex bg-gradient-to-l from-pink-500 to-yellow-400 justify-center w-full rounded my-3 py-1 md:w-64 md:h-16 lg:w-44  ">
                            <div className="flex justify-start w-32 gap-3 my-2 items-center">
                                <div className="text-white text-3xl md:text-4xl "><IoLogoInstagram /></div>
                                <div className="text-white w-full ">Instagram</div>
                            </div>
                        </div>
                        <div className="flex bg-blue-600 justify-center w-full rounded my-3 py-1 md:w-64 md:h-16 lg:w-44  ">
                            <div className="flex justify-start w-32 gap-3 my-2 items-center">
                                <div className="text-white text-3xl md:text-4xl "><IoLogoFacebook /></div>
                                <div className="text-white w-full ">Facebook</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="font-semibold text-lg w-fit border-b-2 border-secondary mb-3">Send me email</div>
                    <form action="" className='w-full'>
                        <div className="flex flex-col md:flex-row  w-full">
                            <div className="w-full my-3 md:pr-10">
                                <div className="mb-1">Name</div>
                                <div className="w-full">
                                    <input className='w-full md:h-14 rounded shadow-md  shadow-gray-400 border border-gray-500 bg-primary pl-2 my-2 h-10' type="text" placeholder="Input your name" />
                                </div>
                            </div>
                            <div className="w-full my-3">
                                <div className="mb-1">Email</div>
                                <div className="w-full">
                                    <input className='w-full md:h-14 rounded shadow-md  shadow-gray-400 border border-gray-500 bg-primary pl-2 my-2 h-10' type="text" placeholder="Input your email" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full my-3">
                            <div className="mb-1">Subject</div>
                            <div className="w-full">
                                <input className='w-full md:h-14 rounded shadow-md  shadow-gray-400 border border-gray-500 bg-primary pl-2 my-2 h-10' type="text" placeholder="Input your subject" />
                            </div>
                        </div>
                        <div className="w-full my-3">
                            <div className="mb-1">Message</div>
                            <div className="w-full">
                                <textarea className='w-full h-40 pt-3 rounded shadow-md shadow-gray-400 border border-gray-500 bg-primary pl-2 my-2 ' placeholder='Input your message'></textarea>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Contact
