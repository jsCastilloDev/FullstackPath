//App.jsx
import React from 'react'
import { Container,Grid,Typography } from '@mui/material'

import Formulario from './components/Formulario'
import ListadoNoricias from './components/ListadoNoricias'
import { NoticiasProvider } from './context/NoticiasProvider'

function App() {
  

  return (
    <NoticiasProvider>
      <Container maxWidth="lg">
        <header>
          <Typography variant="h1" component="h1" align="center">
            Buscador de Noticias
          </Typography>
        </header>
        <Grid container justifyContent="center">
          <Grid item md={6}>
            <Formulario />  
          </Grid>
        </Grid>
        <ListadoNoricias />
      </Container>
    </NoticiasProvider>
  )
}

export default App
