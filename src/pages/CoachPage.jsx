import React, { useState } from "react";
import profile from "../images/profile.png";
import menu from "../images/menu.svg";
import LinkDay from "../component/LinkDay";
import tik from "../images/tik.png";
import chart from "../images/chart.png";
import plus from "../images/plus.png";
import Exercise from "./../component/Exercise";

export default function AtheleteTraining() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <div className="bg-gradient-to-b min-h-screen from-[#53007A] to-[#14001E] p-6 flex flex-col gap-5">
      {/* header */}
      <div className="flex flex-row gap-36">
        <div className="flex flex-row gap-4">
          <img src={profile} className="w-16 rounded-3xl" />
          <p className="text-white text-lg py-4">Anthony</p>
        </div>
        <button>
          <img src={menu} />
        </button>
      </div>

      {/* hi */}
      <div className="text-white text-xl flex flex-col gap-1 py-3">
        <p>Hi Anthony</p>
        <p>Good luck coach</p>
      </div>

      {/* Days */}
      <div className="flex flex-row gap-3 overflow-x-scroll">
        <LinkDay title="Day 1" />
        <LinkDay title="Day 2" />
        <LinkDay title="Day 3" />
        <LinkDay title="Day 4" />
        <LinkDay title="Day 5" />
        <LinkDay title="Day 6" />
        <LinkDay title="Day 7" />
      </div>

      {/* choose athlete name */}
      <button className="bg-transparent border border-[#7917A8] text-white w-36 h-8 rounded-2xl flex flex-row">
        <p className="px-3"> Angle Evans</p>
        <img src={tik} className="py-2" />
      </button>

      {/* athlete profile and chart */}
      <div>
        <div className="flex flex-row gap-4">
          <img src={profile} className="w-16 rounded-3xl" />
          <p className="text-white text-lg py-4">Anjel</p>
        </div>
        <img src={chart} className="w-56 ml-28" />
      </div>

      <button
        className="text-white flex flex-row rounded-2xl bg-transparent font-bold text-lg w-48 h-9 border border-[#7917A8]"
        onClick={handleClick}
      >
        <p className="font-bold text-2xl px-4">+</p>
        <p className="py-1">Add New Task</p>
      </button>

      {isShown && (
        <div className="flex flex-col gap-5 place-items-center">
          <Exercise />
          <Exercise />
          <Exercise />
        </div>
      )}
    </div>
  );
}
