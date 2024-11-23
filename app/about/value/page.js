import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContentBtn from "../../_components/Buttons/ContentBtn";
import SectionHeader from "../../_components/SectionHeader";

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

      <section className="bg-white md:h-[900px] p-10 md:px-40 md:py-20 gap-10 justify-center md:overflow-hidden">
        <div className="text-slate-950 text-center">
          <SectionHeader
            header="Company Value"
            paragraph="Why are these our values?"
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-14 py-16">
          <div className="bg-slate-950 w-96 lg:w-[700px] lg:h-[300px] rounded-lg p-12 space-y-4">
            <h3 className="text-white text-2xl lg:text-4xl">
              <strong>Trust:</strong>
            </h3>
            <p className="text-white text-lg lg:text-2xl">
              Central to MediCare's mission is trust. We believe in cultivating
              trust-filled relationships that serve as the bedrock for enduring
              partnerships.
            </p>
          </div>

          <div className="bg-slate-950 w-96 lg:w-[700px] lg:h-[300px] rounded-lg p-12 space-y-4">
            <h3 className="text-white text-2xl lg:text-4xl">
              <strong>Innovation:</strong>
            </h3>
            <p className="text-white text-lg md:text-2xl">
              We are committed to creative solutions and embracing new
              technologies.
            </p>
          </div>

          <div className="bg-slate-950 w-96 md:w-[700px] md:h-[300px] rounded-lg p-12 space-y-4">
            <h3 className="text-white text-2xl md:text-4xl">
              <strong>Customer Focus:</strong>
            </h3>
            <p className="text-white text-lg md:text-2xl">
              We prioritize our clients' needs and strive for excellence in all
              interactions.
            </p>
          </div>

          <div className="bg-slate-950 w-96 md:w-[700px] md:h-[300px] rounded-lg p-12 space-y-4">
            <h3 className="text-white text-2xl md:text-4xl">
              <strong>Integrity:</strong>
            </h3>
            <p className="text-white text-lg md:text-2xl">
              We uphold honesty and strong moral principles in every decision we
              make.
            </p>
          </div>

          <div className="bg-slate-950 w-96 md:w-[700px] md:h-[300px] rounded-lg p-12 space-y-4">
            <h3 className="text-white text-2xl md:text-4xl">
              <strong>Collaboration:</strong>
            </h3>
            <p className="text-white text-lg md:text-2xl">
              We believe that teamwork and open communication lead to the best
              results.
            </p>
          </div>

          <div className="bg-slate-950 w-96 md:w-[700px] md:h-[300px] rounded-lg p-12 space-y-4">
            <h3 className="text-white text-2xl md:text-4xl">
              <strong>Quality:</strong>
            </h3>
            <p className="text-white text-lg md:text-2xl">
              We are dedicated to delivering top-notch products and services.
            </p>
          </div>
        </div>
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
