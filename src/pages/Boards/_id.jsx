// Board Id
import { Container } from '@mui/material'
import React from 'react'
import AppBar from '~/components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

const Board = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height:'100vh' }} >
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </Container>
  )
}

export default Board