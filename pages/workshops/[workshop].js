import { Head } from "next/document";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/globals/Footer";
import Navbar from "../../components/globals/Navbar";
import workshops from "./../../config/workshops.json";
export default function Workshops() {
  const router = useRouter();
  const { workshop } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    // check if router data is loaded and then only touch state
    if (workshop != undefined) {
      if (workshop in workshops) {
        // fetch specific object from wrksopps data object
        let _data = workshops[workshop];
        setData(_data);
      } else {
        router.push("/");
      }
    }
  }, [workshop]);
  return (
    <>
      <Navbar />
      <div className="h-20">{/* here for navbar spacing TODO: fix */}</div>
      {data != null && <div>{data.name}</div>}
      <Footer />
    </>
  );
}
