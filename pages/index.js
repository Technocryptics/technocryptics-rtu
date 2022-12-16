import Head from "next/head";
import Footer from "../components/globals/Footer";
import Navbar from "../components/globals/Navbar";
import AnimationBg1 from "../components/home/AnimationBg1";
import Hero from "../components/home/Hero";
import Workshops from "../components/home/workshops/Workshops";

export default function Home() {
  return (
    <>
      <Head>
        <title>Technocryptics RTU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AnimationBg1>
        <Hero />
      </AnimationBg1>
      <Workshops />
      <Footer />
    </>
  );
}
