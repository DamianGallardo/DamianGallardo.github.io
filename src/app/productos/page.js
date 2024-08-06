'use client'
import React, { useState } from "react";
import { Box, Container, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Footer from '../../components/footer/Footer';
import AppBarComponent from '../../components/appBar/appBarComponent';
import CarouselBrands from '../../components/Content/CarouselBrands';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Tabs from '@/components/tabs/tabs'
import Tabsprueba from '@/components/tabs/tabsprueba';

export default function Page() { 
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const preventDownload = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <AppBarComponent />
                <Box>
                <Grid container justifyContent="center" style={{ backgroundColor: '#000000', height:'100vh' }}>
                    <video 
                        autoPlay={true}
                        src="assets/Videos/render1.mp4" 
                        alt="description of video" 
                        style={{ width: '80%', height: '100vh' }} 
                        loop
                        controlsList="nodownload" // Deshabilita el botón de descarga
                        onContextMenu={preventDownload} // Deshabilita el menú contextual
                    >
                        Your browser does not support the video tag.
                    </video>
                </Grid>
                </Box>
                <Box mt={'10px'}>
                <Grid container justifyContent="center" style={{ backgroundColor: '#000000' }}>
                        <img 
                            src="assets/media/Multupanel_Render2.jpg" 
                            alt="description of image" 
                            style={{ width: '70%', height: '49.5vh' }} 
                        />
                    </Grid>
                </Box>
                <Box mt={'30px'}>
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
                  NUESTROS PRODUCTOS
                </Typography>
                <Typography 
                    color="black" 
                    textAlign="center" 
                    variant="h5" 
                    component="h2" 
                    >
                    Contamos con el catálogo de productos más completo e integrado para construcción industrial de todo México
                </Typography>
                </Box>
                <Box mt={'30px'}></Box>
                <Box>
                  <Tabs/>
                </Box>
                <Box mt={'30px'}>
                    <Grid item xs={12}>
                        <CarouselBrands />
                    </Grid>
                </Box>
                <Container maxWidth="lg">
                    <Grid item xs={12}>
                        <Box sx={{ my: 3 }} /> {/* Espaciador */}
                    </Grid>     
                    <Grid item xs={12}>
                        <Box sx={{ my: 3 }} /> {/* Espaciador */}
                    </Grid>
                </Container>
            </Box>
            <Grid item xs={12}>
                <Box sx={{ my: 3 }} /> {/* Espaciador */}
            </Grid>
            <Footer />
        </>
    );
}
