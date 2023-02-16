import React from "react";
const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="w-52 h-52 m-5 bg-gray-100"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
