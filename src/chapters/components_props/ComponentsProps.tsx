import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Slide from '../../components/reveal/Slide';

const fnExample = `const Welcome: React.FC = (props: Pros) {
  return <h1>Hello, {props.name}</h1>;
}`;

const classExample = `class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`;

const bookList = `
  const BookList: React.FC = () => {
    const books: Book[] = [
      {id: 1, name: 'Moby Dick', author: 'Herman Melville'},
      {id: 2, name: 'Hamlet', author: 'Shakespeare'},]
    return (
      <>
       {books.map(book => (
         // always define keys when looping, unique identifier for React DOM
         <Book key={book.id} book={book} /> 
       ))}
      </>
    )
  }
  export default BookList;
`;

const book = `
  const interface Book {
    id: number;
    name: string;
    author; string;
  }

  const Book: React.FC = (props: Book) => {
    return (
      <>
        <h1>{props.name}</h1>
        <p>author: {props.author}</p>
      </>
    )
  }
`;

const bookDestructured = `
  const interface Book {
    id: number;
    name: string;
    author: string;
  }

  const Book: React.FC = ({ name, author }: Book) => {
    return (
      <>
        <h1>{name}</h1>
        <p>author: {author}</p>
      </>
    )
  }

  export default Book;
`;

const defaultProps = `
const Book: FC = ({name="Tom", author="Rowling"}: Book) => {
    return (
      <>
        <h1>{name}</h1>
        <p>author: {author}</p>
      </>
    )}`;

const classStyled = `
  const Book: React.FC = ({ name, author }: Book) => {
    return (
      <>
        <h1 className='myHeadline'>{name}</h1>
        <p>author: {author}</p>
      </>
    )
  }
`;

const stylesAttribute = `
  const Book: React.FC = ({ name, author }: Book) => {
    return (
      <>
        <h1 className='myHeadline'>{name}</h1>
          // notice the double curly braces
        <p style={{ colour: 'green'}}>author: {author}</p>
      </>
    )
  }
`;

const npmI = `npm install --save styled-components`;

const styledComponent = `
  import styled from 'styled-components';
  const StyledAuthor = styled.p'
  colour: 'green''
  const Book: React.FC = ({ name, author }: Book) => {
    return (<>
        <h1 className='myHeadline'>{name}</h1>
          // notice the double curly braces
        <StyledAuthor>author: {author}</StyledAuthor>
      </>)}
  `;

const ComponentsChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter {...props} subtitle={<p>JavaScript functions, accept Props and return React Elements (JSX)</p>}>
      <Slide>
        <h2>Class Components vs. Functional Components</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {fnExample}
          </code>
        </pre>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {classExample}
          </code>
        </pre>
        <p className='fragment'>same output</p>
      </Slide>
      <Slide>
        <h2>Class Components vs. Functional Components</h2>
        <p className='fragment'>Whats the differnce? When should I use which one?</p>
        <ul className='fragment'>
          <li>hisotrical reasons: no state-management / lifecycle hooks before 2019 in functional components</li>
          <li>nowadays: hardly any usage of class components</li>
          <li>functional components are easier to read and test, less code, better preformance</li>
        </ul>
        <a href='https://www.twilio.com/blog/react-choose-functional-components' target='_blank' className='fragment' rel='noreferrer'>
          Read this blog article in case of further interest
        </a>
      </Slide>
      <Slide>
        <h2>Properties: Pass information down the component tree</h2>
        <p className='fragment'>Book-List which renders various Books from a Book component</p>
        <p className='fragment'>The Book component doesn't 'know' what to render so we need to pass the information</p>
      </Slide>
      <Slide>
        <h2>Properties: Pass information down the component tree</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {bookList}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Properties: not desctructured</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {book}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Properties: desctructured</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {bookDestructured}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Properties: desctructured vs not destructured</h2>
        <ul>
          <li className='fragment'>
            Pro: easier to apply default values
            <pre>
              <code data-trim data-noescape data-line-numbers='1'>
                {defaultProps}
              </code>
            </pre>
          </li>
          <li className='fragment'>
            Con: in case of large components you might get confused which variables are defined in the component scope and which ones are
            passed as props
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
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {classStyled}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Inline Styling</h2>
        <p className='fragment'>inline styling is also possible via the well known 'style'-attribute</p>
        <p className='fragment'>notice the double curly braces, usual CSS-syntax inside</p>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {stylesAttribute}
          </code>
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
              most popular: <a href='https://styled-components.com/'>Styled Components</a> (36K+ stars on GitHub)
            </li>
            <li>
              also used by <a href='https://mui.com/system/styled/'>MUI</a>
            </li>
            <li>
              hint: when working with MUI you should checkout the latest version of styling, `the system`, which implements{' '}
              <a href='https://tailwindcss.com/'>tailwind</a> and makes your styling life a lot easier and esp. faster
            </li>
          </ul>
        </ul>
      </Slide>
      <Slide>
        <h2>CSS in JS - styled components</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {npmI}
          </code>
        </pre>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers='2, 3, 8'>
            {styledComponent}
          </code>
        </pre>
      </Slide>
    </Chapter>
  );
};

export default ComponentsChapter;
