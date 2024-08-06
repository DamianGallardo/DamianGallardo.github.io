'use client'
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import HubspotForm from '@/components/formulariosTrabajos/formulariosVacantes';
import Footer from '../../components/footer/Footer';

export default function () {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: 'url(/assets/media/f69aa2b3-d980-49c0-a63d-d2736e7bcf71.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    width: '100%',
                }}
            >
                <Typography 
                    variant="h3" 
                    color="white"
                    sx={{ 
                        textShadow: '2px 2px 2px #000', 
                        textAlign: 'left',
                        padding: '0 20px', // Añadir un poco de padding para evitar que el texto toque los bordes
                    }}
                >
                    
                </Typography>
            </Box>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{ my: 10 }} /> {/* Espaciador */}
                    <HubspotForm />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ my: 10 }} /> {/* Espaciador */}
                    <Footer />
                </Grid>
            </Grid>
        </>
    );
}
