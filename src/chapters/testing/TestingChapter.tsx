import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Slide from '../../components/reveal/Slide';

const snippet = `
<Slide isMain>
  <h2>Tolle Präsentation</h2>
  <p>Beispiel einer Hauptseite (isMain=true).</p>
</Slide>
        `;

const ExampleChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter
      {...props}
      subtitle={
        <ul>
          <li>rendering different components</li>
          <li>inline conditions</li>
        </ul>
      }
    >
      <Slide>
        <h2>Slide Components (1/2)</h2>
        <p className='fragment'>Das hier ist eine Unterseite. Die {`<Slide>`} Komponente machts leicht:</p>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers='1,4'>
            {snippet}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Slide Components (2/2)</h2>
        <p className='fragment'>Das hier ist eine Unterseite. Die {`<Slide>`} Komponente machts leicht:</p>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers='1,4'>
            {snippet}
          </code>
        </pre>
      </Slide>
    </Chapter>
  );
};

export default ExampleChapter;
