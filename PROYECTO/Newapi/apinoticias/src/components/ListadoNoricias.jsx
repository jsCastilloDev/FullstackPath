import React from 'react'

import { Container,Grid,Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'
const ListadoNoricias = () => {
    const {noticias,totalNoticias,handleChangePagina,pagina} = useNoticias();
    
    const numPages = Math.ceil(totalNoticias / 20);
  return (
    <>
        <Typography
            textAlign={"center"}
            marginY={"2rem"}
            variant={"h2"}
        >
            Ultimas Noticias
        </Typography>
        <Grid
            container
            spacing={4}
        >
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>
        <Stack 
            spacing={2}
            justifyContent="center"
            alignItems="center"
            marginY={"2rem"}
        
        >
            <Pagination count={numPages} onChange={handleChangePagina} page={pagina}/>
        </Stack>
    </>
  )
}

export default ListadoNoricias
