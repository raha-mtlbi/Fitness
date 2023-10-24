import React from "react";
import dumbbell from "../images/dumbbell.png";
import clock from "../images/clock.png";
import vazne from "../images/vazne.png";
import Button from "../component/Button";

export default function UserType() {
  return (
    <div className="flex-col flex gap-16 place-items-center text-center p-16">
      <div className="flex-col flex gap-4">
        <img src={dumbbell} className="h-32 w-72" />
        <p className="text-white text-3xl font-bold">Sign Up</p>
      </div>

      <div className="flex-col flex gap-9">
        <Button
          title={"Coach"}
          className="flex flex-row gap-3 p-5"
          icon={clock}
          icon_className="w-8"
        />
        <Button
          title={"Athlete"}
          className="flex flex-row gap-3 p-3"
          icon={vazne}
          icon_className="w-8"
        />
      </div>
    </div>
  );
}
