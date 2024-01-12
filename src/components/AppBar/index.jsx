import { Close, HelpOutline, LibraryAdd, NotificationsOutlined, Search } from '@mui/icons-material'
import AppsIcon from '@mui/icons-material/Apps'
import { Badge, Box, Button, InputAdornment, TextField, Tooltip, Typography } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '../../assets/trello.svg'
import ModeSelect from '../ModeSelect'
import Recent from './Menus/Recent'
import Started from './Menus/Started'
import Template from './Menus/Template'
import Workspaces from './Menus/Workspaces'
import Profile from './Menus/Profile'
import theme from '~/theme'
import { useState } from 'react'

const AppBar = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box px={2} sx={{
      width:'100%',
      height: (theme) => theme.trello.appBarHeight,
      alignItems:'center',
      display:'flex',
      justifyContent:'space-between',
      gap:2,
      overflowX:'auto',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      <Box sx={{
        display:'flex',
        alignItems:'center',
        gap:2
      }}>
        <AppsIcon sx={{ color:'white' }}/>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          gap:0.5
        }}>
          <SvgIcon component={TrelloIcon}
            inheritViewBox frontSize='small'
            sx={{ color:'white' }} />
          <Typography sx={{ fontSize:'1.2rem', fontWeight:'bold', color: 'white' }} >Trello</Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md:'flex' }, gap:1 }} >
          <Workspaces/>
          <Recent/>
          <Started/>
          <Template/>
          <Button variant="outlined"
            sx={{
              color:'white',
              border:'none',
              '&:hover':{ border: 'none' }
            }}
            startIcon={<LibraryAdd/>} >Create</Button>
        </Box>
      </Box>


      <Box
        borderColor='white'
        sx={{
          display:'flex',
          alignItems:'center',
          gap:2

          // '& label ': { color: 'white' },
          // '& input': { color: 'white' },
          // '&:hover .Mui-focused label':{
          //   borderColor:'red',
          //   borderWidth:'10px',
          //   color: 'red'
          // }


        // ':hover fieldset':{
        //   borderColor:'red'
        // }
        }}>
        <TextField
          sx={{
            minWidth:120,
            maxWidth:170,
            '& label ': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root':{
              '& fieldset':{
                borderColor:'white '
              },
              '&:hover fieldset':{
                borderColor:'white '
              },
              '&.Mui-focused fieldset':{
                borderColor:'white '
              }
            }

            // '& .MuiOutlinedInput-notchedOutline':{
            //   borderColor:'white'
            // },
            // '& label .Mui-focused': { borderColor: 'white' },
            // '&:hover .MuiFormControl-root .MuiTextField-root':{
            //   borderColor:'red',
            //   borderWidth:'10px'
            // }
            // '& .MuiOutlineInput-input':{
            // '& fieldset':{
            //   borderColor:'white '
            // },
            // '& .MuiOutlinedInput-input':{
            //   borderColor:'white'
            // },


            //   '&:hover fieldset':{
            //     borderColor:'white'
            //   },
            // '& .MuiInputLabel-root .Mui-focused fieldset':{
            //   borderColor:'white '
            // }
            // }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color:'white' }}/>
              </InputAdornment>
            ),
            endAdornment:(
              <Close
                fontSize='small'
                sx={{ color:searchValue?'white':'transparent' }}
                onClick={() => setSearchValue('')}
              />
            )
          }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          id="outlined-search"
          label="Search ..." type="text"
          size='small'
        />
        <ModeSelect/>
        <Tooltip title='Notifications'>
          <Box sx={{ color: 'action.active' }}>
            <Badge color="error" variant="dot" sx={{ cursor:'pointer' }}>
              <NotificationsOutlined sx={{ color:'white' }} />
            </Badge>
          </Box>
        </Tooltip>
        <Tooltip title='Help'>
          <HelpOutline sx={{ cursor:'pointer', color:'white' }}/>
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar