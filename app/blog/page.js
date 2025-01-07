import React from "react";
import Image from "next/image";
import ContentBtn from "@/app/_components/Buttons/ContentBtn";
import BlogCard from "@/app/_components/BlogCard";
import { CldImage } from "next-cloudinary";
import SectionHeader from "../_components/SectionHeader";
import HeroTag from "../_components/HeroTag";

const BlogPage = () => {
  return (
    <>
      <section className="relative flex justify-center md:h-[800px]">
        <div className="absolute overflow-hidden -z-10">
          <Image
            src="https://res.cloudinary.com/digotb1jl/image/upload/v1736278189/pexels-pixabay-262508_skwqke.jpg"
            alt="Picture of doctors"
            width={1920}
            height={200}
            className="lg:w-[1900px] lg:h-[800px]"
          />
        </div>
        <div className="bg-slate-950 bg-opacity-40 w-full min-h-full">
          <header className="flex flex-row justify-center h-[322px] lg:h-[800px] lg:pt-80 lg:w-full w-3/4 pt-40 space-y-2 m-auto">
            <div className="text-white text-center w-[52rem] h-[18rem]">
              <HeroTag
                heroheader="Stay Up-to-date"
                heroparagraph="Never miss the latest news around your health"
              />
            </div>
          </header>
        </div>
      </section>

      <div className="mt-40">
        <SectionHeader
          header="Recent Post"
        />
      </div>

      <BlogCard />
    </>
  );
};

export default BlogPage;
