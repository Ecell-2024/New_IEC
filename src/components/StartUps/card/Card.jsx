// import React from "react";
import "./Card.css";

// eslint-disable-next-line react/prop-types
const ThreeDCardDemo = ({image}) => {
  return (
    <div className="crd inter-var lg:m-4 ">
      <div className="card-body border-2 border-black p-6 flex flex-col items-center lg:gap-6 rounded-lg">
        
       
        <div className="card-item w-full mt-4" style={{ transform: "translateZ(100px)" }}>
          <img
            src={image}
            
            className="image h-20 w-auto "
            alt="thumbnail"
          />
        </div>
      <h1
      className="text-xl font-bold text-neutral-600 dark:text-white">Start Up</h1>
      </div>
    </div>
  );
};

export default ThreeDCardDemo;
