import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// Create a theme instance.

const theme = extendTheme({
  trello:{
    appBarHeight:'58px',
    boardBarHeight:'60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#0f9432'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#0f9432'
        }
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform:'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize:'0.875rem'
        })
      }
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root:({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light
          },
          '&:hover':{
            '.MuiOutlinedInput-notchedOutline':{
              borderColor: theme.palette.primary.main
            }
          },
          '& fieldset':{
            borderWidth: '1px !important'
          }
        })
      }
    }
  }
  // ...other properties
})

export default theme