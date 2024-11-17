import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroSession from "../_components/HeroSession";
import ContentBtn from "../_components/Buttons/ContentBtn";

const AboutPage = () => {
  return (
    <>
      <section className="relative flex justify-center h-[800px]">
        <div className="absolute -z-50">
          <Image
            src="https://res.cloudinary.com/digotb1jl/image/upload/v1730431352/pexels-jonathanborba-3279203_dopwnh.jpg"
            alt="Picture of doctors"
            width={1920}
            height={400}
          />
        </div>
        <header className="flex flex-row justify-center bg-slate-950 bg-opacity-40 h-[800px] w-full pt-80 space-y-2 z-0">
          <div className="text-white text-center w-[52rem] h-[18rem] z-30">
            <HeroSession heroparagraph="We’re on a mission to make healthcare work for all of us" />
            <div className="text-white">
              <ContentBtn btnTittle="Explore our solutions" />
            </div>
          </div>
        </header>
      </section>

      <div className="bg-white h-[84rem] w-full overflow-hidden">
        <h1 className="font-extrabold text-6xl text-slate-950 text-center mt-10">
          Our Story
        </h1>
        <div className="flex justify-center gap-20 mt-10">
          <div className="bg-slate-950 w-[50rem] space-y-10 p-24 rounded-lg">
            <h1 className="font-bold text-4xl text-white">
              Relentlessly focused on closing gaps in care for women and
              families
            </h1>
            <p className="text-2xl text-white">
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

          <div className=" bg-slate-950 rounded-lg">
            <div className="relative bg-slate-950 p-4 space-y-6 rounded-lg">
              <Image
                src="https://res.cloudinary.com/digotb1jl/image/upload/v1730435396/pexels-kampus-7492987_icichy.jpg"
                alt="Picture of children"
                width={500}
                height={500}
              />
            </div>
            <div className="relative bg-slate-950 p-4 space-y-6 rounded-lg">
              <Image
                src="https://res.cloudinary.com/digotb1jl/image/upload/v1730435387/pexels-rdne-6182527_kpte0u.jpg"
                alt="Picture of children"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
