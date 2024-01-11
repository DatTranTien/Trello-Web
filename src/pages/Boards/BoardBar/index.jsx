import { Avatar, AvatarGroup, Box, Button, Chip } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { AddToDrive, Bolt, FilterList, PersonAdd, VpnLock } from '@mui/icons-material'


const MENU_STYLES = {
  color: 'primary.main',
  bgcolor:'white',
  border:'none',
  paddingX: '5px',
  borderRadius:'10px',
  '& .MuiSvgIcon-root': {
    color:'primary.main'
  },
  '& :hover':{
    bgcolor: 'primary.50'
  }
}

const BOX_STYLES ={
  width:'100%',
  height: (theme) => theme.trello.boardBarHeight,
  alignItems:'center',
  display:'flex',
  paddingX: 2,
  gap:2,
  overflowX:'auto',
  borderTop: '1px solid #oobfa5'
}
const BoardBar = () => {
  return (
    <Box sx={[BOX_STYLES, { justifyContent:'space-between' }]}>
      <Box sx={BOX_STYLES}>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          gap:2
        }}>
          <Chip
            sx={MENU_STYLES}
            onClick={() => {}}
            icon={<DashboardIcon />} label="Trần Tiến Đạt Mearn Stack" />
        </Box>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          gap:2
        }}>
          <Chip
            sx={MENU_STYLES}
            onClick={() => {}}
            icon={<VpnLock />} label="Private/Public Workspace"
            clickable
          />
        </Box>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          gap:2
        }}>
          <Chip
            sx={MENU_STYLES}
            onClick={() => {}}
            icon={<AddToDrive />} label="Add to Google Drive"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            onClick={() => {}}
            icon={<Bolt />} label="Automation"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            onClick={() => {}}
            icon={<FilterList />} label="Filter"
            clickable
          />
        </Box>
      </Box>

      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <Button variant="outlined" startIcon={<PersonAdd/>} >Invite</Button>
        <AvatarGroup max={4}
          sx={{
            '& .MuiAvatar-root':{
              width:34,
              height:34,
              fontSize:16
            }
          }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar