import React from "react";
import BackGroundImage from "../images/backGround.png";

export default function BackGround() {
  return (
    <div
      className="fixed inset-0 -z-50 h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("${BackGroundImage}")`,
      }}
    />
  );
}
