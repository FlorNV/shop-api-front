import React from "react";

const Skeleton = () => {
  return (
    <div className="animate-pulse h-80 rounded-md border-2 border-gray-400">
      <div className="bg-gray-400 h-2/3 border-b"></div>
      <div className="h-1/3 p-4 flex flex-col justify-center">
        <p className="bg-gray-400 p-3 mb-3 rounded-xl font-semibold"></p>
        <p className="bg-gray-400 p-2 rounded-xl truncate"></p>
      </div>
    </div>
  );
};

export default Skeleton;
