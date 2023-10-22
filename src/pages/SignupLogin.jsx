import React from "react";
import dumbbell from "../images/dumbbell.png";

export default function SignupLogin() {
  return (
    <div className="flex-col flex gap-16 place-items-center p-16">
      <img src={dumbbell} className="h-32 w-72" />

      <div className="flex-col flex gap-9">
        <button className="bg-[#440064] w-44 h-20 rounded-[60px] text-white font-bold text-3xl border-2 border-purple-300">
          Sign up
        </button>
        <button className="bg-[#440064] w-44 h-20 rounded-[60px] text-white font-bold text-3xl border-2 border-purple-300">
          Log in
        </button>
      </div>
    </div>
  );
}
