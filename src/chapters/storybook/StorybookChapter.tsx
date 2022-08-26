import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const snippet = `// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => {
  return <Button primary>Button</Button>;
};
`;

const StorybookChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  /**
   * A slide, that reveals the amount of pixels from the left side of the image.
   */
  const RevealPxOfImageSlide = ({ id, pixel }: { id: string; pixel: number }) => (
    <Slide dataAutoAnimate>
      <div style={{ position: 'relative' }}>
        <img src='./slide-assets/atomic-design-example.png' />
        <div
          data-id={id}
          style={{ position: 'absolute', background: '#191919', height: '100%', width: '100%', top: 0, marginLeft: pixel }}
        ></div>
      </div>
    </Slide>
  );

  return (
    <Chapter {...props}>
      {/* COMPONENT BASED DEVELOPMENT */}
      <Slide>
        <h2>Atomic Design</h2>
      </Slide>
      {[207, 390, 572, 755, 979].map(pixel => (
        <RevealPxOfImageSlide key={pixel} id='hi' pixel={pixel} />
      ))}
      {/* STORYBOOK */}
      <Slide>
        <h2>Storybook</h2>
        <video autoPlay playsInline loop data-autoplay>
          <source src='https://storybook.js.org/cdb19b23da5e96c112ff3b8fded28a82/storybook-hero-video-optimized-lg.mp4' type='video/mp4' />
        </video>
      </Slide>
      <Slide>
        <h2>Why you should use it</h2>
        <ul>
          <li className='fragment'>faster and easier development (isolation)</li>
          <li className='fragment'>better awareness about components</li>
          <li className='fragment'>easier to test edge cases</li>
          <li className='fragment'>better documentation</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Example</h2>
        <Code highlightedLines='5,13'>{snippet}</Code>
      </Slide>
      {/*  <Slide
        data-background-iframe='https://61a90feace7802003a4d9c45-uaqlinmlwh.chromatic.com/?path=/story/composite-components-button--default-button&args=size:medium;disabled:false'
        data-background-interactive
      >
        <iframe
          src='https://61a90feace7802003a4d9c45-uaqlinmlwh.chromatic.com/?path=/story/composite-components-button--default-button&args=size:medium;disabled:false'
          style={{ width: '90%', height: '90%' }}
        ></iframe> 
      </Slide>*/}
      <Slide>
        <h2>Addons</h2>
        <img src='./slide-assets/storybook-a11y-plugin.png' />
      </Slide>
      <Slide>
        <h2>Component library</h2>
        <img src='./slide-assets/component-lib-approach.png' />
      </Slide>
      <Slide>
        <h2>Further Reads</h2>
        <ul>
          <li>
            <a href='https://storybook.js.org/docs/react/get-started/introduction' target='_blank' rel='noreferrer'>
              Storybook Docs
            </a>
          </li>
          <li>
            <a href='https://bradfrost.com/blog/post/atomic-web-design/' target='_blank' rel='noreferrer'>
              Atomic Design
            </a>
          </li>
          <li>
            <a href='https://bradfrost.com/blog/post/atomic-design-and-storybook/' target='_blank' rel='noreferrer'>
              Atomic Design &amp; Storybook
            </a>
          </li>
        </ul>
      </Slide>
      {/* <Slide>
        <h2>💪 Exercise</h2>
      </Slide> */}
    </Chapter>
  );
};

export default StorybookChapter;
