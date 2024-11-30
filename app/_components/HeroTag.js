import React from "react";
import HeaderBtn from "./Buttons/HeaderBtn";

const HeroTag = ({ heroheader, heroparagraph, btnTag }) => {
  return (
    <>
      <div className="w-full flex flex-col justify-center text-white bg-slate-950 opacity-90 rounded-xl bg-no-repeat bg-cover z-50 p-10">
        <div className="flex flex-col justify-center items-center w-full lg:w-full space-x-4 mt-10 z-100">
          <h1 className="text-4xl lg:text-6xl font-bold">{heroheader}</h1>
          <p className="text-lg lg:text-2xl my-8">{heroparagraph}</p>
          <butthon className="bg-white text-slate-950 opacity-100 text-base lg:text-lg px-6 py-2 rounded-md hover:bg-green-950 hover:text-white transition duration-300 ease-in-out">{btnTag}</butthon>
        </div>
      </div>
    </>
  );
};

export default HeroTag;
