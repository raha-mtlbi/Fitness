import React from "react";
import exercise from "../images/exercise.png";

export default function Exercise() {
  return (
    <button className="relative w-80 h-36 bg-gradient-to-r from-[#490967] to-[#5a157a] rounded-3xl shadow-2xl shadow-[#00000080] text-white flex flex-row place-items-center">
      <div className="flex flex-col gap-3 p-5">
        <p className="font-bold flex flex-row text-xl">Warm Up</p>
        <div className="rounded-3xl bg-[#34034B]">30 min</div>
      </div>
      <div className="">
        <img src={exercise} className="w-44" />
        <input type="checkbox" className="absolute right-6 bottom-3" />
      </div>
    </button>
  );
}
