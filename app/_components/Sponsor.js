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
        <div className="wrappe flex flex-row justify-center gap-20 mt-10 ml-[200px]">
          <div className="items item1 bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
          <div className="items item2 bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
          <div className="items item3 bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
          <div className="items item4 bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
          <div className="items item5 bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
          <div className="items item6 bg-slate-950 w-[160px] lg:w-[200px] h-[80px] lg:h-[100px]"></div>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
