import React from 'react';

const ImageDisplay = ({ images }) => {
  return (
    <div className="image-container">
      {images.length > 0 ? (
        images.map((image) => (
          <div key={image.id} className="image-card">
            <img src={image.urls.small} alt={image.description || 'Unsplash Image'} />
            <p>{image.alt_description || 'Image'}</p>
          </div>
        ))
      ) : (
        <p>No images found. Try searching for something else.</p>
      )}
    </div>
  );
};

export default ImageDisplay;
