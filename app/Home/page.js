import React from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import HeroSession from "../_components/HeroTag";
import About from "../about/About";
import Services from "../services/Services";
import Doctors from "../_components/Doctors";
import Blog from "../blog/Blog";
import HeaderBtn from "../_components/Buttons/HeaderBtn";
import HeroTag from "../_components/HeroTag";
import SupportCard from "../_components/SupportCard";
import SectionHeader from "../_components/SectionHeader";
import Reviews from "../_components/Review";

export function Home() {
  return (
    <>
      <section className="relative flex justify-center lg:h-[800px]">
        <div className="absolute overflow-hidden -z-50">
          <Image
            src="https://res.cloudinary.com/digotb1jl/image/upload/v1730398708/pexels-cristian-rojas-8460371_ox25dp.jpg"
            alt="Picture of doctors"
            width={1960}
            height={100}
            className="lg:w-[1900px] lg:h-[800px]"
          />
        </div>
        <div className="bg-slate-950 bg-opacity-40 w-full min-h-full lg:overflow-hidden">
          <header className="flex flex-row justify-center h-[322px] lg:h-[800px] lg:pt-80 lg:w-full w-3/4 pt-40 space-y-2 m-auto">
            <div className="text-white text-center w-[52rem] h-[18rem]">
              <HeroTag
                heroheader="Welcome to MediCare"
                heroparagraph="We help you through the most vulnerable and joyful life stages"
              />
            </div>
          </header>
        </div>
      </section>

      <section className="items-center mt-80 lg:mt-28">
        <SectionHeader header="An end-to-end platform supporting members in 175+ countries" />
        <SupportCard
          header="Unparalleled Access"
          paragraph="On-demand virtual specialists—including reproductive endocrinologists, doulas, and mental health providers—to support clinical, emotional, and financial needs."
          number="01"
        />
      </section>

      <session className="pt-60">
        <About />
      </session>

      <Services />

      <Doctors />

      <Reviews />

      <Blog />
    </>
  );
}

export default Home;
