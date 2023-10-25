import React from "react";
import dumbbell from "../images/dumbbell.png";
import LinkButton from "../component/Link";

export default function SignupLogin() {
  return (
    <div className="flex-col flex gap-16 place-items-center p-16">
      <img src={dumbbell} className="h-32 w-72" />

      <div className="flex-col flex gap-9">
        <LinkButton to="/userType" title={"Sign up"}></LinkButton>
        <LinkButton to="/login" title={"Log in"}></LinkButton>
      </div>
    </div>
  );
}
