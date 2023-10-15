import TemplateDefault from "../../src/templates/Default"
import styles from "./list.module.css"
import {  
    Container,
    Grid,
    Box,
    Typography,
    Card as CardMUI,
    Paper,
    InputBase,
    IconButton,
 } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search"
import Card from "@/src/components/Card/Card";


const List = () => {

    return(
        <TemplateDefault>
            <Container maxWidth="lg">
               <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper component="form" className={styles.searchBox}>
                            <InputBase 
                                placeholder='Ex.: iphone 12 com garantia'
                                fullWidth    
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                         </Paper>
                    </Grid>
               </Grid>            

               <Grid item xs={12} sm={12} md={12}>
                    <Box className={styles.box}>
                        <Typography component="h6" variant="h6">
                            Anúncios
                        </Typography>
                        <Typography component="span" variant="subtitle2">
                            ENCONTRADOS 200 ANÚNCIOS
                        </Typography>
                        <br/><br/>

                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card 
                                    image={"https://source.unsplash.com/random?a=1"}
                                    title="Produto Y"
                                    subtitle="R$ 70,00"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card 
                                    image={"https://source.unsplash.com/random?a=2"}
                                    title="Produto Y"
                                    subtitle="R$ 70,00"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card 
                                    image={"https://source.unsplash.com/random?a=3"}
                                    title="Produto Y"
                                    subtitle="R$ 70,00"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card 
                                    image={"https://source.unsplash.com/random?a=4"}
                                    title="Produto Y"
                                    subtitle="R$ 70,00"
                                />
                            </Grid>
                        </Grid>
                    </Box>
               </Grid>   
           </Container>
        </TemplateDefault>
        )
}

export default List