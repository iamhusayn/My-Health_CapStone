import React from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import HeroSession from "../_components/HeroSession";
import About from "../about/About";
import Services from "../services/page";
import Doctors from "../_components/Doctors";
import Blog from "../blog/Blog";
import HeaderBtn from "../_components/Buttons/HeaderBtn";

export function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute -z-100">
          <Image
            src="https://res.cloudinary.com/digotb1jl/image/upload/v1730398708/pexels-cristian-rojas-8460371_ox25dp.jpg"
            alt="Picture of doctors"
            width={1960}
            height={100}
          />
        </div>
        <div className="">
          <HeroSession
            heroheader="WELCOME TO MEDICARE"
            heroparagraph="Providing clinical, financial, and emotional support through the most vulnerable and joyful life stages"
          />
        </div>
      </div>

      <About />

      <Services />

      <Doctors />

      <Blog />
    </>
  );
}

export default Home;
