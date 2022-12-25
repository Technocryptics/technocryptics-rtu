import "../styles/globals.css";
import "../styles/tailwind_config.css";
import "../styles/scrollbar.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-545R3H0GEF"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-545R3H0GEF', { page_path: window.location.pathname });
            `,
        }}
      />
      <main className="custom-font bg-white text-black min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
