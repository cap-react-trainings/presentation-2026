import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const fnExample = `const Welcome: React.FC = (props: Pros) {
  return <h1>Hello, {props.name}</h1>;
}`;

const classExample = `class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`;

const bookList = `function App = () => {
  const books: Book[] = [
    {id: 1, name: 'Moby Dick', author: 'Herman Melville'},
    {id: 2, name: 'Hamlet', author: 'Shakespeare'},]
  return (
    <div>
    <h1>Booklist</h1>
     {books.map((book, index) => (
       // always define keys when looping, unique identifier for React DOM
       <Book key={index} book={book} /> 
     ))}
    </div>
  )
}
`;

const book = `const interface Book {
  id: number;
  name: string;
  author: string;
}

const Book: React.FC = (props: Book) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>author: {props.author}</p>
    </div>
  )
}
`;

const bookDestructured = `const interface Book {
  id: number;
  name: string;
  author: string;
}

const Book: React.FC = ({ name, author }: Book) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>author: {author}</p>
    </div>
  )
}
`;

const defaultProps = `const Book: FC = ({name="Tom", author="Rowling"}: Book) => {
return (
  <div>
    <h1>{name}</h1>
    <p>author: {author}</p>
  </div>
)}`;

const immutableProps = `const Book: FC = (props: Props) => {
  props.title = "HI"
}`;

const classStyled = `const Book: React.FC = ({ name, author }: Book) => {
  return (
    <div>
      <h1 className='myHeadline'>{name}</h1>
      <p>author: {author}</p>
    </div>
  )
}
`;

const stylesAttribute = `const Book: React.FC = ({ name, author }: Book) => {
  return (
    <div>
      <h1 className='myHeadline'>{name}</h1>
      // notice the double curly braces
      <p style={{ color: 'green'}}>author: {author}</p>
    </div>
  )
}
`;

const yarnAdd = `yarn add --save styled-components`;

const styledComponent = `import styled from 'styled-components';
const StyledAuthor = styled.p\`color: 'green'\`
const Book: React.FC = ({ name, author }: Book) => {
  return (<div>
      <h1 className='myHeadline'>{name}</h1>
        // notice the double curly braces
      <StyledAuthor>author: {author}</StyledAuthor>
    </div>
  )}
`;

const buttonFragment2 = `interface Props {
  title: string;
}
export default MyButton: React.FC = (props: Props) => {
    return (
        <button>{props.title}</button>
    )
}`;

const useButton2 = `<MyButton /> // error
<MyButton title={2} /> // error
<MyButton title='Hit me' /> // ok
`;

const ComponentsChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter {...props} subtitle={<p>JavaScript functions, accept Props and return React Elements (JSX)</p>}>
      <Slide>
        <h2>Class Components vs. Functional Components</h2>
        <Code className='fragment'>{fnExample}</Code>
        <Code className='fragment'>{classExample}</Code>
        <p className='fragment'>same output</p>
      </Slide>
      <Slide>
        <h2>Class Components vs. Functional Components</h2>
        <p className='fragment'>Whats the difference? When should I use which one?</p>
        <ul className='fragment'>
          <li>historical reasons: no state-management / lifecycle hooks before 2019 in functional components</li>
          <li>nowadays: hardly any usage of class components</li>
          <li>functional components are easier to read and test, less code, better performance</li>
        </ul>
        <a href='https://www.twilio.com/blog/react-choose-functional-components' target='_blank' className='fragment' rel='noreferrer'>
          🚀 understanding functional components vs class components
        </a>
      </Slide>
      <Slide>
        <h2>Properties (aka Props)</h2>
        <p>Pass information down the component tree</p>
        <Code className='fragment'>{buttonFragment2}</Code>
        <Code className='fragment'>{useButton2}</Code>
        <aside className='notes'>Or use any other way of passing JS objects (e.g. destructuring).</aside>
      </Slide>
      <Slide>
        <h2>Properties (aka Props)</h2>
        <p className='fragment'>Book-List which renders various Books from a Book component</p>
        <p className='fragment'>The Book component doesn't 'know' what to render so we need to pass the information</p>
      </Slide>
      <Slide>
        <h2>Properties (aka Props)</h2>
        <Code highlightedLines='10'>{bookList}</Code>
        <pre>
          <a
            style={{ fontSize: '1.7rem', marginTop: 4 }}
            target='_blank'
            rel='noreferrer'
            href='https://github.com/cap-react-trainings/code-examples/blob/03-conditional-rendering-basic/react-training-codeexamples/src/App.tsx'
          >
            🚀 code example on GitHub
          </a>
        </pre>
        <aside className='notes'>map: this is how we iterate over arrays in React (angular ngFor, vue: v-for)</aside>
      </Slide>
      <Slide>
        <h2>Properties: not destructured</h2>
        <Code className='fragment' highlightedLines='7'>
          {book}
        </Code>
      </Slide>
      <Slide>
        <h2>Properties: destructured</h2>
        <Code className='fragment' highlightedLines='7'>
          {bookDestructured}
        </Code>
      </Slide>
      <Slide>
        <h2>Properties: destructured vs not destructured</h2>
        <ul>
          <li className='fragment'>
            Pro: easier to apply default values
            <Code highlightedLines='1'>{defaultProps}</Code>
          </li>
          <li className='fragment'>
            Con: in case of large components you might get confused which variables are defined in the component scope and which ones are
            passed as props
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>Important sidenote: Props are immutable</h2>
        <ul>
          <li>
            this means you <strong>cannot</strong> do something like this:
          </li>
          <Code>{immutableProps}</Code>
        </ul>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <ul>
          <li>Implement a small app which renders a list of books (start in App.tsx).</li>
          <li>There should be a Book-Component which accepts a property of type 'Book'.</li>
          <li>
            Find some sample data{' '}
            <a
              href='https://github.com/cap-react-trainings/code-examples/blob/02-conditional-rendering-styled-components/react-training-codeexamples/src/testData/Booklist.ts'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>Let's style our Booklist</h2>
        <ul className='fragment'>
          <li>via css classes</li>
          <li>via inline styling</li>
          <li>CSS in JS</li>
        </ul>
      </Slide>
      <Slide>
        <h2>className</h2>
        <p className='fragment'>instead of using the 'class'-attribute, React expects 'className'</p>
        <Code className='fragment'>{classStyled}</Code>
      </Slide>
      <Slide>
        <h2>Inline Styling</h2>
        <p className='fragment'>inline styling is also possible via the well known 'style'-attribute</p>
        <p className='fragment'>notice the double curly braces, usual CSS-syntax inside</p>
        <Code className='fragment'>{stylesAttribute}</Code>
        <pre className='fragment'>
          <a
            style={{ fontSize: '1.7rem', marginTop: 4 }}
            target='_blank'
            rel='noreferrer'
            href='https://github.com/cap-react-trainings/code-examples/blob/02-conditional-rendering-basic/react-training-codeexamples/src/components/book/Book.tsx'
          >
            🚀 code example on GitHub
          </a>
        </pre>
      </Slide>
      <Slide>
        <h2>CSS in JS</h2>
        <ul className='fragment'>
          <li>Style components using JavsScript</li>
          <li>JavaScript power in CSS</li>
          <li>no React built-in-feature -{`>`} external library</li>
          <ul className='fragment'>
            <li>
              most popular:{' '}
              <a href='https://styled-components.com/' target='_blank' rel='noreferrer'>
                Styled Components
              </a>{' '}
              (36K+ stars on GitHub)
            </li>
            <li>
              also used by{' '}
              <a href='https://mui.com/system/styled/' target='_blank' rel='noreferrer'>
                MUI
              </a>
            </li>
          </ul>
        </ul>
        <aside className='notes'>
          hint: when working with MUI you should checkout the latest version of styling, `the system`, which implements{' '}
          <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>
            tailwind
          </a>{' '}
          and makes your styling life a lot easier and esp. faster
        </aside>
      </Slide>
      <Slide>
        <h2>CSS in JS - styled components</h2>
        <Code className='fragment'>{yarnAdd}</Code>
        <Code className='fragment' highlightedLines='2,7'>
          {styledComponent}
        </Code>
        <pre className='fragment'>
          <a
            style={{ fontSize: '1.7rem', marginTop: 4 }}
            target='_blank'
            rel='noreferrer'
            href='https://github.com/cap-react-trainings/code-examples/blob/02-conditional-rendering-styled-components/react-training-codeexamples/src/components/book/Book.tsx'
          >
            🚀 code example on GitHub
          </a>
        </pre>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <ul>
          <li>Our booklist isn't very pretty yet ...</li>
          <li>Choose one styling-method you've just learned about and style your BookList.</li>
        </ul>
      </Slide>
    </Chapter>
  );
};

export default ComponentsChapter;
