import React from "react";

const HeaderBtn = ({ btnTittle }) => {
  return (
    <>
      <button className="bg-white text-slate-950 opacity-100 text-base lg:text-lg px-6 py-2 rounded-md hover:bg-green-950 hover:text-white transition duration-300 ease-in-out">
        {btnTittle}
      </button>
    </>
  );
};

export default HeaderBtn;
