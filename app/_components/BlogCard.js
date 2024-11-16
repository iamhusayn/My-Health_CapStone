import React from "react";

const BlogCard = ({ src, headlines }) => {
  return (
    <div className="w-full lg:w-1/4 md:w-2/3 p-2 shadow-md space-y-2 rounded-lg cursor-pointer hover:scale-100 transition duration-300 ease-in-out">
      <img src={src} alt="image" className="h-64 md:h-96 lg:h-40 w-full rounded-xl"/>
      <h1 className="text-xl text-center font-semibold">{headlines}</h1>
      <p className="text-center text-sm">
        Providing clinical, financial, and emotional support through the most
        vulnerable and joyful life stages
      </p>
    </div>
  );
};

export default BlogCard;
