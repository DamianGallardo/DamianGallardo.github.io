'use client'
import React, { useEffect, useRef } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useSpringCarousel } from 'react-spring-carousel';

const mockedItems = [
    { img: '/assets/Certificate/adiac-logo_2.jpg' },
    { img: '/assets/Certificate/ceba-logo_2.jpg' },
    { img: '/assets/Certificate/conadiac-logo_2.jpg' },
    { img: '/assets/Certificate/global-cold_2.jpg' },
    { img: '/assets/Certificate/iarw-logo_2.jpg' },
    { img: '/assets/Certificate/wflo-logo_2.jpg' },
];

const CarouselItem = ({ img }) => (
    <div style={{ width: '100%', height: '100%' }}>
        <img src={img} alt='none' style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
);

export default function CarouselBrands() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));

    const itemsPerSlide = isXs ? 1 : isSm ? 3 : isMd ? 3 : 6;

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
            <Typography fontSize='30px' textAlign='center' color='#5D8DC5'>
                    CERTIFICADOS POR:
                </Typography>
            <Box mt={'30px'} /> 
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100px', overflow: 'hidden', borderRadius: '10px' }}>
                {carouselFragment}
            </div>
        </div>
    );
}
