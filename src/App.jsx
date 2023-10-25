import React from "react";
import BackgroundImage from "./component/backGround";
import SignupLogin from "./pages/SignupLogin";
import UserType from "./pages/UserType";
import AthleteSignup from "./pages/AthleteSignup";

export default function App() {
  return (
    <div>
      <BackgroundImage />
      <AthleteSignup />
    </div>
  );
}
