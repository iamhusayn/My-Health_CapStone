import React from "react";
import SectionHeader from "./SectionHeader";


const Sponsor = () => {
  return (
    <>
      <div className="lg:h-full m-10 justify-items-center overflow-hidden py-16">
        <div>
          <SectionHeader
            className="space-y-3"
            header="Our Partners"
            paragraph="Follow along with MediCare as we take on new challenges impacting women and families around the world"
          />
        </div>
        <div className="border border-black relative h-[80px] lg:h-[100px] w-[90%] mt-10">
          <div className="absolute left-[100%] bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
          <div className="absolute left-[100%] bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
          <div className="absolute left-[100%] bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
          <div className="absolute left-[100%] bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
          <div className="absolute left-[100%] bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
          <div className="absolute left-[100%] bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
