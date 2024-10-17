import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App.jsx'
import '~/index.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <CssVarsProvider theme={theme}>
    <CssBaseline />
    <App />
    <ToastContainer theme='colored' />
  </CssVarsProvider>
  //</React.StrictMode>
)
