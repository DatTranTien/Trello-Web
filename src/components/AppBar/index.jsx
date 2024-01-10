import { HelpOutline, NotificationsOutlined } from '@mui/icons-material'
import AppsIcon from '@mui/icons-material/Apps'
import { Badge, Box, Button, TextField, Tooltip, Typography } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '../../assets/trello.svg'
import ModeSelect from '../ModeSelect'
import Recent from './Menus/Recent'
import Started from './Menus/Started'
import Template from './Menus/Template'
import Workspaces from './Menus/Workspaces'
import Profile from './Menus/Profile'

const AppBar = () => {
  return (
    <Box px={2} sx={{
      width:'100%',
      height: (theme) => theme.trello.appBarHeight,
      alignItems:'center',
      display:'flex',
      justifyContent:'space-between'
    }}>
      <Box sx={{
        display:'flex',
        alignItems:'center',
        gap:2
      }}>
        <AppsIcon sx={{ color:'primary.dark' }}/>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          gap:0.5
        }}>
          <SvgIcon component={TrelloIcon}
            inheritViewBox frontSize='small'
            sx={{ color:'primary.dark' }} />
          <Typography sx={{ fontSize:'1.2rem', fontWeight:'bold', color: 'primary.dark' }} >Trello</Typography>
        </Box>
        <Workspaces/>
        <Recent/>
        <Started/>
        <Template/>
        <Button variant="outlined" >Create</Button>
      </Box>


      <Box sx={{
        display:'flex',
        alignItems:'center',
        gap:2
      }}>
        <TextField id="outlined-search" label="Search ..." type="search" size='small' />
        <ModeSelect/>
        <Tooltip title='Notifications'>
          <Box sx={{ color: 'action.active' }}>
            <Badge color="secondary" variant="dot" sx={{ cursor:'pointer' }}>
              <NotificationsOutlined />
            </Badge>
          </Box>
        </Tooltip>
        <Tooltip title='Help'>
          <HelpOutline sx={{ cursor:'pointer' }}/>
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar