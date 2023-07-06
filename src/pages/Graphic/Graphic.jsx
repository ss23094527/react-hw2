import Header from "../../component/Header/index";

import Footer from "../../component/Footer";
import GraphicContent from "../../component/GraphicContent/GraphicContent";
import Loading from "../../component/loading";
import React, { useState, useEffect } from 'react';



function Graphic(){

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模擬載入延遲
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

    return(
        <div className="main-layout main-container">
            <Header />
            {isLoading ? (
        <div className="loading"><Loading /></div>
      ) : (
        <>
           <GraphicContent />
            <Footer className="footer-layout"/>
            </>
      )}
        </div>
        
    );
}
export default Graphic;