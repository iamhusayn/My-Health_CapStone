'use client'

import React from 'react'
import HeaderBtn from './Buttons/HeaderBtn';
import { RiMicroscopeLine } from "react-icons/ri";
import { BsLungsFill } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";

const ServicesCard = ({icon, tittle}) => {
  const icon1 = <RiMicroscopeLine size={35} className="text-background" />;
  const icon2 = <FaHeartbeat size={35} className="text-background" />;
  const icon3 = <BsLungsFill size={35} className="text-background" />;

  const cards = [
    {
      icon: icon1,
      tittle: "Lab Test",
      paragraph: "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      link: {href:""}

    },

    {
      icon: icon2,
      tittle: "Health Check",
      paragraph: "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      link: {href:""}
    },

    {
      icon: icon3,
      tittle: "Heart Check",
      paragraph: "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      link: {href:""}
    },
  ]

  return (
    <><div className="flex flex-col lg:gird lg:grid-cols-2 justify-center mt-10">
      <div className="flex flex-row justify-center items-center my-6 mx-3 lg:grid lg:grid-cols-3 gap-20">
        {cards.map((_card, index) => (
          <div
            className="w-[350px] h-[350px] text-black rounded-xl shadow-lg mb-2 cursor-pointer"
            key={index}
          >
            <div className="m-auto h-56 w-40">
            {_card.icon}
            </div>
            <h1 className="font-bold text-lg">{_card.tittle}</h1>
            <p>{_card.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="flex flex-col lg:gird lg:grid-cols-3 justify-center mt-10">
        <div className="flex flex-col lg:grid-cols-3 items-center text-center gap-10 w-full lg:w-1/3 p-10 rounded-md cursor-pointer shadow-xl lg:hover-translate-y-6 transition duration-300 ease-in-out">
          {cards.map((_card, index) => (
            <div key={index} className="flex flex-col items-center gap-10 pt-14">
              <div className="bg-white p-3 rounded-full transition-colors duration-300 ease-in-out hover:bg-slate-500">
                {_card.icon}
              </div>
              <h1 className="font-bold text-lg">{_card.tittle}</h1>
              <p>{_card.paragraph}</p>
              {/* <button className="cursor-pointer hover:text-green-800 transition duration-300 ease-in-out">Learn More{_card.link}</button> */}
              <HeaderBtn
                btnTittle="Learn More"
                className="cursor-pointer hover:text-green-800 transition duration-300 ease-in-out" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicesCard