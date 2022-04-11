import JsxChapter from './chapters/jsx_tsx/JSX';
import ExampleChapter from './chapters/z_example/ExampleChapter';
import RevealWrapper from './components/reveal/RevealWrapper';
import React from 'react';
import IntroChapter from './chapters/a_Intro/IntroChapter';
import ContextChapter from './chapters/context/ContextChapter';
import FormsChapter from './chapters/forms/FormsChapter';
import ConditionalRenderingChapter from './chapters/conditional_rendering/ConditionalRendering';
import ComponentsChapter from './chapters/components_props/ComponentsProps';
import DatabindingHooksChapter from './chapters/databinding/DatabindingHooks';
import ComparisonChapter from './chapters/comparison/ComparisonChapter';
import TableOfContents from './chapters/a_Intro/TableOfContents';

const App: React.FC = () => {
  const chapter = [
    {
      title: 'Comparison of Frameworks',
      component: ComparisonChapter
    },
    {
      title: 'JSX & TSX',
      component: JsxChapter
    },
    {
      title: 'Conditional Rendering',
      component: ConditionalRenderingChapter
    },
    {
      title: 'Components',
      component: ComponentsChapter
    },
    {
      title: 'Hooks & Databinding',
      component: DatabindingHooksChapter
    },
    {
      title: 'Context',
      component: ContextChapter
    },
    // {
    //   title: 'jo',
    //   component: RoutingChapter
    // },
    {
      title: 'Forms',
      component: FormsChapter
    } //,
    // {
    //   title: 'jo',
    //   component: PerformanceChapter
    // },
    // {
    //   title: 'jo',
    //   component: TestingChapter
    // },
    // {
    //   title: 'jo',
    //   component: StorybookChapter
    // },
    // {
    //   title: 'jo',
    //   component: ReactNativeChapter
    // }
  ];

  return (
    <RevealWrapper>
      <IntroChapter />
      <TableOfContents chapter={chapter} />
      <ExampleChapter title='Example' index={0} />
      {chapter.map((chapter, index) => (
        <chapter.component key={index} title={chapter.title} index={index + 1} />
      ))}
    </RevealWrapper>
  );
};

export default App;
