import React from 'react';
import ReactLogo from '../../components/helper/ReactLogo';
import Slide from '../../components/reveal/Slide';

const IntroChapter: React.FC = () => {
  return (
    <>
      <Slide isMain dataAutoAnimate>
        <ReactLogo scale={2} />
        <aside className='notes'>Intro Notes.</aside>
      </Slide>
      <Slide isMain data-auto-animate dataAutoAnimate>
        <h2>React Training</h2>
        <div style={{ marginTop: 50 }}>
          <ReactLogo />
        </div>
        <aside className='notes'>Intro Notes.</aside>
      </Slide>
    </>
  );
};

export default IntroChapter;
