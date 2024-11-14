import HeaderBtn from '@/app/_components/Buttons/HeaderBtn';
import ServicesCard from '@/app/_components/ServicesCard';
import React from 'react'
import { RiMicroscopeLine } from "react-icons/ri";
import { BsLungsFill } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";




const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-background"/>
  const icon2 = <FaHeartbeat size={35} className="text-background"/>
  const icon3 = <BsLungsFill size={35} className="text-background"/>
  return (
    <div className='min-h-screen w-full flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16'>
      <div className='flex flex-col items-center lg:flex-row justify-between'>
        <div>
          <h1 className='text-4xl font-semibold text-center lg:text-start'>Our Services</h1>
          <p className='mt-2 text-center lg:text-start'>
            Medicare dental services are an essential part of overall healthcare
            for older adults and individuals with disabilities, but they have
            historically been limited in scope under Medicare.
          </p>
          <div className='mt-4 lg:mt-0'>
            <HeaderBtn btnTittle={"Check Our Services"}/>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-5 pt-14'>
          <ServicesCard icon={icon1} tittle="Lab Test"/>
          <ServicesCard icon={icon2} tittle="Health Check"/>
          <ServicesCard icon={icon3} tittle="Heart Check"/>
        </div>
      </div>
    </div>
  );
}

export default Services