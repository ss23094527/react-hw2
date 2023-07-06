import React, { useState, useEffect } from 'react';
import './Picture.css';

const PictureGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setImages((prevImages) => {
        const updatedImages = [...prevImages];
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // 計算圖片的最大位置
        const maxLeft = windowWidth - 200; // 假設圖片寬度為 200px
        const maxTop = windowHeight - 200; // 假設圖片高度為 200px

        updatedImages.forEach((image) => {
          // 隨機生成圖片的 left 和 top 值
          if (image.id % 2 === 0) {
            // 圖片為偶數id，分布在右側區域
            image.left = Math.floor(Math.random() * (maxLeft / 2)) + maxLeft / 2;
          } else {
            // 圖片為奇數id，分布在左側區域
            image.left = Math.floor(Math.random() * (maxLeft / 2));
          }
          image.top = Math.floor(Math.random() * maxTop);
        });

        return updatedImages;
      });
    };

    // 初始化圖片
    const initialImages = [
      { id: 1, src: 'https://img.onl/fyqA6S', left: -200, top: -200 },
      { id: 2, src: 'https://img.onl/CmNLNs', left: -200, top: -200 },
      { id: 3, src: 'https://img.onl/cg4fVG', left: -200, top: -200 },
      { id: 4, src: 'https://img.onl/LcBCYJ', left: -200, top: -200 },
      { id: 5, src: 'https://img.onl/jpQe7B', left: -200, top: -200 },
      { id: 6, src: 'https://img.onl/r47GzP', left: -200, top: -200 },
    ];

    setImages(initialImages);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragStart = (event, index) => {
    const { clientX, clientY } = event.touches ? event.touches[0] : event;

    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      const draggedImage = updatedImages[index];

      draggedImage.offsetX = clientX - draggedImage.left;
      draggedImage.offsetY = clientY - draggedImage.top;
      draggedImage.isDragging = true;

      return updatedImages;
    });
  };

  const handleDrag = (event, index) => {
    if (!images[index].isDragging) return;

    const { clientX, clientY } = event.touches ? event.touches[0] : event;

    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      const draggedImage = updatedImages[index];

      draggedImage.left = clientX - draggedImage.offsetX;
      draggedImage.top = clientY - draggedImage.offsetY;

      return updatedImages;
    });
  };

  const handleDragEnd = (index) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      const draggedImage = updatedImages[index];

      draggedImage.isDragging = false;

      return updatedImages;
    });
  };

  return (
    <div className="DraggableImages">
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          className={`DraggableImages-img ${image.isDragging ? 'dragging' : ''}`}
          style={{ left: image.left, top: image.top }}
          onMouseDown={(event) => handleDragStart(event, index)}
          onTouchStart={(event) => handleDragStart(event, index)}
          onMouseMove={(event) => handleDrag(event, index)}
          onTouchMove={(event) => handleDrag(event, index)}
          onMouseUp={() => handleDragEnd(index)}
          onTouchEnd={() => handleDragEnd(index)}
        />
      ))}
    </div>
  );
};

export default PictureGallery;
