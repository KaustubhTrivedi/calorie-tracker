import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react'
import '../../styles/globals.css'
import store from '../redux/store';
function MyApp({ Component, pageProps: {
  session, ...pageProps
}, }) {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <SessionProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </LocalizationProvider>
  )
}

export default MyApp