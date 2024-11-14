import React from "react";
import HeaderBtn from "./Buttons/HeaderBtn";

const HeroSession = () => {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col justify-center lg:px-32 px-5 text-slate-950 bg-no-repeat bg-cover opacity-80">
        <div className="flex flex-col justify-center items-center w-full lg:w-full space-x-4 mt-10 ">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Welcome to MediCare
          </h1>
          <p className="text-lg lg:text-2xl my-8">
            Providing clinical, financial, and emotional support through the most vulnerable and joyful life stages
          </p>
          <HeaderBtn btnTittle={"Explore more"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSession;
