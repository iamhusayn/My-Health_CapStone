import React from "react";

const ContentBtn = ({ btnTittle }) => {
  return (
    <>
      <button className="bg-slate-500 text-slate-950 px-8 py-4 rounded-md hover:bg-white hover:text-slate-950 transition duration-300 ease-in-out">
        {btnTittle}
      </button>
    </>
  );
};

export default ContentBtn;
