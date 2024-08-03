import React, { useEffect, useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FiUser, FiSun } from "react-icons/fi";
import { LuFileCode, LuAtom, LuPhone } from "react-icons/lu";

const Navbar = () => {
    const [activeTabs,setActiveTabs] = useState(1);

    const handleTabClick = (tabId) => {
        setActiveTabs(tabId);
    };
    

    const tabs = [
        { id: 1, title: "Home", icon: <IoHomeOutline/> },
        { id: 2, title: "About", icon:<FiUser/> },
        { id: 3, title: "Project", icon:<LuFileCode/> },
        { id: 4, title: "Skills", icon:<LuAtom/> },
        { id: 5, title: "Contact", icon:<LuPhone/> },
      ];
  return (
    <div className='fixed min-w-full bottom-7 md:top-0 md:py-5 md:flex h-fit md:justify-center md:mx-auto lg:mx-auto z-50 md:bg-primary '>
      <div className="min-w-fit md:flex md:items-center md:min-w-full lg:flex lg:justify-center">
        <div className="hidden md:flex md:text-xl md:w-24 md:items-center md:justify-center lg:w-48 lg:text-3xl hover:text-secondary cursor-pointer">RIZKI <span className='text-secondary hidden md:flex'>.</span></div>
        <div className="flex min-w-fit h-10 justify-center px-5  md:mx-auto lg:mx-auto">
            <div className=" md:justify-center flex bg-white min-w-fit lg:w-full  h-full justify-around items-center rounded-full border-secondary border-2 ">
            {tabs.map((tab) => (
                <div key={tab.id}
                onClick={()=> handleTabClick(tab.id)}
                className={`${
                    activeTabs === tab.id
                    ? "bg-primary text-secondary rounded-full flex flex-col items-center justify-center"
                    : "text-primary flex flex-col items-center justify-center"
                } font-semibold focus:outline-none mx-3 w-8 h-8 md:w-24 lg:w-32 items-center hover:text-secondary cursor-pointer `}>
                    <div className="flex gap-1 w-full justify-center md:items-center">
                        <div className="text-xl md:text-lg lg:text-2xl">{tab.icon}</div>
                        <div className="hidden md:flex md:text-sm lg:text-xl">{tab.title}</div>
                    </div>
                </div>
            ))}
              <div className="md:hidden">
                <hr className='border border-primary h-full py-3'/>
              </div>
              <div className="flex flex-col pl-3 justify-center md:hidden "><FiSun className='flex items-center mr-3 text-xl text-yellow-300'/></div>
            </div>
        </div>
        <div className="hidden md:flex md:w-24 md:justify-center lg:w-48"><FiSun className='text-3xl md:text-xl lg:text-3xl text-yellow-300'/></div>
      </div>
    </div>
  )
}

export default Navbar
