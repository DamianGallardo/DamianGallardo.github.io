'use client'
// pages/page.jsx
import React from "react";
import Footer from '../../components/footer/Footer'
import Tabs from '@/components/tabs/tabs'
import { Box, Grid, Container, Typography } from "@mui/material";
import ResponsiveCarousel from "@/components/Carousel/responsiveCarousel";
import ComparativeProducts from "@/components/ComparativeTable/ComparativeProducts";
import CardTest from "@/components/cards/cardstest";
import Lealtad from "@/components/Lealtad/lealtad";
import Formulario from "@/components/formulariosTrabajos/formulariosVacantes";
import BasicTabs from "@/components/tabs/tabsprueba";

export default function Page() {
  return (
    <>
      <Box>
        <Container maxWidth="lg">
        </Container>
      </Box>
      <Box sx={{ my: 10 }} /> {/* Espaciador */}
      <ComparativeProducts/>
      <Box sx={{ my: 10 }} /> {/* Espaciador */}
      <BasicTabs/>     
      <Footer />
    </>
  );
};
