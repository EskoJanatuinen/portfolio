import Document, { Html, Head, Main, NextScript } from 'next/document'



export default class CustomDocument extends Document {
    render() {
        return <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;800&display=swap" rel="stylesheet" />
                <link rel='icon' href='/favicon/favicon.ico' />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon//apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon//favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon//favicon-16x16.png" />
                <meta property="og:url" content="https://eskojanatuinen.com/" />
                <meta property="og:title" content="Esko Janatuinen" />
                <meta property="og:description" content="Ecommerce professional" />
                <meta property="og:image" content="https://media-exp1.licdn.com/dms/image/C4D03AQFWI096DnzP4A/profile-displayphoto-shrink_400_400/0/1661289946138?e=1671667200&v=beta&t=HDlzDcfx1jfpE9_aDXpv_OydjTU0E01quxveRNVeaxE" />
                <meta property="og:site_name" content="Esko Janatuinen" />
            </Head>
            <body>
                <Main />
            </body>
            <NextScript />
        </Html>
    }
}