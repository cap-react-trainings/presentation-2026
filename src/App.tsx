import JsxChapter from './chapters/01_jsx_tsx/JSX';
import ExampleChapter from './chapters/99_example/ExampleChapter';
import RevealWrapper from './components/reveal/RevealWrapper';
import React from 'react';
import IntroChapter from './chapters/00_Intro/IntroChapter';
import ContextChapter from './chapters/05_context/ContextChapter';
import FormsChapter from './chapters/07_forms/FormsChapter';
import ConditionalRenderingChapter from './chapters/02_conditional_rendering/ConditionalRendering';
import ComponentsChapter from './chapters/03_components_props/ComponentsProps';
import DatabindingHooksChapter from './chapters/04_databinding/DatabindingHooks';
import ComparisonChapter from './chapters/01_comparison/ComparisonChapter';
import TableOfContents from './chapters/00_Intro/TableOfContents';

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
      {/* <ExampleChapter /> */}
      {chapter.map((chapter, index) => (
        <chapter.component key={index} title={chapter.title} index={index + 1} />
      ))}
    </RevealWrapper>
  );
};

export default App;
