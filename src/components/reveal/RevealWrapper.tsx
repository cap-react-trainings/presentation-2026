import React, { ReactNode, useEffect } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import SpeakerNotes from 'reveal.js/plugin/notes/notes.esm';
import './stylings.css';

interface RevealWrapperProps {
  children: ReactNode;
}

const options = {
  plugins: [SpeakerNotes],
  slideNumber: true,
  history: true
};

/**
 * Main component for creating the reveal.js slideshow.
 *
 * Initalizes the Slideshow with the necessary plugins and containers.
 */
const RevealWrapper: React.FC<RevealWrapperProps> = (props: RevealWrapperProps) => {
  useEffect(() => {
    const deck = new Reveal(options);
    deck.initialize();
  }, []);

  return (
    <div className='reveal'>
      <div className='slides'>{props.children}</div>
    </div>
  );
};

export default RevealWrapper;
