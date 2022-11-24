import React, { useEffect, useState } from "react";
import hljs from 'highlight.js';
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function () {
  const param = useParams();
  const [query, setQuery] = useSearchParams();
  // const [hash, setHash] = useState<string>()
  // addEventListener('hashchange', e => setHash(e.newURL.substring(e.newURL.indexOf('#'))));

  return <>
    <p>path: {JSON.stringify(param)}</p>
    <p>query:
    </p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css"></link>
    <div dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(JSON.stringify(Object.fromEntries(query.entries()))).value }}>

    </div>
  </>
}