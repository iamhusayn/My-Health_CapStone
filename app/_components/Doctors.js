"use client"

// import React from "react";
import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

const Doctors = () => {
  const meetDocs = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg",
      name: "Dr. Adebayo",
      speciality: "Dentist",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1736143247/pexels-carmel-nsenga-735492-19218034_zwbjcw.jpg",
      name: "Dr. Fashina",
      speciality: "Neurologist",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1736143220/pexels-tima-miroshnichenko-5452298_z0uyeh.jpg",
      name: "Dr. Charles",
      speciality: "Medical Psychologist",
    },
    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1736143235/pexels-martins-john-572778471-19596247_r49uro.jpg",
      name: "Dr. Akuyili",
      speciality: "Psychiatrist",
    },

    {
      id: 5,
      imageUrl:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1736143228/pexels-tima-miroshnichenko-5452201_oko72q.jpg",
      name: "Dr. Martins",
      speciality: "Cardiologist",
    },

    {
      id: 6,
      imageUrl:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1736143206/pexels-thirdman-5327656_stsqww.jpg",
      name: "Dr. Ebenezer",
      speciality: "Physiologist",
    },

    // {
    //   id: 7,
    //   imageUrl:
    //     "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg",
    //   name: "Dr. Akuyili",
    //   speciality: "Psychiatrist",
    // },

    // {
    //   id: 8,
    //   imageUrl:
    //     "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg",
    //   name: "Dr. Akuyili",
    //   speciality: "Psychiatrist",
    // },

    // {
    //   id: 9,
    //   imageUrl:
    //     "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg",
    //   name: "Dr. Akuyili",
    //   speciality: "Psychiatrist",
    // },
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
    <div className="min-h-screen w-full flex flex-col justify-center items-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center justify-center mb-10 lg:mb-0">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className="mt-2 text-xl text-center lg:text-start lg:text-2xl">
            Medicare dental services are an essential part of overall healthcare
            for older adults and individuals with disabilities, but they have
            historically been limited in scope under Medicare.
          </p>

          {/* <div className="flex gap-5 mt-4 lg:mt-0">
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
          </div> */}
        </div>
      </div>

      <div className="flex flex-col lg:gird lg:grid-cols-2 justify-center mt-10">
        <div ref={slider} className="my-6 mx-3 lg:grid lg:grid-cols-3 gap-20">
          {meetDocs.map((e, index) => (
            <div
              className="w-[350px] h-[350px] text-black rounded-xl shadow-lg mb-2 cursor-pointer"
              key={index}
            >
              <div className="m-auto h-56 w-1/3">
                <Image src={e.imageUrl} alt="img" width={132} height={132}/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl pt-4">{e.name}</h1>
                <h3 className="font-semibold text-xl pt-2">{e.speciality}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
