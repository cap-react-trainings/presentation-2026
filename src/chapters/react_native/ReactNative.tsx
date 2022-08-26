/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const ReactNativeChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter {...props} subtitle={<blockquote>&quot;Just like React but for mobile devices &quot;</blockquote>}>
      <Slide>
        <h2>Basics</h2>
        <p className='fragment'>
          React Native is a framework for building mobile apps with React. It is based on React, and uses the same components, but with some
          changes to make it work on native platforms like Android and iOS.
        </p>
      </Slide>
      <Slide>
        <h2>Components</h2>
        <p className='fragment'>Instead of using HTML tags, React Native uses components.</p>
        <Code className='fragment'>{`<div></div> -> <View></View>`}</Code>
        <Code className='fragment'>{`<p></p> -> <Text></Text>`}</Code>
      </Slide>
      <Slide>
        <h2>Logic</h2>
        <p className='fragment'>
          The logic can stay the same. We may need to adapt image uploads or other logic to use native components from React Native.
        </p>
        <p className='fragment'>
          When we want to add a React Native application to an existing React application, we can use a mono-repo approach. A mono-repo
          contains the shared code aswell as the code for the native elements.
        </p>
      </Slide>
      <Slide>
        <h2>How to start</h2>
        <p className='fragment'>We can simply add the imports for react native and add them to our repo and then restructure the code.</p>
        <p className='fragment'>
          We could also use expo, which is a platform for building native apps more easily as it also includes approaches to directly test
          on iOS and Android Emulators and devices.
        </p>
      </Slide>

      <Slide>
        <h2>Further Reads</h2>
        <ul>
          <li>
            <a href='https://reactnative.dev/docs/environment-setup' target='_blank' rel='noreferrer'>
              React Native
            </a>
          </li>
          <li>
            <a href='https://docs.expo.dev/get-started/installation/' target='_blank' rel='noreferrer'>
              Expo
            </a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
      </Slide>
      <Slide>
        <h2>FIN 🤪</h2>
      </Slide>
    </Chapter>
  );
};

export default ReactNativeChapter;
