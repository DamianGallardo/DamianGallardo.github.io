import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Grid, Dialog, Backdrop, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import CarouselCertificate from '../Content/CarouselCertificate';

const arenaImages = [
  'assets/media/Avina/Imagen de WhatsApp 2024-01-10 a las 08.12.39_b0319fc2.jpg',
  'assets/media/Avina/Imagen de WhatsApp 2024-01-11 a las 15.35.30_35ba7230.jpg',
  'assets/media/Avina/Imagen de WhatsApp 2024-01-10 a las 08.12.39_b0319fc2.jpg',
  'assets/media/Avina/Imagen de WhatsApp 2024-01-11 a las 15.35.30_35ba7230.jpg',
  // more images
];

const avinaImages = [
  'assets/media/Arena SLP/Imagen de WhatsApp 2024-06-20 a las 10.04.42_8f25e69d.jpg',
  'assets/media/Arena SLP/Imagen de WhatsApp 2024-06-20 a las 10.04.42_18d9d8c2.jpg',
  // more images
];

const carouselContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '85vh', // 85% del alto de la pantalla
  backgroundColor: '#000', // Fondo negro para bordes negros
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%', // Deja espacio para los indicadores
};

const imageStyle = {
  maxWidth: '85vw', // 85% del ancho de la pantalla
  maxHeight: '100%', // 85% del alto del viewport
  objectFit: 'contain',
  border: '5px solid #000', // Borde negro
  cursor: 'pointer', // Cambia el cursor a pointer cuando se pasa sobre la imagen
  transition: '1.5s ease-in-out', // Transición suave para la opacidad
};

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000; // Fondo negro
  width: 100%; // Ancho completo
  padding: 15px ; // Añade algo de relleno arriba y abajo
  border-top: 5px solid #000; // Añade un borde negro para eliminar la franja blanca
`;

const IndicatorThumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin: 0 5px;
  cursor: pointer;
  border: ${({ active }) => (active ? '2px solid #fff' : 'none')};
  transition: transform 1.5s ease-in-out;
  &:hover {
    transform: scale(1.3); 
  }
`;

const CustomCarousel = ({ images, onClick, activeIndex, setActiveIndex }) => {
  const handleChange = (index) => {
    setActiveIndex(index);
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Carousel
        autoPlay={true}
        stopAutoPlayOnHover={false}
        interval={8000}
        animation="fade"
        navButtonsAlwaysVisible={true}
        indicators={false}
        index={activeIndex}
        onChange={handleChange}
      >
        {images.map((src, index) => (
          <div key={index} style={carouselContainerStyle} onClick={() => onClick(index)}>
            <div style={imageContainerStyle}>
              <img src={src} alt={`carousel-${index}`} style={imageStyle} />
            </div>
          </div>
        ))}
      </Carousel>
      <IndicatorContainer>
        {images.map((src, index) => (
          <IndicatorThumbnail
            key={index}
            src={src}
            alt={`thumbnail-${index}`}
            active={index === activeIndex}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </IndicatorContainer>
    </>
  );
};

const FullscreenCarousel = ({ open, images, startIndex, onClose }) => {
  const [currentImage, setCurrentImage] = useState(startIndex);

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <Backdrop open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'rgba(0, 0, 0, 0.90)' }}>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          },
        }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'white',
          }}
        >
          <CloseIcon />
        </IconButton>
        <div style={imageContainerStyle}>
          <img src={images[currentImage]} alt={`fullscreen-carousel-${currentImage}`} style={imageStyle} />
        </div>
        <IndicatorContainer>
          {images.map((src, index) => (
            <IndicatorThumbnail
              key={index}
              src={src}
              alt={`thumbnail-${index}`}
              active={index === currentImage}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </IndicatorContainer>
      </Dialog>
    </Backdrop>
  );
};

const App = () => {
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  const handleImageClick = (index, images) => {
    setCurrentIndex(index);
    setCurrentImages(images);
    setFullscreenOpen(true);
  };

  const handleClose = () => {
    setFullscreenOpen(false);
  };

  return (
    <div className="app">
      <CustomCarousel 
        images={arenaImages} 
        onClick={(index) => handleImageClick(index, arenaImages)} 
        activeIndex={currentIndex} 
        setActiveIndex={setCurrentIndex} 
      />
      <Grid item xs={12}>
        <Box sx={{ my: 3 }} /> {/* Espaciador */}
      </Grid>
      <CarouselCertificate/>
      <Grid item xs={12}>
        <Box sx={{ my: 3 }} /> {/* Espaciador */}
      </Grid>
      <CustomCarousel 
        images={avinaImages} 
        onClick={(index) => handleImageClick(index, avinaImages)} 
        activeIndex={currentIndex} 
        setActiveIndex={setCurrentIndex} 
        />
      <FullscreenCarousel open={fullscreenOpen} images={currentImages} startIndex={currentIndex} onClose={handleClose} />
    </div>
  );
};

export default App;
