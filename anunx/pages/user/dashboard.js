import TemplateDefault from "../../src/templates/Default"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button
} from "@mui/material"
import Link from 'next/link'
import styles from "./dashboard.module.css"


export default function Dashboard() {
  

  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={styles.container}>
          <Typography component="h1" variant="h2" align="center">
            Meus Anúncios
          </Typography>
          <Link href="/user/publish" passHref className={styles.Link}>
            <Button variant="contained" color="primary" className={styles.buttonAdd}>
                Públicar novo anúncio
            </Button>
          </Link>          
      </Container>
      <Container maxWidth="md" className={styles.container}>
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
                <CardActions>
                <Button size="small">
                    Editar
                  </Button>
                  <Button size="small">
                    Remover
                  </Button>
                </CardActions>
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
                <CardActions>
                <Button size="small">
                    Editar
                  </Button>
                  <Button size="small">
                    Remover
                  </Button>
                </CardActions>
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
                <CardActions>
                <Button size="small">
                    Editar
                  </Button>
                  <Button size="small">
                    Remover
                  </Button>
                </CardActions>
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
                <CardActions>
                <Button size="small">
                    Editar
                  </Button>
                  <Button size="small">
                    Remover
                  </Button>
                </CardActions>
              </Card>
            </Grid>
         </Grid>
      </Container>
    </TemplateDefault>
  )
}
