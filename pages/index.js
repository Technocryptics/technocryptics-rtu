import Head from "next/head";
import Navbar from "../components/globals/Navbar";
import AnimationBg1 from "../components/home/AnimationBg1";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Technocryptics RTU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white text-black min-h-screen">
        <Navbar />
        <AnimationBg1>
          <Hero />
        </AnimationBg1>
      </main>
    </>
  );
}
