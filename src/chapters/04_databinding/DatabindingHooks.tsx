import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Slide from '../../components/reveal/Slide';

const useState = `
  const Numbers: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        increase counter
      </button>
    )
  }
`;

const loadingState = `
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState<Book>() // undefined in loading state
  useEffect(() => {
    fetch('https://api.example.com/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data)
        setLoading(false)
      })
  }, [])  // empty array means that effect will run only once

  return (
    {loading ? <p>Loading...</p>
    : <BookList books={books} />}
  )
  `;

const booksByAuthor = `
  const [author, setAuthor] = useState<Author>()
  const [books, setBooks] = useState<Book[]>()
  const authorOptions: Author[] = [{id: 1, name: "Shakespeare"}, {id: 2, name: "Melville"}]
  useEffect(() => {
    fetch('https://api.example.com/books?author={author.id}')
      .then(response => response.json())
      .then(data => {
        setBooks(data)
        setLoading(false)
      })
  }, [author])  // hook runs whenever the author changes

  return(
    <>
      <Select options={authorOptions} onChange={e => setAuthor(e.target.value)}/>
      <p>Books by {author.name}</p>
      <BookList books={books} />
    </>
  )
  `;

const subscribeToBooks = `
    useEffect(() => {
      BooksApi.subscribeToUpdates(props.user.id);
      /**
       * return function only runs once before 
       * component's lifecycle is being destryed
       */
      return () => {
        BooksApi.unsubscribeFromUpdates(props.user.id)
      }
    }, [])
`;

const useBooks = `
  const useBooks = () => {
    const [books, setBooks] = useState<Book[]>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch('https://api.example.com/books')
        .then(response => response.json())
        .then(data => {
          setBooks(data)
          setLoading(false)
        })
    }, [])
    return {loading, books}
  }
  `;

const fetchUsers = `
  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  };
`;

const fetchUsersUseQuery = `
  import { useQuery } from "react-query";
  // query key is used to identify the query
  const response = useQuery("users", fetchUsers);
`;

const response = `
data,
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

const useQueryBooks = `
  const {loading, data, error} = useQuery("books", fetchBooks);

  return (
    {loading ? <p>Loading...</p>
    : error ? <p>Error: {error.message}</p>
    : <BookList books={data} />}
  )
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
          <li className='fragment'>add React state to function components</li>
          <li className='fragment'>component rerenders when state in hook changes</li>
          <li className='fragment'>syntax: array destructuring</li>
          <ul>
            <li className='fragment'>first value is set to the first value of useState</li>
            <li className='fragment'>second value is used to update the first</li>
          </ul>
        </ul>
      </Slide>
      <Slide>
        <h2>useState-Hook</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {useState}
          </code>
        </pre>
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
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {loadingState}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>useEffect-Hook: Dependency Array</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {booksByAuthor}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>useEffect-Hook: Unmount of Component</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {subscribeToBooks}
          </code>
        </pre>
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
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {useBooks}
          </code>
        </pre>
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
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {fetchUsers}
          </code>
        </pre>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {fetchUsersUseQuery}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Excursus: useQuery (React Query)</h2>
        <p>Response Object</p>
        <pre className='fragment'>
          <code data-trim data-noescape>
            {response}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Excursus: useQuery (React Query)</h2>
        <p>save code, no need to handle states by yourself</p>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {useQueryBooks}
          </code>
        </pre>
      </Slide>
    </Chapter>
  );
};

export default DatabindingHooksChapter;
