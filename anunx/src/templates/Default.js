import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import { Box } from '@mui/material';
import styles from './Default.module.css'

const Default = ({children}) => {

    return(
        <>
            <Header/>
                <Box className={styles.container}>
                    {children}
                </Box>
            <Footer/>
        </>
    );
}

export default Default