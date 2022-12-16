import "../styles/globals.css";
import "../styles/tailwind_config.css";
import "../styles/scrollbar.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="custom-font bg-white text-black min-h-screen">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
