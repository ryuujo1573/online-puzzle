import React from "react";
import { useParams } from "react-router-dom";

export default function () {
  const param = useParams();

  return <>
    this is an unknown stage: &nbsp;<code>{param['unknown']}</code>.
  </>
}