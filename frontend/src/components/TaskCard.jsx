import React from "react";
import "./Taskbar.css";

const TaskCard = ({ item }) => {
  return (
    <div className="border border-gray-500 rounded-md max-w-2xl h-44 p-2 shadow-[0_25px_40px_-15px_rgba(256,256,256,0.1)]">
      <h2 className=" h-10 text-sm border-b border-gray-400">{item.title}</h2>
      <p className=" h-28 text-sm overflow-auto scrollbar-none custom-scrollbar mt-2">
        {item.description}
      </p>
    </div>
  );
};

export default TaskCard;
