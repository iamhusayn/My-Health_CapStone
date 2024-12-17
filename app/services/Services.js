"use client";

import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import { BsLungsFill } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { CiPill } from "react-icons/ci";
import { CgEyeAlt } from "react-icons/cg";
import { FaBacteria } from "react-icons/fa";
import SectionHeader from "../_components/SectionHeader";




const Services = ({ icon, tittle }) => {
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
      link: { href: "" },
    },

    {
      icon: icon2,
      tittle: "Health Check",
      paragraph:
        "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      link: { href: "" },
    },

    {
      icon: icon3,
      tittle: "Heart Check",
      paragraph:
        "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      link: { href: "" },
    },

    {
      icon: icon4,
      tittle: "Diagnosis",
      paragraph:
        "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      link: { href: "" },
    },

    {
      icon: icon5,
      tittle: "Optical Check",
      paragraph:
        "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      link: { href: "" },
    },

    {
      icon: icon6,
      tittle: "Infections",
      paragraph:
        "Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.",
      link: { href: "" },
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:gird lg:grid-cols-2 items-center justify-center mt-40">
        {" "}
        <SectionHeader
          header="Our Services"
          paragraph="We are here to serve you better"
        />
        <div className="flex flex-col my-10 mx-36 p-24 lg:grid lg:grid-cols-3 gap-20">
          {cards.map((_card, index) => (
            <div
              className="w-full h-full text-black rounded-2xl shadow-lg p-16  cursor-pointer space-y-6"
              key={index}
            >
              <div className="flex flex-col items-center m-auto h-20 w-20 bg-white p-auto rounded-full transition-colors duration-300 ease-in-out transform hover:scale-90">
                {_card.icon}
              </div>
              <h1 className="text-center font-bold text-lg lg:text-3xl">
                {_card.tittle}
              </h1>
              <p className="text-center text-lg lg:text-xl">
                {_card.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </>
  );
};

export default Services;

