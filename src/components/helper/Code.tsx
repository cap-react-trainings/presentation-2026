import React from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-okaidia.min.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/toolbar/prism-toolbar.js';
import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
import { useEffect, useRef } from 'react';

interface CodeProps {
  children: string;
  language?: 'tsx' | 'bash';
  /**
   * Which lines to highlight in the code snippet, e.g.:
   * - '5' (The 5th line)
   * - '1-5' (Lines 1 through 5)
   * - '1,4' (Line 1 and line 4)
   * - '1-2, 5, 9-20' (Lines 1 through 2, line 5, lines 9 through 20)
   */
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
  }, [props.children]);

  return (
    <pre className={props.className} data-line={props.highlightedLines || ''}>
      <code ref={codeElement} className={`language-${props.language || 'tsx'} line-numbers`}>
        {props.children}
      </code>
    </pre>
  );
};

export default Code;
