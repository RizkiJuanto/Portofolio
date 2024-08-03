import React from 'react'
import Slider from "react-slick";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tavherine from '../assets/img/Logo_Tavherine.png'
import Tcp from '../assets/img/Logo_Tcp.jpeg'
import Gli from '../assets/img/Logo_GLI.png'
import Binus from '../assets/img/Logo_Binus.png'
import Harisenin from '../assets/img/harisenin.png'
import SertifGli from '../assets/img/Gli_Intern.jpg'
import SertifHsBootcamp from '../assets/img/Hs_Bootcamp.jpg'
import SertifDaa from '../assets/img/Sertif_Daa.jpg'
import SertifSg from '../assets/img/Sertif_SG.jpg'
import SertifToefel from '../assets/img/Sertif_Toefel.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { SamplePrevArrow, SampleNextArrow } from '../componentsCustomArrows';

const About = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed:3000
        // nextArrow: <SampleNextArrow />,  // use custom next arrow
        // prevArrow: <SamplePrevArrow />   // use custom prev arrow
    };

  return (
    <div>
      <div className="min-h-screen flex flex-col min-fit">
        <Navbar/>
        <div className="flex flex-grow flex-col mx-5 py-3 md:mt-24 md:mx-20">
            <div className="flex justify-center text-2xl mb-3 text-secondary lg:text-4xl">About</div>
            <hr className='mb-5 border border-secondary'/>
            <div className="">
                <div className="w-full h-full px-10 items-center">
                <div className="mb-5 md:text-xl border-b-2 border-secondary w-fit lg:text-2xl ml-3">Sertificate</div>
                <Slider {...settings}>
                    <div className="">
                        <img className="w-full h-full p-16 lg:px-40" src={SertifGli} alt="" />
                    </div>
                    <div className="">
                        <img className="w-full h-full p-16 lg:px-40" src={SertifHsBootcamp} alt="" />
                    </div>
                    <div className="">
                        <img className="w-full h-full p-16 lg:px-40" src={SertifDaa} alt="" />
                    </div>
                    <div className="">
                        <img className="w-full h-full p-16 lg:px-40" src={SertifSg} alt="" />
                    </div>
                    <div className="">
                        <img className="w-full h-full p-16 lg:px-40" src={SertifToefel} alt="" />
                    </div>
                </Slider>
                </div>
                {/* experience */}
                <div className="w-full px-10 ">
                    <div className="mb-5 md:text-xl border-b-2 border-secondary w-fit lg:text-2xl ml-3">Resume</div>
                    <div className="border-2 mb-7 rounded-xl border-secondary p-3 hover:shadow-xl hover:-translate-y-2 hover:border-secondary hover:shadow-secondary transition-all text-xs md:text-sm bg-white text-primary">
                        <div className="w-full h-full flex justify-end">
                            <img className='absolute w-16 h-16 md:w-20 md:h-20 rounded-full z-0' src={Tavherine} alt="" />
                        </div>
                        <div className="font-semibold text-secondary mb-3 md:text-lg lg:text-xl">Online Shop Owner - Tavherine
                            <div className="text-primary md:text-sm lg:text-base italic">August 2023 - May 2024</div>
                        </div>
                        <div className="mb-3"><span className='font-semibold'>Position : </span>Owner</div>
                        <div className="">
                            <ul className='list-disc pl-4 lg:text-base'>
                                <li>Build Teamwork</li>
                                <li>Marketing Product , Make a design, Advertising at market place</li>
                                <li>Manage the supplies, monitoring packaging process product and send the package to delivery service.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-2 mb-7 rounded-xl border-secondary p-3 hover:shadow-xl hover:-translate-y-2 hover:border-secondary hover:shadow-secondary transition-all text-xs md:text-sm bg-white text-primary">
                        <div className="w-full h-full flex justify-end">
                            <img className='absolute w-14 h-10 md:w-24 md:h-20 z-0 ' src={Tcp} alt="" />
                        </div>
                        <div className="font-semibold text-secondary mb-3 md:text-lg lg:text-xl">PT. Tunas Cahaya Pratama
                            <div className="text-primary md:text-sm lg:text-base italic">April 2021 - February 2024</div>
                        </div>
                        <div className="mb-3"><span className='font-semibold'>Position : </span>Employee, Sales of Marketing</div>
                        <div className="">
                            <ul className='list-disc pl-4 lg:text-base'>
                                <li>Responsibility on company Permits and Certification</li>
                                <li>Sales marketing BUMN like PERTAMINA.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-2 mb-7 rounded-xl border-secondary p-3 hover:shadow-xl hover:-translate-y-2 hover:border-secondary hover:shadow-secondary transition-all text-xs md:text-sm bg-white text-primary">
                        <div className="w-full h-full flex justify-end">
                            <img className='absolute w-24 h-16 md:w-36 md:h-24 rounded-full z-0 ' src={Gli} alt="" />
                        </div>
                        <div className="font-semibold text-secondary mb-3 md:text-lg lg:text-xl">PT. Global Loyalty Indonesia
                            <div className="text-primary md:text-sm lg:text-base italic">March 2022 - February 2023</div>
                        </div>
                        <div className="mb-3"><span className='font-semibold'>Position : </span>IT Infrastructure , Intern</div>
                        <div className="">
                            <ul className='list-disc pl-4 lg:text-base'>
                                <li>Responsibility on Monitoring Server.</li>
                                <li>Participated create backend configuration using Java with springboot framework.</li>
                                <li>Create database, maintenance database, backup database, Monitoring Server,</li>
                                <li>Cooperate with Senior sharing and Collaboration.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-2 mb-7 rounded-xl border-secondary p-3 hover:shadow-xl hover:-translate-y-2 hover:border-secondary hover:shadow-secondary transition-all text-xs md:text-sm bg-white text-primary">
                        <div className="font-semibold text-secondary mb-3 md:text-lg lg:text-xl">Online Shop Owner Koala Store
                            <div className="text-primary md:text-sm lg:text-base italic">April 2021 - February 2024</div>
                        </div>
                        <div className="mb-3"><span className='font-semibold'>Position : </span>Owner</div>
                        <div className="">
                            <ul className='list-disc pl-4 lg:text-base'>
                                <li>Build Teamwork</li>
                                <li>Marketing Product , Make a design, Advertising at market place</li>
                                <li>Manage the supplies, monitoring packaging process product and send the package to delivery service.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* education */}
                <div className="w-full px-10 ">
                    <div className="mb-5 md:text-xl border-b-2 border-secondary w-fit lg:text-2xl ml-3">Education</div>
                    <div className="border-2 mb-7 rounded-xl border-secondary p-3 hover:shadow-xl hover:-translate-y-2 hover:border-secondary hover:shadow-secondary transition-all text-xs md:text-sm bg-white text-primary">
                        <div className="w-full h-full flex justify-end">
                            <img className='absolute w-16 h-8 md:w-24 md:h-14  z-0' src={Binus} alt="" />
                        </div>
                        <div className="font-semibold text-secondary mb-3 md:text-lg lg:text-xl">
                            <div className="">Binus University</div>
                            <div className="text-primary md:text-sm lg:text-base italic">2019 - 2023</div>
                            <div className="text-primary md:text-sm lg:text-base">Bachelor <span className='text-secondary'>Computer Science</span> | IPK: <span className='text-secondary'>3.17 / 4.00</span></div>
                        </div>
                        <div className="">
                            <ul className='list-disc pl-4 lg:text-base'>
                                <li><span className='text-secondary'>Thesis : </span>Development of Alfagift E-Grocery Application and Additional Features Managing Product Using Website-Based
                                Spring Boot Technology</li>
                                <li><span className='text-secondary'>Relevant Course Works :</span> HTML, CSS, Bootstrap, Springboot, Database and Java.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* sertificate */}
                <div className="w-full px-10 ">
                    <div className="mb-5 md:text-xl border-b-2 border-secondary w-fit lg:text-2xl ml-3">Training</div>
                    <div className="border-2 mb-7 rounded-xl border-secondary p-3 hover:shadow-xl hover:-translate-y-2 hover:border-secondary hover:shadow-secondary transition-all text-xs md:text-sm bg-white text-primary">
                        <div className="w-full h-full flex justify-end">
                            <img className='absolute w-28 h-4 md:w-36 md:h-6  z-0' src={Harisenin} alt="" />
                        </div>
                        <div className="font-semibold text-secondary mb-3 md:text-lg lg:text-xl">
                            <div className="">Harisenin.com</div>
                            <div className="text-primary md:text-sm lg:text-base italic">February 2024 - Juli 2024</div>
                            <div className="text-primary md:text-sm lg:text-base">Full Stack Developer</div>
                        </div>
                        <div className="">
                            <ul className='list-disc pl-4 lg:text-base'>
                                <li><span className='text-secondary'>Project: </span>Cloning Tokopedia Website</li>
                                <li><span className='text-secondary'>Relevant Course Works :</span> HTML, CSS, Javascript, Tailwindcss, ReactJs, Typescript, Express.Js Postgresql, etc.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default About
