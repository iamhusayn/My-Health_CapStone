import React from "react";

const CompanyValue = ({header, paragraph}) => {
    const values = [
        {
            header:"Trust:",
            paragraph:"Central to MediCare's mission is trust. We believe in cultivating trust-filled relationships that serve as the bedrock for enduring partnerships.",
        },

        {
            header:"Innovation:",
            paragraph:"We are committed to creative solutions and embracing new technologies.",
        },
    ];

  return (
    <>
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-14 py-16">
        <div className="bg-slate-950 w-96 lg:w-[700px] lg:h-[300px] rounded-lg p-12 space-y-4">
          <h3 className="text-white text-2xl lg:text-4xl">
            <strong>{header}Trust:</strong>
          </h3>
          <p className="text-white text-lg lg:text-2xl">{paragraph}
            Central to MediCare's mission is trust. We believe in cultivating trust-filled relationships that serve as the bedrock for enduring partnerships.
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyValue;
