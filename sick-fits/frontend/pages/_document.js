import Document, { Html, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}