import React from "react";
import dumbbell from "../images/dumbbell.png";
import Button from "../component/Button";

export default function SignupLogin() {
  return (
    <div className="flex-col flex gap-16 place-items-center p-16">
      <img src={dumbbell} className="h-32 w-72" />

      <div className="flex-col flex gap-9">
        <Button title={"Sign up"}></Button>
        <Button title={"Log in"}></Button>
      </div>
    </div>
  );
}
