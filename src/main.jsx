import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App.jsx'
import '~/index.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ConfirmProvider } from 'material-ui-confirm'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import GlobalStyles from '@mui/material/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
const persistor = persistStore(store)

import { injectStore } from './utils/authorizeAxios'
import { io } from 'socket.io-client'
import { API_ROOT } from './utils/constants'
injectStore(store)

export const socketIoInstance = io(API_ROOT)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename='/'>
        <CssVarsProvider theme={theme}>
          <ConfirmProvider defaultOptions={{
          }}>
            <GlobalStyles styles={{ a: { textDecoration: 'none' } }} />
            <CssBaseline />
            <App />
            <ToastContainer theme='colored' />
          </ConfirmProvider >
        </CssVarsProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
