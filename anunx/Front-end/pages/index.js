import TemplateDefault from '../src/templates/Default'
import {
    Container,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Typography, 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import Card from "../src/components/Card/Card"
import styles from './index.module.css'

const Home = () => {

    return (
        <TemplateDefault>
           <Container maxWidth="md">
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

           <Container maxWidth="lg" className={styles.cardGrid}>
                <Typography component="h2" variant="h4" align='center' color='textPrimary'>
                    Destaques
                </Typography>
                <br/><br/>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            image={"https://source.unsplash.com/random?a=1"}
                            title="Produto X"
                            subtitle="R$ 60,00"                      
                        />             
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            image={"https://source.unsplash.com/random?a=2"}
                            title="Produto X"
                            subtitle="R$ 60,00"                      
                        />    
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            image={"https://source.unsplash.com/random?a=3"}
                            title="Produto X"
                            subtitle="R$ 60,00"                      
                        />    
                    </Grid>           
                </Grid>
           </Container>
        </TemplateDefault>
    )
}

export default Home