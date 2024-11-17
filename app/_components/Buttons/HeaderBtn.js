import React from "react";

const HeaderBtn = ({ btnTittle }) => {
  return (
    <>
      <button className="bg-slate-950 text-white text-base lg:text-lg px-6 py-2 rounded-md hover:bg-slate-400 transition duration-300 ease-in-out">
        {btnTittle}
      </button>
    </>
  );
};

export default HeaderBtn;
