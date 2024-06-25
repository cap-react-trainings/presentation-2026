/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const createBrowserRouter = `import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Team from "./routes/team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);`;

const browserRouterInsideMain = `import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>
);`;

const browserRouterInsideApp = `function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}`;

const dataFetchingWithRouter = `<Route
  path="/"
  loader={async ({ request }) => {
    // loaders can be async functions
    const userRes = await fetch("/api/user.json");
    return await userRes.json();
  }}
  element={<Root />}

    <Route
    path=":teamId"
    // loaders understand Fetch Responses and will automatically
    // unwrap the res.json(), so you can simply return a fetch
    loader={({ params }) => {
      return fetch("/api/teams/params.teamId");
    }}
    element={<Team />}
    ></Route>
  </Route>
>`;

const basicRoute = `<Route
  element={<Team />}
  path="teams/:teamId"/>`;

const optionalRouteSegment = `<Route
  path="/:lang?/categories"
  element={<Categories />}
/>;`;

const linkComponent = `<Link to="/homepage">Go to Homepage</Link>`;

const navLinkComponent = `import { NavLink } from "react-router-dom";
<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>Messages</NavLink>;`;

const outlet = `function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}`;

const navigate = `function SomeComponent(props) {
  render() {
    let { user, error } = props;
    return (
      <div>
        {error && <p>{error.message}</p>}
        {user && (
          <Navigate to="/dashboard" replace={true} />
        )}
      </div>
    );
  }}`;

const useParams = `import {
  ...
  useParams
} from "react-router-dom";

function BlogPost() {

  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}
`;

const protecedRoute = `import { Outlet, Navigate } from 'react-router-dom'

const ProtecedRoute = () => {
    let auth = {'token': false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtecedRoute`;

const usageProtecedRoute = `import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import PrivateRoutes from './utils/PrivateRoutes'

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route element={<ProtecedRoute />}>
                <Route element={<Home/>} path="/" exact/>
                <Route element={<Products/>} path="/products"/>
            </Route>
            <Route element={<Login/>} path="/login"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;`;

const RoutingChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter
      {...props}
      subtitle={
        <blockquote>
          &quot;Routing is the base for making a react application capable of showing multiple screens or components with a history and
          URL&quot;
        </blockquote>
      }
    >
      <Slide>
        <h2>Client Side Routing</h2>
        <ul>
          <li>
            <b>traditional:</b>
            <br /> browser requests document from webserver, downloads & evalutes CSS & JS, renders HTML sent from server. When the user
            clicks a link, the process starts all over again
          </li>
          <li>
            <b>client-side:</b>
            <br /> update URL from a click withouth making another document request to the server. App renders new UI and is able to make
            data requests
          </li>
          <li>faster user experience 🤓</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Most important routing-types</h2>
        <ul className='fragment'>
          <li>Browser Routing 🌟</li>
          <li>Hash Routing</li>
          <ul>
            <li>only in case we're not able to configure our server to direct all traffic to our React Router</li>
            <li>hash portion to manage application URL</li>
            <li>example: Mircofrontend</li>
          </ul>
          <li>Memory Routing</li>
          <ul>
            <li>manages history in its own stack --&gt; does not rely on browser history</li>
            <li>useful for testing, i.e. with Jest or Storybook</li>
            <li>applicable in non-browser environments</li>
          </ul>
        </ul>
      </Slide>
      <Slide>
        <h2>Browser Routing</h2>
        <p>createBrowserRouter vs. BrowserRouter</p>
        <ul>
          <li>
            createBrowserRouter works with a Router-Provider and is located in your main.tsx file
            <Code>{createBrowserRouter}</Code>
          </li>
        </ul>
        <aside className='notes'>
          <ul>
            <li>you can use both without noticing any differences when only using the basic functionality: Routing </li>
            <li>However createBrowserRouter is more powerful: it let's you perform data fetching, data mutations and handle errors</li>
            <li>
              We will stick to basic functionality within our training. Since there are multiple ways for handling data fetching. We don't
              want to narrow down to BrowserRouter's approach
            </li>
            <li>In case of interest, regard this as a further read</li>
          </ul>
          <a href='https://remix.run/_docs/routing'>This is a nice presenttation showoing how children work within routes</a>
        </aside>
      </Slide>
      <Slide>
        <h2>Browser Routing</h2>
        <p>createBrowserRouter vs. BrowserRouter</p>
        <ul>BrowserRouter is a component based approach and can either be attached to your main.tsx file or live inside App.tsx</ul>
        <Code>{browserRouterInsideMain}</Code>
      </Slide>
      <Slide>
        <h2>Browser Routing</h2>
        <p>createBrowserRouter vs. BrowserRouter</p>
        <ul>BrowserRouter is a component based approach and can either be attached to your main.tsx file or live inside App.tsx</ul>
        <Code>{browserRouterInsideApp}</Code>
        <aside className='notes'>
          Something worth noting: by adding a base path to your router, which is also possible for the create-approach, we're able to
          configure some path-segment that will always prefix any route
        </aside>
      </Slide>
      <Slide>
        <h2>Browser Routing</h2>
        <p>createBrowserRouter vs. BrowserRouter</p>
        <ul>
          <li>
            ability to handle data fetching, mutations and errors is the main difference between BrowserRouter and createBrowserRouter
          </li>
        </ul>
        <Code>{dataFetchingWithRouter}</Code>
        <aside className='notes'>
          you can do basic functionality in both approaches, so it's up to you which one to use. createBrowsersRouter just offers more, in
          case you might need it. Don't know how common this acutally is, never used it myself
        </aside>
      </Slide>
      <Slide>
        <h2>Important Router Components</h2>
        <p>Route</p>
        <ul>
          <li>couple URL segments to components</li>
          <li>path pattern to match agains URL in browser</li>
          <li>element: what to render</li>
          <li>
            <code>teams/:teams</code> indicates this segment is dynamic, will mat i.e. <code>teams/123, teams/abc</code>, ...
          </li>
        </ul>
        <Code>{basicRoute}</Code>
      </Slide>
      <Slide>
        <h2>Important Router Components</h2>
        <p>Route - optional segments</p>
        <ul>
          <li>adding `?` makes route segment optional</li>
          <li>
            typical usecase: provide pages in different languages like <code>/en/categories, /fr/categories,</code> ...
          </li>
          <li>this Route would also match /categories</li>
        </ul>
        <Code>{optionalRouteSegment}</Code>
      </Slide>
      <Slide>
        <h2>Important Router Components</h2>
        <p>Link</p>
        <ul>
          <li>element that lets user navigate to another page within our App</li>
          <li>renders an accessible anchor tag with real href</li>
          <li>
            why use Link instead of a-tag? <br />
            It does not reload the document and thus behaves smoother
          </li>
          <li>In case you want this behaviour, add reloadDocument to your link component</li>
        </ul>
        <Code>{linkComponent}</Code>
      </Slide>
      <Slide>
        <h2>Important Router Components</h2>
        <p>NavLink</p>
        <ul>
          <li>special kind of Link that knows whether or not is is "active", "pending" or "transitioning"</li>
          <li>breadcrumb: indicate which one is currently selected</li>
          <li>provides useful context for assistive technology like screen readers</li>
        </ul>
        <Code>{navLinkComponent}</Code>
      </Slide>
      <Slide>
        <h2>Important Router Components</h2>
        <p>Outlet</p>
        <ul>
          <li>when working with nested routes, this should be used in parent route elements to render their children routes</li>
          <li>allows nested UI to shop up when child routes are rendered / match</li>
          <li>in case parent route is matched exactly, it will render a child index route or nothing if there is no index route</li>
        </ul>
        <a href='https://remix.run/_docs/routing' target='_blank' rel='noopener'>
          Visualization
        </a>
      </Slide>
      <Slide>
        <h2>Important Router Components</h2>
        <p>Outlet</p>
        <Code>{outlet}</Code>
      </Slide>
      <Slide>
        <h2>Important Router Components</h2>
        <p>Navigate</p>
        <ul>
          <li>Navigate element changes current location when being rendered</li>
          <li>in comparison to Link, it lets you determine locations programmatically</li>
        </ul>
        <Code>{navigate}</Code>
      </Slide>
      <Slide>
        <h2>Protected Routes</h2>
        <ul>
          <li>needed for parts of your application, that should be protected, i.e. profile information</li>
          <li>approach: create a custom ProtectedRoute-component and use it in your Routes definition</li>
          <li>ProtectedRoute-component decides, whether the users is allowed to enter the page or will be redirected.</li>
        </ul>
        <Code>{protecedRoute}</Code>
      </Slide>
      <Slide>
        <h2>Proteced Routes</h2>
        <Code>{usageProtecedRoute}</Code>
        <aside className='notes'>ask participants which parts of the presented code is proteced and which is not</aside>
      </Slide>
      <Slide>
        <h2>Retrieve Parameters with useParams-Hook</h2>
        <Code>{useParams}</Code>
      </Slide>
      <Slide>
        <h2>Documentation</h2>
        <p>We recommend to focus on the above introduced parts of BrowserRouter as a starter, since things can get really complex! 🫠</p>
        <a href='https://reactrouter.com/en/main/start/overview' target='_blank' rel='noopener'>
          Getting Started with ReactRouter
        </a>
      </Slide>
      <Slide>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <h2>💪 Exercise</h2>
          <small>⏱️ 45min</small>
        </div>
        <ul>
          <li>
            <code>git checkout 04-context-wrapper</code>
          </li>
          <li>
            Use{' '}
            <a href='https://reactrouter.com/en/main/start/tutorial' target='_blank' rel='noopener'>
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
