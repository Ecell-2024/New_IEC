// import React from 'react'
import "./button.css";
const Button = () => {
  return (
    <div>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Learn More</span>
      </button>
    </div>
  );
};

export default Button;
