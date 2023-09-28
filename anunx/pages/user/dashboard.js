import TemplateDefault from '../../src/templates/Default'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  cardMedia: {
    paddingTop: '56%'
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block',
  }
}))

export default function Dashboard() {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
          <Typography component="h1" variant='h2' align='center'>
            Meus Anúncios
          </Typography>
          <Button variant='contained' color="primary" className={classes.buttonAdd}>
            Públicar novo anúncio
          </Button>
      </Container>
      <Container maxWidth="md" className={classes.container}>
         <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                className={classes.cardMedia}
                  image={'https://source.unsplash.com/random'}
                  title="Título da imagem"
                />  
                <CardContent>
                  <Typography variant='h5' component={'h2'}>
                    Produto X
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                <Button size='small'>
                    Editar
                  </Button>
                  <Button size='small'>
                    Remover
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                className={classes.cardMedia}
                  image={'https://source.unsplash.com/random'}
                  title="Título da imagem"
                />  
                <CardContent>
                  <Typography variant='h5' component={'h2'}>
                    Produto X
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                <Button size='small'>
                    Editar
                  </Button>
                  <Button size='small'>
                    Remover
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                className={classes.cardMedia}
                  image={'https://source.unsplash.com/random'}
                  title="Título da imagem"
                />  
                <CardContent>
                  <Typography variant='h5' component={'h2'}>
                    Produto X
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                <Button size='small'>
                    Editar
                  </Button>
                  <Button size='small'>
                    Remover
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                className={classes.cardMedia}
                  image={'https://source.unsplash.com/random'}
                  title="Título da imagem"
                />  
                <CardContent>
                  <Typography variant='h5' component={'h2'}>
                    Produto X
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
                <CardActions>
                <Button size='small'>
                    Editar
                  </Button>
                  <Button size='small'>
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
