import 'tailwindcss/tailwind.css'

import { AppLayout } from '../components/layouts/AppLayout'

const MyApp = ({ Component, pageProps }) => (
  <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
)

export default MyApp