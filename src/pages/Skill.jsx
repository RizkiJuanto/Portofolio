import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SiExpress, SiJavascript, SiMicrosoftsqlserver, SiAxios, SiCss3, SiTailwindcss, SiFramer, SiHtml5, SiReact, SiVite,SiDbeaver,SiGithub,SiPostman, SiIntellijidea, SiEclipseide} from "react-icons/si";
import { RiNextjsFill, RiNodejsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";


const Skill = () => {

    const iconFe = [
        { id: 1, icon: <SiAxios className='text-blue-600' />, title: "Axios" },
        { id: 2, icon: <SiCss3 className='text-blue-700' />, title: "CSS" },
        { id: 3, icon: <SiFramer className='text-pink-500' />, title: "Framer Motion" },
        { id: 4, icon: <SiHtml5 className='text-orange-600' />, title: "HTML" },
        { id: 5, icon: <SiJavascript className='text-yellow-500' />, title: "JavaScript" },
        { id: 6, icon: <RiNextjsFill className='text-black' />, title: "Next.js" },
        { id: 7, icon: <SiReact className='text-blue-400' />, title: "ReactJS" },
        { id: 8, icon: <SiReact className='text-pink-400' />, title: "React Icon" },
        { id: 9, icon: <SiTailwindcss className='text-teal-500' />, title: "Tailwind CSS" },
        { id: 10, icon: <SiVite className='text-purple-500' />, title: "Vite" },
    ]

    const iconBe = [
        { id: 1, icon: <RiNextjsFill className='text-black' />, title: "Next.js" },
        { id: 2, icon: <RiNodejsFill className='text-green-500' />, title: "Node.js" },
        { id: 3, icon: <SiExpress className='text-gray-500' />, title: "Express.js" },
        { id: 4, icon: <SiJavascript className='text-yellow-500' />, title: "JavaScript" },
        { id: 5, icon: <BiLogoPostgresql className='text-blue-600' />, title: "PostgreSQL" },
        { id: 6, icon: <SiMicrosoftsqlserver className='text-red-600' />, title: "Microsoft SQL" },
        { id: 7, icon: <GrMysql className='text-blue-500' />, title: "MySQL" },
    ]

    const iconTools = [
        { id: 1, icon: <SiDbeaver className='text-orange-900' />, title: "DBeaver" },
        { id: 2, icon: <SiGithub className='text-black' />, title: "GitHub" },
        { id: 3, icon: <SiPostman className='text-orange-500' />, title: "Postman" },
        { id: 4, icon: <VscVscode className='text-blue-600' />, title: "VS Code" },
        { id: 5, icon: <SiIntellijidea className='text-blue-600' />, title: "IntelliJ IDEA" },
        { id: 6, icon: <SiEclipseide className='text-purple-600' />, title: "Eclipse IDE" },
    ]
  return (
    <div className='min-h-screen flex flex-col min-fit'>
      <Navbar/>
      <div className="flex flex-grow flex-col mx-5 py-3 md:mt-24 md:mx-20">
        <div className="flex justify-center text-2xl mb-3 text-secondary lg:text-4xl">Skill</div>
        <hr className='mb-5 border border-secondary'/>
        <div className="w-full">
            <div className="w-full">
                <div className="my-5 font-semibold md:text-xl md:font-medium border-b-2 border-secondary w-fit">Frontend Stacks</div>
                <div className="flex space-x-16 overflow-hidden">
                    <div className="flex space-x-16 animate-loop-scroll ">
                        {iconFe.map(icon => (
                            <div key={icon.id} className="flex whitespace-nowrap md:flex-col md:h-20 md:w-48 lg:h-40   items-center gap-2 w-full h-10 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer px-2">
                                <div className="text-lg md:text-4xl md:mt-2 lg:text-7xl lg:mb-4 lg:my-5">{icon.icon}</div>
                                <div className=" text-black md:text-lg lg:text-xl">{icon.title}</div>  
                            </div>
                        ))}    
                    </div>
                    <div aria-hidden="true" className="flex space-x-16 animate-loop-scroll ">
                        {iconFe.map(icon => (
                            <div key={icon.id} className="flex whitespace-nowrap md:flex-col md:h-20 md:w-48 lg:h-40   items-center gap-2 w-full h-10 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer px-2">
                                <div className="text-lg md:text-4xl md:mt-2 lg:text-7xl lg:mb-4 lg:my-5">{icon.icon}</div>
                                <div className=" text-black md:text-lg lg:text-xl">{icon.title}</div>  
                            </div>
                        ))}    
                    </div>
                </div>
            </div>
            <div className="">
                <div className="my-5 font-semibold md:text-xl md:font-medium border-b-2 border-secondary w-fit">Backend Stacks</div>
                <div className="flex space-x-16 overflow-hidden">
                    <div className="flex space-x-16 animate-loop-scroll">
                        {iconBe.map(icon => (
                            <div key={icon.id} className="flex whitespace-nowrap md:flex-col md:h-20 md:w-48 lg:h-40   items-center gap-2 w-full h-10 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer px-2">
                                <div className="text-lg md:text-4xl md:mt-2 lg:text-7xl lg:mb-4 lg:my-5">{icon.icon}</div>
                                <div className=" text-black md:text-lg lg:text-xl">{icon.title}</div>  
                            </div>
                        ))}    
                    </div>
                    <div aria-hidden="true" className="flex space-x-16 animate-loop-scroll ">
                        {iconBe.map(icon => (
                            <div key={icon.id} className="flex whitespace-nowrap md:flex-col md:h-20 md:w-48 lg:h-40  items-center gap-2 w-full h-10 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer px-2">
                                <div className="text-lg md:text-4xl md:mt-2 lg:text-7xl lg:mb-4 lg:my-5">{icon.icon}</div>
                                <div className=" text-black md:text-lg lg:text-xl">{icon.title}</div>  
                            </div>
                        ))}    
                    </div>
                </div>
            </div>
            <div className="">
                <div className="my-5 font-semibold md:text-xl md:font-medium border-b-2 border-secondary w-fit">Tools</div>
                <div className="flex space-x-16 overflow-hidden">
                    <div className="flex space-x-16 animate-loop-scroll ">
                        {iconTools.map(icon => (
                            <div key={icon.id} className="flex whitespace-nowrap md:flex-col md:h-20 md:w-48 lg:h-40  items-center gap-2 w-full h-10 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer px-2">
                                <div className="text-lg md:text-4xl md:mt-2 lg:text-7xl lg:mb-4 lg:my-5">{icon.icon}</div>
                                <div className=" text-black md:text-lg lg:text-xl">{icon.title}</div>  
                            </div>
                        ))}    
                    </div>
                    <div aria-hidden="true" className="flex space-x-16 animate-loop-scroll ">
                        {iconTools.map(icon => (
                            <div key={icon.id} className="flex whitespace-nowrap md:flex-col md:h-20 md:w-48 lg:h-40  items-center gap-2 w-full h-10 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer px-2">
                                <div className="text-lg md:text-4xl md:mt-2 lg:text-7xl lg:mb-4 lg:my-5">{icon.icon}</div>
                                <div className=" text-black md:text-lg lg:text-xl">{icon.title}</div>  
                            </div>
                        ))}    
                    </div>
                </div>
            </div>
            
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Skill
