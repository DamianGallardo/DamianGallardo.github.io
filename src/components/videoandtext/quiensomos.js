import React, { useState } from "react";
import { Box, Typography, Grid, AppBar, Toolbar, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Navbar = ({ setContent }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Button color="inherit" startIcon={<HomeIcon />} style={{ backgroundColor: '#5D8DC5', marginLeft: '10px' }}
          onClick={() => setContent('quienesSomos')}>
          QUIENES SOMOS
        </Button>
        <Button color="inherit" startIcon={<InfoIcon />} style={{ backgroundColor: '#5D8DC5', marginLeft: '10px' }}
          onClick={() => setContent('mision')}>
          MISIÓN
        </Button>
        <Button color="inherit" startIcon={<VisibilityIcon />} style={{ backgroundColor: '#5D8DC5', marginLeft: '10px' }}
          onClick={() => setContent('vision')}>
          VISIÓN
        </Button>
        <Button color="inherit" startIcon={<HandshakeIcon />} style={{ backgroundColor: '#5D8DC5', marginLeft: '10px' }}
          onClick={() => setContent('valores')}>
          VALORES
        </Button>
      </Toolbar>
    </AppBar>
  );
}

const QuienesSomosContent = () => (
  <Grid container spacing={3} style={{ minHeight: '60vh', alignItems: 'center' }}>
    <Grid item xs={12} md={6}>
      <div style={{ position: 'relative', paddingBottom: '69.9%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/stYmFBM5EX4?autoplay=1&mute=1&loop=1&playlist=stYmFBM5EX4"
          title="VIDEO CORPORATIVO"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </div>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box px={2}>
        <Typography color={'#5D8DC5'} variant="h3" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          :::QUIENES SOMOS
        </Typography>
        <Typography variant="body1" style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          Somos una empresa dedicada a la fabricación, instalación y distribución de los principales productos para la construcción industrial.
          <br /><br />
          Contamos con sucursales a lo largo de toda la República y contamos con la capacidad técnica y tecnológica para poder brindarte la solución a la medida que tu proyecto necesita.
          <br /><br />
          <span style={{ fontWeight: 'bold' }}>➔ Panel Aislado</span>
          <br />
          <span style={{ fontWeight: 'bold' }}>➔ Lámina Acanalada</span>
          <br />
          <span style={{ fontWeight: 'bold' }}>➔ Lámina Traslúcida</span>
          <br />
          <span style={{ fontWeight: 'bold' }}>➔ Aislamiento Térmico y Acústico</span>
          <br />
          <span style={{ fontWeight: 'bold' }}>➔ Racks Estantería</span>
          <br />
          <span style={{ fontWeight: 'bold' }}>➔ Estructura Metálica</span>
          <br />
          <span style={{ fontWeight: 'bold' }}>➔ Instalación Proyectos</span>
          <br /><br />
          <span style={{ color: '#5D8DC5', fontWeight: 'bold' }}>¿QUIERES SABER MÁS DE NOSOTROS?</span>
          <br />
          APRENDE MÁS SOBRE NUESTRA
          <br />
          <span style={{ color: '#5D8DC5', fontWeight: 'bold' }}>MISIÓN, VISIÓN Y VALORES</span>
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

const MisionContent = () => (
  <Box style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Typography color={'#5D8DC5'} variant="h3" style={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
      :::MISIÓN
    </Typography>
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={4}>
        <img src="/assets/Galery/DSC__0177.jpg" alt="Misión" style={{ width: '100%', height: 'auto' }} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="body1" style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', textAlign: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>➔ Impulsar el crecimiento</span> de todas las industrias de México a través de la integración de los principales productos de la más alta calidad y servicios que la construcción industrial necesita, con personal altamente calificado, con excelencia en el servicio al cliente, utilizando lo último en tecnología.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <img src="/assets/Galery/IMG_3258.jpeg" alt="Misión" style={{ width: '100%', height: 'auto' }} />
      </Grid>
    </Grid>
  </Box>
);

const VisionContent = () => (
  <Box style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Typography color={'#5D8DC5'} variant="h3" style={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
      :::VISIÓN
    </Typography>
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={4}>
        <img src="/assets/Galery/b19b09d1-66dc-44c1-adb1-f0fc6a1bbfeb.jpeg" alt="Visión" style={{ width: '100%', height: 'auto' }} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="body1" style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', textAlign: 'center' }}>
          Ser la integradora de los principales materiales para la construcción industrial más grande de México,
          <br /><br />
          contando con presencia en todo el territorio nacional, siendo un referente en la industria por nuestra
          <br /><br />
          calidad, procesos innovadores, compromiso con nuestros clientes, trabajo en equipo y nuestra
          <br /><br />
          participación en los proyectos más importantes del país.
          <br /><br />
          <span style={{ color: '#5D8DC5', fontWeight: 'bold' }}>¿QUIERES SABER MÁS DE NOSOTROS?</span>
          <br />
          APRENDE MÁS SOBRE NUESTRA
          <br />
          <span style={{ color: '#5D8DC5', fontWeight: 'bold' }}>MISIÓN, VISIÓN Y VALORES</span>
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <img src="/assets/Galery/IMG_3729.jpeg" alt="Visión" style={{ width: '100%', height: 'auto' }} />
      </Grid>
    </Grid>
  </Box>
);

const ValoresContent = () => (
  <Box style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Typography color={'#5D8DC5'} variant="h3" style={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
      :::VALORES
    </Typography>
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={4}>
        <img src="/assets/Galery/DSC_0390.jpeg" alt="Valores" style={{ width: '100%', height: 'auto' }} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="body1" style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', textAlign: 'center' }}>
          Un valor se ejecuta día con día como un hábito obligatorio para
          <br /><br />
          beneficio de nuestros clientes, esta ideologia consiste en:
          <br /><br />
          <span style={{ fontWeight: 'bold' }}>➔ UNIDAD</span>
          <br />
          <span style={{ fontWeight: 'bold' }}>➔ PASIÓN</span>
          <br />
          <span style={{ fontWeight: 'bold' }}>➔ INTEGRIDAD</span>
          <br />
          <span style={{ fontWeight: 'bold' }}>➔ LEALTAD</span>
          <br />
          <span style={{ fontWeight: 'bold' }}>➔ INNOVACIÓN</span>
          <br />
          <span style={{ fontWeight: 'bold' }}>➔ CALIDAD</span>
          <br />
          <br />
          <span style={{ color: '#5D8DC5', fontWeight: 'bold' }}>¿QUIERES SABER MÁS DE NOSOTROS?</span>
          <br />
          APRENDE MÁS SOBRE NUESTRA
          <br />
          <span style={{ color: '#5D8DC5', fontWeight: 'bold' }}>MISIÓN, VISIÓN Y VALORES</span>
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <img src="/assets/Galery/DSC_0398.jpeg" alt="Valores" style={{ width: '100%', height: 'auto' }} />
      </Grid>
    </Grid>
  </Box>
);

export default function QuienSomos() {
  const [content, setContent] = useState('quienesSomos');

  let displayedContent;
  switch (content) {
    case 'mision':
      displayedContent = <MisionContent />;
      break;
    case 'vision':
      displayedContent = <VisionContent />;
      break;
    case 'valores':
      displayedContent = <ValoresContent />;
      break;
    case 'quienesSomos':
    default:
      displayedContent = <QuienesSomosContent />;
      break;
  }

  return (
    <>
      <Navbar setContent={setContent} />
      <Box mt={3} style={{ minHeight: '70vh' }}>
        {displayedContent}
      </Box>
    </>
  );
}
