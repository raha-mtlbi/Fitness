import React from "react";
import exercise from "../images/exercise.png";

export default function Exercise() {
  return (
    <button className="w-80 h-36 bg-gradient-to-r from-[#490967] to-[#5a157a] rounded-3xl shadow-2xl shadow-[#00000080] text-white flex flex-row place-items-center">
      <div className="flex flex-col gap-3 p-5">
        <p className="font-bold flex flex-row text-2xl">Warm Up</p>
        <div className="rounded-3xl bg-[#34034B]">30 min</div>
      </div>
      <div className="">
        <img src={exercise} className="w-44" />
        <div className="w-5 h-5 border border-white rounded-md"></div>
      </div>
    </button>
  );
}
