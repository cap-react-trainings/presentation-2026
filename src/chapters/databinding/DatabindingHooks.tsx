/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const useState = `  const Numbers: React.FC = () => {
    const [bookCounter, setBookCounter] = useState<number>(0);

    return (
      <p>{bookCounter}</p>
      <button onClick={() => setBookCounter(bookCounter + 1)}>
        increase bookCounter
      </button>
    )
  }
`;

const loadingState = `const [books, setBooks] = useState<Book>()

useEffect(() => {
  fetch(...)
    .then(data => setBooks(data))
}, [])  // empty array = runs at initial render

return (
  <BookList books={books} />
)
`;

const booksByAuthor = `const [currentBooks, setCurrentBooks] = useState<Book[]>()
const [selectedBook, setSelectedBook] = useState<Book>()
useEffect(() => {
  const booksByAuthor = props.books
    .filter(book => book.author === props.author)
  setCurrentBooks(booksByAuthor)
  setSelectedBook(booksByAuthor[0])
}, [props.author]) // hook runs when props.author changes

return(
  <div>
    <Select
      options={currentBooks}
      onChange={e => setSelectedBook(e.target.value)}/>
    <p>Books by {props.author.name}</p>
    <BookList books={currentBooks} />
  </div>
)
`;

const subscribeToBooks = `useEffect(() => {
  BooksApi.subscribeToUpdates(props.user.id);
  /**
   * return function only runs once before 
   * component's lifecycle is being destroyed
   */
  return () => {
    BooksApi.unsubscribeFromUpdates(props.user.id)
  }
}, [])
`;

const useBooks = `const useBooks = () => {
  const [books, setBooks] = useState<Book[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(...)
      .then(data => {
        setBooks(data)
        setLoading(false)
      })
  }, [])
  return {loading, books}
}
`;

const useBooksHook = `const { loading, books } = useBooks()`;

const fetchUsers = `const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
`;

const fetchUsersUseQuery = `import { useQuery } from "react-query";
// query key is used to identify the query
const response = useQuery("users", fetchUsers);
`;

const response = `data,
error,
failureCount,
isError,
isFetchedAfterMount,
isFetching,
isIdle,
isLoading,
isPreviousData,
isStale,
isSuccess,
refetch,
remove,
status,
`;

const useQueryBooks = `const {loading, data, error} = useQuery("books", fetchBooks);

return (
  {loading ? <p>Loading...</p>
  : error ? <p>Error: {error.message}</p>
  : <BookList books={data} />}
)
`;

const ObservableMobX = `export class Test {
  continue: boolean | undefined = undefined;

  constructor() {
    makeAutoObservable(this)
  }

  someFunction = () => {
    const disposer = observe(this, 'continue', change => {
      console.log(change.newValue)
    })
  }
}
`;

const DatabindingHooksChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter
      {...props}
      subtitle={
        <ul>
          <li>Hooks</li>
          <li>Databinding</li>
          <li>Databinding and Hooks: influence the component's rendering</li>
          <li>Custom Hooks</li>
          <li>useQuery-Hook</li>
        </ul>
      }
    >
      <Slide>
        <h2>Hooks</h2>
        <p>work with React state and lifecycle features from function components</p>
        <p>No more need for Class Components 😁</p>
        <p>most important React Hooks: useState, useEffect, (useContext, useReducer, useCallback, useMemo, ...)</p>
      </Slide>
      <Slide>
        <h2>useState-Hook</h2>
        <ul>
          <li className='fragment'>add state management to function components</li>
          <li className='fragment'>component rerenders when state in hook changes</li>
          <li className='fragment'>syntax: array destructuring</li>
          <ul>
            <li className='fragment'>first value is set to the state value</li>
            <li className='fragment'>second value is used to update the value</li>
          </ul>
        </ul>
      </Slide>
      <Slide>
        <h2>useState-Hook</h2>
        <Code>{useState}</Code>
        <pre className='fragment'>
          <a
            style={{ fontSize: '1.7rem', marginTop: 4 }}
            target='_blank'
            rel='noreferrer'
            href='https://github.com/cap-react-trainings/code-examples/blob/03-hooks-usestate/react-training-codeexamples/src/App.tsx'
          >
            🚀 code example on GitHub
          </a>
        </pre>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <ul>
          <li>Implement some buttons, that determine how many books should be rendered inside your book-list.</li>
          <li>As you might have already guessed: the useState-hook is your friend!</li>
        </ul>
      </Slide>
      <Slide>
        <h2>useEffect-Hook</h2>
        <ul>
          <li className='fragment'>perform side effects in components</li>
          <li className='fragment'>e.g. for data fetching</li>
          <li className='fragment'>cleanup when a component's lifecycle is over</li>
          <li className='fragment'>define when to run it with the dependency array</li>
        </ul>
      </Slide>
      <Slide>
        <h2>useEffect-Hook: Data Fetching</h2>
        <Code className='fragment'>{loadingState}</Code>
        <pre className='fragment'>
          <a
            style={{ fontSize: '1.7rem', marginTop: 4 }}
            target='_blank'
            rel='noreferrer'
            href='https://github.com/cap-react-trainings/code-examples/blob/03-hooks-useeffect/react-training-codeexamples/src/App.tsx'
          >
            🚀 code example on GitHub
          </a>
        </pre>
      </Slide>
      <Slide>
        <h2>useEffect-Hook: Dependency Array</h2>
        <Code className='fragment' highlightedLines='8'>
          {booksByAuthor}
        </Code>
      </Slide>
      <Slide>
        <h2>useEffect-Hook: Unmount of Component</h2>
        <Code className='fragment'>{subscribeToBooks}</Code>
      </Slide>
      <Slide>
        <h2>Rules of Hooks</h2>
        <ul>
          <li className='fragment'>
            only call Hooks at the top level of a component. React will run into problems when calling hooks after determining conditions
          </li>
          <li className='fragment'>Don't call Hooks from regular JS functions, the only other valid place are custom Hooks</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Custom Hooks</h2>
        <ul>
          <li className='fragment'>extract component logic into reusable functions</li>
        </ul>
        <Code className='fragment'>{useBooks}</Code>
        <Code className='fragment'>{useBooksHook}</Code>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <ul>
          <li>
            As of now: we'd like to get rid of our dummy book-data and use an{' '}
            <a href='https://api.itbook.store/1.0/new' target='_blank' rel='noreferrer'>
              API
            </a>{' '}
            instead.
          </li>
          <li>Fetch the books to display from the API.</li>
          <li>
            Update your conditional rendering in Book.tsx: Place a badge "cheap" when the book's price is less than 30$, else the badge
            should display "expensive".
          </li>
          <li>
            Since data fetching takes some time, also provide a loading spinner that tells the user you are fetching data while there are no
            books to display yet.
          </li>
          <li>
            Brownie points: In case you're finished early: learn about the{' '}
            <a href='https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useQuery'>
              useQuery-Hook
            </a>
            , do some refactoring and implement your datafetching by using useQuery.
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>Excursus: useQuery (React Query)</h2>
        <ul>
          <li className='fragment'>data-fetching library for React</li>
          <li className='fragment'>fetching, caching, synchronizing and updating server state in React applications</li>
          <li className='fragment'>useQuery-Hook: handle various states in the fetching process, e.g. loading, error, data, ...</li>
          <li className='fragment'>React Query provides further Hooks</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Excursus: useQuery (React Query)</h2>
        <Code className='fragment'>{fetchUsers}</Code>
        <Code className='fragment'>{fetchUsersUseQuery}</Code>
      </Slide>
      <Slide>
        <h2>Excursus: useQuery (React Query)</h2>
        <p>Response Object</p>
        <Code className='fragment'>{response}</Code>
      </Slide>
      <Slide>
        <h2>Excursus: useQuery (React Query)</h2>
        <p>save code, no need to handle states by yourself</p>
        <Code className='fragment'>{useQueryBooks}</Code>
        <pre className='fragment'>
          <a
            style={{ fontSize: '1.7rem', marginTop: 4 }}
            target='_blank'
            rel='noreferrer'
            href='https://github.com/cap-react-trainings/code-examples/blob/03-hooks-use-query-with-material/react-training-codeexamples/src/components/book-list/BookList.tsx'
          >
            🚀 code example on GitHub
          </a>
        </pre>
      </Slide>
      <Slide>
        <h2>💪 Homework</h2>
        <ul>
          <li>If not done yet: refactor your code and implement the data fetching part by using the useQuery-Hook.</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Angular Excursus: Observable vs State</h2>
        <p className='fragment'>When coming from Angular it is often asked what happened to the Observables</p>
        <p className='fragment'>
          You just simply don't need them :) The state listening in a useEffect for example is like a simple pipe in Angular
        </p>
        <p className='fragment'>However it is possible to have "real" subscribe with mobx for example.</p>
      </Slide>
      <Slide>
        <h2>mobx</h2>
        <Code>{ObservableMobX}</Code>
        <p className=''>If you really really need it...</p>
      </Slide>
    </Chapter>
  );
};

export default DatabindingHooksChapter;
