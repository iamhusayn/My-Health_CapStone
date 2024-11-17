import React from "react";
import Image from "next/image";

const DoctorsBio = ([organization, docname, speciality, location, practise, rating, biography]) => {
  return (
    <>
      <div className="flex flex-col md:flex-col justify-center p-auto m-auto">
        <div className="bg-slate-950 flex-col md:flex-row gap-12 h-96">
          <div className="flex justify-center gap-20">
            <div>
              <Image
                src="https://res.cloudinary.com/digotb1jl/image/upload/v1730454963/pexels-ivan-samkov-4989163_iryshc.jpg"
                alt="Picture of doctors"
                width={200}
                height={200}
                className=""
              />
            </div>
            <div className="flex md:flex-col gap-3">
              <hi className="text-white text-lg md:text-2xl font-semibold">
                {organization}
              </hi>
              <h2 className="text-white text-lg md:text-2xl">
                {docname}
              </h2>

              <h3>Specialization: {speciality}</h3>
              <h3>Location: {location}</h3>
              <h3>Years or practise: {practise}</h3>
              <h3>Rating: {rating}</h3>
            </div>
          </div>

          <div>
            <p className="text-white ">{biography}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsBio;
