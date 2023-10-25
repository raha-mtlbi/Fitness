import React from "react";
import dumbbell from "../images/dumbbell.png";
import Back from "../images/back.png";
import Input from "../component/Input";

export default function AthleteSignup() {
  return (
    <div className="flex-col flex place-items-center p-8 gap-4">
      {/* photo and sign up */}
      <div className="flex-col flex text-center">
        <img src={dumbbell} className="h-24 w-44" />
        <p className="text-white text-2xl font-bold">Sign up</p>
      </div>
      {/* athlete */}
      <div
        className="w-36 h-9 text-white text-xl text-center bg-no-repeat"
        style={{
          backgroundImage: `url("${Back}")`,
        }}
      >
        Athlete
      </div>
      {/* Gender */}
      <div className="text-[#DA9FFF] text-base flex flex-row gap-10">
        <p>Gender :</p>
        <div className="flex flex-row">
          <p className="mr-1">Male</p>
          <input
            type="radio"
            value="Male"
            name="gender"
            className="mr-9 accent-[#954ab6]"
          />
          <p className="mr-1">Female</p>
          <input type="radio" value="Female" name="gender" />
        </div>
      </div>
      {/* input */}
      <div className="flex flex-col gap-2">
        <Input placeholder={"User name"} />
      </div>
    </div>
  );
}
