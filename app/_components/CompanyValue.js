"use client"

import React from "react";

const CompanyValue = () => {
    const values = [
        {
            header:"Trust:",
            paragraph:"Central to MediCare's mission is trust. We believe in cultivating trust-filled relationships that serve as the bedrock for enduring partnerships.",
        },

        {
            header:"Innovation:",
            paragraph:"We are committed to creative solutions and embracing new technologies.",
        },

        {
            header:"Customer Focus:",
            paragraph:"We prioritize our clients' needs and strive for excellence in all interactions.",
        },

        {
            header:"Integrity:",
            paragraph:"We uphold honesty and strong moral principles in every decision we make.",
        },

        {
            header:"Collaboration:",
            paragraph:"We believe that teamwork and open communication lead to the best results.",
        },

        {
            header:"Quality:",
            paragraph:"We are dedicated to delivering top-notch products and services.",
        },
    ];

  return (
    <>
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-20 py-10 bg-[]">
        {values.map((company, index) => (
            <div key={index} className="bg-slate-950 w-96 lg:w-[700px] lg:h-[300px] rounded-lg p-12 space-y-4">
            <h3 className="text-white text-2xl lg:text-4xl">
              <strong>{company.header}</strong>
            </h3>
            <p className="text-white text-lg lg:text-2xl">{company.paragraph}</p>
          </div>)
        )}
      </div>
    </>
  );
};

export default CompanyValue;
