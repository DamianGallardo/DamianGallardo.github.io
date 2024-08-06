// ContactPage.js

import React from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Link } from '@mui/material';

const ContactPage = () => {
  const locations = [
    {
      title: 'JALISCO',
      address: 'Carr. Guadalajara-Chapala #1208, Col. La Calera C.P. 45680 Guadalajara, Jalisco.',
      image: '/assets/Contact/Cards/Ciudad-Guadalajara.jpg',
      link: 'https://example.com/jalisco'
    },
    {
      title: 'CDMX',
      address: 'Carr. Atizapán Villa Nicolás Romero #46, Bulevares de Atizapán 31 y 39 C.P. 52918, Cd. López Mateos, Méx.',
      image: '/assets/Contact/Cards/Ciudad-CDMX.jpg',
      link: 'https://example.com/cdmx'
    },
    {
      title: 'NUEVO LEÓN',
      address: 'Modesto Alanis M. #2400 - 6, Col. Misión del Valle C.P. 67118, Guadalupe, Nuevo León',
      image: '/assets/Contact/Cards/Ciudad-Monterrey.jpg',
      link: 'https://example.com/nuevo-leon'
    },
    {
      title: 'SINALOA',
      address: 'Blvd Dr Jesus Kumate Rodríguez #5420 Int. 5 Col. Parque Industrial el Trébol C.P. 80104, Culiacán, Sinaloa.',
      image: '/assets/Contact/Cards/Ciudad-Culiacán.jpg',
      link: 'https://example.com/sinaloa'
    },
    {
      title: 'MATRÍZ',
      address: 'Av. Patria #844 Col. Jardines Universidad C.P. 45110, Zapopan, Jalisco',
      image: '/assets/Contact/Cards/Ciudad-Zapopan.jpg',
      link: 'https://example.com/matriz'
    }
  ];

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/assets/Galery/Imagen de WhatsApp 2024-06-17 a las 13.11.35_310c5967.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'polygon(0 25%, 100% 25%, 100% 75%, 0 75%)'
          }
        }}
      >
        <Typography
          variant="h3"
          color="white"
          sx={{
            position: 'relative',
            textShadow: '2px 2px 2px #000'
          }}
        >
          CONTACTO
        </Typography>
      </Box>

      <Container maxWidth={false} disableGutters>
        <Box sx={{ padding: '0 20px' }}>
          <Grid container spacing={2} textAlign="center" marginTop="20px">
            {locations.map((location, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <Link href={location.link} underline="none" color="inherit">
                    <Box sx={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        image={location.image}
                        alt={location.title}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
                  </Link>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      CEDIs {location.title}
                    </Typography>
                    <Link href={location.link} underline="hover" color="primary">
                      <Typography variant="body2" color="text.secondary">
                        {location.address}
                      </Typography>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
