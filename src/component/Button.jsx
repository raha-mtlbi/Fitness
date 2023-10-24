import React from "react";

export default function Button({ title, className, icon, icon_className }) {
  return (
    <button
      className={`bg-[#440064] shadow-2xl shadow-[#00000080] w-44 h-20 text-white
      rounded-full font-bold text-3xl place-items-center text-center ${className} `}
    >
      {icon && <img src={icon} className={icon_className} />}
      {title}
    </button>
  );
}
