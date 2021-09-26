import React from "react";
import photo from "../images/profilePhoto.png";
function Profile() {
  return (
    <div className="flex flex-col items-center mt-6">
      <img
        className=" rounded-2xl  h-28 w-28 lg:h-40 lg:w-40 "
        src={photo}
        alt="profile_pic"
      />
      <h1 className=" text-lg lg:text-2xl tracking-wider ">Rodney Cotton</h1>
      <h2
        className=" text-gray-600 text-base lg:text-xl
       "
      >
        Helsinki, Finland
      </h2>
    </div>
  );
}

export default Profile;
