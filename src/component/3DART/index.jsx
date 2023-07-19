import React, { useState, useEffect } from "react";
import "./styles/model.css";
import Masonry from 'react-masonry-css';
import Loading from '../loading/index';


function ModelContent() {



  const images = [
    { url: "https://img.onl/msxSOQ", description: "青年就業計畫-初次尋職尋覓新天地" },
    { url: "https://img.onl/fKFWqV", description: "當個防疫小尖兵" },
    { url: "https://img.onl/2NQzCG", description: "當個防疫小尖兵" },
    { url: "https://img.onl/eBqNl", description: "當個防疫小尖兵" },
    { url: "https://img.onl/xgEvn", description: "圖片 6 的描述" },
    { url: "https://img.onl/srd2nz", description: "圖片4 的描述" },
    { url: "https://img.onl/TWzUPs", description: "圖片 1 的描述" },
    { url: "https://img.onl/aigFze", description: "圖片7 的描述" },
    { url: "https://img.onl/FngeTO", description: "圖片 9 的描述" },
    { url: "https://media.giphy.com/media/HEXxgTxCs0adsTi1Dd/giphy.gif", description: "圖片 3 的描述" },
    { url: "https://media.giphy.com/media/4kINYaeMXT2MFyh06G/giphy.gif", description: "圖片 3 的描述" },
    { url: "https://media.giphy.com/media/0ZeBzUyp37tI3yrJ7o/giphy.gif", description: "圖片 3 的描述" },
    { url: "https://media.giphy.com/media/sUJLk8CBRyKqfzcfji/giphy.gif", description: "圖片 3 的描述" },
    { url: "https://media.giphy.com/media/WRjgIXQQs01ztqv8bh/giphy.gif", description: "圖片 3 的描述" },
    { url: "https://media.giphy.com/media/nMpar6LjdwEhWIf2zS/giphy.gif", description: "圖片 3 的描述" },
    { url: "https://media.giphy.com/media/VroFpHMO29camcpeDf/giphy.gif", description: "圖片 3 的描述" },
    { url: "https://media.giphy.com/media/7Ta421lJwlgLtTZ1wZ/giphy.gif", description: "圖片 3 的描述" },
    { url: "https://media.giphy.com/media/fTF1uWw2OfsoAYVKzw/giphy.gif", description: "圖片 3 的描述" },
    { url: "https://media.giphy.com/media/E3gNOaYVeuUSb4ETii/giphy.gif", description: "圖片 3 的描述" },
    
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