import Head from "next/head";
import Footer from "../components/globals/Footer";
import Navbar from "../components/globals/Navbar";
import Hero from "../components/home/Hero";
import Workshops from "../components/home/workshops/Workshops";

export default function Home() {
  return (
    <>
      {/* Add Google Analytics & setup _document scroll padding in document */}
      <Head>
        <title>Technocryptics</title>
      </Head>
      <Navbar />
      <Hero />
      <Workshops />
      <Footer />
    </>
  );
}
