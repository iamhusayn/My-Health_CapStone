import React from "react";

const SectionHeader = ({ header, paragraph }) => {
  return (
    <div className="flex flex-col px-8 lg:gap-6 items-center">
      <h1 className="text-4xl lg:text-5xl font-bold">{header}</h1>
      <p className="text-lg lg:text-3xl text-center">{paragraph}</p>
    </div>
  );
};

export default SectionHeader;
