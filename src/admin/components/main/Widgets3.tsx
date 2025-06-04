import React from "react";

const Widgets3 = ({ title }: { title: string }) => {
  return (
    <div className="min-w-[300px] h-[300px] bg-gray-920 rounded-md p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-white">{title}</p>
      </div>
    </div>
  );
};

export default Widgets3;
