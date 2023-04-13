import { createTheme } from '@mui/material/styles';
import red from '@mui/material/colors/red';

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
            contrastText: '#fff'
        },
        secondary: {
            main: '#ef2288'
        },
        text: {
            primary: '#6c6c6c',
        },
    },
    typography: {
        bold: {
            "fontWeight": 600,
            display: 'inline-block'
        },
        sectionHeader: {
            "fontWeight": 100,
            'fontSize': '1.8rem',
            'lineHeight': '2.1rem',
            display: 'block'
        }

    },
});

export default theme;