import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

export default function LinkButton({
  className,
  icon,
  icon_className,
  to,
  title,
}) {
  return (
    <Link
      className={twMerge(
        "bg-[#440064] shadow-2xl shadow-[#00000080] w-44 h-20 text-white rounded-full font-bold text-3xl place-items-center text-center p-5",
        className
      )}
      to={to}
    >
      {icon && <img src={icon} className={icon_className} />}
      {title}
    </Link>
  );
}
