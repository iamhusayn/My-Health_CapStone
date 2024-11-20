import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center lg:px-32 px-5 pt-60 lg:pt-16 text-slate-950 bg-no-repeat bg-cover opacity-80">
      <div className="w-full lg:w-3/4 space-y-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-center">
          About Us
        </h1>

        <p className="text-justify lg:text-start text-lg lg:text-xl">
          After witnessing and experiencing the lack of support that exists for
          so many as they build and raise their families, Kate Ryder founded
          MediCare in 2014, envisioning a new kind of care—one that puts women
          and families at the center.
        </p>
        <p className="text-justify lg:text-start text-lg lg:text-xl">
          After witnessing and experiencing the lack of support that exists for
          so many as they build and raise their families, Kate Ryder founded
          MediCare in 2014, envisioning a new kind of care—one that puts women
          and families at the center.
        </p>
        <p className="text-justify lg:text-start text-lg lg:text-xl">
          After witnessing and experiencing the lack of support that exists for
          so many as they build and raise their families, Kate Ryder founded
          MediCare in 2014, envisioning a new kind of care—one that puts women
          and families at the center.
        </p>
        <p className="text-justify lg:text-start text-lg lg:text-xl">
          After witnessing and experiencing the lack of support that exists for
          so many as they build and raise their families, Kate Ryder founded
          MediCare in 2014, envisioning a new kind of care—one that puts women
          and families at the center.
        </p>
      </div>
      <div className="w-full pt-10 lg:pt-16 lg:items-center">
        <Image
          src="https://res.cloudinary.com/digotb1jl/image/upload/v1730435396/pexels-kampus-7492987_icichy.jpg"
          alt="image"
          width={800}
          height={800}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
