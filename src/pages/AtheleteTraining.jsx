import React from "react";
import profile from "../images/profile.png";
import menu from "../images/menu.svg";
import LinkDay from "../component/LinkDay";
import Exercise from "../component/Exercise";

export default function AtheleteTraining() {
  return (
    <div className="bg-gradient-to-b min-h-screen from-[#53007A] to-[#14001E] p-6">
      {/* header */}
      <div className="flex flex-row gap-44">
        <div className="flex flex-row gap-4">
          <img src={profile} className="w-16 rounded-3xl" />
          <p className="text-white text-lg py-4">Anjel</p>
        </div>
        <button>
          <img src={menu} />
        </button>
      </div>

      {/* hi */}
      <div className="text-white text-xl flex flex-col gap-1 py-6">
        <p>Hi Anjel</p>
        <p>Let’s start training</p>
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

      {/* Exercise */}
      <div className="flex flex-col gap-5 place-items-center p-4 overflow-y-scroll">
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
      </div>
    </div>
  );
}
