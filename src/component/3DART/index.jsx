import React, { useState, useEffect } from "react";
import "./styles/model.css";
import Masonry from 'react-masonry-css';
import Loading from '../loading/index';


function ModelContent() {



  const images = [
    { url: "https://img.onl/X8rIUO", description: "青年就業計畫-初次尋職尋覓新天地" },
  
    { url: "https://img.onl/2NQzCG", description: "當個防疫小尖兵" },
    { url: "https://img.onl/xgEvn", description: "圖片 3 的描述" },
    { url: "https://img.onl/srd2nz", description: "圖片 3 的描述" },
    { url: "https://img.onl/knS43", description: "圖片 3 的描述" },
    { url: "https://img.onl/aigFze", description: "圖片 3 的描述" },
    { url: "https://img.onl/FngeTO", description: "圖片 3 的描述" },
    { url: "https://im3.ezgif.com/tmp/ezgif-3-8b01d4e7ff.gif", description: "圖片 3 的描述" },
    { url: "https://im3.ezgif.com/tmp/ezgif-3-738ffd169b.gif", description: "圖片 3 的描述" },
    { url: "https://im3.ezgif.com/tmp/ezgif-3-dcb0d619fe.gif", description: "圖片 3 的描述" },
    { url: "https://im3.ezgif.com/tmp/ezgif-3-99dd070d36.gif", description: "圖片 3 的描述" },
    { url: "https://im3.ezgif.com/tmp/ezgif-3-d134b45778.gif", description: "圖片 3 的描述" },
    { url: "https://im3.ezgif.com/tmp/ezgif-3-90c5d0d2c1.gif", description: "圖片 3 的描述" },
    { url: "https://im3.ezgif.com/tmp/ezgif-3-32de7733c2.gif", description: "圖片 3 的描述" },
    { url: "https://im3.ezgif.com/tmp/ezgif-3-19c0452800.gif", description: "圖片 3 的描述" },
    { url: "https://im3.ezgif.com/tmp/ezgif-3-9a9a5c3574.gif", description: "圖片 3 的描述" },
    { url: "https://im3.ezgif.com/tmp/ezgif-3-9c2e1ec601.gif", description: "圖片 3 的描述" },
    { url: "https://im3.ezgif.com/tmp/ezgif-3-87db9f5825.gif", description: "圖片 3 的描述" },
  ];

  const getRandomIndex = (max) => Math.floor(Math.random() * max);
  const getRandomImages = (count) => {
    const randomImages = [];
    while (randomImages.length < count) {
      const randomIndex = getRandomIndex(images.length);
      if (!randomImages.includes(images[randomIndex])) {
        randomImages.push(images[randomIndex]);
      }
    }
    return randomImages;
  };

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 1,
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const imagePromises = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => resolve();
      });
    });

    Promise.all(imagePromises).then(() => {
      setRandomImages(getRandomImages(images.length));
      setIsLoading(false);
    });
  }, []);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="modelContent">
      {isLoading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <>
          <div className="m-title">
            <h3>/%% 3D ART/</h3>
            <h5>
              Visual Designer
              <br /> Portfolio
            </h5>
          </div>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="image-container"
            columnClassName="image-wrapper"
          >
            {randomImages.map((image, index) => (
              <div key={index} className="image-item">
                <img
                  src={image.url}
                  alt="Graphic"
                  onClick={() => openImage(image.url)}
                />
                <div className="image-description">{image.description}</div>
              </div>
            ))}
          </Masonry>

          {selectedImage && (
            <div className="overlay" onClick={closeImage}>
              <div className="image-modal">
                <img src={selectedImage} alt="Graphic" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ModelContent;