import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@mui/styles';
import {theme} from '../common/theme/theme';

export default class MyDocument extends Document {
    render() {
        // console.log("document")
        return (
            <Html lang="en">
                <Head>
                    {/* dv4loader for app loading */}
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>
                    <meta name="theme-color" content={theme.palette.primary.main}/>
                    {/* PWA primary color */}
                </Head>
                <script src="https://cdn.jsdelivr.net/npm/@dv4all/loaders@1.0.1/lib/dv4loaders.cjs.min.js"/>
                <body>
                <Main/>
                <NextScript/>
                <script data-jsd-embedded data-key="78940353-6461-41a5-8cc0-5fbe54b14fc9"
                        data-base-url="https://jsd-widget.atlassian.com"
                        src="https://jsd-widget.atlassian.com/assets/embed.js"/>
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    console.log("getInitalProps...")

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};