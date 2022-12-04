import { CodeBlock } from '@comps/CodeBlock';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function AnyTarget() {
  const [query, setQuery] = useSearchParams();
  // const [hash, setHash] = useState<string>()
  // addEventListener('hashchange', e => setHash(e.newURL.substring(e.newURL.indexOf('#'))));

  return (
    <div>
      <p>
        This is demo page.
      </p>

      <CodeBlock>{JSON.stringify(Object.fromEntries(query.entries()), undefined, 2)}</CodeBlock>
    </div>
  );
};