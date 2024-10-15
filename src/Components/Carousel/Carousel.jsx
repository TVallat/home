import "./CarouselStyles.scss";
import React, { useState } from 'react';

const hideArrows = (photos) => {
    return (photos && photos.length > 1) ? '' : 'hide';
}

function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = slides;

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex > 0) ? currentIndex - 1 : images.length - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex < images.length - 1) ? currentIndex + 1 : 0);
    };

    return (
        <div className="container">
            <div className="carousel">
                <div className="carousel-container">
                    {images.map((slide, index) => (
                        <div
                            className="carousel-slide"
                            key={index}
                            style={{
                                opacity: currentIndex === index ? 1 : 0,
                            }}
                        >
                            <img src={slide.image} alt={slide.alt} loading='lazy' />
                        </div>
                    ))}
                </div>
                <button className={`prev-btn ${hideArrows(images)}`} onClick={handlePrevClick}>❮</button>
                <button className={`next-btn ${hideArrows(images)}`} onClick={handleNextClick}>❯</button>
                <p className="image-counter">{currentIndex + 1} / {images.length}</p>
            </div>
            {/* Conteneur pour la description */}
            <div className="image-description-container">
                <p className="image-description">{images[currentIndex].description}</p>
            </div>
        </div>
    );
}

export default Carousel;