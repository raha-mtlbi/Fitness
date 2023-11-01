import React from "react";
import BackgroundImage from "./component/backGround";
import SignupLogin from "./pages/SignupLogin";
import UserType from "./pages/UserType";
import AthleteSignup from "./pages/AthleteSignup";
import { Route, Routes } from "react-router-dom";
import CoachSignup from "./pages/CoachSignup";
import Login from "./pages/Login";
import AtheleteTraining from "./pages/AtheleteTraining";
import CoachPage from "./pages/CoachPage";
import RecoveryPassword from "./pages/RecoveryPassword";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<SignupLogin />} />
        <Route path="/userType" element={<UserType />} />
        <Route path="/athleteSignup" element={<AthleteSignup />} />
        <Route path="/coachSignup" element={<CoachSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recoveryPassword" element={<RecoveryPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
      {/* <AtheleteTraining /> */}
      <BackgroundImage />
      {/* <CoachPage /> */}
    </div>
  );
}
