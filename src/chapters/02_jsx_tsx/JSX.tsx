import React from 'react';
import Slide from '../../components/reveal/Slide';

const example = `const element = <h1>Welcome to React!</h1>`;
const asSnippet = `const example = foo as bar`;
const intrinsicFragment = `declare namespace JSX {
    interface IntrinsicElements {
      myIntrinsicElement: any;
    }
  }
  <myIntrinsicElement />; // ok
  <elementNotDefinedInInterface />; // error`;

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

const JSX: React.FC = () => {
  return (
    <Slide>
      <Slide isMain>
        <h2>2. JSX / TSX</h2>
        <p>Templating with JavaScript</p>
      </Slide>
      <Slide>
        <h2>JSX / TSX</h2>
        <p className='fragment'>syntax extension to JavaScript</p>
        <p className='fragment'>describe what the UI looks like</p>
        <p className='fragment'>full power of JavaScript</p>
        <p className='fragment'>produces React elements</p>
        <p className='fragment'>TSX enhances JSX in terms of type checking</p>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers='1,4'>
            {example}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Type assertions with the as operator</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers='1,4'>
            {asSnippet}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Intrinsic elements & Value based elements</h2>
        <ul className='fragment'>
          <li>intrinsic elements are looked up on a IntrinsicElements-interface which you need to define</li>
          <li>naming convention starts with lower case letter</li>
        </ul>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers='1,4'>
            {intrinsicFragment}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Intrinsic elements & Value based elements</h2>
        <ul className='fragment'>
          <li>value based elements are looked up by identifiers</li>
          <li>naming convention starts with capital letter</li>
        </ul>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers='1,4'>
            {buttonFragment}
          </code>
        </pre>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers='1,4'>
            {componentFragment}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Interfaces</h2>
        <p>define which properties need to be passed to you Component</p>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers='1,4'>
            {buttonFragment2}
          </code>
        </pre>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers='1,4'>
            {useButton2}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>JavaScript in Elements</h2>
        <pre>
          <code data-trim data-noescape data-line-numbers='1,4'>
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
    </Slide>
  );
};

export default JSX;
