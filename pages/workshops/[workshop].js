import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/globals/Footer";
import Navbar from "../../components/globals/Navbar";
import Carousel from "../../components/workshops/Carousel";
import Hero from "../../components/workshops/Hero";
import workshops from "./../../config/workshops.json";
export default function Workshops() {
  const router = useRouter();
  const { workshop } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    // check if router data is loaded and then only touch state
    if (workshop != undefined) {
      // check for specific workshop
      const i = workshops.findIndex((e) => e.slug === workshop);
      if (i > -1) {
        setData(workshops[i]);
      } else {
        router.push("/");
      }
    }
  }, [workshop]);
  return (
    <>
      <Head>
        <title>Workshops</title>
      </Head>
      {data != null && (
        <>
          <Navbar />
          <div className="h-20">{/* here for navbar spacing TODO: fix */}</div>

          <Hero
            name={data.name}
            images={data.images}
            slug={data.slug}
            key={data.slug}
            description={data.description}
            type={data.type}
          />

          <Footer />
        </>
      )}
    </>
  );
}
