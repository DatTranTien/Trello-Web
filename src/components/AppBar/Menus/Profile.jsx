import { Logout, PersonAdd, Settings } from '@mui/icons-material'
import Check from '@mui/icons-material/Check'
import { Avatar, Box, IconButton, Menu, Tooltip } from '@mui/material'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import * as React from 'react'

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title='Trần Tiến Đạt'>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'basic-menu-profile' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{
              width:32,
              height:32,
              cursor:'pointer'
            }}
            alt='DatTranTien'
            src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profile'
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width:28, height:28, mr:2 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width:28, height:28, mr:2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profile