import React, { useState } from 'react';
import './Picture.css';

const PictureGallery = () => {
  const [images, setImages] = useState([
    { id: 1, src: 'https://img.onl/fyqA6S', left:240, top: 250 },
    { id: 2, src: 'https://img.onl/CmNLNs', left: 140, top: 550 },
    { id: 3, src: 'https://img.onl/cg4fVG', left: 1190, top: 440 },
    { id: 4, src: 'https://img.onl/LcBCYJ', left: 1290, top:200 },
    { id: 5, src: 'https://img.onl/jpQe7B', left: 1300, top: 550 },
    { id: 6, src: 'https://img.onl/r47GzP', left: 100, top: 440 },
  ]);

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
