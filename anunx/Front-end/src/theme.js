import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#ffffff'
        },
        background: {
            default: 'rgb(242, 244, 275)',
            white: '#ffffff',
        }
    }
})

export default theme