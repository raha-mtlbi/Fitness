import React from "react";

export default function Input({ placeholder }) {
  return (
    <div>
      <input
        className="w-72 h-10 rounded-3xl border-2 border-[#570082] bg-transparent p-3 placeholder-[#DA9FFF] shadow-2xl shadow-[#00000080]"
        placeholder={placeholder}
      />
    </div>
  );
}
