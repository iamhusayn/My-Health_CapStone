import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContentBtn from "../../_components/Buttons/ContentBtn";
import SectionHeader from "../../_components/SectionHeader";
import CompanyValue from "@/app/_components/CompanyValue";

export function ValuePage() {
  return (
    <>
      <section className="relative flex justify-center md:h-[800px]">
        <div className="absolute overflow-hidden -z-50">
          <Image
            src="https://res.cloudinary.com/digotb1jl/image/upload/v1730427544/pexels-artempodrez-5716028_fqo0pz.jpg"
            alt="Picture of doctors"
            width={1920}
            height={400}
          />
        </div>
        <header className="flex flex-row justify-center bg-slate-950 bg-opacity-40 h-[270px] md:h-[800px] md:pt-80 pt-28 w-full space-y-2 z-0">
          <div className="text-white text-center w-[52rem] h-[18rem]">
            <SectionHeader
              header="Our Core Values"
              paragraph="At the heart of everything we do are our core values that drive our mission and shape our culture"
            />
          </div>
        </header>
      </section>

      <section className="bg-white lg:h-[900px] p-10 lg:px-40 lg:py-20 gap-10 justify-center lg:overflow-hidden">
        <div className="text-slate-950 text-center">
          <SectionHeader
            header="Company Value"
            paragraph="Why are these our values?"
          />
        </div>
        <CompanyValue />
      </section>

      <section className="bg-slate-950 md:h-[400px] flex flex-col py-8 mb-1 mt-40 pt-14 items-center">
        <div className="flex text-center text-white space-y-4">
          <SectionHeader
            header="Let's deliver exceptional healthcare together"
            paragraph="Our values are the foundation of our company, and they guide us in building meaningful relationships 
            with our clients, partners, and community."
          />
        </div>

        <ContentBtn btnTittle="Get In Touch" href="#" className="pt-8" />
      </section>
    </>
  );
}

export default ValuePage;
