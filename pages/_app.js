import 'tailwindcss/tailwind.css'

import { useState }from 'react'

import { AppContext } from '../components/context'
import { AppLayout } from '../components/layouts/AppLayout'

import { useLocalStorage } from '../hooks/useLocalStorage'

const MyApp = ({ Component, pageProps }) => {

  const [ cart ] = useLocalStorage('cart', [])

  const [ globalState, setGlobalState ] = useState({ cart })

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <AppLayout>
          <Component {...pageProps} />
      </AppLayout>
    </AppContext.Provider>
  )
}

export default MyApp