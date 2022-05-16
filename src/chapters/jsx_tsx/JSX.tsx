import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Slide from '../../components/reveal/Slide';

const example = `const element = <h1>Welcome to React!</h1>`;

const buttonFragment = `export default MyButton: React.FC = () => {
    return (
        <button>Click Me!</button>
    )
}`;

const componentFragment = `
    import MyButton from './myButton';
    <MyButton /> // ok
    <MySuperSpecialButton /> // error
`;
const buttonFragment2 = `
interface Props {
    title: string;
}
export default MyButton: React.FC = ({props: Props}) => {
    return (
        <button>{props.title}</button>
    )
}`;

const useButton2 = `
<MyButton /> // error
<MyButton title={2} /> / error
<MyButton title='Hit me' /> //ok
`;

const children = `const element = (
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
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {example}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>JSX / TSX Elements</h2>
        <ul className='fragment'>
          <li>elements are looked up by identifiers</li>
          <li>naming convention starts with capital letter</li>
          <li>You can import them as a component in your app</li>
        </ul>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {buttonFragment}
          </code>
        </pre>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {componentFragment}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Interfaces</h2>
        <p>define which properties need to be passed to your component</p>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {buttonFragment2}
          </code>
        </pre>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {useButton2}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>JavaScript in Elements</h2>
        <pre>
          <code data-trim data-noescape data-line-numbers>
            {children}
          </code>
        </pre>
        <p>notice the following:</p>
        <ul>
          <li>
            JSX Elements can have mutlitple children but need <b>one</b> root element
          </li>
          <li>empty tags may be closed immediatly with `{'/>'}`</li>
          <li>JavaScript can be used inside JSX</li>
        </ul>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
      </Slide>
    </Chapter>
  );
};

export default JsxChapter;
