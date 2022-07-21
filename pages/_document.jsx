import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class CustomDocument extends Document {
    render() {
        return <Html lang="en">
            <Head>
                <link rel='icon' href='/favicon/favicon.ico' />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon//apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon//favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon//favicon-16x16.png" />
            </Head>
            <body>
                <Main />
            </body>
            <NextScript />
        </Html>
    }
}