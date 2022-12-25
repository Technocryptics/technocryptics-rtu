import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-p-32 xl:scroll-p-36  2xl:scroll-p-48">
      <Head>
        <title>Technocryptics</title>
        <link rel="icon" href="/favicon.ico" />
        {/* meta tags generated from WebSearcher(https://websearcher.pushkaryadav.in/) */}
        <meta name="title" content="Technocryptics" />
        <meta
          name="description"
          content="A graphic designing club of Rajasthan Technical University, Kota"
        />
        <meta name="keywords" content="" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Pushkar Yadav" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://technocryptics.vercel.app/" />
        <meta property="og:title" content="Technocryptics" />
        <meta
          property="og:description"
          content="A graphic designing club of Rajasthan Technical University, Kota"
        />
        <meta
          property="og:image"
          content="https://technocryptics.vercel.app/banner.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://technocryptics.vercel.app/"
        />
        <meta property="twitter:title" content="Technocryptics" />
        <meta
          property="twitter:description"
          content="A graphic designing club of Rajasthan Technical University, Kota"
        />
        <meta
          property="twitter:image"
          content="https://technocryptics.vercel.app/banner.png"
        />
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
