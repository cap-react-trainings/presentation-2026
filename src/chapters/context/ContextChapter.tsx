import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const tree = `// fetch user...
<Page user={props.user} />
// ... which renders ...
<PageLayout user={props.user} />
// ... which renders ...
<NavigationBar user={props.user} />
// ... which renders ...
<Link href={props.user.permalink}>
  <Avatar user={props.user} />
</Link>
`;

const contextWrap = `const UserContext = React.createContext<User>(null);

// fetch user...

<UserContext.Provider value={user}>
  <Page />
</UserContext.Provider>
`;

const treeAfter = `const user = useContext(UserContext);

<Link href={user.permalink}>
  <Avatar user={user} />
</Link>
`;

const updateFromChild = `export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
`;

const updateFromChild2 = `const {theme, toggleTheme} = useContext(UserContext)

return (
  <div
    style={{ background: theme.back }}
    onClick={() => toggleTheme()}>
    Click me
  </div>
)
`;

const ContextChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter
      {...props}
      subtitle={
        <blockquote>
          &quot;Context provides a way to pass data through the component tree without having to pass props down manually at every
          level.&quot;
        </blockquote>
      }
    >
      <Slide>
        <img style={{ width: 800 }} src='./slide-assets/context.png' />
      </Slide>
      <Slide>
        <h2>When to use?</h2>
        {/* <p>Wrapping with data instead of passing it down</p> */}
        <ul className='fragment'>
          <li>locale preferences</li>
          <li>UI theme</li>
          <li>user objects</li>
        </ul>
        <aside className='notes'>
          Really use with care! Just if many components need all of the data. Resuability gets more difficult.
        </aside>
      </Slide>
      <Slide>
        <h2>🕵️ Be careful!</h2>
        <p className='fragment'>Is it easier to pass down components as props?</p>
        <p className='fragment'>Be aware of restricted reusability!</p>
        <p className='fragment'>Only use if many components need the data.</p>
        <aside className='notes'>
          Really use with care! Just if many components need all of the data. Resuability gets more difficult.
        </aside>
      </Slide>
      <Slide>
        <h2>From</h2>
        <Code>{tree}</Code>
      </Slide>
      <Slide>
        <h2>To</h2>
        <Code highlightedLines='1|1-7'>{contextWrap}</Code>
      </Slide>
      <Slide>
        <h2>To</h2>
        <Code highlightedLines='1|1-7'>{treeAfter}</Code>
      </Slide>
      <Slide>
        <h2>Update from child</h2>
        <Code>{updateFromChild}</Code>
        <Code>{updateFromChild2}</Code>
      </Slide>
      <Slide>
        <h2>Further Reads</h2>
        <ul>
          <li>
            <a href='https://reactjs.org/docs/context.html' target='_blank' rel='noreferrer'>
              React Docs
            </a>
          </li>
          <li>Advanced State Management:</li>
          <ul>
            <li>
              <a href='https://kentcdodds.com/blog/application-state-management-with-react' target='_blank' rel='noreferrer'>
                🚀 Application State Management with React
              </a>
            </li>
            <li>
              <a href='https://kentcdodds.com/blog/how-to-use-react-context-effectively' target='_blank' rel='noreferrer'>
                🚀 How to use React Context effectively
              </a>
            </li>
          </ul>
        </ul>
        <aside className='notes'>Recommend Kent C. Dotts blog posts. You won&apos;t need redux anymore!</aside>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <ul>
          <li>Extract the book list into a separate component</li>
          <li>
            Use{' '}
            <a href='https://reactjs.org/docs/context.html' target='_blank' rel='noreferrer'>
              React Context
            </a>{' '}
            to create a context wrapper for light/dark mode switch
          </li>
          <li>Apply it to the outmost component (App.tsx)</li>
          <li>Toggle stylings in book list (font color) according to dark mode context</li>
          <li>Add button to App.tsx that toggles the color mode</li>
          <li>Allow child components to toggle the color mode (and demonstrate it with a new component)</li>
        </ul>
      </Slide>
    </Chapter>
  );
};

export default ContextChapter;
