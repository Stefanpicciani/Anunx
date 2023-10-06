import TemplateDefault from '../src/templates/Default'
import {
    Container,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Typography,
    Card,
    CardContent,
    CardMedia,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import styles from './index.module.css'

const Home = () => {

    return (
        <TemplateDefault>
           <Container maxWidth="md" className={styles.searchContainer}>
                <Typography component="h1" variant="h3" align='center' color="textPrimary"> 
                    O que deseja encontrar?
                </Typography>
                <Paper className={styles.searchBox}>
                    <InputBase 
                        placeholder='Ex.: iphone 12 com garantia'
                        fullWidth    
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
           </Container>

           <Container maxWidth="md" className={styles.cardGrid}>
                <Typography component="h2" variant="h4" align='center' color='textPrimary'>
                    Destaques
                </Typography>
                <br/>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                            className={styles.cardMedia}
                            image={"https://source.unsplash.com/random"}
                            title="Título da imagem"
                            />  
                            <CardContent>
                            <Typography variant="h5" component={"h2"}>
                                Produto X
                            </Typography>
                            <Typography>
                                R$ 60,00
                            </Typography>
                            </CardContent>               
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={styles.cardMedia}
                                image={"https://source.unsplash.com/random"}
                                title="Título da imagem"
                            />  
                            <CardContent>
                            <Typography variant="h5" component={"h2"}>
                                Produto X
                            </Typography>
                            <Typography>
                                R$ 60,00
                            </Typography>
                            </CardContent>               
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={styles.cardMedia}
                                image={"https://source.unsplash.com/random"}
                                title="Título da imagem"
                            />  
                            <CardContent>
                            <Typography variant="h5" component={"h2"}>
                                Produto X
                            </Typography>
                            <Typography>
                                R$ 60,00
                            </Typography>
                            </CardContent>               
                        </Card>
                    </Grid>           
                </Grid>
           </Container>
        </TemplateDefault>
    )
}

export default Home