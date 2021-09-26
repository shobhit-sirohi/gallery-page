import React from "react";
import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.png";
import photo5 from "../images/photo5.png";
import photo6 from "../images/photo6.png";

function Gallery() {
  return (
    <div className="grid grid-rows-3 lg:gap-6 gap-2 mt-10">
      <div className="row-start-1 row-span-1 ">
        <img className="rounded-2xl" src={photo1} alt="photo1" />
      </div>
      <div className="row-start-1 row-span-1 col-span-2">
        <img className="rounded-2xl" src={photo2} alt="photo1" />
      </div>
      <div className="row-start-2 row-span-1 col-span-2">
        <img className="rounded-2xl" src={photo3} alt="photo1" />
      </div>
      <div className="row-start-2 row-span-2">
        <img className="rounded-2xl 2xl:h-full  " src={photo4} alt="photo1" />
      </div>
      <div className="row-start-3 row-span-1">
        <img className="rounded-2xl" src={photo5} alt="photo1" />
      </div>
      <div className="row-start-3 row-span-1">
        <img className="rounded-2xl" src={photo6} alt="photo1" />
      </div>
    </div>
  );
}

export default Gallery;
