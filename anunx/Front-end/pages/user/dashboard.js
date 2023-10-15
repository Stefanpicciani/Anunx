import TemplateDefault from "../../src/templates/Default"
import {
  Container,
  Grid,
  Typography,
  Button
} from "@mui/material"
import Link from 'next/link'
import styles from "./dashboard.module.css"
import Card from "../../src/components/Card/Card"

export default function Dashboard() {
  

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center">
            Meus Anúncios
          </Typography>
          <Link href="/user/publish" passHref className={styles.Link}>
            <Button variant="contained" color="primary" className={styles.buttonAdd}>
                Públicar novo anúncio
            </Button>
          </Link>          
      </Container>
      <Container maxWidth="lg">
         <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                 image={"https://source.unsplash.com/random?a=1"}
                 title="Produto X"
                 subtitle="R$ 60,00"
                 actions={
                  <>
                    <Button size="small">
                      Editar
                    </Button>
                    <Button size="small">
                      Remover
                    </Button>
                  </>
                 }
              />                          
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                  image={"https://source.unsplash.com/random?a=2"}
                  title="Produto X"
                  subtitle="R$ 60,00"
                  actions={
                    <>
                      <Button size="small">
                        Editar
                      </Button>
                      <Button size="small">
                        Remover
                      </Button>
                    </>
                  }
                />             
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                  image={"https://source.unsplash.com/random?a=3"}
                  title="Produto X"
                  subtitle="R$ 60,00"
                  actions={
                    <>
                      <Button size="small">
                        Editar
                      </Button>
                      <Button size="small">
                        Remover
                      </Button>
                    </>
                  }
                />             
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                  image={"https://source.unsplash.com/random?a=4"}
                  title="Produto X"
                  subtitle="R$ 60,00"
                  actions={
                    <>
                      <Button size="small">
                        Editar
                      </Button>
                      <Button size="small">
                        Remover
                      </Button>
                    </>
                  }
                />             
            </Grid>
         </Grid>
      </Container>
    </TemplateDefault>
  )
}
