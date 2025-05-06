import React from "react";
import "./ImageGallery.css";

function ImageGallery({ images }) {
    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image} alt={`Gallery item ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default ImageGallery;
