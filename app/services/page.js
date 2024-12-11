import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import { BsLungsFill } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import HeaderBtn from "../_components/Buttons/HeaderBtn";
import ServicesCard from "../_components/ServicesCard";
import Image from "next/image";
import HeroTag from "../_components/HeroTag";

const page = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-background" />;
  const icon2 = <FaHeartbeat size={35} className="text-background" />;
  const icon3 = <BsLungsFill size={35} className="text-background" />;
  return (
    <>
      <section className="relative flex justify-center md:h-[800px]">
        <div className="absolute overflow-hidden -z-50">
          <Image
            src="https://res.cloudinary.com/digotb1jl/image/upload/v1730431352/pexels-jonathanborba-3279203_dopwnh.jpg"
            alt="Picture of doctors"
            width={1920}
            height={400}
          />
        </div>
        <div className="bg-slate-950 bg-opacity-40 w-full min-h-full">
          <header className="flex flex-row justify-center h-[322px] lg:h-[800px] lg:pt-80 lg:w-full w-3/4 pt-40 space-y-2 m-auto">
            <div className="text-white text-center w-[52rem] h-[18rem]">
              <HeroTag
                heroheader="Our Services"
                heroparagraph="Choose from our wide range of services"
              />
            </div>
          </header>
        </div>
      </section>
      
      <div className="min-h-screen w-full flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
        <div className="flex flex-col items-center lg:flex-col justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-center lg:text-start">
              Our Services
            </h1>
            <p className="mt-2 text-center lg:text-start">
              Medicare dental services are an essential part of overall
              healthcare for older adults and individuals with disabilities, but
              they have historically been limited in scope under Medicare.
            </p>
            <div className="mt-4 lg:mt-0">
              <HeaderBtn btnTittle= "Check Our Services" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 pt-14">
            <ServicesCard icon={icon1} tittle="Lab Test" />
            <ServicesCard icon={icon2} tittle="Health Check" />
            <ServicesCard icon={icon3} tittle="Heart Check" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
