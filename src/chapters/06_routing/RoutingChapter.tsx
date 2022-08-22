/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const imports = `import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      {children}
    </Router>
  )
}
`;

const navBar = `<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/users">Users</Link>
  </li>
</ul>
`;

const routes = `<Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="users" element={<Users />} />
</Routes>`;

const useParams = `import {
  ...
  useParams
} from "react-router-dom";

function BlogPost() {

  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}
`;

const hash = `<HashRouter 
  basename={optionalString}>
  <App />
</HashRouter>;
`;

const paramClass = `class Routing {
  page: string

  // make this page observable (depends on your way to do it)

  setRoutingFromUrl(): void {
    const queryParams = new URLSearchParams(window.location.search);
    const page = queryParams.get('page');
  }

  setRouting(page: string): void {
    setPage(page);
    let params = new URLSearchParams(window.location.search);

    params.set('page', page);

    let url = window.location + params;

    window.location.replace(url);
  }

  private setPage(newPage: string): void {
    this.page = newPage;
  }
}
`;

const paramRoutes = `useEffect(() => {
  Routing.setRoutingFromUrl()
}, [])

return (
  {Routing.page === 'about' && <About /> }
  {Routing.page === 'users' && <Users /> }
  {Routing.page === '' && <Home /> }
)
`;

const browserGuards = `const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/landing',
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

// user logic

const App = () => (
  <Routes>
    <Route index element={<Home />} />

    <Route path="user" element={
      <ProtectedRoute 
        redirectPath="/" 
        isAllowed={!!user} />}>
      <Route path="home" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
);
`;

const RoutingChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter
      {...props}
      subtitle={
        <blockquote>
          &quot;Routing is the base for making a react application capable of showing multiple screens or components with a history and URL
          &quot;
        </blockquote>
      }
    >
      <Slide>
        <h2>What types do we have?</h2>
        <ul className='fragment'>
          <li>Browser Routing (Basic Routing)</li>
          <li>Hashrouting</li>
          <li>Parameter Routing (little bit extra 🧐)</li>
        </ul>
        <p className='fragment'>
          Consider using Browser Routing most of the time. Hashrouting only if Browser Routing is encoded (Mircofrontend). Use Parameter
          Routing only if EVERYTHING else fails 🥺
        </p>
      </Slide>
      <Slide>
        <h2>Browser Routing</h2>
        <p>Needed imports:</p>
        <Code>{imports}</Code>
      </Slide>
      <Slide>
        <p>Navigation Bar:</p>
        <Code>{navBar}</Code>
      </Slide>
      <Slide>
        <p>Defined Routes:</p>
        <Code>{routes}</Code>
      </Slide>
      <Slide>
        <h2>Retrieve Parameters</h2>
        <Code>{useParams}</Code>
      </Slide>

      <Slide>
        <h2>Hash Routing</h2>
        <p>basically the same as Browser Routing just another import and the URL will look like this:</p>
        <p>...yoururl.de/#/path</p>
        <Code>{hash}</Code>
      </Slide>
      <Slide>
        <p>Special cases:</p>
        <ul>
          <li className='fragment'>the / will sometimes be converted to a %2F</li>
          <li className='fragment'>some browser do not understand the hashrouting</li>
          <li className='fragment'>it is not a 'real' routing</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Parameter Routing</h2>
        <p className='fragment'>The most awkward one 😅</p>
        <p className='fragment'>
          Basically: Instead of <a>domain.com/test/1</a> we will have something like <a>domain.com/?page=test&id=1</a>
        </p>
      </Slide>
      <Slide>
        <p>We need to build our own routing. So forget about the react-dom-router 🥲</p>
        <p className='fragment'>
          We will need to use a state management. Wheter it is mobx, context or redux. We need to store our routing somewhere
        </p>
      </Slide>
      <Slide>
        <p className='fragment'>We will start by declaring a routing class</p>
        <Code className='fragment'>{paramClass}</Code>
      </Slide>

      <Slide>
        <p>Also we need to restructure our main to the following</p>
        <Code className='fragment'>{paramRoutes}</Code>
      </Slide>

      <Slide>
        <h2>Guards</h2>
        <p className='fragment'>One special, but important part.</p>
        <p className='fragment'>Guards are for securing routes.</p>
        <p className='fragment'>Whether you are allowed to ENTER or</p>
        <p className='fragment'>to LEAVE the page</p>
      </Slide>
      <Slide>
        <p>Browser Router</p>
        <Code className='fragment'>{browserGuards}</Code>
      </Slide>
      <Slide>
        <h2>Further Reads</h2>
        <ul>
          <li>
            <a href='https://reactrouter.com/docs/en/v6/getting-started/installation' target='_blank' rel='noreferrer'>
              React Router
            </a>
          </li>
          <li>
            <a href='https://reactrouter.com/docs/en/v6/hooks/use-params' target='_blank' rel='noreferrer'>
              Hooks
            </a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <ul>
          <li>
            Use{' '}
            <a href='https://reactrouter.com/docs/en/v6/getting-started/overview' target='_blank' rel='noreferrer'>
              React Router
            </a>{' '}
            to implement a routing to the detail page of a book (in App.tsx)
          </li>
          <li>Clicking on the title of a book in the list should forward the user to the detail page (/detail/[isbn])</li>
          <li>On the detail page, a request is triggered to get the book details (https://api.itbook.store/1.0/books/[isbn])</li>
          <li>The book details are displayed on this page</li>
        </ul>
      </Slide>
    </Chapter>
  );
};

export default RoutingChapter;
