'use client'
import React from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import Footer from '../../components/footer/Footer';
import AppBarComponent from '../../components/appBar/appBarComponent';
import ContactPage from '@/components/contacto/contact';
import HubspotForm from '@/components/contacto/formulario'


export default function Page() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <AppBarComponent />
        <Grid item xs={12}>
          <Box sx={{ my: 10}} /> {/* Espaciador */}
          <ContactPage/>
        </Grid>
        <Box mt={'30px'}>
          <Grid item xs={12}>
          </Grid>
        </Box>
        <Box mt={'30px'}>
          <Grid item xs={12}>
          </Grid>
        </Box>
      </Box>
      <Box mt={'30px'}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center" gutterBottom>
            Rellena el formulario y pronto nos pondremos en contacto contigo
          </Typography>
        </Grid>
      </Box>
      <Box mt={'30px'} display="flex" justifyContent="center">
        <Box sx={{ my: 3, width: '100%', maxWidth: '600px' }}> {/* Ajustar el ancho máximo del formulario */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <HubspotForm />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
