import React from "react";
import { useParams } from "react-router-dom";

export default function Contact() {
  const a = useParams();
  console.log(a);
  return <div>Contact</div>;
}
