import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "../../components/globals/Loader";
import workshops from "./../../config/workshops.json";
export default function Workshops() {
  const router = useRouter();
  const { workshop } = router.query;
  const [data, setData] = useState(null);
  // check if router data is loaded
  useEffect(() => {
    if (workshop != undefined) {
      if (workshop in workshops) {
        let _data = workshops[workshop];
        // setData(_data);
      } else {
        router.push("/");
      }
    }
  });
  console.log(data);
  return (
    <>
      <Loader />
    </>
  );
}
