import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

export default function LinkDay({ className, to, title }) {
  return (
    <Link
      className={twMerge(
        " text-white rounded-full w-16 inline-block text-xl place-items-center text-center border-2 border-[#270338]",
        className
      )}
      to={to}
    >
      {title}
    </Link>
  );
}
