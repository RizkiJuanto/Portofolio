import React, { useEffect, useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FiUser, FiSun } from "react-icons/fi";
import { LuFileCode, LuAtom, LuPhone } from "react-icons/lu";

const Navbar = () => {
    const [activeTabs,setActiveTabs] = useState(1)

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
    <div className=''>
      <div className="flex justify-around min-w-full px-40 mt-16 items-center z-auto">
        <div className="w-96 text-5xl text-start">RIZKI <span className='text-secondary'>.</span></div>
        <div className="w-full">
            <div className="flex justify-around items-center bg-white text-primary p-1 rounded-full border-secondary border-solid border-4">
            {tabs.map((tab) => (
                <div key={tab.id}
                onClick={()=> handleTabClick(tab.id)}
                className={`${
                    activeTabs === tab.id 
                    ? "bg-primary text-secondary rounded-full py-1 px-5"
                    : "text-primary"
                } px-4 text-2xl font-semibold focus:outline-none `}>
                    <div className="flex gap-3">
                        <div className="text-3xl">{tab.icon}</div>
                        <div className="text-2xl">{tab.title}</div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        <div className="w-96 flex justify-end"><FiSun className='text-3xl text-yellow-300'/></div>
      </div>
    </div>
  )
}

export default Navbar
