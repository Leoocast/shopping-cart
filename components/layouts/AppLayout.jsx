import Head from 'next/head'

import {Navbar } from '../base/Navbar'

import { Layout } from '../../styles/components'

import { DocumentSeo } from '../seo/DocumentSeo'

export const AppLayout = ({children}) => (
    <>
        <DocumentSeo />
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center py-2">
                <Layout.Main className="flex flex-col items-center md:w-10/12 flex-1 px-20 text-center sm:justify-start sm:px-0 sm:w-full">
                    {children}
                </Layout.Main>
            </div>
        </div>
    </>
)