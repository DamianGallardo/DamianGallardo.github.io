'use client'
import React, { useState } from "react";
import { Box, Tab, Tabs, Grid, Grow, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import ProductModal from '@/components/cards/productModal';

export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  const imageSize = { width: '200px', height: 'auto' };


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1, minHeight: '60vh' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const CardsProductItem = ({ titleAlt, titleimg, image, title, description, link }) => (
    <Paper
      elevation={3}
      sx={{
        padding: '15px',
        borderRadius: '8px',
        textAlign: 'center',
        transition: 'box-shadow 0.3s ease',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#fff',
        maxWidth: '500px',
        '&:hover': {
          boxShadow: '4px 8px 8px #5D8DC5',
        },
        cursor: 'pointer',
      }}
      onClick={() => openModal({ titleAlt, titleimg, image, title, description, link })}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <img src={image} alt={titleAlt} title={titleimg} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#5D8DC5' }}>FICHA TÉCNICA</a>
    </Paper>
  );

  return (
    <Box sx={{ width: '80%', margin: '0 auto' }}>
      <Box sx={{ borderBottom: 0, borderColor: "divider", alignContent:"center"}}>
      <Tabs  value={value} onChange={handleChange} variant="scrollable">
          <Tab label="TODOS" {...a11yProps(0)} />
          <Tab label="PANEL AISLADO" {...a11yProps(1)} />
          <Tab label="ACANALADOS METÁLICOS" {...a11yProps(2)} />
          <Tab label="ROLLOS / LISOS" {...a11yProps(3)} />
          <Tab label="TEJA METÁLICA" {...a11yProps(4)} />
          <Tab label="ACANALADOS ESPECIALES" {...a11yProps(5)} />
          <Tab label="TRANSLÚCIDOS" {...a11yProps(6)} />
          <Tab label="AISLANTES TERMO-ACÚSTICOS" {...a11yProps(7)} />
          <Tab label="PASO DE GATO" {...a11yProps(8)} />
          <Tab label="MOLDURAS" {...a11yProps(9)} />
        </Tabs>
      </Box>
      <Box sx={{ p: 1 }}>
        {/* TODOS */}
      <CustomTabPanel value={value} index={0}> 
        <Grow in={true} timeout={1000} style={{ transformOrigin: "0 0 0" }}>
          <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
            <CardsProductItem
              titleAlt="MULTYTECHO"
              titleimg="MULTYTECHO"
              image="/assets/Fichas/Techo/FichaWeb_Techos_Multytecho.png" href="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              title="MULTYTECHO"
              description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
              specs="<br>"
              link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
            />
          </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Multymuro"
                titleimg="Multymuro"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-Multymuro.webp"
                title="MULTYMURO"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Galvatecho"
                titleimg="Galvatecho"
                image="/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Galvatecho.png"
                title="GALVATECHO"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Panel-Galvatecho-072023-Rev01.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Econotecho"
                titleimg="Econotecho"
                image="/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Econotecho.png"
                title="ECONOTECHO"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Economuro"
                titleimg="Economuro"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-Economuro.webp"
                title="ECONOMURO"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Isocop 4"
                titleimg="Isocop 4"
                image="/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Isocop.png"
                title="ISOCOP 4"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Isoparete"
                titleimg="Isoparete"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-Isoparete.webp"
                title="ISOPARETE"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Isovinile"
                titleimg="Isovinile"
                image="/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Isovinile.png"
                title="ISOVINILE"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Isobox Vinile"
                titleimg="Isobox Vinile"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-Isobox-Vinile.webp"
                title="ISOBOX VINILE"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Kingcrown"
                titleimg="Kingcrown"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-KingCrown.webp"
                title="KINGCROWN"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Kingfoil"
                titleimg="Kingfoil"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-KingFoil.webp"
                title="KINGFOIL"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="KS Shadowline"
                titleimg="KS Shadowline"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-KS-Shadowline.webp"
                title="KS SHADOWLINE"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="MR - 72"
                titleimg="MR - 72"
                image="assets/Cards/Acanalado-Metálicos/MR-Producto-FotoAcanalado-Standard-MR-72.webp"
                title="MR - 72"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="MR - 91.5"
                titleimg="MR - 91.5"
                image="assets/Cards/Acanalado-Metálicos/MR-Producto-FotoAcanalado-Standard-MR-91_5.webp"
                title="MR - 91.5"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="MR - 100-35"
                titleimg="MR - 100-35"
                image="assets/Cards/Acanalado-Metálicos/MR-Producto-FotoAcanalado-Standard-MR-100-35.webp"
                title="MR - 100/35"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Lámina Lisa"
                titleimg="Lámina Lisa"
                image="/assets/Cards/Rollos-Lisos/LaminaMetalica_web-sinfondo.png"
                title="Lámina Lisa"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Cinta de Acero"
                titleimg="Cinta de Acero"
                image="assets/Cards/Rollos-Lisos/MR-Producto-FotoLisos-y-Rollos-Rollo-Acero.webp"
                title="Cinta de Acero"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Cinta de Acero"
                titleimg="Cinta de Acero"
                image="assets/Cards/Rollos-Lisos/MR-Producto-FotoLisos-y-Rollos-Cinta-Acero.webp"
                title="Cinta de Acero"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Bellateja"
                titleimg="Bellateja"
                image="assets/Cards/Teja-Metálica/MR-Producto-FotoLisos-y-Rollos-Bellateja.webp"
                title="Bellateja"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                  titleAlt="KR-18"
                  titleimg="KR-18"
                  image="assets/Cards/Acanalados-Especiales/MR-Producto-FotoAcanalado-Especial-KR-18.webp"
                  title="KR-18"
                  description="La lámina KR-18 no tiene limitaciones en su longitud ya que es fabricado en una sola pieza de canalón a cumbrera. Permite además la instalación de materiales aislantes y puede ser instalada en cubiertas de baja pendiente hasta 2%. Tiene un sistema de fijación oculto."
                  specs=""
                  link="https://www.metalroofing.com.mx/wp-content/uploads/2023/12/MetalRoofing-Lamina-Acanalado-KR-18-072023-Rev01.pdf"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                  titleAlt="KR-24"
                  titleimg="KR-24"
                  image="assets/Cards/Acanalados-Especiales/MR-Producto-FotoAcanalado-Especial-KR-24.webp"
                  title="KR-24"
                  description="La lámina KR-18 no tiene limitaciones en su longitud ya que es fabricado en una sola pieza de canalón a cumbrera. Permite además la instalación de materiales aislantes y puede ser instalada en cubiertas de baja pendiente hasta 2%. Tiene un sistema de fijación oculto."
                  specs=""
                  link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-KR-24-072023-Rev01.pdf"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                  titleAlt="KR-12-72"
                  titleimg="KR-12-72"
                  image="assets/Cards/Acanalados-Especiales/MR-Producto-FotoAcanalado-Especial-R-12-72.webp"
                  title="KR-12-72"
                  description="La lámina KR-18 no tiene limitaciones en su longitud ya que es fabricado en una sola pieza de canalón a cumbrera. Permite además la instalación de materiales aislantes y puede ser instalada en cubiertas de baja pendiente hasta 2%. Tiene un sistema de fijación oculto."
                  specs=""
                  link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-KR-24-072023-Rev01.pdf"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                  titleAlt="KR-45"
                  titleimg="KR-45"
                  image="assets/Cards/Acanalados-Especiales/MR-Producto-FotoAcanalado-Especial-R-45.webp"
                  title="KR-45"
                  description="La lámina KR-18 no tiene limitaciones en su longitud ya que es fabricado en una sola pieza de canalón a cumbrera. Permite además la instalación de materiales aislantes y puede ser instalada en cubiertas de baja pendiente hasta 2%. Tiene un sistema de fijación oculto."
                  specs=""
                  link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-KR-24-072023-Rev01.pdf"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                  titleAlt="KR-66"
                  titleimg="KR-66"
                  image="assets/Cards/Acanalados-Especiales/MR-Producto-FotoAcanalado-Especial-R-66.webp"
                  title="KR-66"
                  description="La lámina KR-18 no tiene limitaciones en su longitud ya que es fabricado en una sola pieza de canalón a cumbrera. Permite además la instalación de materiales aislantes y puede ser instalada en cubiertas de baja pendiente hasta 2%. Tiene un sistema de fijación oculto."
                  specs=""
                  link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-KR-24-072023-Rev01.pdf"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                  titleAlt="SSR - PLUS"
                  titleimg="SSR - PLUS"
                  image="assets/Cards/Acanalados-Especiales/MR-Producto-FotoAcanalado-Especial-SSR-Plus.webp"
                  title="SSR - PLUS"
                  description="La lámina KR-18 no tiene limitaciones en su longitud ya que es fabricado en una sola pieza de canalón a cumbrera. Permite además la instalación de materiales aislantes y puede ser instalada en cubiertas de baja pendiente hasta 2%. Tiene un sistema de fijación oculto."
                  specs=""
                  link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-KR-24-072023-Rev01.pdf"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="<ACRYLIT>"
                titleimg="ACRYLIT"
                image="assets/Cards/Translucidos/MR-Producto-FotoTraslucidos-Acrylit.webp"
                title="ACRYLIT"
                description="Las láminas de Poliacryl se adaptan a las necesidades de cualquier aplicación, brindando siempre transmisión de luz natural en espacios interiores. Es ideal para usos industriales por su gran resistencia al impacto."
                specs="<br>"
                link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acrylit-072023-Rev01.pdf"
              />
            </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="POLIACRYL"
                titleimg="POLIACRYL"
                image="assets/Cards/Translucidos/MR-Producto-FotoTraslucidos-Poliacryl.webp"
                title="POLIACRYL"
                description="Las láminas de Poliacryl se adaptan a las necesidades de cualquier aplicación, brindando siempre transmisión de luz natural en espacios interiores. Es ideal para usos industriales por su gran resistencia al impacto."
                specs="<br>"
                link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="CUBRELIT"
                titleimg="CUBRELIT"
                image="assets/Cards/Translucidos/MR-Producto-FotoTraslucidos-Cubrelit.webp"
                title="CUBRELIT"
                description="Las láminas de Poliacryl se adaptan a las necesidades de cualquier aplicación, brindando siempre transmisión de luz natural en espacios interiores. Es ideal para usos industriales por su gran resistencia al impacto."
                specs="<br>"
                link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="MACROLUX"
                titleimg="MACROLUX"
                image="assets/Cards/Translucidos/MR-Producto-FotoTraslucidos-Macrolux.webp"
                title="MACROLUX"
                description="Las láminas de Poliacryl se adaptan a las necesidades de cualquier aplicación, brindando siempre transmisión de luz natural en espacios interiores. Es ideal para usos industriales por su gran resistencia al impacto."
                specs="<br>"
                link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="LUXON"
                titleimg="LUXON"
                image="assets/Cards/Translucidos/MR-Producto-FotoTraslucidos-Luxon.webp"
                title="LUXON"
                description="Las láminas de Poliacryl se adaptan a las necesidades de cualquier aplicación, brindando siempre transmisión de luz natural en espacios interiores. Es ideal para usos industriales por su gran resistencia al impacto."
                specs="<br>"
                link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="OPALIT"
                titleimg="OPALIT"
                image="assets/Cards/Translucidos/MR-Producto-FotoTraslucidos-Opalit.webp"
                title="OPALIT"
                description="Las láminas de Poliacryl se adaptan a las necesidades de cualquier aplicación, brindando siempre transmisión de luz natural en espacios interiores. Es ideal para usos industriales por su gran resistencia al impacto."
                specs="<br>"
                link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="POLYLIT"
                titleimg="POLYLIT"
                image="assets/Cards/Translucidos/MR-Producto-FotoTraslucidos-Polylit.webp"
                title="POLYLIT"
                description="Las láminas de Poliacryl se adaptan a las necesidades de cualquier aplicación, brindando siempre transmisión de luz natural en espacios interiores. Es ideal para usos industriales por su gran resistencia al impacto."
                specs="<br>"
                link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="AC-FOAM"
                titleimg="AC-FOAM"
                image="assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-AC-Foam-II.webp"
                title="AC-FOAM"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="COLCHONETA-MBI"
                titleimg="COLCHONETA-MBI"
                image="assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-Colchoneta-MBI.webp"
                title="MBI"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="FOAMULAR"
                titleimg="FOAMULAR"
                image="assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-Foamular.webp"
                title="FOAMULAR"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="H-SHIELD"
                titleimg="H-SHIELD"
                image="assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-H-Shield.webp"
                title="H-SHIELD"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="SAFB"
                titleimg="SAFB"
                image="assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-SAFB.webp"
                title="SAFB"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Safing"
                titleimg="Safing"
                image="assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-Safing.webp"
                title="SAFING"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Termofoam"
                titleimg="Termofoam"
                image="assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-Termofoam.webp"
                title="TERMOFOAM"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="VersaBoard"
                titleimg="VersaBoard"
                image="assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-VersaBoard.webp"
                title="VERSABOARD"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Paso de Gato"
                titleimg="Paso de Gato"
                image="assets/Cards/Paso-de-Gato/MR-Producto-FotoAccesorios-Paso-de-Gato-Steelwalk.webp"
                title="PASOD DE GATO"
                description=""
                specs=""
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Caballete 100-35"
                titleimg="Caballete 100-35"
                image="assets/Cards/Molduras/MR-Producto-FotoMolduras-Caballete-100-35.webp"
                title="CABALLETE 100-35"
                description=""
                specs="
                Pija: 1/4 x 1
                <br>
                Largo: 3.05 m (10’)."
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Caballete 100-72"
                titleimg="Caballete 100-72"
                image="assets/Cards/Molduras/MR-Producto-FotoMolduras-Caballete-100-72.webp"
                title="CABALLETE 100-72"
                description=""
                specs="
                Ancho: Variable.
                <br>
                Largo: 3.05 m (10’)"
                link=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Caballete R-90"
                titleimg="Caballete R-90"
                image="assets/Cards/Molduras/MR-Producto-FotoMolduras-Caballete-R-90.webp"
                title="CABALLETE R-90"
                description=""
                specs="
                <br>
                Pija: 1/4 x 1
                <br>
                Largo: 2.44 m (8' ft)"
                link=""
              />
            </Grid>
          </Grid>
        </Grow>
      </CustomTabPanel>
      {/* PANEL AISLADO*/}
      <CustomTabPanel value={value} index={1}>
        <Grow in={true} timeout={1000} style={{ transformOrigin: "0 0 0" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Multytecho"
                titleimg="Multytecho"
                image="assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Multytecho.png"
                title="MULTYTECHO"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Multymuro"
                titleimg="Multymuro"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-Multymuro.webp"
                title="MULTYMURO"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Galvatecho"
                titleimg="Galvatecho"
                image="/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Galvatecho.png"
                title="Galvatecho"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Panel-Galvatecho-072023-Rev01.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Econotecho"
                titleimg="Econotecho"
                image="/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Econotecho.png"
                title="ECONOTECHO"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Economuro"
                titleimg="Economuro"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-Economuro.webp"
                title="ECONOMURO"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Isocop 4"
                titleimg="Isocop 4"
                image="/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Isocop.png"
                title="ISOCOP 4"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Isoparete"
                titleimg="Isoparete"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-Isoparete.webp"
                title="ISOPARETE"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Isovinile"
                titleimg="Isovinile"
                image="/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Isovinile.png"
                title="ISOVINILE"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Isobox Vinile"
                titleimg="Isobox Vinile"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-Isobox-Vinile.webp"
                title="ISOBOX VINILE"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Kingcrown"
                titleimg="Kingcrown"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-KingCrown.webp"
                title="KINGCROWN"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="Kingfoil"
                titleimg="Kingfoil"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-KingFoil.webp"
                title="KINGFOIL"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
              <CardsProductItem
                titleAlt="KS Shadowline"
                titleimg="KS Shadowline"
                image="assets/Cards/Panel-Aislado/MR-Producto-FotoPanel-Aislante-KS-Shadowline.webp"
                title="KS SHADOWLINE"
                description="El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano."
                specs="<br>"
                link="https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf"
              />
            </Grid>
          </Grid>
        </Grow>
      </CustomTabPanel>
        {/* Añade más CustomTabPanel según sea necesario */}
      </Box>
      
      {/* Modal para mostrar detalles del producto */}
      <ProductModal
        open={modalOpen}
        onClose={closeModal}
        product={selectedProduct}
        sx = {{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1300 // Ensure modal is on top
        }}
      />
    </Box>
  );
}
