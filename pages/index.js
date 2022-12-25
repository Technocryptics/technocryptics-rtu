import Head from "next/head";
import Footer from "../components/globals/Footer";
import Navbar from "../components/globals/Navbar";
import Hero from "../components/home/Hero";
import Workshops from "../components/home/workshops/Workshops";

export default function Home() {
  return (
    <>
      {/* Add Google Analytics & setup _document */}
      <Head>
        <title>Technocryptics RTU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Workshops />
      <Footer />
    </>
  );
}
