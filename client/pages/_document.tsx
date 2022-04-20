import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="블로그" />
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css"
                    />
                </Head>

                <body>
                    <div id="root">
                        <Main />
                        <NextScript />
                    </div>
                </body>
            </Html>
        );
    }
}
