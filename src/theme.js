import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// Create a theme instance.

const theme = extendTheme({
  trello:{
    appBarHeight:'58px',
    boardBarHeight:'60px'
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: {
    //       main: '#00b894'
    //     }
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: {
    //       main: '#00b894'
    //     }
    //   }
    // }
  },
  components: {
    MuiCssBaseline:{
      styleOverrides:{
        body:{
          '*::-webkit-scrollbar':{
            width:'8px',
            height:'8px'
          },
          // '*::-webkit-scrollbar-track':{
          //   background: 'red'
          // },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor:'#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor:'white'
          }
        }
      }
    }
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       textTransform:'none'
    //     }
    //   }
    // },
    // MuiInputLabel: {
    //   styleOverrides: {
    //     root: ({ theme }) => ({
    //       color: theme.palette.primary.main,
    //       fontSize:'0.875rem'
    //     })
    //   }
    // },
    // MuiOutlinedInput:{
    //   styleOverrides:{
    //     root:({ theme }) => ({
    //       // color: theme.palette.primary.main,
    //       // fontSize: '0.875rem'
    //       // '& .MuiOutlinedInput-notchedOutline': {
    //       //   borderColor: theme.palette.primary.light
    //       // }
    //       // '&:hover':{
    //       //   '.MuiOutlinedInput-notchedOutline':{
    //       //     borderColor: 'white'
    //       //   }
    //       // }
    //       // '& fieldset':{
    //       //   borderWidth: '1px !important',
    //       //   borderColor:'white'
    //       // }
    //       // '&:hover fieldset.MuiOutlinedInput-root ':{
    //       //   // borderWidth: '1px !important',
    //       //   borderColor:'white'
    //       // }
    //       // '& .MuiFormControl-root ':{
    //       //   borderColor: 'white'
    //       // }
    //     })
    //   }
    // }
  }
  // ...other properties
})

export default theme