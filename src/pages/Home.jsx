import React, { useState, useEffect } from 'react';
import Header from "../component/Header/index";
import Content from "../component/Homecontent/index";
import PictureGallery from "../component/Homecontent/PictureGallery/PictureGallery";
import Loading from '../component/loading';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模擬載入延遲
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="main-layout main-container">
      <Header />
      {isLoading ? (
        <div className="loading"><Loading /></div>
      ) : (
        <>
          <PictureGallery />
          <Content className="content-layout" />
        </>
      )}
    </div>
  );
}

export default Home;
