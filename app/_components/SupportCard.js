import React from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

const SupportCard = () => {
  const support = [
    {
      header: "Unparalleled Access",
      paragraph: "On-demand virtual specialists—including reproductive endocrinologists, doulas, and mental health providers—to support clinical, emotional, and financial needs.",
      number: "01",
      url: "https://res.cloudinary.com/digotb1jl/image/upload/v1730449877/pexels-cottonbro-5722156_yx1ilm.jpg",
    },

    {
      header: "Unparalleled Access",
      paragraph: "On-demand virtual specialists—including reproductive endocrinologists, doulas, and mental health providers—to support clinical, emotional, and financial needs.",
      number: "02",
      url: "https://res.cloudinary.com/digotb1jl/image/upload/v1730449877/pexels-cottonbro-5722156_yx1ilm.jpg",
    },

    {
      header: "Unparalleled Access",
      paragraph: "On-demand virtual specialists—including reproductive endocrinologists, doulas, and mental health providers—to support clinical, emotional, and financial needs.",
      number: "03",
      url: "https://res.cloudinary.com/digotb1jl/image/upload/v1730449877/pexels-cottonbro-5722156_yx1ilm.jpg",
    },

    {
      header: "Unparalleled Access",
      paragraph: "On-demand virtual specialists—including reproductive endocrinologists, doulas, and mental health providers—to support clinical, emotional, and financial needs.",
      number: "04",
      url: "https://res.cloudinary.com/digotb1jl/image/upload/v1730449877/pexels-cottonbro-5722156_yx1ilm.jpg",
    },

    {
      header: "Unparalleled Access",
      paragraph: "On-demand virtual specialists—including reproductive endocrinologists, doulas, and mental health providers—to support clinical, emotional, and financial needs.",
      number: "05",
      url: "https://res.cloudinary.com/digotb1jl/image/upload/v1730449877/pexels-cottonbro-5722156_yx1ilm.jpg",
    },
  ]


  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16 h-[800px] w-full mt-16">
        {support.map((card, index) => (
          <div key={index} className="flex flex-col lg:flex-row px-10 lg:px-28 w-full h-full gap-10">
            <div className="flex lg:flex-col text-slate-950 lg:px-40">
              <div className="flex flex-col space-y-8">
                <h1 className="font-bold text-2xl lg:text-4xl">{card.header}</h1>
                <p className="text-lg lg:text-2xl">{card.paragraph}</p>
              </div>
              <div className="lg:mt-20">
                <h1 className="font-extrabold text-8xl lg:text-9xl">
                  {card.number}
                </h1>
              </div>
            </div>
            <div>
              <Image
                src={card.url}
                alt="Why Join Us"
                width={400}
                height={220}
                className="lg:w-[2000px] lg:h-[600px] rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SupportCard;
