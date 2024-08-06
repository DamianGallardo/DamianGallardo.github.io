import React, { useState } from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import CustomIconButton1 from '@/components/pruebas/ProductTest/customIconButton1';
import CustomIconButton2 from '../ProductTest/customIconButton2';

const ProductModalTest = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };

  const handleImageSelect = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Box
      sx={{
        p: 2,
        maxWidth: '80vw',
        maxHeight: '80vh',
        background:'#e7e7e7',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        m: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (max-width: 768px)': {
          width: '90vw',
          height: '90vh',
        },
      }}
    >
      <Box sx={{ overflowY: 'auto', flexGrow: 1, width: '100%' }}>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {/* Row for the image */}
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <img
              src={product.images[currentImageIndex]}
              alt={product.titleAlt}
              style={{ 
                width: '85%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto'
              }}
            />
            {product.images.length > 1 && (
              <Box sx={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', justifyContent: 'space-between', transform: 'translateY(-50%)' }}>
              </Box>
            )}
            {/* Image Selection Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              {product.useCustomIconButton === 'CustomIconButton1' && (
                product.images.map((_, index) => (
                  <CustomIconButton1
                    key={index}
                    onClick={() => handleImageSelect(index)}
                    className={currentImageIndex === index ? 'selected' : ''}
                    isEven={index % 2 === 0}
                  />
                ))
              )}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              {product.useCustomIconButton === 'CustomIconButton2' && (
                product.images.map((_, index) => (
                  <CustomIconButton2
                    key={index}
                    onClick={() => handleImageSelect(index)}
                    className={currentImageIndex === index ? 'selected' : ''}
                    isEven={index % 2 === 0}
                  />
                ))
              )}
            </Box>
          </Grid>
          {/* Row for the title, description, and additional specs */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }}
            >
              {product.specs && (
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{ __html: product.specs }}
                  gutterBottom
                  align="center"
                  sx={{
                    fontSize: {
                      xs: '0.875rem', // 14px for small screens
                      sm: '1rem', // 16px for medium screens
                      md: '1.25rem', // 20px for large screens
                    },
                    mb: 2
                  }}
                />
              )}
              {/* Grid for additional specs */}
              {product.additionalSpecs && (
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  {Object.entries(product.additionalSpecs).map(([key, value]) => (
                    <Grid item xs={12} sm={6} key={key}>
                      <Typography variant="h7" color="primary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                      {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                      </Typography>
                      <Typography variant="body2" dangerouslySetInnerHTML={{ __html: value }} sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }} />
                    </Grid>
                  ))}
                </Grid>
              )}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mt: 2,
                }}
              >
                <Button variant="contained" color="primary" href={product.link} target="_blank" rel="noopener noreferrer">
                  Ficha Técnica
                </Button>
                <Button variant="outlined" onClick={onClose}>
                  Cerrar
                </Button>
              </Box>  
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductModalTest;
