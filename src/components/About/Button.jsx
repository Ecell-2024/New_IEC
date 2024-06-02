/* eslint-disable react/prop-types */
// import React from 'react'
// import { useNavigate } from "react-router-dom";
import "./Button.css";

const Button = ({color}) => {
  // const history = useNavigate();
  // const handleButtonClick = () => {
  //   history("/discover");
  // };
  return (
    <button className="learn-more z-10" >
      <span className="circle" style={{
        background: color,
      }} aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text text-sm text-black dark:text-white !font-medium">
        Learn More
      </span>
    </button>
  );
};

export default Button;
