import React, { useState, useEffect } from "react";
import "./styles/Web.css";
import Masonry from 'react-masonry-css';
import Loading from '../loading/index';

function WebContent() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setIsLoading(false);
  }, []);

  return (
    <div className="WebContent">
      {isLoading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <>
          <div className="w-title">
            <h3>/%% WEB DESIGN/</h3>
            <h5>
              Visual Designer
              <br /> Portfolio
            </h5>
          </div>
        </>
      )}
    </div>
  );
}

export default WebContent;
