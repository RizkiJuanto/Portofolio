import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SiExpress, SiJavascript, SiAxios, SiCss3, SiTailwindcss, SiFramer, SiHtml5, SiReact, SiVite,SiDbeaver,SiPostman} from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import Tokopedia_hs1 from '../assets/img/project/Tokopedia_hs1.png'
import Tokopedia_hs2 from '../assets/img/project/Tokopedia_hs2.png'
import Tokopedia_hs3 from '../assets/img/project/Tokopedia_hs3.png'
import AromaKopi1 from '../assets/img/project/ak1.png'
import AromaKopi2 from '../assets/img/project/ak2.png'
import AromaKopi3 from '../assets/img/project/ak3.png'
import AromaKopi4 from '../assets/img/project/ak4.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'


const Project = () => {

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed:3000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  const projectOngoing = [
    {
      id:1,
      title:'Tokopedia',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laboriosam nemo voluptate porro ex nesciunt, amet magnam praesentium commodi maiores!',
      images: [
        Tokopedia_hs1,
        Tokopedia_hs2,
        Tokopedia_hs3,
      ],
      stacks: [
        {icon: <SiExpress className='text-gray-500' />, title: "Express.js" },
        {icon: <SiJavascript className='text-yellow-500' />, title: "JavaScript" },
        {icon: <SiAxios className='text-blue-600' />, title: "Axios" },
        {icon: <SiTailwindcss className='text-teal-500' />, title: "Tailwind CSS" },
        {icon: <SiFramer className='text-pink-500' />, title: "Framer Motion" },
        {icon: <SiHtml5 className='text-orange-600' />, title: "HTML" },
        {icon: <SiReact className='text-blue-400' />, title: "ReactJS" },
        {icon: <SiVite className='text-purple-500' />, title: "Vite" },
        {icon: <SiDbeaver className='text-orange-900' />, title: "DBeaver" },
        {icon: <SiPostman className='text-orange-500' />, title: "Postman" },
        {icon: <BiLogoPostgresql className='text-blue-600' />, title: "PostgreSQL" },
        {icon: <RiNodejsFill className='text-green-500' />, title: "Node.js" },
        {icon: <SiCss3 className='text-blue-700' />, title: "CSS"  },
      ],
    },
  ]

  const projectDone = [
    {
      id:1,
      title:'Aroma Kopi ',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laboriosam nemo voluptate porro ex nesciunt, amet magnam praesentium commodi maiores!',
      images: [
        AromaKopi1,
        AromaKopi2,
        AromaKopi3,
        AromaKopi4,
      ],
      stacks: [
        {icon: <SiHtml5 className='text-orange-600' />, title: "HTML" },
        {icon: <SiCss3 className='text-blue-700' />, title: "CSS"  },
        {icon: <SiJavascript className='text-yellow-500' />, title: "JavaScript" },
        {icon: <SiHtml5 className='text-orange-600' />, title: "HTML" },
        {icon: <SiCss3 className='text-blue-700' />, title: "CSS"  },
        {icon: <SiJavascript className='text-yellow-500' />, title: "JavaScript" },
        {icon: <SiHtml5 className='text-orange-600' />, title: "HTML" },
        {icon: <SiCss3 className='text-blue-700' />, title: "CSS"  },
        {icon: <SiJavascript className='text-yellow-500' />, title: "JavaScript" },
        {icon: <SiHtml5 className='text-orange-600' />, title: "HTML" },
        {icon: <SiCss3 className='text-blue-700' />, title: "CSS"  },
        {icon: <SiJavascript className='text-yellow-500' />, title: "JavaScript" },
        {icon: <SiHtml5 className='text-orange-600' />, title: "HTML" },
        {icon: <SiCss3 className='text-blue-700' />, title: "CSS"  },
        {icon: <SiJavascript className='text-yellow-500' />, title: "JavaScript" },
      ],
    },
    
  ]
  
  return (
    <div>
      <div className="flex flex-col min-h-screen ">
        <Navbar/>
        <div className="flex flex-grow flex-col mx-5 py-3 md:mt-24 md:mx-20">
          <div className="flex justify-center text-2xl mb-3 text-secondary lg:text-4xl">Project</div>
          <hr className='mb-5 border border-secondary '/>
          <div className="text-lg font-bold md:text-2xl">
            Ongoing
            {projectOngoing.map(project => (
              <div key={project.id} className="flex flex-col mb-5">
                <div className="font-normal text-lg w-full flex justify-center  mb-3">
                  <div className="w-fit border-b-2 border-secondary px-3 md:text-2xl">
                    {project.title}
                  </div>
                </div>
                <div className="mx-20 min-h-fit mt-5">
                  <div className=" border-secondary border-2 p-10 rounded-xl">
                  {project.images.length > 0 ? (
                      <Slider {...sliderSettings}>
                        {project.images.map((image,index) => (
                          <div key={index}>
                            <img className='rounded-lg' src={image} alt="" />
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <div>No images available for this project.</div>
                  )}
                  </div>
                  <div className="flex space-x-10 overflow-hidden mt-10">
                    Stacks
                    <div key={project.id} className="flex space-x-10 animate-loop-scroll2 mt-10">
                        {project.stacks.map((icon,index) => (
                            <div key={index} className="flex whitespace-nowrap md:flex-col md:h-20 md:w-48 items-center gap-2 w-full h-10 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer px-2">
                                <div className="text-lg md:text-4xl md:mt-2 ">{icon.icon}</div>
                                <div className="text-black text-sm md:text-lg ">{icon.title}</div>  
                            </div>
                        ))}    
                    </div>
                    <div aria-hidden="true" className="flex space-x-10 animate-loop-scroll2 mt-10">
                        {project.stacks.map((icon,index) => (
                            <div key={index} className="flex whitespace-nowrap md:flex-col md:h-20 md:w-48 items-center gap-2 w-full h-10 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer px-2">
                                <div className="text-lg md:text-4xl md:mt-2 ">{icon.icon}</div>
                                <div className="text-black text-sm md:text-lg ">{icon.title}</div>  
                            </div>
                        ))}    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-lg font-bold md:text-2xl mt-10">
            Finished
            {projectDone.map(project => (
              <div key={project.id} className="flex flex-col mb-5">
                <div className="font-normal text-lg w-full flex justify-center  mb-3">
                  <div className="w-fit border-b-2 border-secondary px-3 md:text-2xl">
                    {project.title}
                  </div>
                </div>
                <div className="mx-20 min-h-fit  mt-5">
                  <div className=" border-secondary border-2 p-10 rounded-xl">
                  {project.images.length > 0 ? (
                      <Slider {...sliderSettings}>
                        {project.images.map((image) => (
                          <div key={image}>
                            <img className='rounded-lg' src={image} alt="" />
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <div>No images available for this project.</div>
                    )}
                  </div>
                  <div className="flex space-x-10 overflow-hidden mt-10">
                    Stacks
                    <div className="flex space-x-10 animate-loop-scroll mt-10">
                        {project.stacks.map((icon,index) => (
                            <div key={index} className="flex whitespace-nowrap md:flex-col md:h-20 md:w-48 items-center gap-2 w-full h-10 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer px-2">
                                <div className="text-lg md:text-4xl md:mt-2 ">{icon.icon}</div>
                                <div className="text-black text-sm md:text-lg ">{icon.title}</div>  
                            </div>
                        ))}    
                    </div>
                    <div aria-hidden="true" className="flex space-x-10 animate-loop-scroll mt-10">
                        {project.stacks.map((icon,index) => (
                            <div key={index} className="flex whitespace-nowrap md:flex-col md:h-20 md:w-48 items-center gap-2 w-full h-10 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer px-2">
                                <div className="text-lg md:text-4xl md:mt-2 ">{icon.icon}</div>
                                <div className="text-black text-sm md:text-lg ">{icon.title}</div>  
                            </div>
                        ))}    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Project
