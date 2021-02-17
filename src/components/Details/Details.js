import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  const params = useParams();
  console.log(params);
  return <div>Full deatils</div>;
}

export default Details;
