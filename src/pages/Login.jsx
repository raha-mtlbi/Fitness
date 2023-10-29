import React from "react";
import dumbbell from "../images/dumbbell.png";
import Input from "../component/Input";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex-col flex gap-24 place-items-center text-center p-16">
      <div className="flex-col flex gap-4">
        <img src={dumbbell} className="h-32 w-72" />
        <p className="text-white text-4xl font-bold">Log in</p>
      </div>
      <div className="flex flex-col gap-4">
        <Input placeholder={"E-mail / User name"} />
        <Input placeholder={"Password"} />
        <Link
          to="/recoveryPassword"
          className="text-[#DA9FFF] text-base text-left p-2"
        >
          Recovery Password
        </Link>
      </div>
    </div>
  );
}
