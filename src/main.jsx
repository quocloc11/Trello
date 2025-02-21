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
injectStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CssVarsProvider theme={theme}>
          <ConfirmProvider defaultOptions={{
          }}>
            <GlobalStyles styles={{ a: { textDecoration: 'none' } }} />
            <CssBaseline />
            <App />
            <ToastContainer theme='colored' />
          </ConfirmProvider >
        </CssVarsProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
