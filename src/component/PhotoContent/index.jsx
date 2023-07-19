import React, { useState, useEffect } from "react";
import "./styles/Photo.css";
import Masonry from 'react-masonry-css';
import Loading from '../loading/index';

function PhotoContent() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setIsLoading(false);
  }, []);

  return (
    <div className="PhotoContent">
      {isLoading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <>
          <div className="p-title">
            <h3>/%% PHOTOGRAPH/</h3>
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

export default PhotoContent;
