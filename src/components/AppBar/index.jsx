import { Box } from '@mui/material'
import React from 'react'
import ModeSelect from '../ModeSelect'

const AppBar = () => {
  return (
    <Box sx={{
      backgroundColor:'primary.light',
      width:'100%',
      height: (theme) => theme.trello.appBarHeight,
      alignItems:'center',
      display:'flex'
    }}>
      <ModeSelect/>
    </Box>
  )
}

export default AppBar