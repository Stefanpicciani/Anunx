import TemplateDefault from "../../src/templates/Default"

import { Container, Typography, Box, TextField } from "@mui/material";
import styles  from "./publish.module.css";


const Publish = () => {
    
    return(
        <TemplateDefault>
            <Container maxWidth="sm" className={styles.container}>
                <Typography component="h1" variant="h2" align="center" color="primary">
                    Públicar anúncio
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="primary">
                   Quanto mais melhor
                </Typography>
            </Container>

            <Container maxWidth="md" className={styles.container}>
                <Box className={styles.box}>
                    <Typography component="h6" variant="h6" align="left" color="primary">
                        Título do anúncio
                    </Typography> 
                    <TextField
                        label="ex.: Bicicleta aro 18 com garantia"
                        size="small"
                        variant="standard"
                        fullWidth
                    />
                </Box>
            </Container>
        </TemplateDefault>
    );
}

export default Publish