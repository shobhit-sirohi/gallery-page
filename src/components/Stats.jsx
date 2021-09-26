import React from "react";

function Stats() {
  return (
    <div className="flex justify-center mt-6 space-x-6 ">
      <div className="md:w-24 md:h-16 w-20 h-14 bg-gray-200 rounded-lg flex flex-col justify-center items-center">
        <h2>100</h2>
        <p className="text-gray-400 text-sm lg:text-base">Posts</p>
      </div>
      <div className="md:w-24 md:h-16 w-20 h-14 bg-gray-200 rounded-lg flex flex-col justify-center items-center">
        <h2>2,242</h2>
        <p className="text-gray-400 text-sm lg:text-base">Follower</p>
      </div>
      <div className="md:w-24 md:h-16 w-20 h-14 bg-gray-200 rounded-lg flex flex-col justify-center items-center">
        <h2>1,432</h2>
        <p className="text-gray-400 text-sm lg:text-base">Following</p>
      </div>
    </div>
  );
}

export default Stats;
