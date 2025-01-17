import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import { BsLungsFill } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import HeaderBtn from "../_components/Buttons/HeaderBtn";
import ServicesCard from "../_components/ServicesCard";
import Image from "next/image";
import HeroTag from "../_components/HeroTag";
import SectionHeader from "../_components/SectionHeader";

const page = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-background" />;
  const icon2 = <FaHeartbeat size={35} className="text-background" />;
  const icon3 = <BsLungsFill size={35} className="text-background" />;
  return (
    <>
      <section className="relative flex justify-center md:h-[800px] overflow-hidden ">
        <div className="absolute overflow-hidden -z-50">
          <Image
            src="https://res.cloudinary.com/digotb1jl/image/upload/v1730430547/pexels-zeoxs-11661531_oo4n5r.jpg"
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


      <ServicesCard />
    </>
  );
};

export default page;
