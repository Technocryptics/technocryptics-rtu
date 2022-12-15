import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Technocryptics RTU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full flex items-center justify-center text-2xl bg-emerald-100/30 text-emerald-900 font-mono font-semibold lg:text-4xl">
        Hello India!
      </main>
    </>
  );
}
