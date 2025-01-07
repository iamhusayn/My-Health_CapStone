import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContentBtn from "../_components/Buttons/ContentBtn";
import HeroTag from "../_components/HeroTag";
import ValuePage from "./value/page";

const AboutPage = () => {
  return (
    <>
      <section className="relative flex justify-center md:h-[800px]">
        <div className="absolute overflow-hidden -z-50">
          <Image
            src="https://res.cloudinary.com/digotb1jl/image/upload/v1730431352/pexels-jonathanborba-3279203_dopwnh.jpg"
            alt="Picture of doctors"
            width={1920}
            height={400}
          />
        </div>
        <div className="bg-slate-950 bg-opacity-40 w-full min-h-full">
          <header className="flex flex-row justify-center h-[322px] lg:h-[800px] lg:pt-80 lg:w-full w-3/4 pt-40 space-y-2 m-auto">
            <div className="text-white text-center w-[52rem] h-[18rem]">
              <HeroTag
                heroheader="Have you heard about us?"
                heroparagraph="We’re on a mission to make healthcare work for all of us"
              />
            </div>
          </header>
        </div>
      </section>

      <div className="bg-white h-full w-full">
        <h1 className="font-extrabold text-6xl text-slate-950 text-center pt-60 lg:pt-20">
          Our Story
        </h1>
        <div className="flex flex-col items-center lg:flex-row justify-center gap-10 m-10">
          <div className="bg-slate-950 w-full lg:max-w-[800px] space-y-4 p-12 m-6 rounded-lg">
            <h1 className="font-bold text-2xl lg:text-4xl text-white">
              Relentlessly focused on closing gaps in care for women and
              families
            </h1>
            <p className="text-lg lg:text-xl text-white">
              After witnessing and experiencing the lack of support that exists
              for so many as they build and raise their families, Kate Ryder
              founded Maven in 2014, envisioning a new kind of care—one that
              puts women and families at the center.
              <br></br>
              <br></br>
              The MediCare team is built of clinical leaders, engineers,
              designers, and operators who collaborate to deliver localized
              support to members in 175 countries.
              <br></br>
              <br></br>
              MediCare partners with more than 2,000 employers and health plans
              to deliver personalized care and intuitive benefit management to
              members around the world. As individuals continue to face barriers
              to care, including limited access to providers, rising costs,
              systemic inequities, and legal and regulatory limitations, we show
              up when our members need us most.
              <br></br>
              <br></br>
              To every member. Through every journey.
              <br></br>
              <br></br>
              We’re with you.{" "}
            </p>
          </div>

          <div className="flex md:flex-row bg-slate-950 rounded-lg">
            <Image
              src="https://res.cloudinary.com/digotb1jl/image/upload/v1730435396/pexels-kampus-7492987_icichy.jpg"
              alt="Picture of children"
              width={200}
              height={300}
              className="relative p-4 lg:w-full lg:h-[560px] space-y-6 rounded-xl"
            />
            <Image
              src="https://res.cloudinary.com/digotb1jl/image/upload/v1730435387/pexels-rdne-6182527_kpte0u.jpg"
              alt="Picture of children"
              width={200}
              height={300}
              className="relative p-4 lg:hidden space-y-6 rounded-lg"
            />
          </div>
        </div>
      </div>


      <ValuePage />

      
    </>
  );
};

export default AboutPage;
