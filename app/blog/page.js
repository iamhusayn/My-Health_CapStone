import React from "react";
import ContentBtn from "@/app/_components/Buttons/ContentBtn";
import BlogCard from "@/app/_components/BlogCard";
import { CldImage } from "next-cloudinary";

const BlogPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
        <div>
          <div>
            <h1>Latest Post</h1>
            <p>
              Providing clinical, financial, and emotional support through the
              most vulnerable and joyful life stages
            </p>
          </div>
          <div>
            <ContentBtn btnTittle="Our Articles" />
          </div>
        </div>

        <div>
          <div>
            <BlogCard
              src={
                "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg"
              }
              headlines={"The Hospital of the Year"}
            />
            <BlogCard
              src={
                "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg"
              }
              headlines={"Unveiling the Mystries of Sleep"}
            />
            <BlogCard
              src={
                "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg"
              }
              headlines={"The Heart-Health Diet"}
            />
            <BlogCard
              src={
                "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg"
              }
              headlines={"Understanding Padiatric Vaccination"}
            />
            <BlogCard
              src={
                "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg"
              }
              headlines={"Navigating Mental Health"}
            />
            <BlogCard
              src={
                "https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg"
              }
              headlines={"Skin Health 101"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
