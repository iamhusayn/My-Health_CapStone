import React from "react";
import Image from "next/image";
import ContentBtn from "./Buttons/ContentBtn";

const BlogCard = ({ src, headlines }) => {

  const blogCards = [
    {
      id: "1",
      imageURL:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1737186626/pexels-cristian-rojas-8460158_tmxafs.jpg",
      blogTittle: "The Hospital of the Year: A Milestone in Excellence",
      paragraph:
        "At MediCare, we are proud to announce that [Hospital Name] has been awarded the prestigious title of Hospital of the Year. This recognition is a testament to our unwavering commitment to providing exceptional healthcare, prioritizing patient well-being, and continually setting new standards in medical excellence.",
      postedby: "Posted by Susan",
    },

    {
      id: "2",
      imageURL:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1737186930/pexels-olly-3771069_dnx8az.jpg",
      blogTittle: "Unveiling the Mysteries of Sleep: Your Guide to Better Rest",
      paragraph:
        "Sleep is a cornerstone of good health, yet it remains one of the least understood aspects of our daily lives. Why do we sleep? What happens to our body and brain during those hours of rest? And most importantly, how can we improve the quality of our sleep? At Medicare, we’re exploring the fascinating world of sleep to help you unlock its many benefits.",
      postedby: "Posted by Olatide",
    },

    {
      id: "3",
      imageURL:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1737187050/pexels-shkrabaanthony-5215016_ryenxh.jpg",
      blogTittle:
        "The Heart-Health Diet: Nourishing Your Heart for a Healthier Life",
      paragraph:
        "Your heart is at the center of your well-being, and the food you eat plays a crucial role in keeping it strong and healthy. A heart-health diet isn’t just about avoiding unhealthy fats and excess salt; it’s about embracing nutritious, wholesome foods that support cardiovascular health while enhancing your overall quality of life. At MediCare, we’re here to guide you in adopting a diet that loves your heart as much as you do.",
      postedby: "Posted by Festus",
    },

    {
      id: "4",
      imageURL:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1737187216/pexels-cpkhanal-20471645_sb8zkr.jpg",
      blogTittle:
        "Understanding Pediatric Vaccination: Protecting Your Child’s Health",
      paragraph:
        "Vaccination is one of the most effective ways to protect your child’s health, preventing serious illnesses and contributing to a healthier future for all. As a parent or caregiver, understanding the importance, safety, and schedule of pediatric vaccinations can empower you to make informed decisions about your child’s well-being. At MediCare, we’re here to guide you through everything you need to know about pediatric vaccinations.",
      postedby: "Posted by Ronke",
    },

    {
      id: "5",
      imageURL:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1737187430/pexels-gioele-fazzeri-2735282-4496727_zzdrgy.jpg",
      blogTittle:
        "Navigating Mental Health: A Guide to Understanding and Support",
      paragraph:
        "Mental health is an essential part of overall well-being, yet it is often overlooked or misunderstood. From managing stress and anxiety to addressing more complex conditions like depression or bipolar disorder, understanding mental health empowers individuals to seek the help they need and lead fulfilling lives. At MediCare, we are committed to supporting you on your mental health journey by providing the resources and care you deserve.",
      postedby: "Posted by Chidi",
    },

    {
      id: "6",
      imageURL:
        "https://res.cloudinary.com/digotb1jl/image/upload/v1737187840/pexels-rethaferguson-3621234_gsartx.jpg",
      blogTittle: "Skin Health 101: Your Guide to a Radiant and Healthy Skin",
      paragraph:
        "Your skin is your body’s largest organ and the first line of defense against the outside world. It not only protects you from harmful elements but also reflects your overall health and well-being. Taking care of your skin goes beyond aesthetics—it’s about maintaining its function, preventing issues, and promoting long-term health. At MediCare, we’re here to help you understand the essentials of skin health and how to keep it glowing and healthy at every stage of life.",
      postedby: "Posted by Mariam",
    },
  ];

  return (
    <div className="flex flex-col lg:gird lg:grid-cols-2 items-center justify-center gap-10 p-60 pt-8">
      {" "}
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-20 px-6 cursor-pointer hover:scale-100 transition duration-300 ease-in-out">
        {blogCards.map((blog, index) => (
          <div className="flex flex-col gap-10" key={index}>
            <Image
              src={blog.imageURL}
              alt="image"
              width={100}
              height={100}
              className="h-70 w-full lg:h-100 lg:w-full rounded-t-2xl"
            />
            <h1 className="text-center font-bold text-2xl lg:text-3xl">
              {blog.blogTittle}
            </h1>
            <p className="text-start text-xl lg:text-2xl">{blog.paragraph}</p>

            <p>
              <i>{blog.postedby}</i>
            </p>

            <ContentBtn btnTittle={"Read More"} />
          </div>
        ))}
      </div>
    </div>
  );
};

// flex-col justify-center items-center w-full lg:w-3/4 md:w-2/3 p-2 shadow-md space-y-2 rounded-lg cursor-pointer hover:scale-100 transition duration-300 ease-in-out

export default BlogCard;
