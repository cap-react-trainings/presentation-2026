import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const example = `const element = <h1>Welcome to React!</h1>`;

const buttonFragment = `export default MyButton: React.FC = () => {
    return <button>Click Me!</button>
}`;

const componentFragment = `import MyButton from './myButton';
<MyButton /> // ok
<MySuperSpecialButton /> // error
`;

const children = `const element = (
    const formatUser = user => user.firstName + user.lastName
    const mySource = "https://mylink.com"
    <div>
      <h1>Hello {formatUser(user)}</h1>
      <img src={mySource}/> 
    </div>
  )
  `;

const JsxChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter {...props} subtitle={<p>Templating with JavaScript</p>}>
      <Slide>
        <h2>JSX / TSX</h2>
        <p className='fragment'>syntax extension to JavaScript</p>
        <p className='fragment'>describe what the UI looks like</p>
        <p className='fragment'>full power of JavaScript</p>
        <p className='fragment'>produces React elements</p>
        <p className='fragment'>TSX enhances JSX in terms of type checking</p>
        <Code className='fragment'>{example}</Code>
      </Slide>
      <Slide>
        <h2>JSX / TSX Elements</h2>
        <ul className='fragment'>
          <li>elements are looked up by identifiers</li>
          <li>naming convention starts with capital letter</li>
          <li>You can import them as a component in your app</li>
        </ul>
        <Code className='fragment'>{buttonFragment}</Code>
        <Code className='fragment'>{componentFragment}</Code>
      </Slide>
      <Slide>
        <h2>JavaScript in Elements</h2>
        <Code>{children}</Code>
        <p>notice the following:</p>
        <ul>
          <li>
            JSX Elements can have mutlitple children but need <b>one</b> root element
          </li>
          <li>empty tags may be closed immediatly with `{'/>'}`</li>
          <li>JavaScript can be used inside JSX ({`{}`})</li>
        </ul>
      </Slide>
    </Chapter>
  );
};

export default JsxChapter;
