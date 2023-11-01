import React from "react";
import dumbbell from "../images/dumbbell.png";
import Input from "../component/Input";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <div>
      <div className="flex-col flex gap-14 place-items-center text-center p-16">
        <div className="flex-col flex gap-4">
          <img src={dumbbell} className="h-32 w-72" />
          <p className="text-white text-2xl font-bold">Recovery Password</p>
        </div>
        <div className="flex flex-col gap-3">
          <Input placeholder={"Verification Code"} />
          <Input placeholder={"Password"} />
          <Input placeholder={"Confirm Password"} />
        </div>
        <Link
          className="text-white text-base font-bold bg-[#260733] border border-[#7917A8] rounded-full w-40 h-10 p-2 "
          to="/login"
        >
          Reset Password
        </Link>
      </div>
    </div>
  );
}
