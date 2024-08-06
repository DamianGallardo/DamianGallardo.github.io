'use client'
import React from 'react';
import { Box, Grid } from '@mui/material';
import Footer from '@/components/footer/Footer';
import CarouselCertificate from '../components/Content/CarouselCertificate';
import CarouselBrands from '../components/Content/CarouselBrands';
import Galery from '../components/Content/Galery';
import ResponsiveCarousel from '@/components/Carousel/responsiveCarousel';
import QuienSomos from '@/components/videoandtext/quiensomos';
import Mrnumbers from '@/components/numbersMR/mrnumbers'
import CallToAction from '@/components/callToAction/callToAction';

export default function Page() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <ResponsiveCarousel />
        <Grid>  
          <CarouselCertificate />
        </Grid>
        <Box mt={'30px'}>
          <Galery />
        </Box>
        <Box mt={'30px'}>
          <Mrnumbers />
        </Box>
        <Box mt={'30px'}>
          <Grid item xs={12}>
            <CarouselBrands />
          </Grid>
        </Box>
        <Box mt={'30px'}>
          <Grid item xs={12}>
            <QuienSomos/>
          </Grid>
        </Box>
      </Box>
      <Box mt={'15px'}>
          <Grid item xs={12}>
            <CallToAction/>
          </Grid>
        </Box>
      <Footer />
    </>
  );
}
