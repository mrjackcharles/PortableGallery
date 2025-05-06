import React from "react";
import "./ImageGallery.css";

function ImageGallery() {
    return (
        <div className="image-gallery">
            <div class="item">
                <img
                    src="https://picsum.photos/200/300"
                    alt="Cinque Terre"
                    width="600"
                    height="400"
                />
            </div>
            <div class="item">
                <img
                    src="https://picsum.photos/200/300"
                    alt="Cinque Terre"
                    width="600"
                    height="400"
                />
            </div>
            <div class="item">
                <img
                    src="https://picsum.photos/200/300"
                    alt="Cinque Terre"
                    width="600"
                    height="400"
                />
            </div>
        </div>
    );
}

export default ImageGallery;
