import React from 'react'
import { Container,Grid,Typography,Card,CardActions,CardMedia,CardContent, Link } from '@mui/material'
const Noticia = ({noticia}) => {
    const {urlToImage, url, title, description, source} = noticia;
  return (
    <Grid item md={6} lg={4}>
         <Card>
            {/*
                <CardMedia
                component="img"
                height="140"
                image={urlToImage}
                alt={title}
            />
            */}
            
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    variant='button'
                    width={"100%"}
                    textAlign={"center"}
                >
                    Leer Noticia
                </Link>
            </CardActions>



        </Card>
        
    </Grid>
   
  )
}

export default Noticia
