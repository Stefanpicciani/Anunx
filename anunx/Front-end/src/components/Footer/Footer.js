
import { Container, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import styles from './Footer.module.css'
import Link from 'next/link'



const Footer = () => {
   
    return(
        <Container maxWidth="lg" component='footer' className={styles.footer}>
            <Container className={styles.borderTop}/>
            <Grid container spacing={3} className={styles.GridContainer}>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center' className={styles.box}>
                       <Link href="#" passHref className={styles.Link}>
                            <Typography color="textSecondary" variant='subtitle1'>
                                Ajuda e contato
                            </Typography>
                        </Link>                  
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center' className={styles.box}>
                       <Link href="#" passHref className={styles.Link}>
                            <Typography color="textSecondary" variant='subtitle1'>
                                Dicas de segurança
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center' className={styles.box}>
                       <Link href="#" passHref className={styles.Link}>
                            <Typography color="textSecondary" variant='subtitle1'>
                                Anunciar e vender
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center' className={styles.box}>
                       <Link href="#" passHref className={styles.Link}>
                            <Typography color="textSecondary" variant='subtitle1'>
                                Plano Profissional
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer