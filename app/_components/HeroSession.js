import React from "react";
import HeaderBtn from "./Buttons/HeaderBtn";

const HeroSession = ({ heroheader, heroparagraph }) => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col justify-center lg:px-32 px-5 text-white bg-slate-950 bg-no-repeat bg-cover z-100">
        <div className="flex flex-col justify-center items-center w-full lg:w-full space-x-4 mt-10 ">
          <h1 className="text-4xl lg:text-6xl font-bold">{heroheader}</h1>
          <p className="text-lg lg:text-2xl my-8">{heroparagraph}</p>
          
          <HeaderBtn btnTittle="Explore more"/>
          
        </div>
      </div>
    </>
  );
};

export default HeroSession;
