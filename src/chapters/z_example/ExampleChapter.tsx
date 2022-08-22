import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const snippet = `<Slide isMain>
  <h2>Tolle Präsentation</h2>
  <p>Beispiel einer Hauptseite (isMain=true).</p>
</Slide>
        `;

const ExampleChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter
      {...props}
      subtitle={
        <>
          <p>Beispiel einer Hauptseite (isMain=true).</p>
          <aside className='notes'>Shhh, these are your private notes 📝</aside>
        </>
      }
    >
      <Slide>
        <h2>Slide Components (1/2)</h2>
        <p className='fragment'>Das hier ist eine Unterseite. Die {`<Slide>`} Komponente machts leicht:</p>
        <Code className='fragment' highlightedLines='1,4'>
          {snippet}
        </Code>
      </Slide>
      <Slide>
        <h2>Slide Components (2/2)</h2>
        <p className='fragment'>Das hier ist eine Unterseite. Die {`<Slide>`} Komponente machts leicht:</p>
        <Code className='fragment' highlightedLines='1,4'>
          {snippet}
        </Code>
      </Slide>
      <Slide>
        <h2>Further Reads</h2>
        <ul>
          <li>
            <a href='https://reactjs.org/docs/testing.html' target='_blank' rel='noreferrer'>
              React Docs
            </a>
          </li>
          <li>
            <a href='https://testing-library.com/docs/react-testing-library/intro' target='_blank' rel='noreferrer'>
              React Testing Library
            </a>
          </li>
        </ul>
      </Slide>
    </Chapter>
  );
};

export default ExampleChapter;
