import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">
    <div className="loading">
        <div className="bubble"></div>
        <div className="shadow"></div>
    </div>
    </div>
  );
}

export default Loading;
