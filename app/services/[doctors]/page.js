"use client";
import React from "react";
import DoctorsBio from "@/app/_components/DoctorsBio";

const DoctorsPage = () => {
  return (
    <>
      {/* <div className="flex flex-col md:flex-col justify-center w-4/5 my-20 p-auto m-auto">
        <div className="bg-slate-950 flex-col md:flex-row gap-12 h-96">
          <div className="flex justify-center gap-20">
            <div>
              <Image 
                  src="https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg"
                  alt="Picture of doctors"
                  width={200}
                  height={200}
                  className=''
              />
            </div>
            <div className="flex md:flex-col gap-3">
              <hi className="text-white text-lg md:text-2xl font-semibold">{props.organization}</hi>
              <h2 className="text-white text-lg md:text-2xl">{props.docname}</h2>
          
              <h3 className="text-white text-lg md:text-lg">Specialization: {props.speciality}</h3>
              <h3 className="text-white text-lg md:text-lg">Location: {props.location}</h3>
              <h3 className="text-white text-lg md:text-lg">Years or practise: {props.practise}</h3>
              <h3 className="text-white text-lg md:text-lg">Rating: {props.rating}</h3>
            </div>
          </div>
        </div>
        <div>
          <p className="text-white ">Dr. Martins is a board-certified family medicine physician whose practice areas include primary and urgent care. As Medical Director, Dr. Martins oversees the clinical operations of TrustCare clinics in Mississippi and Alabama. This includes coordinating teams of physicians, physician assistants, nurse practitioners, nurses, medical assistants and non-clinical staff to ensure the overall patient care goals for these facilities are being achieved.{props.biography}</p>
        </div>
      </div> */}

      <div className="">
        <div className=" bg-slate-950 w-[1000px] h-[900px] flex flex-col md:flex-col justify-center rounded-lg text-white py-10 px-10 m-auto my-20 p-auto">
          <div>
            <DoctorsBio
              id="1"
              CldImage=""
              organization="MediCare"
              docname="Dr. Martins"
              link="Dentist"
              speciality="Dentist"
              location="Lagos, Nigeria"
              practise="10 years"
              rating="4.8/5"
              biography="Dr. Martins is a board-certified family medicine physician whose practice areas include primary and urgent care. As Medical Director, Dr. Martins oversees the clinical operations of TrustCare clinics in Mississippi and Alabama. This includes coordinating teams of physicians, physician assistants, nurse practitioners, nurses, medical assistants and non-clinical staff to ensure the overall patient care goals for these facilities are being achieved."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsPage;
