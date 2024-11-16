import React from "react";
import HeaderBtn from "./Buttons/HeaderBtn";

const HeroSession = ({ heroheader, heroparagraph }) => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col justify-center lg:px-32 px-5 text-white bg-slate-950 bg-no-repeat bg-cover opacity-40">
        <div className="flex flex-col justify-center items-center w-full lg:w-full space-x-4 mt-10 ">
          <h1 className="text-4xl lg:text-6xl font-bold">{heroheader}</h1>
          <p className="text-lg itemlg:text-2xl my-8">{heroparagraph}</p>
          <button>
            <HeaderBtn btnTittle="Explore more"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSession;
