'use client'
import {createTheme} from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // blue
        },
        secondary: {
            main: '#ffc107', // yellow
        },
        background: {
            default: '#e1f5fe', // light blue
        },
        text: {
            primary: '#212121', // dark grey
            secondary: '#757575', // lighter grey
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 300,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 400,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 400,
        },
    },
});

export default theme;