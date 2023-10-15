import TemplateDefault from "../../src/templates/Default";
import styles from "./index.module.css";
import {  
    Container,
    Grid,
    Box,
    Typography,
    Chip,
    Card,
    CardHeader,
    CardMedia,
    Avatar,
 } from '@mui/material';
 import Carousel from 'react-material-ui-carousel';


const Product = () =>{

    return(
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={styles.box}>
                            <Carousel
                                autoPlay={false}
                                animation="slide"
                                navButtonsAlwaysVisible
                                navButtonsProps={{
                                    style: {
                                        color: 'white'
                                    }
                                }}                            >
                                <Card className={styles.card}>
                                    <CardMedia 
                                        className={styles.cardMedia}
                                        image="https://source.unsplash.com/random?a=1"
                                        title="Título da imagem"
                                    />
                                </Card>
                                <Card className={styles.card}>
                                    <CardMedia 
                                        className={styles.cardMedia}
                                        image="https://source.unsplash.com/random?a=2"
                                        title="Título da imagem"
                                    />
                                </Card>
                                <Card className={styles.card}>
                                    <CardMedia 
                                        className={styles.cardMedia}
                                        image="https://source.unsplash.com/random?a=3"
                                        title="Título da imagem"
                                    />
                                </Card>
                            </Carousel>                           
                        </Box>

                        <Box className={styles.box} textAlign="left">
                            <Typography component="span" variant="caption">Publicado 16 junho de 2021</Typography>
                            <Typography component="h4" variant="h4" className={styles.productName}>Jaguar XE 2.0 D R-Sport Aut.</Typography>
                            <Typography component="h4" variant="h4" className={styles.price}>R$ 50.000,00</Typography>
                            <Chip label="Categoria" />
                        </Box>
                        
                        <Box className={styles.box} textAlign="left">
                            <Typography component="h6" variant="h6">Descrição</Typography>
                            <Typography component="p" variant="body2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                       <Card elevation={0} className={styles.box}>
                            <CardHeader 
                                avatar={
                                    <Avatar>S</Avatar>
                                }
                                title="Stefan Picciani"
                                subheader="stefan@email.com"
                            />
                            <CardMedia 
                                image="https://source.unsplash.com/random"
                                title="StefanPicciani"
                            />
                       </Card>

                       <Box className={styles.box}> 
                            <Typography component="h6" variant="h6">
                                Localização
                            </Typography>
                       </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product