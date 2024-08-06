// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import App from '@/components/CarouselNosotros/carouselNosotros2'

const ImageCarousel = ({ images }) => {
  if (!images || images.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Carousel ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
