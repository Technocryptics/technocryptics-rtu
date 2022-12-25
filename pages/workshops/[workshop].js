import { useRouter } from "next/router";
import React from "react";

export default function Workshops() {
  const router = useRouter();
  const { workshop } = router.query;
  return <div>Workshops: {workshop}</div>;
}
