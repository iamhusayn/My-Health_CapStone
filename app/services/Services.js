import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import { BsLungsFill } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import HeaderBtn from "../_components/Buttons/HeaderBtn";
import ServicesCard from "../_components/ServicesCard";
import SectionHeader from "../_components/SectionHeader";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-background" />;
  const icon2 = <FaHeartbeat size={35} className="text-background" />;
  const icon3 = <BsLungsFill size={35} className="text-background" />;
  
  return (
    <div className="min-h-screen w-full flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-col justify-between">
        <div className="flex flex-col mt-4 lg:mt-0 items-center justify-center gap-10">
          <SectionHeader
            header="Our Services"
            paragraph="Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare."
          />
          <HeaderBtn btnTittle="Check Our Services" 
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-5 pt-14">
          <ServicesCard icon={icon1} tittle="Lab Test" />
          <ServicesCard icon={icon2} tittle="Health Check" />
          <ServicesCard icon={icon3} tittle="Heart Check" />
          <ServicesCard icon={icon1} tittle="Lab Test" />
          <ServicesCard icon={icon2} tittle="Health Check" />
          <ServicesCard icon={icon3} tittle="Heart Check" />
        </div>
      </div>
    </div>
  );
};

export default Services;
