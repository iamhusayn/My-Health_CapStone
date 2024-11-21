import React from "react";

const Review = ({ header, paragraph }) => {
    
  return (
    <>
      <section className="lg:h-[700px] m-10 py-16 overflow-hidden md:space-y-20">
        <div className="flex flex-col lg:mx-96 my-10 text-center gap-10 lg:gap-40">
          <div className="bg-slate-950 rounded-lg p-8 md:p-20 space-y-10 lg:space-y-10">
            <h2 className="text-xl lg:text-4xl text-white">{header}</h2>
            <p className="text-white lg:text-lg">{paragraph}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
