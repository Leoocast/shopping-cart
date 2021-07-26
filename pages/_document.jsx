import Document, { Html, Head, Main, NextScript} from 'next/document'
class MeruDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render(){
        return (
            <Html lang="es">
                <Head>
                    <meta name="description" content="Asia a un click de distancia." />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@merumex" />
                    <meta name="twitter:creator" content="@merumex" />
                    <meta property="og:url" content="https://meru.com.mx" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Meru" />
                    <meta property="og:description" content="Asia a un click de distancia." />
                    <meta property="og:image" content="https://meru.com.mx/og.jpg" />
                    <meta property="og:image:alt" content="Meru" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta property="og:locale" content="es-MX" />
                    <link rel="canonical" href="https://meru.com.mx" />
                    <meta charSet="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport"
                        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                    <title>Meru</title>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MeruDocument