import { Box, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import {
  useColorScheme
} from '@mui/material/styles'

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
        <MenuItem value='light'>Light</MenuItem>
        <MenuItem value='dark'>Dark</MenuItem>
        <MenuItem value='system'>System</MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height:'100vh' }} >
      <Box sx={{
        backgroundColor:'primary.light',
        width:'100%',
        height: (theme) => theme.trello.appBarHeight,
        alignItems:'center',
        display:'flex'
      }}>
        <ModeSelect/>
      </Box>
      <Box sx={{
        backgroundColor:'primary.dark',
        width:'100%',
        height: (theme) => theme.trello.boardBarHeight,
        alignItems:'center',
        display:'flex'
      }}>
        Board Bar
      </Box>
      <Box sx={{
        backgroundColor:'primary.main',
        width:'100%',
        height:(theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        alignItems:'center',
        display:'flex'
      }}>
        Board Content
      </Box>
    </Container>
  )
}

export default App
