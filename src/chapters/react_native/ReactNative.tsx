/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const styling = `import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
`;

const navigation = `const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
`;

const ReactNativeChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter {...props} subtitle={<blockquote>&quot;Just like React but for mobile devices &quot;</blockquote>}>
      <Slide>
        <h2>Basics</h2>
        <p className='fragment'>
          React Native is a library for building mobile apps with React. It is based on React, and uses the same components, but with some
          changes to make it work on native platforms like Android and iOS.
        </p>
      </Slide>
      <Slide>
        <h2>Components</h2>
        <p className='fragment'>
          Instead of using HTML tags, React Native uses{' '}
          <a href='https://reactnative.dev/docs/next/components-and-apis#basic-components'>Components</a> .
        </p>
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
        <h2>Bootsstrapping with expo</h2>
        <p className='fragment'>
          Just have a look here <a href='https://expo.dev/'>expo</a>
        </p>
        <p className='fragment'>We start by installing the expo-cli</p>
        <Code className='fragment'>npm install --global expo-cli</Code>
        <p className='fragment'>Then simply use npx to create the expo application</p>
        <Code className='fragment'>npx create-expo-app my-app</Code>
      </Slide>

      <Slide>
        <h2>Styling</h2>
        <p>
          You'll use the <a href='https://reactnative.dev/docs/next/layout-props'>Stylesheet</a> Component from react native. It is almost
          similar to CSS. Have a look at the Stylesheet link to get all stylings for the different components
        </p>
        <Code highlightedLines='4|9|10-15'>{styling}</Code>
      </Slide>

      <Slide>
        <h2>Navigation</h2>
        <p>
          You can have different <a href='https://github.com/react-navigation/react-navigation'>Routingnavigators</a>. The most common ones
          are the Stack and Bottom Tab
        </p>
        <Code>{navigation}</Code>
      </Slide>

      <Slide>
        <h2>Monorepo - Structure</h2>
        <img style={{ width: 800 }} src='./slide-assets/monorepo.webp' />
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
        <h2>FIN 🤪</h2>
      </Slide>
    </Chapter>
  );
};

export default ReactNativeChapter;
