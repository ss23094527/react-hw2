import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading">
        <div className="bubble"></div>
        <div className="shadow"></div>
        <div className="loading-text">LOADING
          <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>
      
      </div>
    </div>
  );
}

export default Loading;

