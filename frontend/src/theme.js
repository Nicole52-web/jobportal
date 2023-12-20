import { createTheme } from '@mui/material/styles';
import { blue, orange } from '@mui/material/colors';


export const theme = createTheme({
    palette: {
        primary: {
            main: blue[400]
    },
    secondary: {
        main: orange[700],
        midNightBlue: "#003366"
    }
}  
});