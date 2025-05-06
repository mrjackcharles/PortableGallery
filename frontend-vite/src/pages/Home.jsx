import React from "react";
import "./Home.css";
import ImageGallery from "../components/ImageGallery";

function Home() {
    const images = [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
    ];

    return (
        <div>
            <h1>PortableGallery</h1>
            <ImageGallery images={images} />
        </div>
    );
}

export default Home;
