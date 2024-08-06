'use client';
import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@nextui-org/link";
import Image from 'next/image';

export default function AppBarComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Inicio', href: '/' },
    { text: 'Nosotros', href: '/nosotros' },
    { text: 'Productos', href: '/productos' },
    { text: 'Contacto', href: '/contacto' },
    { text: 'Galeria', href: '/Galeria' },
    { text: 'Bolsa de Trabajo', href: '/bolsaDeTrabajo' },
  ];

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: 'black', height: '55px' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box display="flex" justifyContent="center" alignItems="center" letterSpacing="1.5px" width="100%">
              <Box display="flex" alignItems="center">
                <Image 
                src="/assets/logo/MR-Cuadrado_sinnombre_Mesa de trabajo 1.png" 
                alt="MR Logo" 
                width={50} 
                height={50} 
                className="logo-image" 
                />
              </Box>
              <Box display={{ xs: 'none', md: 'flex' }} alignItems="center" color="bg-black">
                {menuItems.map((item, index) => (
                  <Link key={index} className="p-2 text-white navbar-link" href={item.href}>
                    {item.text}
                  </Link>
                ))}
              </Box>
              <Box display={{ xs: 'flex', md: 'none' }} alignItems="center">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        transitionDuration={{ enter: 1000, exit: 1000 }}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'black',
            color: 'white',
            width: '100%',
            height: '100%',
            transform: drawerOpen ? 'translateY(-100%)' : 'translateY(-100%)',
            transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)', 
          },
          '& .MuiDrawer-paperClose': {
            transform: 'translateY(-100%)',
          },
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
          <IconButton edge="end" color="inherit" aria-label="close" onClick={handleDrawerToggle} sx={{ position: 'absolute', top: 16, right: 16 }}>
            <CloseIcon />
          </IconButton>
          <List sx={{ width: 'center', textAlign: 'center' }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} onClick={handleDrawerToggle}>
                <ListItemText>
                  <Link href={item.href} className="p-2 text-white navbar-link">
                    {item.text}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};