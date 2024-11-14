"use client"

// import React from "react";
import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CldImage } from "next-cloudinary";

const Doctors = () => {
  const meetDocs = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg",
      name: "Dr. Awilo",
      speciality: "Dentist",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg",
      name: "Dr. Fashina",
      speciality: "Neurologist",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg",
      name: "Dr. Charles",
      speciality: "Medical Psychologist",
    },
    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg",
      name: "Dr. Akuyili",
      speciality: "Psychiatrist",
    },
  ];

  const slider = useRef(null);

  // const settings = {
  //   accessibility: true,
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   arrows: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1023,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Medicare dental services are an essential part of overall healthcare
            for older adults and individuals with disabilities, but they have
            historically been limited in scope under Medicare.
          </p>
          <div className="flex gap-5 mt-4 lg:mt-0">
            <button
              className="bg-slate-500 text-white px-4 py-2 rounded-lg active:bg-slate-800"
              onClick={() => slider.current.slickPrev()}
            >
              <FaArrowLeft size={25} />
            </button>
            <button
              className="bg-slate-500 text-white px-4 py-2 rounded-lg active:bg-slate-800"
              onClick={() => slider.current.slickNext()}
            >
              <FaArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div ref={slider} className="my-0 mx-3">
          {meetDocs.map((e, index) => (
            <div
              className="h-[350px] text-black rounded -xl shadow-lg mb-2 cursor-pointer"
              key={index}
            >
              <div className="h-56 rounded-t-2xl w-full">
                <img src={e.img} alt="img" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className="pt-2">{e.speciality}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
