'use client';

import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, CssBaseline, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { styled } from '@mui/system';

const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: '1rem',
  right: '1rem',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  zIndex: 1300,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
}));

export default function ThemeProviderLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#ffffff',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#121212',
      },
    },
  });

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ThemeToggleButton onClick={handleThemeToggle} color="inherit">
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </ThemeToggleButton>
      <Box className={darkMode ? 'dark:bg-gray-800 dark:text-white' : 'light:bg-gray-100 light:text-black'} sx={{ minHeight: '100vh' }}>
        {children}
      </Box>
    </ThemeProvider>
  );
}
