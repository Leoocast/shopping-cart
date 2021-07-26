import Head from 'next/head'

export const SingleProductSeo = ({name, cover}) => {
    return (
        <Head>
            <meta name="description" content="Asia a un click de distancia." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@merumex" />
            <meta name="twitter:creator" content="@merumex" />
            <meta property="og:url" content={'./producto/'+name} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={name} />
            <meta property="og:description" content="Asia a un click de distancia." />
            <meta property="og:image" content={cover} />
            <meta property="og:image:alt" content={name} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="es-MX" />
            <link rel="canonical" href={'./producto/'+name} />
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
            <title>{name}</title>
        </Head>
    )
}

SingleProductSeo.defaultProps = {
    name: 'Meru - Product',
    cover: 'https://meru.com.mx/og.jpg'
}