import React from "react";
import ContentBtn from "@/app/_components/Buttons/ContentBtn";

const Blog = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Latest Post</h1>
          <p>
            Providing clinical, financial, and emotional support through the
            most vulnerable and joyful life stages
          </p>
        </div>
        <div>
            <ContentBtn btnTittle="Our Articles"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
