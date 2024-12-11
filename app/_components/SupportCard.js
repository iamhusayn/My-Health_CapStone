"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const SupportCard = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, 
    [Autoplay(360000)]
    );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const support = [
    {
      header: "Unparalleled Access",
      paragraph:
        "On-demand virtual specialists—including reproductive endocrinologists, doulas, and mental health providers—to support clinical, emotional, and financial needs.",
      number: "01",
      url: "https://res.cloudinary.com/digotb1jl/image/upload/v1730449877/pexels-cottonbro-5722156_yx1ilm.jpg",
    },

    {
      header: "Fertility & Family Building",
      paragraph:
        "MediCare guides members on the quickest, safest, and most affordable path to bringing home a healthy baby through high-quality fertility care and transparent coverage—no matter how they choose to build their families.",
      number: "02",
      url: "https://res.cloudinary.com/digotb1jl/image/upload/v1732944969/fertility_support_2_u0lmom.webp",
    },

    {
      header: "Maternity & Newborn Care",
      paragraph:
        "From pregnancy through postpartum and return to work, members receive personalized, 24/7 care from OB-GYNs, doulas, lactation consultants, career coaches, and more. Maven is the only solution that delivers a continuous experience with third-party validated maternity outcomes and up to 4x ROI.",
      number: "03",
      url: "https://res.cloudinary.com/digotb1jl/image/upload/v1732944969/maternity-newborn-care-2_gdup6z.webp",
    },

    {
      header: "Parenting & Pediatrics",
      paragraph:
        "MediCare makes being a working parent easier by providing 24/7 access to pediatric care, parenting experts, guided curriculums, special needs support, childcare resources, and more.",
      number: "04",
      url: "https://res.cloudinary.com/digotb1jl/image/upload/v1732944969/slide-familly-p-1080_xgiyjp.webp",
    },

    {
      header: "Menopause & Midlife Health",
      paragraph:
        "MediCare helps members in midlife thrive personally and professionally by providing holistic menopause benefits for their physical, emotional, and sexual health through 24/7 access to specialists, prescriptions, communities, and more.",
      number: "05",
      url: "https://res.cloudinary.com/digotb1jl/image/upload/v1732944969/menopause-ongoing-care-2_lello3.webp",
    },
  ];

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex flex-row gap-16 h-full w-full mt-16">
            {support.map((card, index) => (
              <div
                key={index}
                className="embla__slide flex flex-col lg:flex-row px-10 lg:px-28 lg:space-x-0 min-w-full max-h-[700px] gap-10"
              >
                <div className="flex lg:flex-col text-slate-950 lg:px-40">
                  <div className="flex flex-col space-y-8">
                    <h1 className="font-bold text-2xl lg:text-4xl">
                      {card.header}
                    </h1>
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
                    width={420}
                    height={220}
                    className="lg:w-[2000px] lg:max-h-[600px] rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* <div>
            <button className="embla__prev" onClick={scrollPrev}>
              Prev
            </button>
            <button className="embla__next" onClick={scrollNext}>
              Next
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export function EmblaCarousel() {
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
}

export default SupportCard;
