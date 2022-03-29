/* eslint-disable react/no-unescaped-entities */
import React from 'react';
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

const RoutingChapter: React.FC = () => {
  return (
    <>
      <Slide>
        <Slide isMain>
          <h2>6. Routing</h2>
          <blockquote>
            &quot;Routing is the base for making a react application capable of showing multiple screens or components with a history and
            URL &quot;
          </blockquote>
        </Slide>
        <Slide>
          <h2>What types do we have?</h2>
          <ul className='fragment'>
            <li>Browser Routing (Basic Routing)</li>
            <li>Hashrouting</li>
            <li>Parameter Routing (little bit extra ;) )</li>
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
          <p className='fragment'>The most akward one :D</p>
        </Slide>

        <Slide>
          <h2>Guards</h2>
          <p className='fragment'>The most akward one :D</p>
        </Slide>
        <Slide>
          <h2>Normal Guards</h2>
          <p className='fragment'>The most akward one :D</p>
        </Slide>
        <Slide>
          <h2>Own Guard with mobX</h2>
          <p className='fragment'>The most akward one :D</p>
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
      </Slide>
    </>
  );
};

export default RoutingChapter;
