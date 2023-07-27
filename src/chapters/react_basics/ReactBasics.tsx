import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const mvp = `import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<div>Hi</div>);
`;

const mvp2 = `import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const data = { name: "Hans" };

root.render(<div>Hi {data.name}</div>);
`;

const bootstrap = `npx create-react-app my-app
# or better
npm create vite@latest my-app -- --template react-ts

# then
cd my-app
npm install
npm start
`;

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
    return (<div>
      <h1>Hello {formatUser(user)}</h1>
      <img src={mySource}/> 
    </div>)
  )
  `;

const ReactBasicsChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter {...props} subtitle={<p>Minimal App, Bootstrapping & Templating</p>}>
      <Slide>
        <h2>Minimal App</h2>
        <Code className='fragment'>{mvp}</Code>
      </Slide>
      <Slide>
        <h2>Bootstrapping a Project</h2>
        <Code className='fragment' language='bash'>
          {bootstrap}
        </Code>
      </Slide>
      <Slide>
        <h2>Templating with JSX / TSX</h2>
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
      <Slide>
        <h2>Minimal App with data</h2>
        <Code>{mvp2}</Code>
      </Slide>
    </Chapter>
  );
};

export default ReactBasicsChapter;
