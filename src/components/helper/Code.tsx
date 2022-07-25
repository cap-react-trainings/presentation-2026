import React from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-okaidia.min.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { useEffect, useRef } from 'react';

interface CodeProps {
  code: string;
  language?: 'tsx';
  highlightedLines?: string;
  className?: string;
}

/**
 * Component to render a tsx code snippet with prismjs.
 */
const Code = (props: CodeProps) => {
  const codeElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // The setTimeout avoids some layouting issues.
    setTimeout(() => {
      if (codeElement.current) {
        Prism.highlightElement(codeElement.current, false, e => console.log(e));
      }
    }, 0);
  }, [props.code]);

  return (
    <pre className={props.className} data-line={props.highlightedLines || ''}>
      <code ref={codeElement} className={`language-${props.language || 'tsx'} line-numbers`}>
        {props.code}
      </code>
    </pre>
  );
};

export default Code;
