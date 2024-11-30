import React from "react";
import SectionHeader from "./SectionHeader";
import ContentBtn from "./Buttons/ContentBtn";

const Footer2 = ({ header, paragraph, btnTag }) => {
  return (
    <>
      <section className="bg-slate-950 text-white h-[300px] mb-5 py-10 flex flex-col gap-10 items-center">
        <div className="flex flex-col text-center items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold">{header}</h1>
          <p className="text-xl lg:text-2xl my-3">{paragraph}</p>
        </div>
        <button className="bg-slate-500 text-slate-950 px-6 py-3 rounded-md hover:bg-green-950 hover:text-white transition duration-300 ease-in-out">
          {btnTag}
        </button>
      </section>
    </>
  );
};

export default Footer2;
