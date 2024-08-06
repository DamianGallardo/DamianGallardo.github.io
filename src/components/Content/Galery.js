'use client'
import React from 'react';
import { Box} from '@mui/material';
import { Card, CardMedia, Grid } from '@mui/material';

const items = [
    {
      name: "",
      description: "",
      img: "/assets/Galery/mpv-shot0004.jpg",
    },
    {
      name: "",
      description: "",
      img: "assets/Galery/Imagen de WhatsApp 2024-06-17 a las 13.09.44_e832253a.jpg",
    },
    {
      name: "",
      description: "",
      img: "assets/Galery/Imagen de WhatsApp 2024-06-17 a las 13.11.10_b93f09ab.jpg",
    },
    {
      name: "",
      description: "",
      img: "assets/Galery/Imagen de WhatsApp 2024-06-17 a las 13.11.35_310c5967.jpg",
    },
  ]
export default function Galery (){
    return (
              <Box sx={{ height: 'auto', padding: '10px' }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  {items.map((img, index) => (
                    <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <Card
                        elevation={0}
                        sx={{
                          borderRadius: 0,
                          width: "100%",
                          height: { xl: 500, lg: 350, md: 350, sm: 350, xs: 350 },
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={img.img}
                          sx={{
                            width: "100%",
                            height: "125%",
                            objectFit: 'cover', // Mantener las proporciones de la imagen
                          }}
                        />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>   
    )
};

