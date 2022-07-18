/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
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

const routes = `<Switch>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/users">
    <Users />
  </Route>
  <Route path="/">
    <Home />
  </Route>
</Switch>
`;

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
  basename={optionalString} 
  getUserConfirmation={optionalFunc} 
  hashType={optionalString}>
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

const paramRoutes = `
useEffect(() => {
  Routing.setRoutingFromUrl()
}, [])

return (
  {Routing.page === 'about' && <About /> }
  {Routing.page === 'users' && <Users /> }
  {Routing.page === '' && <Home /> }
)
`;

const browserGuards = `import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { getIsLoggedIn } from 'utils';

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (getIsLoggedIn()) {
      next();
    }
    next.redirect('/login');
  } else {
    next();
  }
};

const App = () => (
  <BrowserRouter>
    <GuardProvider guards={[requireLogin]} loading={Loading} error={NotFound}>
      <Switch>
        <GuardedRoute path="/login" exact component={Login} />
        <GuardedRoute path="/" exact component={Home} meta={{ auth: true }} />
      </Switch>
    </GuardProvider>
  </BrowserRouter>
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
        <p className='fragment' style={{ fontSize: '28px', fontStyle: 'italic' }}>
          Consider using Browser Routing most of the time. Hashrouting only if Browser Routing is encoded (Mircofrontend). Use Parameter
          Routing only if EVERYTHING else fails :D
        </p>
      </Slide>
      <Slide>
        <h2>Browser Routing</h2>
        <p>Needed imports:</p>
        <pre className=''>
          <code data-trim data-noescape data-line-numbers>
            {imports}
          </code>
        </pre>
      </Slide>
      <Slide>
        <p>Navigation Bar:</p>
        <pre className=''>
          <code data-trim data-noescape data-line-numbers>
            {navBar}
          </code>
        </pre>
      </Slide>
      <Slide>
        <p>Defined Routes:</p>
        <pre className=''>
          <code data-trim data-noescape data-line-numbers>
            {routes}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Retrieve Parameters</h2>
        <pre className=''>
          <code data-trim data-noescape data-line-numbers>
            {useParams}
          </code>
        </pre>
      </Slide>

      <Slide>
        <h2>Hash Routing</h2>
        <p>basically the same as Browser Routing just another import and the URL will look like this:</p>
        <p>...yoururl.de/#/path</p>
        <pre className=''>
          <code data-trim data-noescape data-line-numbers>
            {hash}
          </code>
        </pre>
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
        <p>make use of the hashTypes:</p>
        <ul>
          <li className='fragment'>"slash" - Creates hashes like #/ and #/sunshine/lollipops</li>
          <li className='fragment'>"noslash" - Creates hashes like # and #sunshine/lollipops </li>
          <li className='fragment'>
            "hashbang" - Creates “ajax crawlable” (deprecated by Google) hashes like #!/ and #!/sunshine/lollipops
          </li>
        </ul>
      </Slide>

      <Slide>
        <h2>Parameter Routing</h2>
        <p className='fragment'>The most awkward one 😅</p>
        <p className='fragment'>
          Basically: Instead of <i>domain.com/test/1</i> or <i>domain.com/#/test/1</i> we will have something like
          <i>domain.com/?pages=test&pages=1</i> or <i>domain.com/?page=test&id=1</i>
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
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {paramClass}
          </code>
        </pre>
      </Slide>

      <Slide>
        <p>Also we need to restructure our main to the following</p>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {paramRoutes}
          </code>
        </pre>
      </Slide>

      <Slide>
        <h2>Guards</h2>
        <p className='fragment'>One special, but important part.</p>
        <p className='fragment'>Guards are for securing routes.</p>
        <p className='fragment'>Whether you are allowed to ENTER or</p>
        <p className='fragment'>to LEAVE the page</p>
        <p className='fragment'>
          react-dom-router has a community package for that. Our own Parameter Routing needs to do it by itself 😄{' '}
        </p>
      </Slide>
      <Slide>
        <p>Browser Router</p>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {browserGuards}
          </code>
        </pre>
      </Slide>
      <Slide>
        <p>Parameter Router</p>
        <p>We need the interceptor, the continue and the routing triggered</p>
        {/* TODO */}
      </Slide>

      <Slide>
        <h2>Further Reads</h2>
        <ul>
          <li>
            <a href='https://v5.reactrouter.com/web/guides/quick-start'>React Router</a>
          </li>
          <li>
            <a href='https://v5.reactrouter.com/web/api/Hooks'>Hooks</a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
      </Slide>
    </Chapter>
  );
};

export default RoutingChapter;
