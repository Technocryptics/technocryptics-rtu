import Head from "next/head";
import Footer from "../components/globals/Footer";
import Navbar from "../components/globals/Navbar";
import Hero from "../components/home/Hero";
import Tagline from "../components/home/Tagline";
import Workshops from "../components/home/workshops/Workshops";

export default function Home() {
  return (
    <>
      <Head>
        <title>Technocryptics</title>
      </Head>
      <Navbar />
      <Hero />
      <Tagline />
      <Workshops />
      <Footer />
    </>
  );
}
