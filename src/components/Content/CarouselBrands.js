'use client'
import React, { useEffect, useRef } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useSpringCarousel } from 'react-spring-carousel';

const mockedItems = [
    {img:'/assets/Brands/Ternium.webp'},
    {img:'/assets/Brands/Isocindu.webp'},
    {img:'/assets/Brands/stabilit-logo.webp'},
    {img:'/assets/Brands/Villacero.webp'},
    {img:'/assets/Brands/FE-Horizontal_Sinfondo.png'},
    {img:'/assets/Brands/panasonic_sinfondo.png'},
    {img:'/assets/Brands/brand-owens.webp'},
    {img:'/assets/Brands/LiaLogistic-Logotipo_Mesa de trabajo 1.png'},
    {img:'/assets/Brands/United-Racks-01.png'},
    {img:'/assets/Brands/Bingshan_logo-01.png'},
    {img:'/assets/Brands/Kingspan.webp'},
];

const CarouselItem = ({ img }) => (
    <div style={{ padding: '0 10px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', height: '100px' }}>
        <img src={img} style={{ maxHeight: '100px', width: 'auto', margin: '0 auto' }} />
    </div>
);

export default function CarouselBrands() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));

    const itemsPerSlide = isXs ? 1 : isSm ? 3 : isMd ? 3 : 7;

    const { 
        carouselFragment, 
        slideToNextItem 
    } = useSpringCarousel({
        itemsPerSlide: itemsPerSlide,
        withLoop: true,
        items: mockedItems.map((i, index) => ({
            id: index,
            renderItem: (
                <CarouselItem 
                    img={i.img}>
                </CarouselItem>
            ),
        })),
    });

    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            slideToNextItem();
        }, 3000); // Cambiar el intervalo según lo deseado (3000ms = 3 segundos)

        return () => {
            clearInterval(interval);
        };
    }, [slideToNextItem]);

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <Typography fontSize='30px' textAlign='center' color='blue'>
                {/* Puedes añadir algún título aquí si lo deseas */}
            </Typography>
            <Box mt={'30px'} /> 
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100px', overflow: 'hidden', borderRadius: '10px' }}>
                {carouselFragment}
            </div>
        </div>
    );
}
