import React from "react";

const SectionHeader = ({ header, paragraph }) => {
  return (
    <div className="flex flex-col md:gap-16 items-center w-56">
      <h1 className="text-4xl md:text-[60px] font-bold">{header}</h1>
      <p className="text-lg md:text-3xl text-center">{paragraph}</p>
    </div>
  );
};

export default SectionHeader;
