'use client'
import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs, Paper, Modal, Backdrop, Grid, IconButton, Button} from '@mui/material';
import PropTypes from 'prop-types';
import Grow from '@mui/material/Grow';
import CloseIcon from '@mui/icons-material/Close';
import ProductModalTest from '@/components/pruebas/ModalTest/productModalTest';
import './modalStyles.css'; // Importa el archivo CSS
import CustomIconButton2 from "../pruebas/ProductTest/customIconButton2";
import CustomIconButton1 from "../pruebas/ProductTest/customIconButton1";


export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1, minHeight: '60vh' }}>{children}</Box>}
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

const CardsProduct = ({ product, onClick }) => (
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
      cursor: 'pointer'
    }}
    onClick={() => onClick(product)}
  >
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '350px' }}>
      <img src={product.imagePortada} alt={product.titleAlt} title={product.titleimg} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
    </div>
    <h2>{product.title}</h2>
    <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
    {product.link && (
      <Button
        variant="contained"
        color="primary"
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: '#5D8DC5',
          width: 'auto', // Ajuste el tamaño del botón al tamaño del texto
          alignSelf: 'center', // Centra el botón horizontalmente
        }}
        onClick={(e) => e.stopPropagation()} // Evita que el clic en el botón dispare el clic del Paper
      >
        FICHA TÉCNICA
      </Button>
    )}
  </Paper>
  );

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Cambia el estilo del cuerpo del documento al abrir/cerrar el modal
    if (modalOpen) {
      document.body.style.position = 'flex';
      document.body.style.overflow = '';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
    }
  }, [modalOpen]);

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

  const handleCardClick = (product) => {
    openModal(product);
  };

  const allProducts = [
    {
      titleAlt: "MULTYTECHO",
      titleimg: "MULTYTECHO",
      imagePortada: "/assets/Cards/Panel-Aislado-Actualizado/con-circulo/Ficha-Técnicas-web_ccolor_Multytecho_Arena.png",
      images: [
        "/assets/Cards/Panel-Aislado-Actualizado/sin-circulo/Ficha-Técnicas-web_scolor_Multytecho_Blanco.png",
        "/assets/Cards/Panel-Aislado-Actualizado/sin-circulo/Ficha-Técnicas-web_scolor_Multytecho_Arena.png",
      ],
      title: "MULTYTECHO",
      description: "El Panel Aislado Multytecho está compuesto por lámina metálica calibre 26 en ambas caras y núcleo de espuma de poliuretano.",
      specs: "<br>Panel sándwich para cubiertas prefabricadas, que se fabrica en un proceso continuo; esta compuesto por un núcleo de espuma rígida de poliuretano y dos caras de acero grado SS37, ambas caras van adheridas químicamente en forma continua mediante el propio núcleo. <br><br>Este producto está diseñado para cubiertas de una gran diversidad de aplicaciones, es complementando con una tapajunta que se ensambla como clip a presión sobre las crestas laterales, para cubrir la unión longitudinal hembra-macho y los accesorios de fijación.",
      additionalSpecs: {
        AnchoEfectivo: "1.00 mts | 39.37\" in",
        calibres: "26/26, 26/28",
        largos: "Mínimo: 2.50 mts | 98.42\" in<br>Máximo: 14.63 mts | 575.98\" in",
        espesor: "1\" | 1.5\" | 2\" | 2.5\" | 3\" | 4\" | 5\" | 6\"",
        tipoDeEspuma: "PUR | Poliuretano<br>PIR | Poliisoocianurato",
        recomendaciones: "Pijas autoroscantes de 1/4” x largo = al espesor de panel + 1”."
      },
      link: "https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Multytecho-Panel_Aislado-1123-MR.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton1'
    },
    {
      titleAlt: "MULTYMURO",
      titleimg: "MULTYMURO",
      imagePortada: "/assets/Cards/Panel-Aislado-Actualizado/con-circulo/Ficha-Técnicas-web_ccolor_Multymuro_Blanco.png",
      images: [
        "/assets/Cards/Panel-Aislado-Actualizado/sin-circulo/Ficha-Técnicas-web_scolor_Multymuro_Blanco.png",
        "/assets/Cards/Panel-Aislado-Actualizado/sin-circulo/Ficha-Técnicas-web_scolor_Multymuro_Arena.png",
      ],
      title: "MULTYMURO",
      description: "El Panel Aislado Multymuro es ideal para fachadas arquitectónicas de aeropuertos, hoteles, restaurantes y vivienda. Se puede instalar vertical u horizontalmente.",
      specs: "<br>Es un panel hermético compuesto por 2 láminas de acero GR-37 con un centro de poliuretano diseñado para interiores, con una estética metálica industrial. <br><br>Se utilizan para levantar muros y aislar un espacio acústico y térmicamente del paso de calor o frío con fines de eficiencia energética y auditiva. <br><br>Es la opción perfecta para tus proyectos de construcción en muros al interior de naves industriales, comerciales, almacenes, laboratorios, y cámaras de refrigeración, entre otros espacios, u sistema de acoplamiento evita el riesgo de filtración de elementos exteriores.",
      additionalSpecs: {
        AnchoEfectivo: "1.067 mts | 42\" in",
        calibres: "26/26",
        largos: "Mínimo: 2.50 mts | 98.42\" in<br>Máximo: 12.40 mts | 480.31\" in",
        espesor: "1\" | 1.5\" | 2\" | 2.5\" | 3\" | 4\" | 5\" | 6\"",
        tipoDeEspuma: "PUR | Poliuretano<br>PIR | Poliisoocianurato",
        recomendaciones: "Pijas autoroscantes de 1/4” x largo = al espesor de panel + 1”."
      },
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Panel-Multymuro-072023-Rev01.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton1'
    },
    {
      titleAlt: "Galvatecho",
      titleimg: "Galvatecho",
      imagePortada: "/assets/Cards/Panel-Aislado-Actualizado/con-circulo/Ficha-Técnicas-web_ccolor_Galvatecho_Arena.png",
      images: [
        "/assets/Cards/Panel-Aislado-Actualizado/sin-circulo/Ficha-Técnicas-web_scolor_Galvatecho_Blanco.png",
        "/assets/Cards/Panel-Aislado-Actualizado/sin-circulo/Ficha-Técnicas-web_scolor_Galvatecho_Arena.png",
      ],
      title: "GALVATECHO",
      description: "El Panel Aislado Galvatecho está diseñado para satisfacer las necesidades de cubiertas de todo tipo de construcción, con núcleo de espuma de poliuretano.",
      specs: "Son paneles tipo “sandwich” que están compuestos por 2 láminas de acero G-37 con tratamiento para exteriores, con un núcleo de espuma de poliuretano.<br><br> Se utilizan para aislar un espacio acústico y térmicamente del paso de calor o frío con fines de eficiencia energética y auditiva.<br><br>Es la opción perfecta para tus proyectos de construcción en techos, que, usados con la familia de paredes (muros) te brindarán una solución completa.<br><br>Es un material ligero, fácil de instalar, fácil de reparar y reemplazar, su sistema es modular, resiste el clima, resistente a la corrosión, impermeable y está certificado para cumplir con todas las normas calidad que su proyecto requiere.",
      additionalSpecs: {
        AnchoEfectivo: "1.00 mts | 39.37\" in",
        calibres: "26/26 | 26/28",
        largos: "Mínimo: 2.50 mts | 98.42\" in<br>Máximo: 14.63 mts | 480.31\" in",
        espesor: "1\" | 1.5\" | 2\" | 2.5\" | 3\" | 4\" | 5\" | 6\"",
        tipoDeEspuma: "PUR | Poliuretano<br>PIR | Poliisoocianurato",
        recomendaciones: "Pijas autoroscantes de 1/4” x largo = al espesor de panel + 1”."
      },
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Panel-Galvatecho-072023-Rev01.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton1'
    },
    {
      titleAlt: "Econotecho",
      titleimg: "Econotecho",
      imagePortada: "/assets/Cards/Panel-Aislado-Actualizado/con-circulo/Ficha-Técnicas-web_ccolor_Econotecho_Blanco.png",
      images: [
        "/assets/Cards/Panel-Aislado-Actualizado/sin-circulo/Ficha-Técnicas-web_scolor_Econotecho_Blanco.png",
        "/assets/Cards/Panel-Aislado-Actualizado/sin-circulo/Ficha-Técnicas-web_scolor_Econotecho_Arena.png",
      ],
      title: "ECONOTECHO",
      description: "El Panel Aislado Econotecho implementa el uso de vinil reforzado en cara interior, que mejora la competitividad del producto y genera ahorros significativos, aislante térmico y aislante acústico.",
      specs: "Panel aislante fabricado con cara exterior de acero y cara interior de vinil que ofrece una solución económica para cubiertas de bajo requerimiento de apariencia interior y de menor resistencia estructural.<br><br>Dadas sus características y propiedades, el uso del Econotecho presenta varias ventajas. En primer lugar, su ligereza facilita el traslado, manejo y montaje de este producto, lo cual resulta fundamental para reducir los tiempos del proyecto y el empleo de mano de obra adicional para instalarlo.",
      additionalSpecs: {
        AnchoEfectivo: "1.00 mts | 39.37\" in",
        calibres: "26/26 | 26/28",
        largos: "Mínimo: 2.50 mts | 98.42\" in<br>Máximo: 12.00 mts | 472.44\" in",
        espesor: "1\" | 1.5\" | 2\"",
        tipoDeEspuma: "PUR | Poliuretano<br>PIR | Poliisoocianurato",
        recomendaciones: "Pijas autoroscantes de 1/4” x largo = al espesor de panel + 1”."
      },
      link: "https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Econotecho-Panel_Aislado-1123-MR.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton1'
    },
    {
      titleAlt: "Economuro",
      titleimg: "Economuro",
      imagePortada: "/assets/Cards/Panel-Aislado-Actualizado/con-circulo/Ficha-Técnicas-web_ccolor_Economuro_Arena.png",
      images: [
        "/assets/Cards/Panel-Aislado-Actualizado/sin-circulo/Ficha-Técnicas-web_scolor_Economuro_Blanco.png",
        "/assets/Cards/Panel-Aislado-Actualizado/sin-circulo/Ficha-Técnicas-web_scolor_Economuro_Arena.png",
      ],
      title: "ECONOMURO",
      description: "El Panel Aislado Economuro es un panel aislado para muro que cuenta con la misma configuración que el Multymuro Mesa, implementa el uso de vinil reforzado.",
      specs: "Es un panel TIPO SAND hermético compuesto por 1 lámina de acero GR-37 con un centro de poliuretano y una CARA INTERNA de vinil, diseñado para interiores, con una estética metálica industrial.<br><br>Se utilizan para levantar muros y aislar un espacio acústico y térmicamente del paso de calor o frío con fines de eficiencia energética y auditiva.<br><br></br>Es la opción perfecta para tus proyectos de construcción en muros al interior de naves industriales, comerciales, almacenes, laboratorios, y cámaras de refrigeración, entre otros espacios, su sistema de acoplamiento evita el riesgo de filtración de elementos exteriores.",
      additionalSpecs: {
        AnchoEfectivo: "1.067 mts | 42\" in",
        calibres: "26/Vinile",
        largos: "Mínimo: 2.50 mts | 98.42\" in<br>Máximo: 8.00 mts | 314.96\" in",
        espesor: "1.5\" | 2\"",
        tipoDeEspuma: "PUR | Poliuretano<br>PIR | Poliisoocianurato",
        recomendaciones: "Pijas autoroscantes de 1/4” x largo = al espesor de panel + 1”."
      },
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Panel-Economuro-072023-Rev01.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton1'
    },
    {
      titleAlt: "Isocop 4",
      titleimg: "Isocop 4",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Isocop.png",
      images: [
        "/assets/Cards/FichasWebCorreciones/Fichaweb_Isocop.png",
        "/assets/Cards/FichasWebCorreciones/Fichaweb_Isocop.png"
      ],
      title: "ISOCOP 4",
      description: "Panel de doble revestimiento metálico con aislamiento en espuma rígida de poliuretano o poliisocianurato según requerimiento, para cubiertas con pendiente mínima de 5%.",
      specs: "",
      link: "https://www.metalroofing.com.mx/wp-content/uploads/2024/02/Isocop_4-Panel_Aislado-1123-MR.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton2'
    },
    {
      titleAlt: "Isoparete",
      titleimg: "Isoparete",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Isoparate.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Isoparate.png"],
      title: "ISOPARETE",
      description: "Isoparete es un panel sándwich de acero revestido empleado para uso de pared en edificios industriales, comerciales y cámaras frías. Con fijación de tornillo oculto, permite fabricaciones de alta calidad desde el punto de vista estético.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Panel-Isoparete-072023-Rev01.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton2'
    },
    {
      titleAlt: "Isovinile",
      titleimg: "Isovinile",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_isovinile.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_isovinile.png"],
      title: "ISOVINILE",
      description: "Panel monolámina con aislamiento en espuma rígida de poliuretano o poliisocianurato para cubierta con pendiente mínima del 5%. Se caracteriza por un su laminado interior en vinil blanco.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Panel-Isovinile-072023-Rev01.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton2'
    },
    {
      titleAlt: "Isobox Vinile",
      titleimg: "Isobox Vinile",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Isobox vinile.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Isobox vinile.png"],
      title: "ISOBOX VINILE",
      description: "Isobox es un panel para muro utilizado en edificios industriales y comerciales o sobre tabiques interiores, adecuado para cámaras frigoríficas y de congelación. Su espesor permite un menor gasto de operación y menor inversión en equipos de refrigeración.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Panel-Isobox-Vinile-072023-Rev01.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton2'
    },
    {
      titleAlt: "Kingcrown",
      titleimg: "Kingcrown",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_KingCrown.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_KingCrown.png"],
      title: "KINGCROWN",
      description: "KingCrown es la solución definitiva en sistemas con altos valores R y la elección correcta cuando buscamos eficiencia energética, bajo peso y bajo mantenimiento.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Panel-KingCrown-072023-Rev01.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton2'
    },
    {
      titleAlt: "Kingfoil",
      titleimg: "Kingfoil",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_King foil.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_King foil.png"],
      title: "KINGFOIL",
      description: "KingFoil es el panel aislante para techos con un foil de vinil blanco de excelente apariencia y alta reflectividad, de bajo mantenimiento y alta conservación de su poder térmico durante el paso del tiempo.",
      specs: "",
      link: "https://www.metalroofing.com.mx/wp-content/uploads/2024/02/KingFoil-Panel_Aislado-1123-MR.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton2'
    },
    {
      titleAlt: "KS Shadowline",
      titleimg: "KS Shadowline",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_KS ShadowLine.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_KS ShadowLine.png"],
      title: "KS SHADOWLINE",
      description: "KS Shadowline ofrece una apariencia estética limpia y plana que dan al proyecto una apariencia moderna y pulida. El proceso de manufactura de Kingspan tiene un diseño único del núcleo aislante, con beneficios de calidad.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Panel-KS-Shadowline-072023-Rev01.pdf",
      categories: ["PANEL AISLADO"],
      useCustomIconButton: 'CustomIconButton2'
    },
    {
      titleAlt: "MR - SteelDeck 25",
      titleimg: "MR - SteelDeck 25",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_MR Steel 25.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_MR Steel 25.png"],
      title: "MR - SteelDeck 25",
      description: "Estructural para entrepiso metálico, donde en combinación con el concreto forma una losa reforzada optimizando el tiempo de ejecución al eliminar el uso de cimbra tradicional, ya que permite coladas simultáneas de entrepiso y azoteas.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-MR-SteelDeck25-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]

    },
    {
      titleAlt: "MR - 101",
      titleimg: "MR - 101",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_MR101.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_MR101.png"],
      title: "MR - 101",
      description: "Ideal para cubiertas y faldones de naves industriales que requieran buena capacidad estructural y de desagüe.El perfil acanalado R-101 es fácil de instalar y cuenta con amplia variedad de calibres, acabados, largos y tiene un excelente tiempo de vida útil.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-MR-101-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]
    },
    {
      titleAlt: "MR - 72",
      titleimg: "MR - 72",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_MR72.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_MR72.png"],
      title: "MR - 72",
      description: "Se fabrica en nuestra planta mediante una roladora estacionaria a partir de rollos de acero con un desarrollo de 91 cm de ancho para se utilizado como cubierta de fijación expuesta. Puede utilizarse en construcciones en general.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-MR72-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]

    },
    {
      titleAlt: "MR - 91.5",
      titleimg: "MR - 91.5",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_MR91.5.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_MR91.5.png"],
      title: "MR - 91.5",
      description: "Es un perfil que cuenta con prestaciones estructurales y estéticas. Se comercializa principalmente para uso en mezzanines con duela o corcho en lecho superior o en fachadas de edificios y aeropuertos.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-MR-RD91_5-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]

    },
    {
      titleAlt: "MR - 100-35",
      titleimg: "MR - 100-35",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_MR100-35.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_MR100-35.png"],
      title: "MR - 100/35",
      description: "Lamina acanalada trapezoidal CM100/35 con excelente capacidad estructural, su diseño tiene un doble canal antisifón asegurándose de esta manera su impermeabilidad",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-MR100-35-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]
    },
    {
      titleAlt: "MR O - 100",
      titleimg: "MR O - 100",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_MRO-100.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_MRO-100.png"],
      title: "MR O -100",
      description: "El perfil acanalada O-100 sirve para cubiertas rectas o curvas, mediante combado previo. Es de fácil manejo y rápida instalación.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-MR-O-100-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]
    },
    {
      titleAlt: "R - 90",
      titleimg: "R - 90",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_R-90.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_R-90.png"],
      title: "R - 90",
      description: "El perfil acanalado R-90 es ideal para cubrir largos claros o instalarse en cubiertas con pendientes bajas y gran necesidad de desagüe. Genera ahorro en elementos de soporte o polinería y su instalación es muy rápida.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-R90-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]
    },
    {
      titleAlt: "KR-18",
      titleimg: "KR-18",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_KR-18.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_KR-18.png"],
      title: "KR-18",
      description: "La lámina KR-18 no tiene limitaciones en su longitud ya que es fabricado en una sola pieza de canalón a cumbrera. Permite además la instalación de materiales aislantes y puede ser instalada en cubiertas de baja pendiente hasta 2%. Tiene un sistema de fijación oculto.",
      specs: "",
      link: "https://www.metalroofing.com.mx/wp-content/uploads/2023/12/MetalRoofing-Lamina-Acanalado-KR-18-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]
    },
    {
      titleAlt: "KR-24",
      titleimg: "KR-24",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_KR-24.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_KR-24.png"],
      title: "KR-24",
      description: "La Lámina engargolada KR-24 es rolada con equipo portátil, que facilita su traslado e instalación. Su fijación es oculta por medio de clips y su traslape longitudinal es engargolable, esto garantiza un bajo costo de mantenimiento y gran impermeabilidad.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-KR-24-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]
    },
    {
      titleAlt: "R-12-72",
      titleimg: "R-12-72",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_R12-72.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_R12-72.png"],
      title: "R-12-72",
      description: "Es un perfil con alta resistencia estructural y adaptable a la lámina R-90,su fabricaciónparte de un rollo de 91.5 cm (36”), por lo que resulta muy competitiva en costo y calidad e n relación con otros productos.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-R12-72-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]
    },
    {
      titleAlt: "R-45",
      titleimg: "R-45",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_R-45.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_R-45.png"],
      title: "R-45",
      description: "Es un perfil con alta resistencia estructural de tipo engargolable, ACANALADOS ESPECIALES su fabricación parte de un rollo de 91.5 cm (36”). Es una lámina que se puede combinar y su uso es muy variable para muros, techos, casetas, etc.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-R45-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]
    },
    {
      titleAlt: "R-66",
      titleimg: "R-66",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_R-66.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_R-66.png"],
      title: "R-66",
      description: "Este sistema de techado es el más económico de su tipo gracias a la combinación de la lámina estructural R-66, ya que se logran claros de 10 mts. La rapidez de instalación por la poca cantidad de elementos que intervienen.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-R-66-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]
    },
    {
      titleAlt: "SSR - PLUS",
      titleimg: "SSR - PLUS",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_SSRPLUS.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_SSRPLUS.png"],
      title: "SSR - PLUS",
      description: "Sistema de Cubierta Tipo SSR (Standing Seam Roof) Acanalado y Engargolado en obra, su sistema de fijación oculto a base de clips, disminuye el riesgo de filtraciones y no se requiere perforar la lámina para su instalacion. No tiene limitaciones en su longitud, ya que es fabricado en una sola pieza de canalón a cumbrera.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-SSR-Plus-072023-Rev01.pdf",
      categories: ["ACANALADOS METÁLICOS"]
    },
    {
      titleAlt: "Lámina Lisa",
      titleimg: "Lámina Lisa",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Lamina Metalica.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Lamina Metalica.png"],
      title: "Lámina Lisa",
      description: "El uso de nuestra lámina lisa de acero recubierto es sinónimo de garantía y calidad. Tenemos gran variedad de largos y acabados.",
      specs: "Calibres: 28 / 26 / 24 / 22 / 20",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Acero-Lamina-072023-Rev01.pdf",
      categories: ["ROLLOS / LISOS"]
    },
    {
      titleAlt: "Rollo de Acero",
      titleimg: "Rollo de Acero",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_RolloAcero.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_RolloAcero.png"],
      title: "Rollo de Acero",
      description: "Entre las características más destacadas del Rollo 3′ de Acero está su disponibilidad en acabados y calibres para cumplir con las exigencias de cada proyecto.",
      specs: "Calibres: 28 / 26 / 24 / 22 / 20",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Acero-Rollo-072023-Rev01.pdf",
      categories: ["ROLLOS / LISOS"]
    },
    {
      titleAlt: "Cinta de Acero",
      titleimg: "Cinta de Acero",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_CintaAcero.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_CintaAcero.png"],
      title: "Cinta de Acero",
      description: "La disponibilidad de las Cinta de Acero es variada, tanto en medidas como en su diseño de manera que puede utilizarse en el sector automotriz, eléctrico, electrónico, entre otros.",
      specs: "",
      link: "",
      categories: ["ROLLOS / LISOS"]
    },
    {
      titleAlt: "Bellateja",
      titleimg: "Bellateja",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Bellateja.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Bellateja.png"],
      title: "Bellateja",
      description: "Es un producto de acero galvanizada y pintada de apariencia similar a la teja tradicional con la durabilidad del acero recubierto. Puede ser instalado sobre polines de acero, paneles de madera y losa de concreto.",
      specs: "<br><strong>Calibre:</strong> 26 <br><br><strong>Poder Cubriente:</strong> 1.00 Metro efectivo",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Bellateja-072023-Rev01.pdf",
      categories: ["TEJA METÁLICA"]
    },
    {
      titleAlt: "KR-18",
      titleimg: "KR-18",
      imagePortada:"/assets/Cards/Acanalados-Especiales/Fichaweb_KR-18.png",
      images: ["/assets/Cards/Acanalados-Especiales/Fichaweb_KR-18.png"],
      title: "KR-18",
      description: "La lámina KR-18 no tiene limitaciones en su longitud ya que es fabricado en una sola pieza de canalón a cumbrera. Permite además la instalación de materiales aislantes y puede ser instalada en cubiertas de baja pendiente hasta 2%. Tiene un sistema de fijación oculto.",
      specs: "",
      link: "https://www.metalroofing.com.mx/wp-content/uploads/2023/12/MetalRoofing-Lamina-Acanalado-KR-18-072023-Rev01.pdf",
      categories: ["ACANALADOS ESPECIALES"]
    },
    {
      titleAlt: "KR-24",
      titleimg: "KR-24",
      imagePortada:"/assets/Cards/Acanalados-Especiales/Fichaweb_KR-24.png",
      images: ["/assets/Cards/Acanalados-Especiales/Fichaweb_KR-24.png"],
      title: "KR-24",
      description: "La Lámina engargolada KR-24 es rolada con equipo portátil, que facilita su traslado e instalación. Su fijación es oculta por medio de clips y su traslape longitudinal es engargolable, esto garantiza un bajo costo de mantenimiento y gran impermeabilidad.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-KR-24-072023-Rev01.pdf",
      categories: ["ACANALADOS ESPECIALES"]
    },
    {
      titleAlt: "KR-12-72",
      titleimg: "KR-12-72",
      imagePortada:"/assets/Cards/Acanalados-Especiales/Fichaweb_R12-72.png",
      images: ["/assets/Cards/Acanalados-Especiales/Fichaweb_R12-72.png"],
      title: "KR-12-72",
      description: "Es un perfil con alta resistencia estructural y adaptable a la lámina R-90,su fabricaciónparte de un rollo de 91.5 cm (36”), por lo que resulta muy competitiva en costo y calidad en relación con otros productos.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-KR-12-72-072023-Rev01.pdf",
      categories: ["ACANALADOS ESPECIALES"]
    },
    {
      titleAlt: "KR-45",
      titleimg: "KR-45",
      imagePortada:"assets/Cards/Acanalados-Especiales/Fichaweb_R-45.png",
      images: ["/assets/Cards/Acanalados-Especiales/Fichaweb_R-45.png"],
      title: "KR-45",
      description: "Es un perfil con alta resistencia estructural de tipo engargolable, acanalados especiales su fabricación parte de un rollo de 91.5 cm (36”). Es una lámina que se puede combinar y su uso es muy variable para muros, techos, casetas, etc.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-KR-45-072023-Rev01.pdf",
      categories: ["ACANALADOS ESPECIALES"]
    },
    {
      titleAlt: "KR-66",
      titleimg: "KR-66",
      imagePortada:"/assets/Cards/Acanalados-Especiales/Fichaweb_R-66.png",
      images: ["/assets/Cards/Acanalados-Especiales/Fichaweb_R-66.png"],
      title: "KR-66",
      description: "Este sistema de techado es el más económico de su tipo gracias a la combinación de la lámina estructural R-66, ya que se logran claros de 10 mts. La rapidez de instalación por la poca cantidad de elementos que intervienen.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-KR-66-072023-Rev01.pdf",
      categories: ["ACANALADOS ESPECIALES"]
    },
    {
      titleAlt: "SSR - PLUS",
      titleimg: "SSR - PLUS",
      imagePortada:"/assets/Cards/Acanalados-Especiales/Fichaweb_SSRPLUS.png",
      images: ["/assets/Cards/Acanalados-Especiales/Fichaweb_SSRPLUS.png"],
      title: "SSR - PLUS",
      description: "Sistema de Cubierta Tipo SSR (Standing Seam Roof) Acanalado y Engargolado en obra, su sistema de fijación oculto a base de clips, disminuye el riesgo de filtraciones y no se requiere perforar la lámina para su instalacion.",
      specs: "<br><strong>Longitud Recomendada: </strong>No tiene limitaciones en su longitud, ya que es fabricado en una sola pieza de canalón a cumbrera.",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acanalado-SSR-Plus-072023-Rev01.pdf",
      categories: ["ACANALADOS ESPECIALES"]
    },
    {
      titleAlt: "ACRYLIT",
      titleimg: "ACRYLIT",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Acrylit.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Acrylit.png"],
      title: "ACRYLIT",
      description: "Las láminas de acrílico Acrylit están elaboradas con resina 100% acrílica reforzada con fibra de vidrio. Sistema de iluminación confiable para cubiertas engargolables, manufacturados con las láminas de acrílico Acrylit.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Acrylit-072023-Rev01.pdf",
      categories: ["TRANSLÚCIDOS"]
    },
    {
      titleAlt: "POLIACRYL",
      titleimg: "POLIACRYL",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Poliacryl.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Poliacryl.png"],
      title: "POLIACRYL",
      description: "Las láminas de Poliacryl se adaptan a las necesidades de cualquier aplicación, brindando siempre transmisión de luz natural en espacios interiores. Es ideal para usos industriales por su gran resistencia al impacto.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf",
      categories: ["TRANSLÚCIDOS"]
    },
    {
      titleAlt: "CUBRELIT",
      titleimg: "CUBRELIT",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Cubrelit.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Cubrelit.png"],
      title: "CUBRELIT",
      description: "Cubrelit 5 es una lámina traslucida de poliester reforzada con fibra de vidrio para uso residencial y espacios donde se requiere aplicar cubiertas ligeras. Brinda una excelente iluminación para tus espacios.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf",
      categories: ["TRANSLÚCIDOS"]
    },
    {
      titleAlt: "MACROLUX",
      titleimg: "MACROLUX",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Macrolux.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Macrolux.png"],
      title: "MACROLUX",
      description: "Stabilit ofrece una amplia gama de láminas de policarbonato para diversos usos: tragaluces, cubiertas y recubrimientos para edificios, soluciones arquitectónicas y acristalamiento de seguridad.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf",
      categories: ["TRANSLÚCIDOS"]
    },
    {
      titleAlt: "LUXON",
      titleimg: "LUXON",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Luxon.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Luxon.png"],
      title: "LUXON",
      description: "La lámina acrílica LUXON WR-AE50 es una excelente solución para ahorrar energía porque cuenta con una difusión de luminosidad excelente (similar a Acrylit G10) pero en el caso de Luxon puede llegar hasta un 95%.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf",
      categories: ["TRANSLÚCIDOS"]
    },
    {
      titleAlt: "OPALIT",
      titleimg: "OPALIT",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Opalit.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Opalit.png"],
      title: "OPALIT",
      description: "La lámina opaca Opalit es una gran alternativa para cubiertas, muros y divisiones en todo tipo de industria ya que ofrece calidad, resistencia y durabilidad. Opalit es ideal para ambientes agresivos.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf",
      categories: ["TRANSLÚCIDOS"]
    },
    {
      titleAlt: "POLYLIT",
      titleimg: "POLYLIT",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Polylit.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Polylit.png"],
      title: "POLYLIT",
      description: "Las láminas de poliéster Polylit son una excelente opción para construir de manera rápida, fácil y económica ya que se emplean los métodos convencionales de fijación. Excelente para cubiertas ligeras con iluminación.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-Poliacryl-072023-Rev01.pdf",
      categories: ["TRANSLÚCIDOS"]
    },
    {
      titleAlt: "COLCHONETA-MBI",
      titleimg: "COLCHONETA-MBI",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_MBI.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_MBI.png"],
      title: "MBI",
      description: "Está fabricado con fibras de vidrio aglutinadas con resinas termo fijas y una barrera de vapor (vinil satinado ò polipropileno reforzado) en una de sus caras dando más vida útil al aislamiento.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Aislante-MBI-072023-Rev01.pdf",
      categories: ["AISLANTES TERMO-ACÚSTICOS"]
    },
    {
      titleAlt: "FOAMULAR",
      titleimg: "FOAMULAR",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Foamular.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Foamular.png"],
      title: "FOAMULAR",
      description: "Es un aislamiento térmico de espuma rígida de poliestireno extruido en paneles manufacturados por el proceso Hydrovac, exclusivo de Owens Corning. Tiene una superficie lisa y una estructura de celdas cerradas.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Aislante-FOAMULAR-072023-Rev01.pdf",
      categories: ["AISLANTES TERMO-ACÚSTICOS"]
    },
    {
      titleAlt: "Termofoam",
      titleimg: "Termofoam",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Termofoam.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Termofoam.png"],
      title: "TERMOFOAM",
      description: "TERMOFOAM® es un aislante térmico XPS de alta eficiencia que ayuda al ahorro de energía, no absorbe agua y evita la ignición del fuego. Sencilla de cortar, almacenar, instalar y fijar. Garantíza su valor de resistencia termica. Ahorra hasta un 40% en electricidad.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Aislante-TERMOFOAM-072023-Rev01.pdf",
      categories: ["AISLANTES TERMO-ACÚSTICOS"]
    },
    {
      titleAlt: "H-SHIELD",
      titleimg: "H-SHIELD",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Hshield.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Hshield.png"],
      title: "H-SHIELD",
      description: "H-Shield es un panel rígido aislante para techo que está compuesto por un núcleo de espuma de poliisocianurato de célula cerrada fabricado en línea con revestimientos reforzados con fibra en cada cara (GRF).",
      specs: "",
      link: "https://www.metalroofing.com.mx/wp-content/uploads/2023/11/MetalRoofing-Aislante-H-SHIELD-072023-Rev01.pdf",
      categories: ["AISLANTES TERMO-ACÚSTICOS"]
    },
    {
      titleAlt: "VersaBoard",
      titleimg: "VersaBoard",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Versaboard.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Versaboard.png"],
      title: "VERSABOARD",
      description: "Los aislantes de lana mineral VersaBoard® ofrecen una excelente combinación de características como la resistencia al fuego, desempeño acústico, aislamiento térmico y ahorro de energía para diversas aplicaciones constructivas del mercado comercial.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Aislante-Thermafiber-VersaBoard-072023-Rev01.pdf",
      categories: ["AISLANTES TERMO-ACÚSTICOS"]
    },
    {
      titleAlt: "SAFB",
      titleimg: "SAFB",
      imagePortada:"/assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-SAFB.webp",
      images: ["/assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-SAFB.webp"],
      title: "SAFB",
      description: "SAFB™ de Thermafiber® son placas de aislamiento de lana mineral diseñadas para proporcionar control acústico, rendimiento térmico y protección contra incendios en los diferentes muros, suelos y techos cortafuego autorizados por UL.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Aislante-Thermafiber-SAFB-072023-Rev01.pdf",
      categories: ["AISLANTES TERMO-ACÚSTICOS"]
    },
    {
      titleAlt: "Safing",
      titleimg: "Safing",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Safing.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Safing.png"],
      title: "SAFING",
      description: "El aislamiento de lana mineral Safing de Thermafiber® es un producto que está diseñado para proporcionar una mejor protección contra fuego en el perímetro de los sistemas de contención de incendios, las penetraciones en pisos y paredes, las uniones de la construcción, así como otras aplicaciones.",
      specs: "",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Aislante-Thermafiber-Safing-072023-Rev01.pdf",
      categories: ["AISLANTES TERMO-ACÚSTICOS"]
    },
    {
      titleAlt: "AC-FOAM",
      titleimg: "AC-FOAM",
      imagePortada:"/assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-AC-Foam-II.webp",
      images: ["/assets/Cards/Aislantes-Termo-Acústicos/MR-Producto-FotoAislante-AC-Foam-II.webp"],
      title: "AC-FOAM",
      description: "Es un aislamiento térmico de espuma rígida de poliestireno extruido en paneles manufacturados por el proceso Hydrovac, exclusivo de Owens Corning. Tiene una superficie lisa y una estructura de celdas cerradas.",
      specs: "",
      link: "",
      categories: ["AISLANTES TERMO-ACÚSTICOS"]
    },
    {
      titleAlt: "Paso de Gato",
      titleimg: "Paso de Gato",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_PasodeGato.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_PasodeGato.png"],
      title: "PASO DE GATO",
      description: "Es un perfil metálico de acero galvanizado que proporciona una vía antiderrapante para poder transitar de forma segura en cubiertas y evitar el maltrato de las láminas metálicas al realizar las actividades de mantenimiento.",
      specs: "<br><strong>Ancho:</strong> 22.86 cm (9'' in) <br><br><strong>Largo:</strong> 3.05 m (10' ft) ",
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Lamina-pasodegato-072023-Rev01.pdf",
      categories: ["PASO DE GATO"]
    },
    {
      titleAlt: "Caballete 100-35",
      titleimg: "Caballete 100-35",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Caballete100-35.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Caballete100-35.png"],
      title: "CABALLETE 100-35",
      description: "Los caballetes CM-100/35 se fabrican en nuestra planta con materia prima de primera calidad y con un desarrollo de 40.67 cm x 3.05 m. Es 100% compatible para cubrir parteaguas de techos con perfiles RN-100/35.",
      specs: ["<br><strong>Pija Recomendada: </strong>1/4 x 1<br><br> <strong>Largo Recomendado:</strong> 3.05 m (10')."],
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Caballete-100_72-072023-Rev01.pdf",
      categories: ["MOLDURAS"]
    },
    {
      titleAlt: "Caballete 100-72",
      titleimg: "Caballete 100-72",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Caballete100-72.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Caballete100-72.png"],
      title: "CABALLETE 100-72",
      description: "Los caballetes CM-100 / 72 se fabrican en nuestra planta con materia prima de primera calidad. Es 100% compatible para cubrir parteaguas de techos con perfiles R-101 y R-72.",
      specs: ["Ancho: Variable.<br><br>Largo: 3.05 m (10').<br><br>Desarrollo de 40.67 cm"],
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Caballete-100_35-072023-Rev01.pdf",
      categories: ["MOLDURAS"]
    },
    {
      titleAlt: "Caballete R-90",
      titleimg: "Caballete R-90",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_CaballeteR-90.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_CaballeteR-90.png"],
      title: "CABALLETE R-90",
      description: "El caballete para lámina R-90 es una moldura para cubrir el parteaguas de un techo construido con láminas acanaladas del mismo tipo. Mide 13.32cm de ancho ajustable y 2.44m de largo. Se comercializa sólo en material Zintroalum embozado.",
      specs: ["<br><strong>Pija Recomendada:</strong> 1/4 x 1<br><br><strong>Largo:</strong> 2.44 m (8' ft)."],
      link: "https://www.metalroofing.com.mx/fichas-tecnicas-v1_03/MetalRoofing-Caballete-R_90-072023-Rev01.pdf",
      categories: ["MOLDURAS"]
    },
    {
      titleAlt: "SureFlex PVC",
      titleimg: "SureFlex PVC",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Sureflex.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Sureflex.png"],
      title: "SureFlex PVC",
      description: "Sure-Flex PVC es una membrana termoplástica de PVC, de fórmula avanzada y soldable por calor, diseñada para brindar resistencia a las condiciones climáticas y rendimiento a largo plazo. Las propiedades físicas están mejoradas por un tejido de poliéster firme, encapsulado por capas superiores e inferiores gruesas de PVC.",
      specs: [""],
      link: "https://www.metalroofing.com.mx/wp-content/uploads/2023/11/MetalRoofing-Membrana-Sure-Flex-PVC-072023-Rev01.pdf",
      categories: ["MEMBRANAS"]
    },
    {
      titleAlt: "SureSeal EPDM",
      titleimg: "SureSeal EPDM",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Sureseal.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Sureseal.png"],
      title: "SureSeal EPDM",
      description: "La membrana EPDM pre-limpiada permite aplicar el imprimador con rodillo y con su tecnología FAT para costuras y una línea completa de accesorios de cubrejuntas sensibles a la presión mejoran ampliamente la calidad de la labor simplificando el trabajo.",
      specs: [""],
      link: "https://www.metalroofing.com.mx/wp-content/uploads/2023/11/MetalRoofing-Membrana-Sure-Seal-EPDM-072023-Rev01.pdf",
      categories: ["MEMBRANAS"]
    },
    {
      titleAlt: "SureWeld TPO",
      titleimg: "SureWeld TPO",
      imagePortada:"/assets/Cards/FichasWebCorreciones/Fichaweb_Sureweld.png",
      images: ["/assets/Cards/FichasWebCorreciones/Fichaweb_Sureweld.png"],
      title: "SureWeld TPO",
      description: "Sure-Weld TPO es una lámina de poliolefina termoplástica (TPO) de una sola capa de primera calidad que se suelda por calor diseñada para la construcción de techos nuevos y aplicaciones de cambio de techos. Sus propiedades físicas están mejoradas por un tejido de poliéster fuerte encapsulado entre las capas superiores e inferiores de TPO.",
      specs: [""],
      link: "https://www.metalroofing.com.mx/wp-content/uploads/2023/11/MetalRoofing-Membrana-Sure-Weld-TPO-072023-Rev01.pdf",
      categories: ["MEMBRANAS"]
    },
    
  ];

  const panelAisladoProducts = allProducts.filter(product => product.categories.includes("PANEL AISLADO"));
  const acanaladosMetalicosProducts = allProducts.filter(product => product.categories.includes("ACANALADOS METÁLICOS"));
  const rollosLisosProducts = allProducts.filter(product => product.categories.includes("ROLLOS / LISOS"));
  const tejaMetalicaProducts = allProducts.filter(product => product.categories.includes("TEJA METÁLICA"));
  const acanaladosEspecialesProducts = allProducts.filter(product => product.categories.includes("ACANALADOS ESPECIALES"));
  const translucidosProducts = allProducts.filter(product => product.categories.includes("TRANSLÚCIDOS"));
  const aislantesTermoAcusticasProducts = allProducts.filter(product => product.categories.includes("AISLANTES TERMO-ACÚSTICOS"));
  const pasoDeGatoProducts = allProducts.filter(product => product.categories.includes("PASO DE GATO"));
  const moldurasProducts = allProducts.filter(product => product.categories.includes("MOLDURAS"));
  const membranasProducts = allProducts.filter(product => product.categories.includes("MEMBRANAS"));


  // Agrega más categorías y filtrados aquí

  return (
    <Box sx={{ width: "80wh", alignContent: 'center', justifyContent: 'center', alignItems:'center'}}>
      <Box sx={{ borderBottom: 0, borderColor: "divider", fontFamily: "Roboto", textAlign: 'center', display:'flex', justifyContent: 'center'}}>
        <Tabs value={value} onChange={handleChange} variant="scrollable">
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
          <Tab label="MEMBRANAS" {...a11yProps(10)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {allProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2.4} key={index}>
              <CardsProduct product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={2} style={{alignItems:'center', justifyContent: 'center'}}>
          {panelAisladoProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <CardsProduct product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Grid container spacing={2} style={{alignItems:'center' ,justifyContent: 'center'}}>
          {acanaladosMetalicosProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <CardsProduct product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Grid container spacing={2} style={{justifyContent: 'center'}}>
          {rollosLisosProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <CardsProduct product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Grid container spacing={2} style={{justifyContent: 'center'}}>
          {tejaMetalicaProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <CardsProduct product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Grid container spacing={2} style={{justifyContent: 'center'}}>
          {acanaladosEspecialesProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <CardsProduct product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6} style={{justifyContent: 'center'}}>
      <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
        {translucidosProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
            <CardsProduct product={product} onClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <Grid container spacing={2} style={{justifyContent: 'center'}}>
          {aislantesTermoAcusticasProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <CardsProduct product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        <Grid container spacing={2} style={{justifyContent: 'center'}}>
          {pasoDeGatoProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <CardsProduct product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
        <Grid container spacing={2} style={{justifyContent: 'center'}}>
          {moldurasProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <CardsProduct product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={10}>
        <Grid container spacing={2} style={{justifyContent: 'center'}}>
          {membranasProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <CardsProduct product={product} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>

      <Modal
        open={modalOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Grow in={modalOpen}>
          <Box className="modal-box">
            {selectedProduct && (
              <ProductModalTest product={selectedProduct} onClose={closeModal} />
            )}
          </Box>
        </Grow>
      </Modal>
    </Box>
  );
}
