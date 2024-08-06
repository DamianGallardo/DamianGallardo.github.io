import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define el tema con configuraciones responsivas
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiBox: {
            styleOverrides: {
                root: {
                    // Estilos generales para Box aquí
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    // Estilos generales para Grid aquí
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    // Estilos generales para Typography aquí
                },
            },
        },
    },
    // Más configuraciones de estilo según sea necesario
});

export default theme;
