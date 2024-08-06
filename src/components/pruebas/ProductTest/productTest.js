'use client';
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '@/components/footer/Footer';
import AppBarComponent from '@/components/appBar/appBarComponent';
import CarouselBrands from '@/components/Content/CarouselBrands';
import BasicTabs, {product} from "@/components/tabs/tabsprueba";
import CardsProduct from "@/components/cards/cardsProduct"; // Importar el componente CardsProduct
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function Page() {
  const [value, setValue] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <AppBarComponent />
        <Box>
          <Grid container justifyContent="center" style={{ backgroundColor: '#000000' }}>
            <video 
              src="assets/Galery/Video-de-WhatsApp-2024-06-14-a-las-16.34.38_fa9157e3.webm" 
              alt="description of video" 
              style={{ width: '100%', height: '49.5vh' }} 
              autoplay
              loop
            >
              Your browser does not support the video tag.
            </video>
          </Grid>
        </Box>
        <Box mt={'10px'}>
          <Grid container justifyContent="center" style={{ backgroundColor: '#000000' }}>
            <img 
              src="assets/media/Multupanel_Render2.jpg" 
              alt="description of image" 
              style={{ width: '100%', height: '49.5vh' }} 
            />
          </Grid>
        </Box>
        <Box mt={'30px'}>
          <Typography 
            color="#5D8DC5" 
            textAlign="center" 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              position: 'relative', 
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: -5, // Ajusta esto según la distancia que desees debajo del texto
                width: '100%',
                height: '3px', // Ajusta el grosor del subrayado
                backgroundColor: '#5D8DC5' // Ajusta el color del subrayado
              }
            }}
          >
            NUESTROS PRODUCTOS
          </Typography>
          <Typography 
            color="black" 
            textAlign="center" 
            variant="h5" 
            component="h2" 
          >
            Contamos con el catálogo de productos más completo e integrado para construcción industrial de todo México
          </Typography>
        </Box>
        <Box mt={'30px'}></Box>
        <Box>
          <Container maxWidth="lg">
            <Tabsprueba handleOpen={handleOpen} />
          </Container>
        </Box>
        <Box mt={'30px'}>
          <Grid item xs={12}>
            <CarouselBrands />
          </Grid>
        </Box>
        <Container maxWidth="lg">
          <Grid item xs={12}>
            <Box sx={{ my: 3 }} /> {/* Espaciador */}
          </Grid>     
          <Grid item xs={12}>
            <Box sx={{ my: 3 }} /> {/* Espaciador */}
          </Grid>
        </Container>
      </Box>
      <Grid item xs={12}>
        <Box sx={{ my: 3 }} /> {/* Espaciador */}
      </Grid>
      <Footer />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{selectedProduct?.title}</ModalHeader>
              <ModalBody>
                {selectedProduct && (
                  <CardsProduct
                    titleAlt={selectedProduct.titleAlt}
                    titleimg={selectedProduct.titleimg}
                    image={selectedProduct.image}
                    title={selectedProduct.title}
                    description={selectedProduct.description}
                    specs={selectedProduct.specs}
                    link={selectedProduct.link}
                  />
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
