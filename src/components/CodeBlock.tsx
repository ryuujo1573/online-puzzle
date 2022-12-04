import React from 'react';
import hljs from 'highlight.js';
import { Languages } from 'src/const';

// todo: darkmode auto-adapt.
import 'highlight.js/styles/dark.css';
type Props = {
  lang?: typeof Languages[number],
  theme?: string,
  children: string,
};
export const CodeBlock = ({ lang, theme, children: code }: Props) => {
  // document.querySelectorAll('pre code')
  //   .forEach(hljs.highlightElement as any);
  return (
    <pre><code className='rounded-sm'
      dangerouslySetInnerHTML={{
        __html: lang === undefined
          ? hljs.highlightAuto(code).value
          : hljs.highlight(lang, code).value
      }}></code></pre>
  );
};