'use client'
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import Footer from '../../components/footer/Footer';
import AppBarComponent from '../../components/appBar/appBarComponent';
import CarouselCertificate from '../../components/Content/CarouselCertificate';
import CarouselBrands from '../../components/Content/CarouselBrands';
import CarouselNosotros1 from '@/components/CarouselNosotros/carouselNosotros1';
import CarouselNosotros2 from '@/components/CarouselNosotros/carouselNosotros2';

export default function Page() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <AppBarComponent />
        <Grid item xs={12}>
          <Box sx={{ my: 10}} /> {/* Espaciador */}
        </Grid>
        <Box mt={'30px'}>
          <Grid item xs={12}>
            <Typography 
                  color="#5D8DC5" 
                  textAlign="center" 
                  variant="h4" 
                  component="h2" 
                  gutterBottom
                  sx={{ 
                    position: 'relative', 
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: -5, // Ajusta esto según la distancia que desees debajo del texto
                      width: '100%',
                      height: '3px', // Ajusta el grosor del subrayado
                      backgroundColor: '#5D8DC5' // Ajusta el color del subrayado
                    }
                  }}
                            >
                  Galeria
            </Typography>
          </Grid>
        </Box>
        <CarouselNosotros2 />
        <Box mt={'30px'}>
          <Grid item xs={12}>
            <CarouselBrands />
          </Grid>
        </Box>
      </Box>
      <Grid item xs={12}>
        <Box sx={{ my: 3 }} /> {/* Espaciador */}
      </Grid>
      <Footer />
    </>
  );
}
