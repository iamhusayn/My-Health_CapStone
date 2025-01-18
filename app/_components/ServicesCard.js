"use client";

import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import { BsLungsFill } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { CiPill } from "react-icons/ci";
import { CgEyeAlt } from "react-icons/cg";
import { FaBacteria } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import Link from "next/link";




const ServicesCard = ({ icon, tittle }) => {
  const icon1 = <RiMicroscopeLine size={35} className="text-background" />;
  const icon2 = <FaHeartbeat size={35} className="text-background" />;
  const icon3 = <BsLungsFill size={35} className="text-background" />;
  const icon4 = <CiPill size={35} className="text-background" />;
  const icon5 = <CgEyeAlt size={35} className="text-background" />;
  const icon6 = <FaBacteria size={35} className="text-background" />;

  const cards = [
    {
      icon: icon1,
      tittle: "Lab Test",
      paragraph:
        "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      
    },

    {
      icon: icon2,
      tittle: "Health Check",
      paragraph:
        "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      
    },

    {
      icon: icon3,
      tittle: "Heart Check",
      paragraph:
        "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      
    },

    {
      icon: icon4,
      tittle: "Diagnosis",
      paragraph:
        "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      
    },

    {
      icon: icon5,
      tittle: "Optical Check",
      paragraph:
        "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",

    },

    {
      icon: icon6,
      tittle: "Infections",
      paragraph:
        "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:gird lg:grid-cols-2 items-center justify-center mt-20 gap-10 lg-px-20 px-10">
        {" "}
        <SectionHeader
          header="Our Services"
          paragraph="We are here to serve you better"
        />
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-20 lg-px-28 ">
          {cards.map((_card, index) => (
            <div
              className="text-black rounded-2xl shadow-lg p-14 cursor-pointer space-y-4"
              key={index}
            >
              <div className="flex flex-col items-center m-auto h-12 w-24 bg-white p-auto rounded-full transition-colors duration-300 ease-in-out transform hover:scale-90">
                {_card.icon}
              </div>
              <h1 className="text-center font-bold text-2xl lg:text-3xl">
                {_card.tittle}
              </h1>
              <p
                className="text-center text-xl lg:text-2xl"
                href={`/services/${_card.paragraph}`}
              >
                {_card.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
