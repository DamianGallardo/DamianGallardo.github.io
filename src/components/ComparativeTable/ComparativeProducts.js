'use client'
import React, { useState } from 'react';
import { Box, Button, Grid, Paper, Typography, ButtonGroup, Menu, MenuItem, List, ListItem, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const productData = {
  Producto1: [
    {
      name: 'TERNIUM',
      variants: [
        {
          name: 'Multytecho',
          image: '/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Multytecho.png',
          description: '<b>Calibre:</b> <br> 26 / 28 <br><br><br><b>Acabados:</b> <br>Liso / Embozado <br><br><b>Espesor:</b> <br>1" | 1.5" | 2" | 2.5" <br> | 3" | 4" | 5" | 6" <br><br><b>Largos Recomendados:</b> <br>Min: 2.50 mts <br> Max: 14.63 mts <br><br><b>Tipo de Espuma:</b><br> PUR | Poliuretano <br> PIR | Poliisocianurato',
        },
        {
          name: 'Galvatecho',
          image: '/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Galvatecho.png',
          description: '<b>Calibre:</b> <br> 26 / 28 <br><br><br><b>Acabados:</b> <br>Liso / Embozado <br><br><b>Espesor:</b> <br>1" | 1.5" | 2" <br> | 2.5" | 3" | 4" <br><br><b>Largos Recomendados:</b> <br>Min: 2.50 mts <br> Max: 14.63 mts <br><br><b>Tipo de Espuma:</b><br> PUR | Poliuretano <br> PIR | Poliisocianurato',
        },
        {
          name: 'Econotecho',
          image: '/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Econotecho.png',
          description: '<b>Calibre:</b> <br> 26 / Vinile <br><br><br><b>Acabados:</b> <br>Liso / Embozado <br><br><b>Espesor:</b> <br>1" | 1.5" | 2"<br> <br><br><b>Largos Recomendados:</b> <br>Min: 2.50 mts <br> Max: 12.00 mts <br><br><b>Tipo de Espuma:</b><br> PUR | Poliuretano <br> PIR | Poliisocianurato',
        },
      ],
    },
    {
      name: 'ISOCINDU',
      variants: [
        {
          name: 'Isocop 4',
          image: '/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Isocop.png',
          description: '<b>Calibre:</b> <br> 24 / 24 | 24 / 26<br>26 / 26 | 26 / 28 <br><br><b>Acabados:</b> <br>Liso / Embozado <br><br><b>Espesor:</b> <br>1" | 2" | 2.5"| 3"  <br> | 4" | 5" | 6" | 8"<br><br><b>Largos Recomendados:</b> <br>Min: 2.50 mts <br> Max: 16.00 mts <br><br><b>Tipo de Espuma:</b><br> PUR | Poliuretano <br> PIR | Poliisocianurato',
        },
        {
          name: 'Isovinile',
          image: '/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Isovinile.png',
          description: '<b>Calibre:</b> <br> 24 / 26 / 28 <br><br><br><b>Acabados:</b><br>Embozado / Poliester <br><br><b>Espesor:</b> <br>1" | 1.5" | 2" | 2.5"<br> <br><br><b>Largos Recomendados:</b> <br>Min: 2.50 mts <br> Max: 12.00 mts <br><br><b>Tipo de Espuma:</b><br> PUR | Poliuretano <br> PIR | Poliisocianurato',
        },
      ],
    },
  ],

  Producto2: [
      {
        name: 'TERNIUM',
        variants: [
          {
            name: 'Multytecho',
            image: '/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Multytecho.png',
            description: '<b>Calibre:</b> <br> 26 / 28 <br><br><br><b>Acabados:</b> <br>Liso / Embozado <br><br><b>Espesor:</b> <br>1" | 1.5" | 2" | 2.5" <br> | 3" | 4" | 5" | 6" <br><br><b>Largos Recomendados:</b> <br>Min: 2.50 mts <br> Max: 14.63 mts <br><br><b>Tipo de Espuma:</b><br> PUR | Poliuretano <br> PIR | Poliisocianurato',
          },
          {
            name: 'Galvatecho',
            image: '/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Galvatecho.png',
            description: '<b>Calibre:</b> <br> 26 / 28 <br><br><br><b>Acabados:</b> <br>Liso / Embozado <br><br><b>Espesor:</b> <br>1" | 1.5" | 2" <br> | 2.5" | 3" | 4" <br><br><b>Largos Recomendados:</b> <br>Min: 2.50 mts <br> Max: 14.63 mts <br><br><b>Tipo de Espuma:</b><br> PUR | Poliuretano <br> PIR | Poliisocianurato',
          },
          {
            name: 'Econotecho',
            image: '/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Econotecho.png',
            description: '<b>Calibre:</b> <br> 26 / Vinile <br><br><br><b>Acabados:</b> <br>Liso / Embozado <br><br><b>Espesor:</b> <br>1" | 1.5" | 2"<br> <br><br><b>Largos Recomendados:</b> <br>Min: 2.50 mts <br> Max: 12.00 mts <br><br><b>Tipo de Espuma:</b><br> PUR | Poliuretano <br> PIR | Poliisocianurato',
          },
        ],
      },
      {
        name: 'ISOCINDU',
        variants: [
          {
            name: 'Isocop 4',
            image: '/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Isocop.png',
            description: '<b>Calibre:</b> <br> 24 / 24 | 24 / 26<br>26 / 26 | 26 / 28 <br><br><b>Acabados:</b> <br>Liso / Embozado <br><br><b>Espesor:</b> <br>1" | 2" | 2.5"| 3"  <br> | 4" | 5" | 6" | 8"<br><br><b>Largos Recomendados:</b> <br>Min: 2.50 mts <br> Max: 16.00 mts <br><br><b>Tipo de Espuma:</b><br> PUR | Poliuretano <br> PIR | Poliisocianurato',
          },
          {
            name: 'Isovinile',
            image: '/assets/Fichas/Techo/FichaWeb_Techos_sinfondo_Isovinile.png',
            description: '<b>Calibre:</b> <br> 24 / 26 / 28 <br><br><br><b>Acabados:</b><br>Embozado / Poliester <br><br><b>Espesor:</b> <br>1" | 1.5" | 2" | 2.5"<br> <br><br><b>Largos Recomendados:</b> <br>Min: 2.50 mts <br> Max: 12.00 mts <br><br><b>Tipo de Espuma:</b><br> PUR | Poliuretano <br> PIR | Poliisocianurato',
          },
        ],
      },
    ],
};

const ComparativeProducts = () => {
  const [selectedProducto1, setSelectedProducto1] = useState(null);
  const [selectedProducto2, setSelectedProducto2] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenu, setSubMenu] = useState(null);
  const [openSubList, setOpenSubList] = useState(null);

  const handleButtonClick = (event, menuType) => {
    setAnchorEl(event.currentTarget);
    setSubMenu(menuType);
  };

  const handleMenuItemClick = (type, product) => {
    if (product.variants) {
      setOpenSubList(openSubList === product.name ? null : product.name);
    } else {
      if (type === 'Producto1') {
        setSelectedProducto1(product);
      } else if (type === 'Producto2') {
        setSelectedProducto2(product);
      }
      setAnchorEl(null);
      setSubMenu(null);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenu(null);
    setOpenSubList(null);
  };

  return (
    <Box mt={10} textAlign="center" display="flex" flexDirection="column" alignItems="center">
      <ButtonGroup variant="contained" color="secondary" style={{ border: 'none' }}>
        <Button onClick={(event) => handleButtonClick(event, 'Producto1')} style={{ border: 'none' }}>PRODUCTO 1</Button>
        <Box mx={10} />
        <Button onClick={(event) => handleButtonClick(event, 'Producto2')} style={{ border: 'none' }}>PRODUCTO 2</Button>
      </ButtonGroup>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {subMenu === 'Producto1' && (
          <List>
            {productData.Producto1.map((item, index) => (
              <React.Fragment key={index}>
                <MenuItem onClick={() => handleMenuItemClick('Producto1', item)}>
                  {item.name} {item.variants && (openSubList === item.name ? <ExpandLess /> : <ExpandMore />)}
                </MenuItem>
                {item.variants && (
                  <Collapse in={openSubList === item.name} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.variants.map((variant, vIndex) => (
                        <MenuItem key={vIndex} onClick={() => handleMenuItemClick('Producto1', variant)}>
                          {variant.name}
                        </MenuItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        )}
        {subMenu === 'Producto2' && (
          <List>
            {productData.Producto2.map((item, index) => (
              <React.Fragment key={index}>
                <MenuItem onClick={() => handleMenuItemClick('Producto2', item)}>
                  {item.name} {item.variants && (openSubList === item.name ? <ExpandLess /> : <ExpandMore />)}
                </MenuItem>
                {item.variants && (
                  <Collapse in={openSubList === item.name} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.variants.map((variant, vIndex) => (
                        <MenuItem key={vIndex} onClick={() => handleMenuItemClick('Producto2', variant)}>
                          {variant.name}
                        </MenuItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        )}
      </Menu>

      <Grid container spacing={3} mt={3} justifyContent="center">
        {selectedProducto1 && (
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={10} style={{ padding: '16px', textAlign: 'center' }}>
              <img src={selectedProducto1.image} alt={selectedProducto1.name} style={{ width: '100%', height: '100%' }} />
              <Typography variant="h6">{selectedProducto1.name}</Typography>
              <Typography variant="body1" dangerouslySetInnerHTML={{ __html: selectedProducto1.description }} />
            </Paper>
          </Grid>
        )}
        {selectedProducto2 && (
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={10} style={{ padding: '16px', textAlign: 'center' }}>
              <img src={selectedProducto2.image} alt={selectedProducto2.name} style={{ width: '100%', height: '100%' }} />
              <Typography variant="h6">{selectedProducto2.name}</Typography>
              <Typography variant="body1" dangerouslySetInnerHTML={{ __html: selectedProducto2.description }} />
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ComparativeProducts;
