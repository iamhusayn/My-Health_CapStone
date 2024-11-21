import React from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

const SupportCard = ({ header, paragraph, number }) => {
  return (
    <>
      <div className="h-[800px] w-full mt-16">
        <div className="flex flex-col lg:flex-row px-10 lg:px-28 w-full h-full gap-10">
          <div className="flex lg:flex-col text-slate-950 lg:p-40">
            <div className="flex flex-col space-y-4">
              <h1 className="font-bold text-2xl lg:text-4xl">{header}</h1>
              <p className="text-lg lg:text-2xl">{paragraph}</p>
            </div>
            <div className="lg:mt-20">
              <h1 className="font-extrabold text-8xl lg:text-9xl">{number}</h1>
            </div>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/digotb1jl/image/upload/v1730449877/pexels-cottonbro-5722156_yx1ilm.jpg"
              alt="Why Join Us"
              width={400}
              height={220}
              className="lg:w-[2000px] lg:h-[600px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportCard;
