import React from "react";
import BackgroundImage from "./component/backGround";
import SignupLogin from "./pages/SignupLogin";
import UserType from "./pages/UserType";
import AthleteSignup from "./pages/AthleteSignup";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<SignupLogin />} />
        <Route path="/userType" element={<UserType />} />
        <Route path="/athleteSignup" element={<AthleteSignup />} />
      </Routes>
      <BackgroundImage />
    </div>
  );
}
