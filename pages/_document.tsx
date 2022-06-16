import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import { theme } from '../common/theme/theme';

export default class MyDocument extends Document {
    render() {
        // console.log("document")
        return (
            <Html lang="en">
                <Head>
                    {/* dv4loader for app loading */}
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    {/* PWA primary color */}
                    {/* Theme css */}
                    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
                    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
                    <link rel="stylesheet" href="/public/css/fontawesome-all.css" />
                    <link href="css/popuo-box.css" rel="stylesheet" type="text/css" media="all" />
                    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
                    <link href="//fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&amp;subset=latin-ext" rel="stylesheet" />
                    <link href="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese"
                        rel="stylesheet" />
                </Head>
                <script src="https://cdn.jsdelivr.net/npm/@dv4all/loaders@1.0.1/lib/dv4loaders.cjs.min.js" />
                <body>
                    <Main />
                    <NextScript />
                    <script data-jsd-embedded data-key="78940353-6461-41a5-8cc0-5fbe54b14fc9"
                        data-base-url="https://jsd-widget.atlassian.com"
                        src="https://jsd-widget.atlassian.com/assets/embed.js" />
                    <script src="js/jquery-2.2.3.min.js"></script>
                    <script src="js/jquery.magnific-popup.js"></script>
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