import Head from 'next/head'

import {Navbar } from '../base/Navbar'

export const AppLayout = ({children}) => (
    <>
        <Head>
            <title>Meru - Shopping Cart</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center py-2">
                <main className="flex flex-col items-center w-10/12 flex-1 px-20 text-center">
                    {children}
                </main>
            </div>
        </div>
    </>
)