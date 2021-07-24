import 'tailwindcss/tailwind.css'
import Head from 'next/head'

import { AppLayout } from '../components/layouts/AppLayout'

function MyApp({ Component, pageProps }) {

  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>Meru - Shopping Cart</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

          <main className="flex flex-col items-center w-10/12 flex-1 px-20 text-center">
            <Component {...pageProps} />
          </main>
      </div>
    </AppLayout>
    )
}

export default MyApp
