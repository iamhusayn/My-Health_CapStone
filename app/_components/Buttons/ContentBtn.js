import React from "react";

const ContentBtn = ({ btnTittle }) => {
  return (
    <>
      <button className="bg-slate-500 text-slate-950 px-8 py-3 rounded-md hover:bg-green-950 hover:text-white transition duration-300 ease-in-out">
        {btnTittle}
      </button>
    </>
  );
};

export default ContentBtn;
