import { createTheme } from '@mui/material/styles';
import { blue,lightBlue } from '@mui/material/colors';


export const theme = createTheme({
    pallette: {
        primary: blue[400]
    },
    secondary: {
        main: lightBlue[800],
        midNightBlue: "#003366"
    }
});