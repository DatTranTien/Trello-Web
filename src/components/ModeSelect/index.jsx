import { Box, FormControl, InputLabel, MenuItem, Select, useColorScheme } from '@mui/material'
import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone'
function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m:1, minWidth:20 }} size='small'>
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <Box sx={{
            alignItems:'center',
            display:'flex'
          }}>
            <LightModeOutlinedIcon/>
          Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{
            alignItems:'center',
            display:'flex'
          }}>
            <LightModeOutlinedIcon/>
          Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{
            alignItems:'center',
            display:'flex'
          }}>
            <LightModeOutlinedIcon/>
          System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect