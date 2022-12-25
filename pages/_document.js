import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-p-32 xl:scroll-p-36  2xl:scroll-p-48">
      <Head>
        <title>Technocryptics</title>
      </Head>
      <body>
        <div>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
