import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'


export default function MapsLocation() {
  return (
    <>
    <Box sx={{bgcolor:'#3e3e3e', width:'100%', marginTop:'20px', py:'3' }} > 
        <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}  paddingTop={'20px'} >
                <Box sx={{display:'flex', flexDirection:'column' }} >
                    <Typography  fontSize={'24px'} color={'white'} >
                    ¿Dónde estamos?
                    </Typography>
                    <Typography  fontSize={'16px'} color={'white'} pt={'20px'} pb={'20px'} >
                    Ven y conoce la opción No. 1 para construcción industrial de la República Mexicana.<br/><br/>
                    En Metal Roofing encontraras la oferta integral para tu construcción industrial en un solo sitio.<br/><br/>
                    Además de contar con el inventario más completo de panel aislado, aislamiento térmico y lámina traslúcida; contamos con fabricación de lámina acanalada de los principales perfiles con entrega express.
                    </Typography>
                    <Image src="/assets/logo/24-hrs-express.webp" alt='logoMetalRoofing' width={500} height={250} />
                </Box>
            </Grid>            
            <Grid item xs={12} md={6} paddingTop={'20px'} >
                <Box sx={{bgcolor:'#FFFFFF', width:'100%', height:'350px',}} >
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=166fNp7sYVuYYyPAQKpW8Qb327A0OMU4&ehbc=2E312F&noprof=1" width="100%" height="350px"></iframe>                </Box>
                <Box mt={'3'} /> 
            </Grid>
        </Grid>
        </Container>
    </Box>
    </>
  )
}
