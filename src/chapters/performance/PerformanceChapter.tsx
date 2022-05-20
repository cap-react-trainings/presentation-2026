import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Slide from '../../components/reveal/Slide';

const functionExample = `<AddButton onClick={() => setIsAddOpen(true)} />`;
const useCallback = `const moizedOpen = useCallback(() => {
    setIsAddOpen(true);
}, []);`;
const reactMemo = `export const AddButton = React.memo(
  function AddButton({ onClick }) {
    return (
        <button onClick={onClick}>Add</button>
    )
})`;

const reactMemoCompare = `export const AddButton = React.memo(
  function AddButton({ onClick, books[] }) {
    return (
        <button onClick={onClick}>Add {books.length} books</button>
    )
}, (p1, p2) => p1.books.length === p2.books.length);`;

const useMemo = `
const [books, setBooks] = useState(props.books);
const moizedBook = useMemo(() => {
  return books.find(book => book.author === props.author);
}, [books, props.author]);
`;

const lazyLoad = `
  const AddModal = lazy(() => import('./AddModal))

  return(
    <>
    /* render other components */
    <Suspense fallback={<div>Loading...</div>}>
      <AddModal />
    </Suspense>
    <>
  )
`;

const PerformanceChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter {...props}>
      <Slide>
        <h2>Ways to improve the performance of your app:</h2>
        <ul>
          <li>avoiding wasted re-renders</li>
          <li>caching expensive operations</li>
          <li>lazy loading components</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Wasted Re-renders</h2>
        <div style={{ position: 'relative', width: 'auto', height: '34rem', margin: '0 auto' }}>
          <img className='fragment fade-out' data-fragment-index='0' width='auto' height='100%' src='slide-assets/virtual-actual-dom.png' />
          <img
            className='fragment fade-in'
            data-fragment-index='0'
            width='auto'
            height='100%'
            src='slide-assets/wasted-re-renders.png'
            style={{ position: 'absolute', top: 0, left: '25%' }}
          />
        </div>

        <aside className='notes'>
          <p>React has a cheap represenation of the DOM: Virtual DOM</p>
          <p>react sends mutations with nodes to the DOM</p>
          <p>'knows' when to send mutations to DOM: only if content actually changes</p>
          <p>
            when having wasted rerenders the virtualy DOM updates and rerenders without sending mutations to the actual DOM since there was
            no change of content
          </p>
        </aside>
      </Slide>
      <Slide>
        <h2>React DEV Tools</h2>
        <ul>
          <li>
            <a href='https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'>
              install Chrome Extension
            </a>
          </li>
          <li>inspect your app with the profiler</li>
        </ul>
        <img className='fragment fade-in' src='slide-assets/pilot-devtools.png' />

        <aside className='notes'>
          <p>inspect the app together "live session"</p>
          <p>record navigation through the app</p>
          <p>profiler shows rerenders</p>
          <p>
            #TODO: decision yet to make: inspect our own app or example from{' '}
            <a href='https://github.com/hendrikswan/pluralsight-react-performance'>GitHub</a>
          </p>
          <p>image shows profiler. you can navigate through the rerender cycles and see components that are being rerendered</p>
        </aside>
      </Slide>
      <Slide>
        <h2>Typical pitfalls when detecting wasted rerenders</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {functionExample}
          </code>
        </pre>
        <ul className='fragment'>
          <li className='fragment'>new on click function is rendered eacht time parent rerenders</li>
          <li className='fragment'>
            solution: <a href='https://reactjs.org/docs/hooks-reference.html#usecallback'>useCallback-hook</a>
          </li>
          <li className='fragment'>returns memoized version of the callback, only changes if a dependency changes</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Typical pitfalls when detecting wasted rerenders</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {useCallback}
          </code>
        </pre>
        <aside className='notes'>
          <p>you can also pass dependecies in the array, might be useful on more complex operations</p>
          <p>only using useCallback won't fix the whole problem, it's only one part of the solution</p>
          <p>we need to tell the ChildComponent to only rerender when Props Change</p>
          <p>children need to be optimzed as well: rely on reference equality</p>
        </aside>
      </Slide>
      <Slide>
        <h2 style={{ fontSize: '2.5rem' }}>Typical pitfalls when detecting wasted rerenders</h2>
        <ul style={{ fontSize: '2rem' }}>
          <li className='fragment'>children need to be optimized as well</li>
          <li className='fragment'>
            only rerender, when Props or references change by using{' '}
            <a href='https://reactjs.org/docs/react-api.html#reactmemo'>React.memo</a>
          </li>
          <li className='fragment'>
            In case React.memo as has useState, useReducer or useContext Hook in its implementation, it will still rerender on according
            changes
          </li>
        </ul>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {reactMemo}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2 style={{ fontSize: '2.5rem' }}>Typical pitfalls when detecting wasted rerenders</h2>
        <ul style={{ fontSize: '2rem' }}>
          <li className='fragment'>by default only shallow comparison of props object</li>
          <li className='fragment'>React.memo takes a second argument where you could provide a comparison function</li>
        </ul>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {reactMemoCompare}
          </code>
        </pre>
        <aside className='notes'>
          <p>comparions function always needs to return a boolean, telling the component to rerender or not</p>
          <p>p1, p2 stands for props before, props after</p>
          <p>
            additional pitfall: parent component passing the props needs to make sure the reference doesn't change too early. e.G. for state
            updates: copy your state by using the spread operator and then set your State again.
          </p>
          <p>
            you gain a perfomance boost but still should use it wise, benefits are dependent the components actualy cost of computation so
            it's rather for medium size to big components
          </p>
        </aside>
      </Slide>
      <Slide>
        <h2 style={{ fontSize: '2.5rem' }}>Typical pitfalls when detecting wasted rerenders</h2>
        <div className='fragment fade-in'>
          <img style={{ width: '30%' }} src='slide-assets/react-memo.png' />
        </div>

        <a className='fragment' href='https://dmitripavlutin.com/use-react-memo-wisely/'>
          🚀 use React.memo() wisely
        </a>
      </Slide>
      <Slide>
        <h2>Caching expensive operations</h2>
        <ul>
          <li className='fragment'>
            <a href='https://reactjs.org/docs/hooks-reference.html#usememo'>useMemo</a> is your friend: it returns a memoized value that is
            only re-calculated when your dependencies change
          </li>
        </ul>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {useMemo}
          </code>
        </pre>
        <ul className='fragment'>
          <li>caution: be aware of the dependecies - always double check</li>
        </ul>
        <aside className='notes'>
          <p>
            you might find yourself wondering why component doesn't rerender when you expect it to: typical cause is a missing dependy in
            the useMemo hook
          </p>
        </aside>
      </Slide>
      <Slide>
        <h2 style={{ fontSize: '2.5rem' }}>Lazy loading expensive components</h2>
        <ul style={{ fontSize: '2rem' }}>
          <li className='fragment'>import lazy and Supense from React</li>
          <li className='fragment'>
            downloads the component's bundle on demand, renders rest of component and displays Suspense's fallback as long as the lazy
            loaded component isn't available
          </li>
          <li className='fragment'>only makes sense for big component, e.g. when rendering lots of data there</li>
        </ul>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {lazyLoad}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Measure page performance</h2>
        <ul>
          <li className='fragment'>
            <a href='https://pagespeed.web.dev/'>web vital</a> or Chrome DevTools 'Lighthouse'
          </li>
          <li className='fragment'>will analyze your performance on mobile and desktop</li>
          <li className='fragment'>reveals painpoints you can work on</li>
        </ul>
        <aside className='notes'>do a short live session, show some insights</aside>
      </Slide>
    </Chapter>
  );
};

export default PerformanceChapter;
