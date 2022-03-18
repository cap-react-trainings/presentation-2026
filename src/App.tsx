import JSX from './chapters/02_jsx_tsx/JSX';
import ExampleChapter from './chapters/99_example/ExampleChapter';
import RevealWrapper from './components/reveal/RevealWrapper';
import React from 'react';

const App: React.FC = () => {
  return (
    <RevealWrapper>
      <ExampleChapter />
      {/* more Chapters to come here... */}
      <JSX />
    </RevealWrapper>
  );
};

export default App;
