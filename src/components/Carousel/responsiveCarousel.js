import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, Grid, Box, Typography, Button, Link } from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ResponsiveCarousel() {
  return (
    <Grid container sx={{ minHeight: '250px', width: '100%', padding: '0px' }}>
      <Item />
    </Grid>
  );
}

function Item() {
  const items = [
    { img: "/assets/Galery/b19b09d1-66dc-44c1-adb1-f0fc6a1bbfeb.jpeg" },
    { img: "/assets/media/Portada-Aislantes_actualizada.jpeg" },
    { img: "/assets/media/f69aa2b3-d980-49c0-a63d-d2736e7bcf71_actualizada.jpeg" },
    { img: "/assets/media/04ba0cf6-aec9-4e35-91a7-7fd43fd678d7_actualizada.jpeg" },
    { img: "/assets/media/Slider-3.webp" },
    { img: "/assets/media/Portada-Panel-Aislado.jpg" },
    { img: "/assets/media/Portada-Traslúcidos.jpg" },
  ];

  const theme = useTheme();
  const isMediumOrSmallerScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); // Detecta pantallas grandes

  const fadeStyle = {
    opacity: 0,
    transition: 'opacity 1s ease-in',
  };

  const fadeActiveStyle = {
    opacity: 1,
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "20%",
          left: "50%",
          transform: "translate(-50%)",
          zIndex: 1,
          padding: isLargeScreen ? "50px" : "20px", // Ajusta el padding para pantallas grandes y pequeñas
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            zIndex: 0,
            opacity: 0.5,
            overflow: "hidden"
          }}
        >
        </Box>

        <CSSTransition in={true} appear={true} timeout={1000}>
          {state => (
            <Box
              sx={{
                ...fadeStyle,
                ...(state === 'entering' || state === 'entered' ? fadeActiveStyle : {}),
                position: "absolute",
                width: "100%",
                top: "27%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 3,
                paddingLeft: "10px",
                paddingRight: "10px",
                [theme.breakpoints.up('sm')]: {
                  paddingLeft: "20px",
                  paddingRight: "20px",
                },
                [theme.breakpoints.up('md')]: {
                  paddingLeft: "30px",
                  paddingRight: "30px",
                },
              }}
            >
              <Typography
                component="h2"
                variant={isMediumOrSmallerScreen ? "h4" : "h3"} // Ajusta el tamaño del texto para pantallas pequeñas
                sx={{
                  width: "100%",
                  color: "white",
                  textAlign: "center",
                  paddingBottom: "350px",
                  textShadow: "4px 3px 4px rgba(2, 2, 2, 2)"
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    `UN SOLO <strong style="color: orange;">PROVEEDOR</strong> UN PASO SIEMPRE <strong style="color: orange;">ADELANTE</strong>`,
                }}
              />
              
            <div>
              <Typography
                component="div"
                variant="body1"
                sx={{
                  color: "white",
                  textAlign: "center",
                  fontSize: isMediumOrSmallerScreen ? "12px" : "15px", // Ajusta el tamaño del texto para pantallas pequeñas
                  paddingTop: "10px",
                  textShadow: "4px 3px 4px rgba(2, 2, 2, 2)",
                }}
              >
                  <Box
                    sx={{
                      display: isMediumOrSmallerScreen ? 'none' : 'block',
                    }}
                  >
                    <Typography
                      component="h2"
                      variant={isMediumOrSmallerScreen ? 'h6' : 'h3'} // Ajusta el tamaño del texto para pantallas medianas y más pequeñas
                      sx={{
                        width: '100%',
                        color: 'white',
                        textAlign: 'center',
                        textShadow: '4px 3px 4px rgba(2, 2, 2, 2)',
                        paddingTop: '100px',
                      }}
                      dangerouslySetInnerHTML={{
                        __html:
                          `<strong style="color: orange;">CUBRIMOS LOS MEJORES</strong> PROYECTOS DE MÉXICO<br><br>`,
                      }}
                    />
                  </Box>
                  <Typography
                      component="span"
                      variant={isMediumOrSmallerScreen ? 'h4' : 'h3'} // Ajusta el tamaño del texto para pantallas pequeñas y medianas
                      sx={{
                        width: '100%',
                        color: 'white',
                        textAlign: 'center',
                        textShadow: '4px 3px 4px rgba(2, 2, 2, 2)',
                        paddingTop: '20px',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: `<strong> ENCUÉNTRANOS EN:</strong><br>`,
                      }}
                    />
                <Button
                  variant="contained"
                  sx={{ borderRadius: "10px", backgroundColor: '#5D8DC5', color: '#ffff', marginLeft: "10px", alignItems: "center", marginTop:"20px", fontSize: '15px'}}
                  component={Link}
                  href="https://www.matriz.metalroofing.com.mx"
                  target="_blank"
                >
                  MATRIZ
                </Button>

                <Button
                  variant="contained"
                  sx={{ borderRadius: "10px", backgroundColor: '#5D8DC5', color: '#ffff', marginLeft: "10px", alignItems: "center", marginTop:"20px", fontSize: '15px'}}
                  component={Link}
                  href="https://www.jalisco.metalroofing.com.mx"
                  target="_blank"
                >
                  JALISCO
                </Button>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "10px", backgroundColor: '#5D8DC5', color: '#ffff', marginLeft: "10px", alignItems: "center", marginTop:"20px", fontSize: '15px' }}
                  component={Link}
                  href="https://www.cdmx.metalroofing.com.mx"
                  target="_blank"
                >
                  CDMX
                </Button>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "10px", backgroundColor: '#5D8DC5', color: '#ffff', marginLeft: "10px", alignItems: "center", marginTop:"20px", fontSize: '15px' }}
                  component={Link}
                  href="https://www.culiacan.metalroofing.com.mx"
                  target="_blank"
                >
                  SINALOA
                </Button>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "10px", backgroundColor: '#5D8DC5', color: '#ffff', marginLeft: "10px", alignItems: "center", marginTop:"20px", fontSize: '15px' }}
                  component={Link}
                  href="https://panelmonterrey.metalroofing.com.mx/"
                  target="_blank"
                >
                  NUEVO LEÓN
                </Button>
              </Typography>
            </div>
            </Box>
          )}
        </CSSTransition>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          zIndex: 3,
          padding: "10px",
        }}
      >
      </Box>

      <Carousel
        autoPlay={true}
        indicators={false}
        swipe={true}
        cycleNavigation={true}
        animation="slide"
        sx={{
          width: "100%",
          height: "100vh",
          zIndex: 0,
        }}
      >
        {items.map((item, i) => (
          <Grid
            item
            key={i}
            lg={12}
            sx={{
              margin: { xs: "0px", sm: "0px" },
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                width: "100%",
                height: "100vh",
              }}
            >
              <CardMedia
                component="img"
                image={item.img}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Carousel>
    </>
  );
}
