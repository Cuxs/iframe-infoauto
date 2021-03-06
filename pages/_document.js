import Document, { Head, Main, NextScript } from 'next/document'
global.fetch = require('node-fetch');


export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/_next/static/style.css`}
          />
        </Head>
          <body>
            <Main />
            <NextScript />
          </body>
      </html>
    )
  }
}