/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Slide from '../../components/reveal/Slide';
import image from './../../assets/panic.jpeg';

const ReactElements = `<div>
  <p>Good morning</p>
</div>
`;

const NativeElements = `<View>
  <Text>Good morning</Text>
</View>
`;

const NativeMonoChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter
      {...props}
      subtitle={<blockquote>&quot;React Native is like React but for mobile devices. It supports iOS and Android. &quot;</blockquote>}
    >
      <Slide>
        <h2>Main difference</h2>
        <p className='fragment'>
          The main difference between React and React Native is the way you write the UI. The logic can stay almost the same!
        </p>
        <p className='fragment'>
          Instead of using HTML elements, you'll use React Native Elements which are more specialized but still (almost) fully customizable
        </p>
      </Slide>
      <Slide>
        <h2>A few examples</h2>
        <pre>
          <code data-trim data-noescape data-line-numbers>
            {ReactElements}
          </code>
        </pre>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {NativeElements}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>What is Expo</h2>
        <p>
          When developing with RN you'll most likely start with expo. Expo is giving you a basket full of useful tools, ui components and
          the option to directly test and deploy to the stores
        </p>
        <p className='fragment'>
          You can use RN also with native iOS or Android Components but then you might need to eject the expo app to a custom RN app. Which
          offers more possiblities but also needs more attention
        </p>
      </Slide>
      <Slide>
        <h2>How to start</h2>
        <p>It is best to have some hands on :D</p>
        <p className='fragment'>
          We will go one step further and develop a Monorepo Application. That means that we are using the same repo for our RN and React
          code. We can reuse the same logic then!
        </p>
        <p className='fragment'>Fingers on the keyboard and pay attention :D</p>
      </Slide>
      <Slide>
        <img className='fragment fade-out' data-fragment-index='2' data-src={image} />
        <p
          className='fragment'
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          data-fragment-index='2'
        >
          We will go step by step and just do a small project
        </p>
      </Slide>
      <Slide>
        <h2>Further Reads</h2>
        <ul>
          <li>
            <a href='https://v5.reactrouter.com/web/guides/quick-start'>React Router</a>
          </li>
          <li>
            <a href='https://v5.reactrouter.com/web/api/Hooks'>Hooks</a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
      </Slide>
    </Chapter>
  );
};

export default NativeMonoChapter;
