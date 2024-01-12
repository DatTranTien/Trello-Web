import { Box } from '@mui/material'
import React from 'react'

const BoardContent = () => {
  return (
    <Box sx={{
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width:'100%',
      height:(theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      alignItems:'center',
      display:'flex'
    }}>
        Board Content
    </Box>
  )
}

export default BoardContent