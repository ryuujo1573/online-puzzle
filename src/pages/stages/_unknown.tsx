import React, { useEffect, useState } from "react";
import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css';
import { Outlet, useParams } from "react-router-dom";

export default function () {
  const param = useParams();

  return <>
    this is an unknown stage: &nbsp;<code>{param['unknown']}</code>.
  </>
}