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
    { url: "https://s31.aconvert.com/convert/p3r68-cdx67/r5n0v-3g2z0.gif", description: "圖片 3 的描述" },
    { url: "https://s27.aconvert.com/convert/p3r68-cdx67/wb7tf-ly8kv.gif", description: "圖片 3 的描述" },
    { url: "https://s19.aconvert.com/convert/p3r68-cdx67/58i7n-s0iys.gif", description: "圖片 3 的描述" },
    { url: "https://s27.aconvert.com/convert/p3r68-cdx67/ve1at-wir41.gif", description: "圖片 3 的描述" },
    { url: "https://s19.aconvert.com/convert/p3r68-cdx67/ms4ms-4sg4a.gif", description: "圖片 3 的描述" },
    { url: "https://s19.aconvert.com/convert/p3r68-cdx67/k59hd-51nv3.gif", description: "圖片 3 的描述" },
    { url: "https://s19.aconvert.com/convert/p3r68-cdx67/7b9fa-46t0d.gif", description: "圖片 3 的描述" },
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
  const [loading, setLoading] = useState(true);
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    setRandomImages(getRandomImages(images.length));
    setLoading(false);
  }, []);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="modelContent">
      <div className="m-title">
        <h3>/%% 3D ART/</h3>
        <h5>Visual Designer<br /> Portfolio</h5>
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
    </div>
  );
}

export default ModelContent;
