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
    Component: Root,
    children: [
      {
        path: "team",
        Component: Team,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);`;

const indexRouting = `createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: Register },
        ],
      },
    ],
  },
]);`;

const paramsRouting = `createBrowserRouter([
  {
    path: "/teams/:teamId",
    Component: Team,
  },
]);`;

const optionalPathSegment = `createBrowserRouter([
  {
    path: "/:lang?/categories",
    Component: Categories,
  },
]);`;

const linkComponent = `<Link to="/homepage">Go to Homepage</Link>`;

const navLinkComponent = `import { NavLink } from "react-router-dom";

<NavLink
  to="/messages"
  // alternative: className={(props: NavLinkProps) => ...props.isActive
  className={({ isActive, isPending }: NavLinkProps) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>Messages</NavLink>`;

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
};

//
createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      { path: "messages", Component: DashboardMessages },
      { path: "tasks", Component: DashboardTasks },
    ],
  },
]);
`;

const browserRouterExample = `function App() {
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
};`;

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
  }};`;

const useParams = `import {
  ...
  useParams
} from "react-router-dom";

function Team() {

  const { teamId } = useParams();
  // Alternative
  const params = useParams()
  return <div>Now showing post {teamId} {params.teamId}</div>;
};
`;

const provideData = `createBrowserRouter([
  {
    path: "/",
    loader: () => {
      // return data from here
      return { records: await getSomeRecords() };
    },
    Component: MyRoute,
  },
]);`;

const accessData = `import { useLoaderData } from "react-router";

function MyRoute() {
  const { records } = useLoaderData<typeof loader>();
  return <div>{records.length}</div>;
}`;

const useNavigateExample = `import { useNavigate } from "react-router";

function SomeComponent() {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/my-path");
      }}
    />
  );
}`;

const protecedRoute = `import { Outlet, Navigate } from 'react-router-dom';

const ProtecedRoute = () => {
    const auth = {'token': false};
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    );
};

export default ProtecedRoute;`;

const usageProtecedRoute = `import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import ProtecedRoute from './utils/ProtecedRoute';

createBrowserRouter([
  {
    path: "/",
    Component: ProtectedRoute,
    children: [
      {index: true, Component: Home}
      {path: "/products", Component: Products}
    ]
  },
  {
    path: "/login",
    Comoinent: Login
  }
])

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
};

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
          <ul>
            <li>uses real URL structure and history api (push & pop state)</li>
            <li>perfect match for SPA</li>
          </ul>
          <li>Hash Routing:</li>
          <ul>
            <li>only in case we're not able to configure our server to direct all traffic to our React Router</li>
            <li>hash portion to manage application URL, i.e. example.com/#/about</li>
            <li>example: Mircofrontend</li>
          </ul>
          <li>Memory Routing:</li>
          <ul>
            <li>manages history in its own stack --&gt; does not rely on browser history</li>
            <li>useful for testing, i.e. with Jest, Viterst or Storybook</li>
            <li>applicable in non-browser environments</li>
          </ul>
        </ul>
      </Slide>
      <Slide>
        <h2>Browser Routing</h2>
        <ul>
          <li>Routes are configured as the first argument to createBroswerRouter. At a minimum, you need a path and a component.</li>
          <li>Nesting routes works through children</li>
          <li>createBrowserRouter works with a Router-Provider and is located in your main.tsx file</li>
        </ul>
      </Slide>
      <Slide>
        <Code>{createBrowserRouter}</Code>
      </Slide>

      <Slide>
        <h2>Browser Routing - Index Param</h2>
        <p>When working with router children, you're able to define default routes</p>
        <Code>{indexRouting}</Code>
      </Slide>

      <Slide>
        <h2>Browser Routing - Parameters</h2>
        <p>Your component might need to react differently to parameters, define them in your Router Config and use them later</p>
        <p>In this exmaple, Team-Component will be able to access `params.teamId`</p>
        <Code>{paramsRouting}</Code>
      </Slide>

      <Slide>
        <h2>Browser Router vs Browser Routing</h2>
        <ul>
          <li>You're not forced to use createBroswerRouter</li>
          <li>It is also possible to simply use the "Routes" and "Route"-Components</li>
          <li>However, you will not be able to perform side effects like data fetching</li>
        </ul>
        <Code>{browserRouterExample}</Code>
      </Slide>

      <Slide>
        <h2>Optional Path Segments</h2>
        <ul>
          <li>adding `?` makes route segment optional</li>
          <li>
            typical usecase: provide pages in different languages like <code>/en/categories, /fr/categories,</code> ...
          </li>
          <li>this Route would also match /categories</li>
        </ul>
        <Code>{optionalPathSegment}</Code>
      </Slide>

      <Slide>
        <h2>Important Router Components</h2>
        <h4>Link</h4>
        <ul>
          <li>element that lets user navigate to another page within our App</li>
          <li>renders an accessible anchor tag with real href</li>
          <li>wrapper to enable navigation with client-side routing</li>
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
        <h4>NavLink</h4>
        <ul>
          <li>special kind of Link that knows whether or not it is "active", "pending" or "transitioning"</li>
          <li>breadcrumb: indicate which one is currently selected</li>
          <li>provides useful context for assistive technology like screen readers</li>
        </ul>
        <Code>{navLinkComponent}</Code>
      </Slide>
      <Slide>
        <h2>Important Router Components</h2>
        <h4>Outlet</h4>
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
        <h4>Outlet</h4>
        <Code>{outlet}</Code>
      </Slide>
      <Slide>
        <h2>Important Router Components</h2>
        <h4>Navigate</h4>
        <ul>
          <li>Navigate element changes current location when being rendered</li>
          <li>in comparison to Link, it lets you determine locations programmatically</li>
          <li>Might be useful for Redirecting, but it is recommended to use useNavigate-Hook</li>
        </ul>
        <Code>{navigate}</Code>
      </Slide>
      <Slide>
        <h2>Important Router Hooks</h2>
        <h4>useParams</h4>
        <p>access routing parameters in your component</p>
        <Code>{paramsRouting}</Code>
        <Code>{useParams}</Code>
      </Slide>
      <Slide>
        <h2>Important Router Hooks</h2>
        <h4>useLoaderData</h4>
        <p>fetch data before component is being rendered</p>
        <Code>{provideData}</Code>
        <Code>{accessData}</Code>
      </Slide>
      <Slide>
        <h2>Important Router Hooks</h2>
        <h4>useNavigate</h4>
        <p>respond to user interactions and navigate programmatically</p>
        <Code>{useNavigateExample}</Code>
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
        <p>We recommend to focus on the above introduced parts of react-router-dom as a starter, since things can get really complex! 🫠</p>
        <a href='https://reactrouter.com/en/main/start/overview' target='_blank' rel='noopener'>
          Getting Started with ReactRouter
        </a>
      </Slide>
      <Slide>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <h2>💪 Exercise</h2>
          <small>⏱️ 55min</small>
        </div>
        <ul>
          <li>
            <code>git checkout 04-context-wrapper</code>
          </li>
          <li>
            Use{' '}
            <a href='https://reactrouter.com/start/data/installation' target='_blank' rel='noopener'>
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
