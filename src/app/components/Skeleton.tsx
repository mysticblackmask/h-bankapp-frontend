import React from "react";

function Skeleton() {
  return (
    <>
      {new Array(7).fill(0).map((e, index) => (
        <div className="border-b-4 mb-15 mt-5" key={index}>
          <div className="flex items-center justify-between mb-5 mt-5">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Skeleton;
