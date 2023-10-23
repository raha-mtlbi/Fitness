import React from "react";
import dumbbell from "../images/dumbbell.png";
import clock from "../images/clock.png";
import vazne from "../images/vazne.png";

export default function UserType() {
  return (
    <div className="flex-col flex gap-16 place-items-center text-center p-16">
      <div className="flex-col flex gap-4">
        <img src={dumbbell} className="h-32 w-72" />
        <p className="text-white text-3xl font-bold">Sign Up</p>
      </div>

      <div className="flex-col flex gap-9">
        <button className="bg-[#440064] w-44 h-20 flex flex-row gap-3 p-5 rounded-[60px] text-white font-bold text-3xl border-2 border-purple-300 place-items-center text-center">
          <img src={clock} className="w-8" />
          Coach
        </button>
        <button className="bg-[#440064] w-44 h-20 flex flex-row gap-3 p-3 rounded-[60px] text-white font-bold text-3xl border-2 border-purple-300 place-items-center text-center">
          <img src={vazne} className="w-8" />
          Athlete
        </button>
      </div>
    </div>
  );
}
