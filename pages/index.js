import Head from "next/head";
import Footer from "../components/globals/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Technocryptics RTU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white text-black min-h-screen">
        <Navbar />
        <Footer />
      </main>
    </>
  );
}
