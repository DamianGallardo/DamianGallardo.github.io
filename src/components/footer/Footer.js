'use client'
import Box from '@mui/material/Box';
import { Grid, Typography, Divider, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapsLocation from '../genericComponents/mapsLocation';

const Footer = () => {
  return (
    <footer>
      <Box>
        <MapsLocation/>
      </Box>
      <Box sx={styles.footerContainer}>
        <Grid container spacing={3} justifyContent={"center"} alignItems={"fixed"}>
          <Grid item xs={12}>
            <Typography variant="h6" component="div" sx={styles.sectionTitle}>
              NUESTRAS UBICACIONES
            </Typography>
          </Grid>
          {locations.map((location, index) => ( 
            <Grid item xs={12} sm={8} md={4} key={index}>
              <Box sx={styles.locationBox}>
                {location.name && (
                  <Typography variant="subtitle1" component="div" sx={styles.locationTitle}>
                    {location.name}
                  </Typography>
                )}
                {location.city && (
                  <Typography variant="body2" component="div" sx={styles.locationText}>
                    {location.city}
                  </Typography>
                )}
                {(location.city && location.address) && <Divider sx={styles.divider} />}
                {location.address && (
                  <Typography variant="body5" component="div" sx={styles.locationText}>
                    <Link
                      href={location.Link}
                      target="_blank"
                      sx={styles.link}
                      underline="none"
                    >
                      <LocationOnIcon sx={styles.icon} /> {location.address}
                    </Link>
                  </Typography>
                )}
                <Box mt={'12px'} /> 
                <Box position="relative">
                  <Typography
                    variant="body"
                    component="div"
                    sx={{
                      opacity: 0.2,
                      fontFamily:'Poppins',
                      position: 'absolute',
                      top: -20,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '40px',
                      zIndex: 1,
                    }}
                  >
                    {location.note}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box mt={'50px'} /> 
        <Box sx={styles.footerBottom}>
          <Typography variant="body5" component="div">
            UN SOLO PROVEEDOR UN PASO SIEMPRE ADELANTE
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

const locations = [
  {
    name: <h2>PLANTA JALISCO</h2>,
    city: <h3>TLAJOMULCO</h3>,
    address: "Carr. Guadalajara-Chapala #1208, Col. La Calera C.P. 45680 Guadalajara, Jalisco.",
    note: <h1>JAL</h1>,
    Link: 'https://maps.app.goo.gl/N61L92788A1QUduM8',
  },
  {
    name: <h2>PLANTA ESTADO DE MÉXICO</h2>,
    city: <h3>ATIZAPAN</h3>,
    address: "Carr. Atizapán Villa Nicolás Romero #46, Boulevares de Atizapán 31 y 39. C.P. 52918, Cd López Mateos, Méx.",
    note: <h1>CDMX</h1>,
    Link: 'https://maps.app.goo.gl/GHaAwnZyvjmPxn9T9',
  },
  {
    name: <h2> PLANTA NUEVO LEÓN</h2>,
    city: <h3>GUADALUPE</h3>,
    address: "Prolongación Ruiz Cortines #1279 Oriente, Conekta Business Park 2 C.P. 67115, Guadalupe, Nuevo León.",
    note: <h1>N.L.</h1>,
    Link:'https://maps.app.goo.gl/N8ShnGseJnnxNRea7'
  },
  {
    name: <h2>PLANTA SINALOA</h2>,
    city: <h3>EL TRÉBOL, CULIACÁN</h3>,
    address: "Blvd. Dr Jesús Kumate #54205 Col. El Trébol C.P. 80104, Culiacán, Sinaloa.",
    note: <h1>SIN</h1>,
    Link:'https://maps.app.goo.gl/SGSZtf1a4RqABMtT9',
  },
  {
    name: <h2>MATRIZ</h2>,
    city: <h3>JALISCO</h3>,
    address: "Av. Patria #844 Col. Jardines Universidad C.P. 45110, Zapopan, Jalisco",
    note: <h1>JAL</h1>,
    Link: 'https://maps.app.goo.gl/diGJ8sMcLeLRzAv49',
  },
  {
    name: <h2>BODEGA NUEVO LEÓN</h2>,
    city: <h3>GUADALUPE</h3>,
    address: "Modesto Alanis M. #2400-6, Misión del Valle C.P. 67118, Guadalupe, Nuevo León.",
    note: <h1>N.L.</h1>,
    Link: 'https://maps.app.goo.gl/EJbUjdHCtGaTYbc78',
  },
  {
    name: <h2>BODEGA SINALOA</h2>,
    city: <h3>AEROPUERTO, CULIACÁN</h3>,
    address: "Calzada Aeropuerto #8369-A Ángel del Campo y Cerrada, Bachigualato C.P. 80140, Culiacán, Sinaloa.",
    note: <h1>SIN</h1>,
    Link: 'https://maps.app.goo.gl/KNP5Zeaabjo9z6qc8',
  },
];

const styles = {
  icon: {
    color: '#5D8DC5', // Color del Icono
  },
  footerContainer: {
    backgroundColor: '#3e3e3e',
    padding: '40px 10px',
    color: 'white',
    textAlign: 'center',
  },
  text: {
  },
  sectionTitle: {
    marginBottom: '20px',
  },
  locationBox: {
    marginBottom: '20px',
    
  },
  locationTitle: {
    fontWeight: 'bold',
  },
  locationText: {
    color: 'white',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '#5D8DC5', // Color al pasar el cursor
    },
  },
  divider: {
    backgroundColor: 'white', // Color de la línea del divisor
    margin: '5px 0',          // Espaciado alrededor del divisor
  },
  note: {
    opacity: 0.3, // Ajusta la opacidad según sea necesario
    fontStyle: 'italic',
  },
  footerBottom: {
    marginTop: '20px',
    borderTop: '1px solid white',
    paddingTop: '20px',
  },
};

export default Footer;
