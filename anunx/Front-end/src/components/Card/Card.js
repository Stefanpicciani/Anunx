import {
    Card as CardMUI,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
import styles from './Card.module.css'



const Card = ({ image, title, subtitle, actions }) => {

    return(
        <CardMUI>
            <CardMedia
               className={styles.cardMedia}
               image={image}
               title={title}
            />  
            <CardContent>
                <Typography variant="h5" component={"h2"}>
                    {title}
                </Typography>
                <Typography>
                    {subtitle}
                </Typography>
            </CardContent>
            {
                actions
                ? (
                    <CardActions>
                    {actions}
                    </CardActions>
                ) : null
            }
          
      </CardMUI>
    )
}

export default Card