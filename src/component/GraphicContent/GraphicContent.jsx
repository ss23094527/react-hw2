import React, { useState } from "react";
import "./styles/graphic.css";
import Masonry from 'react-masonry-css';

function GraphicContent() {
  const images = [
    { url: "https://img.onl/8cNbK", description: "青年就業計畫-初次尋職尋覓新天地" },
    { url: "https://img.onl/6pZ6Zc", description: "福兔迎春-中國生肖兔比賽" },
    { url: "https://img.onl/G8BuDx", description: "當個防疫小尖兵" },
    { url: "https://img.onl/K3PgDZ", description: "圖片 3 的描述" },
    { url: "https://img.onl/OurQC3", description: "圖片 3 的描述" },
    { url: "https://img.onl/3WvJBN", description: "圖片 3 的描述" },
    { url: "https://img.onl/fEmBJU", description: "圖片 3 的描述" },
    { url: "https://img.onl/f2vlB", description: "圖片 3 的描述" },
    { url: "https://img.onl/aig9FI", description: "圖片 3 的描述" },
    { url: "https://img.onl/Uonu49", description: "圖片 3 的描述" },
    { url: "https://img.onl/lBt6ux", description: "圖片 3 的描述" },
    { url: "https://img.onl/qziIxc", description: "圖片 3 的描述" },
    { url: "https://img.onl/INTYjF", description: "圖片 3 的描述" },
    { url: "https://img.onl/TAX2eK", description: "圖片 3 的描述" },
    { url: "https://img.onl/TGBZ56", description: "圖片 3 的描述" },
    { url: "https://img.onl/ooj9Se", description: "圖片 3 的描述" },
    { url: "https://img.onl/WmsC7L", description: "圖片 3 的描述" },
    { url: "https://img.onl/DmmIZh", description: "圖片 3 的描述" },

    { url: "https://img.onl/EZ6mdM", description: "圖片 3 的描述" },
    { url: "https://img.onl/AmmImS", description: "圖片 3 的描述" },
    { url: "https://img.onl/MefUBF", description: "圖片 3 的描述" },
    { url: "https://img.onl/Q9phtA", description: "圖片 3 的描述" },
    { url: "https://img.onl/L9cRO1", description: "圖片 3 的描述" },
  
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
    768: 1
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="GraphicContent">
      <div className="g-title">
        <h3>/%% GRAPHIC DESIGN/</h3>
        <h5>Visual Designer<br /> Portfolio</h5>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="image-container"
        columnClassName="image-wrapper"
      >
        {images.map((image, index) => (
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
    </div>
  );
}

export default GraphicContent;