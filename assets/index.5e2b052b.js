var k=Object.defineProperty,v=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var f=(o,i,a)=>i in o?k(o,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[i]=a,l=(o,i)=>{for(var a in i||(i={}))R.call(i,a)&&f(o,a,i[a]);if(g)for(var a of g(i))N.call(i,a)&&f(o,a,i[a]);return o},c=(o,i)=>v(o,w(i));import{j as b,r as p,P as x,$ as C,S,R as B,a as A}from"./vendor.51054d79.js";const F=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const h of s)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function a(s){const h={};return s.integrity&&(h.integrity=s.integrity),s.referrerpolicy&&(h.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?h.credentials="include":s.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(s){if(s.ep)return;s.ep=!0;const h=a(s);fetch(s.href,h)}};F();const e=b.exports.jsx,t=b.exports.jsxs,r=o=>e("section",c(l({"data-background-image":o.isMain?"/presentation//bg1.svg":void 0,"data-background-transition":o.isMain?"slide":void 0,style:o.isMain?{"--r-heading-color":"white",color:"white"}:{},"data-auto-animate":o.dataAutoAnimate,id:o.id||""},o),{children:o.children})),d=o=>{const i=`${o.index}. ${o.title}`;return t(r,{id:"chapter"+o.index,children:[e("div",{style:{position:"absolute",bottom:0,left:0,color:"#0070ad",opacity:.5,fontSize:"1rem"},children:i}),t(r,{isMain:!0,children:[e("h2",{children:i}),o.subtitle]}),o.children]})};const n=o=>{const i=p.exports.useRef(null);return p.exports.useEffect(()=>{setTimeout(()=>{i.current&&x.highlightElement(i.current,!1,a=>console.log(a))},0)},[o.children]),e("pre",{className:o.className,"data-line":o.highlightedLines||"",children:e("code",{ref:i,className:`language-${o.language||"tsx"} line-numbers`,children:o.children})})},T=`import * as React from "react";
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
);`,P=`import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/root";
import Team from "./routes/team";

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path="/" element={<Root />}>
       <Route path="team" element={<Team />} />
     </Route>
     )
  );

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);`,L=`import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>
);`,E=`function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" /> {/* \u{1F448} Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}`,M=`<Route
  path="/"
  loader={async ({ request }) => {
    // loaders can be async functions
    const userRes = await fetch("/api/user.json");
    return await userRes.json();
  }}
  element={<Root />}>

    <Route
    path=":teamId"
    // loaders understand Fetch Responses and will automatically
    // unwrap the res.json(), so you can simply return a fetch
    loader={({ params }) => {
      return fetch("/api/teams/" + params.teamId);
    }}
    element={<Team />}
    // If an error occurs while rendering, loading data, or performing data mutations,
    // React Router will catch it and render an error screen.
    errorElement={<ErrorPage />}
    ></Route>
  </Route>
>`,j=`<Route
  element={<Team />}
  path="teams/:teamId"/>`,H=`<Route
  path="/:lang?/categories"
  element={<Categories />}
/>;`,I='<Link to="/homepage">Go to Homepage</Link>',D=`import { NavLink } from "react-router-dom";
<NavLink
  to="/messages"
  // alternative: className={(props: NavLinkProps) => ...props.isActive
  className={({ isActive, isPending }: NavLinkProps) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>Messages</NavLink>;`,O=`function Dashboard() {
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
}`,_=`function SomeComponent(props) {
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
  }}`,U=`import {
  ...
  useParams
} from "react-router-dom";

function BlogPost() {

  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}
`,W=`import { Outlet, Navigate } from 'react-router-dom'

const ProtecedRoute = () => {
    let auth = {'token': false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtecedRoute`,J=`import './App.css';
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

export default App;`,z=o=>t(d,c(l({},o),{subtitle:e("blockquote",{children:'"Routing is the base for making a react application capable of showing multiple screens or components with a history and URL"'}),children:[t(r,{children:[e("h2",{children:"Client Side Routing"}),t("ul",{children:[t("li",{children:[e("b",{children:"traditional:"}),e("br",{})," browser requests document from webserver, downloads & evalutes CSS & JS, renders HTML sent from server. When the user clicks a link, the process starts all over again"]}),t("li",{children:[e("b",{children:"client-side:"}),e("br",{})," update URL from a click withouth making another document request to the server. App renders new UI and is able to make data requests"]}),e("li",{children:"faster user experience \u{1F913}"})]})]}),t(r,{children:[e("h2",{children:"Most important routing-types"}),t("ul",{className:"fragment",children:[e("li",{children:"Browser Routing \u{1F31F}"}),e("li",{children:"Hash Routing"}),t("ul",{children:[e("li",{children:"only in case we're not able to configure our server to direct all traffic to our React Router"}),e("li",{children:"hash portion to manage application URL"}),e("li",{children:"example: Mircofrontend"})]}),e("li",{children:"Memory Routing"}),t("ul",{children:[e("li",{children:"manages history in its own stack --> does not rely on browser history"}),e("li",{children:"useful for testing, i.e. with Jest or Storybook"}),e("li",{children:"applicable in non-browser environments"})]})]})]}),t(r,{children:[e("h2",{children:"Browser Routing"}),e("p",{children:"createBrowserRouter vs. BrowserRouter"}),e("ul",{children:t("li",{children:["createBrowserRouter works with a Router-Provider and is located in your main.tsx file",e(n,{children:T})]})}),t("aside",{className:"notes",children:[t("ul",{children:[e("li",{children:"you can use both without noticing any differences when only using the basic functionality: Routing "}),e("li",{children:"However createBrowserRouter is more powerful: it let's you perform data fetching, data mutations and handle errors"}),e("li",{children:"We will stick to basic functionality within our training. Since there are multiple ways for handling data fetching. We don't want to narrow down to BrowserRouter's approach"}),e("li",{children:"In case of interest, regard this as a further read"})]}),e("a",{href:"https://remix.run/_docs/routing",children:"This is a nice presenttation showoing how children work within routes"})]})]}),t(r,{children:[e("h2",{children:"Browser Routing"}),e("p",{children:"createBrowserRouter vs. BrowserRouter"}),e("ul",{children:t("li",{children:["createBrowserRouter can also be used with components. Therefore use"," ",e("a",{href:"https://reactrouter.com/en/main/utils/create-routes-from-elements#createroutesfromelements",children:"createRoutesFromElements"}),"."]})}),e(n,{children:P})]}),t(r,{children:[e("h2",{children:"Browser Routing"}),e("p",{children:"createBrowserRouter vs. BrowserRouter"}),e("ul",{children:"BrowserRouter is a component based approach and can either be attached to your main.tsx file or live inside App.tsx"}),e(n,{children:L})]}),t(r,{children:[e("h2",{children:"Browser Routing"}),e("p",{children:"createBrowserRouter vs. BrowserRouter"}),e("ul",{children:"BrowserRouter is a component based approach and can either be attached to your main.tsx file or live inside App.tsx"}),e(n,{children:E}),e("aside",{className:"notes",children:"Something worth noting: by adding a base path to your router, which is also possible for the create-approach, we're able to configure some path-segment that will always prefix any route"})]}),t(r,{children:[e("h2",{children:"Browser Routing"}),e("p",{children:"createBrowserRouter vs. BrowserRouter"}),e("ul",{children:t("li",{children:["ability to handle data fetching, mutations and errors is the main difference between BrowserRouter and"," ",e("b",{children:"createBrowserRouter"})]})}),e(n,{children:M}),e("aside",{className:"notes",children:"you can do basic functionality in both approaches, so it's up to you which one to use. createBrowsersRouter just offers more, in case you might need it. Don't know how common this acutally is, never used it myself"})]}),t(r,{children:[e("h2",{children:"Important Router Components"}),e("h4",{children:"Route"}),t("ul",{children:[e("li",{children:"couple URL segments to components"}),e("li",{children:"path pattern to match agains URL in browser"}),e("li",{children:"element: what to render"}),t("li",{children:[e("code",{children:"teams/:teams"})," indicates this segment is dynamic, will mat i.e. ",e("code",{children:"teams/123, teams/abc"}),", ..."]})]}),e(n,{children:j})]}),t(r,{children:[e("h2",{children:"Important Router Components"}),e("h4",{children:"Route - optional segments"}),t("ul",{children:[e("li",{children:"adding `?` makes route segment optional"}),t("li",{children:["typical usecase: provide pages in different languages like ",e("code",{children:"/en/categories, /fr/categories,"})," ..."]}),e("li",{children:"this Route would also match /categories"})]}),e(n,{children:H})]}),t(r,{children:[e("h2",{children:"Important Router Components"}),e("h4",{children:"Link"}),t("ul",{children:[e("li",{children:"element that lets user navigate to another page within our App"}),e("li",{children:"renders an accessible anchor tag with real href"}),t("li",{children:["why use Link instead of a-tag? ",e("br",{}),"It does not reload the document and thus behaves smoother"]}),e("li",{children:"In case you want this behaviour, add reloadDocument to your link component"})]}),e(n,{children:I})]}),t(r,{children:[e("h2",{children:"Important Router Components"}),e("h4",{children:"NavLink"}),t("ul",{children:[e("li",{children:'special kind of Link that knows whether or not is is "active", "pending" or "transitioning"'}),e("li",{children:"breadcrumb: indicate which one is currently selected"}),e("li",{children:"provides useful context for assistive technology like screen readers"})]}),e(n,{children:D})]}),t(r,{children:[e("h2",{children:"Important Router Components"}),e("h4",{children:"Outlet"}),t("ul",{children:[e("li",{children:"when working with nested routes, this should be used in parent route elements to render their children routes"}),e("li",{children:"allows nested UI to shop up when child routes are rendered / match"}),e("li",{children:"in case parent route is matched exactly, it will render a child index route or nothing if there is no index route"})]}),e("a",{href:"https://remix.run/_docs/routing",target:"_blank",rel:"noopener",children:"Visualization"})]}),t(r,{children:[e("h2",{children:"Important Router Components"}),e("h4",{children:"Outlet"}),e(n,{children:O})]}),t(r,{children:[e("h2",{children:"Important Router Components"}),e("h4",{children:"Navigate"}),t("ul",{children:[e("li",{children:"Navigate element changes current location when being rendered"}),e("li",{children:"in comparison to Link, it lets you determine locations programmatically"})]}),e(n,{children:_})]}),t(r,{children:[e("h2",{children:"Protected Routes"}),t("ul",{children:[e("li",{children:"needed for parts of your application, that should be protected, i.e. profile information"}),e("li",{children:"approach: create a custom ProtectedRoute-component and use it in your Routes definition"}),e("li",{children:"ProtectedRoute-component decides, whether the users is allowed to enter the page or will be redirected."})]}),e(n,{children:W})]}),t(r,{children:[e("h2",{children:"Proteced Routes"}),e(n,{children:J}),e("aside",{className:"notes",children:"ask participants which parts of the presented code is proteced and which is not"})]}),t(r,{children:[e("h2",{children:"Retrieve Parameters with useParams-Hook"}),e(n,{children:U})]}),t(r,{children:[e("h2",{children:"Documentation"}),e("p",{children:"We recommend to focus on the above introduced parts of BrowserRouter as a starter, since things can get really complex! \u{1FAE0}"}),e("a",{href:"https://reactrouter.com/en/main/start/overview",target:"_blank",rel:"noopener",children:"Getting Started with ReactRouter"})]}),t(r,{children:[t("div",{style:{display:"flex",justifyContent:"center",gap:24},children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("small",{children:"\u23F1\uFE0F 55min"})]}),t("ul",{children:[e("li",{children:e("code",{children:"git checkout 04-context-wrapper"})}),t("li",{children:["Use"," ",e("a",{href:"https://reactrouter.com/en/main/start/tutorial",target:"_blank",rel:"noopener",children:"React Router"})," ","to implement a routing to the detail page of a book (in App.tsx)"]}),e("li",{children:"Clicking on the title of a book in the list should forward the user to the detail page (/detail/[isbn])"}),e("li",{children:"On the detail page, a request is triggered to get the book details (https://api.itbook.store/1.0/books/[isbn])"}),e("li",{children:"The book details are displayed on this page"})]})]})]})),V=o=>t(r,{isMain:!0,children:[e("h2",{children:"Table of Contents"}),e("ol",{children:o.chapter.map((i,a)=>e("li",{children:e("a",{href:`#/chapter${a+1}`,style:{color:"white"},children:i.title})},a))})]}),q=()=>e("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 490 490",width:40,height:40,children:e("g",{children:e("path",{d:"M52.8,311.3c-12.8-12.8-12.8-33.4,0-46.2c6.4-6.4,14.7-9.6,23.1-9.6s16.7,3.2,23.1,9.6l113.4,113.4V32.7\r c0-18,14.6-32.7,32.7-32.7c18,0,32.7,14.6,32.7,32.7v345.8L391,265.1c12.8-12.8,33.4-12.8,46.2,0c12.8,12.8,12.8,33.4,0,46.2\r L268.1,480.4c-6.1,6.1-14.4,9.6-23.1,9.6c-8.7,0-17-3.4-23.1-9.6L52.8,311.3z",fill:"white"})})}),Q=`<ul>
  <li *ngFor="let todo of todos">{{todo}}</li>
</ul>
<form (ngSubmit)="addTodo()">
  <!-- Binding -->
  <input name="todotext" [(ngModel)]="todoText">
  <input type="submit" value="Add Todo">
</form>

        `,G=`import { Component } from '@angular/core';
@Component({
  selector: 'app-root\u2019,
  templateUrl: './app.component.html\u2019,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: string[] = [];
  todoText = \u2019\u2019;
  ngOnInit() {
    const existingTodos = localStorage.getItem('todos\u2019);
    this.todos = JSON.parse(existingTodos as string) || [];
  }
}
`,Y=`import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState();
  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);
  return (
    <div>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
      <form onSubmit={() => console.log(...)}>
        <input type="text"
          value={todoText}
          onChange={e => setTodoText(e.target.value)} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}
export default App;
`,$=`<template>
  <div>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
    </ul>
    <form v-on:submit.prevent="addTodo">
      <input v-model="todoText" placeholder="What needs to be done?" />
      <button type="submit">Add Todo</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      todos: [],
      todoText: "",
    };
  },
  mounted: function () {
    const existingTodos = localStorage.getItem("todos");
    this.todos = JSON.parse(existingTodos) || [];
  },
};
<\/script>

`,X=o=>t(d,c(l({},o),{children:[e(r,{children:e("h2",{children:"Some number crunching"})}),t(r,{children:[e("h2",{children:"Stats on github"}),t("table",{style:{width:"100%"},children:[e("thead",{children:t("tr",{children:[e("th",{}),e("th",{children:"Angular"}),e("th",{children:"React"}),e("th",{children:"Vue"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"Stars"}),e("td",{children:"78k"}),e("td",{children:"180k"}),e("td",{children:"218k"})]}),t("tr",{children:[e("td",{children:"Forks"}),e("td",{children:"21k"}),e("td",{children:"37k"}),e("td",{children:"36k"})]}),t("tr",{children:[e("td",{children:"Contributers"}),e("td",{children:"1,500+"}),e("td",{children:"1,500+"}),e("td",{children:"400+"})]}),t("tr",{children:[e("td",{children:"Watchers"}),e("td",{children:"3.1k"}),e("td",{children:"6.7k"}),e("td",{children:"6.3k"})]})]})]}),e("small",{children:"https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"})]}),t(r,{children:[e("h2",{children:"Github Stars"}),e("img",{src:"./slide-assets/framework-github-starts.png"}),e("small",{children:"https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"})]}),e(r,{children:e("h2",{children:"More Details"})}),t(r,{children:[e("h2",{children:"React"}),e("table",{style:{fontSize:"1.75rem"},children:t("tbody",{children:[t("tr",{children:[e("td",{children:"Initial Release"}),e("td",{children:"2013"})]}),t("tr",{children:[e("td",{children:"Developers"}),e("td",{children:"Meta and Community"})]}),t("tr",{children:[e("td",{children:"Website"}),e("td",{children:e("a",{href:"https://reactjs.org/",children:"https://reactjs.org"})})]})]})})]}),t(r,{children:[e("h2",{children:"Angular"}),e("table",{style:{fontSize:"1.75rem"},children:t("tbody",{children:[t("tr",{children:[e("td",{children:"Initial Release"}),e("td",{children:"2010 (as AngularJS)"})]}),t("tr",{children:[e("td",{children:"Developers"}),e("td",{children:"Google"})]}),t("tr",{children:[e("td",{children:"Website"}),e("td",{children:e("a",{href:"https://angular.io/",children:"https://angular.io"})})]})]})})]}),t(r,{children:[e("h2",{children:"Vue.js"}),e("table",{style:{fontSize:"1.75rem"},children:t("tbody",{children:[t("tr",{children:[e("td",{children:"Initial Release"}),e("td",{children:"2014"})]}),t("tr",{children:[e("td",{children:"Developers"}),e("td",{children:"Evan You and Community"})]}),t("tr",{children:[e("td",{children:"Website"}),e("td",{children:e("a",{href:"https://vuejs.org/",children:"https://vuejs.org"})})]})]})})]}),t(r,{children:[e("h2",{children:"Facts"}),t("table",{style:{width:"100%",fontSize:"1.75rem"},children:[e("thead",{children:t("tr",{children:[e("th",{}),e("th",{children:"Angular"}),e("th",{children:"React"}),e("th",{children:"Vue"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"Type"}),e("td",{children:"Framework"}),e("td",{children:"Library"}),e("td",{children:"Library"})]}),t("tr",{children:[e("td",{children:"Languages"}),e("td",{children:"HTML, SASS, TypeScript"}),e("td",{children:"HTML, CSS, JS/TS"}),e("td",{children:"HTML, CSS, JS/TS"})]}),t("tr",{children:[e("td",{children:"Mobile"}),e("td",{children:"Ionic (CSS needs adaption)"}),e("td",{children:"React Native (HTML needs adaption)"}),e("td",{children:"Vue Native (comiled to react native)"})]})]})]})]}),t(r,{children:[e("h2",{children:"Facts"}),t("table",{style:{width:"100%",fontSize:"1.75rem"},children:[e("thead",{children:t("tr",{children:[e("th",{}),e("th",{children:"Angular"}),e("th",{children:"React"}),e("th",{children:"Vue"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"Upgrading"}),e("td",{children:"Needed every year (major version change). Quite difficult."}),e("td",{children:"No upgrade needed, built for stability. One upgrade command."}),e("td",{children:"Not regulary. Migration tool exists."})]}),t("tr",{children:[e("td",{children:"Payload"}),e("td",{children:"500KB"}),e("td",{children:"35KB"}),e("td",{children:"20KB"})]}),t("tr",{children:[e("td",{children:"Loading time (mean of DOM, Memory & Startup)"}),e("td",{children:"1.54s"}),e("td",{children:"1.17s"}),e("td",{children:"1.11s"})]})]})]})]}),e(r,{children:t("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[e("div",{children:"HTML, CSS, JS"}),e("div",{style:{paddingTop:20,paddingBottom:10},children:e(q,{})}),t("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"},children:[t("div",{style:{background:"#0170ad",borderRadius:"10%",padding:10,width:"20%"},children:[e("h5",{children:"React"}),e("small",{children:"App.tsx"})]}),t("div",{style:{background:"#0170ad",borderRadius:"10%",padding:10,width:"20%"},children:[e("h5",{children:"Vue"}),e("small",{children:"App.vue"})]}),t("div",{style:{background:"#0170ad",borderRadius:"10%",padding:10,width:"20%"},children:[e("h5",{children:"Angular"}),e("small",{children:"App.component.css"}),e("br",{}),e("small",{children:"App.component.html"}),e("br",{}),e("small",{children:"App.component.ts"}),e("br",{}),e("small",{children:"main.module.ts"})]})]})]})}),t(r,{children:[e("h2",{children:"Example: TODO App"}),e("img",{src:"./slide-assets/framework-todo.png"}),e("small",{children:"https://www.youtube.com/watch?v=cuHDQhDhvPE"})]}),t(r,{children:[e("h2",{children:"Angular"}),t("div",{style:{display:"flex",justifyContent:"center",gap:10},children:[e(n,{children:Q}),e(n,{children:G})]})]}),t(r,{children:[e("h2",{children:"React"}),e("div",{children:e(n,{children:Y})})]}),t(r,{children:[e("h2",{children:"Vue"}),e("div",{children:e(n,{children:$})})]}),t(r,{children:[e("h2",{children:"Same App: 10 Frameworks"}),e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cuHDQhDhvPE",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]})]})),K=`interface Props {
  name: string;
}

const Welcome = (props: Props) {
  return <h1>Hello, {props.name}</h1>;
}`,Z=`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`,ee=`function App = () => {
  const books: Book[] = [
    {id: 1, name: 'Moby Dick', author: 'Herman Melville'},
    {id: 2, name: 'Hamlet', author: 'Shakespeare'},]
  return (
    <div>
    <h1>Booklist</h1>
     {books.map((book, index) => (
       // always define keys when looping, unique identifier for React DOM
       <Book key={index} book={book} /> 
     ))}
    </div>
  )
}
`,te=`const interface Book {
  id: number;
  name: string;
  author: string;
}

const Book = (props: Book) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>author: {props.author}</p>
    </div>
  )
}
`,re=`const interface Book {
  id: number;
  name: string;
  author: string;
}

const Book = ({ name, author }: Book) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>author: {author}</p>
    </div>
  )
}
`,ne=`const Book = ({name="Tom", author="Rowling"}: Book) => {
return (
  <div>
    <h1>{name}</h1>
    <p>author: {author}</p>
  </div>
)}`,oe=`const Book = (props: Props) => {
  props.title = "HI"
}`,ie=`const Book = ({ name, author }: Book) => {
  return (
    <div>
      <h1 className='myHeadline'>{name}</h1>
      <p>author: {author}</p>
    </div>
  )
}
`,ae=`const Book = ({ name, author }: Book) => {
  return (
    <div>
      <h1 className='myHeadline'>{name}</h1>
      // notice the double curly braces
      <p style={{ color: 'green'}}>author: {author}</p>
    </div>
  )
}
`,se="yarn add --save styled-components",le=`import styled from 'styled-components';
const StyledAuthor = styled.p\`color: green\`
const Book = ({ name, author }: Book) => {
  return (<div>
      <h1 className='myHeadline'>{name}</h1>
        // notice the double curly braces
      <StyledAuthor>author: {author}</StyledAuthor>
    </div>
  )}
`,ce=`interface Props {
  title: string;
}
export default MyButton = (props: Props) => {
    return (
        <button>{props.title}</button>
    )
}`,de=`<MyButton /> // error
<MyButton title={2} /> // error
<MyButton title='Hit me' /> // ok
`,he="$ npx create-react-app my-app --template typescript",ue="$ npm create vite@latest my-app -- --template react-ts",me="type PropsWithChildren<P> = P & { children?: ReactNode };",pe=`import { PropsWithChildren } from 'react'

interface Props {
  title: string;
}

export const MyComponent = (props: PropsWithChildren<Props>) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}
`,ge=o=>t(d,c(l({},o),{subtitle:e("p",{children:"JavaScript functions, accept Props and return React Elements (JSX)"}),children:[t(r,{children:[e("h2",{children:"Class Components vs. Functional Components"}),e(n,{className:"fragment",children:K}),e(n,{className:"fragment",children:Z}),e("p",{className:"fragment",children:"same output"})]}),t(r,{children:[e("h2",{children:"Class Components vs. Functional Components"}),e("p",{className:"fragment",children:"Whats the difference? When should I use which one?"}),t("ul",{className:"fragment",children:[e("li",{children:"historical reasons: no state-management / lifecycle hooks before 2019 in functional components"}),e("li",{children:"nowadays: hardly any usage of class components"}),e("li",{children:"functional components are easier to read and test, less code, better performance"})]}),e("a",{href:"https://www.twilio.com/blog/react-choose-functional-components",target:"_blank",className:"fragment",rel:"noreferrer",children:"\u{1F680} understanding functional components vs class components"})]}),t(r,{children:[e("h2",{children:"Properties (aka Props)"}),e("p",{children:"Pass information down the component tree"}),e(n,{className:"fragment",children:ce}),e(n,{className:"fragment",children:de}),e("aside",{className:"notes",children:"Or use any other way of passing JS objects (e.g. destructuring)."})]}),t(r,{children:[e("h2",{children:"Properties (aka Props)"}),e("p",{className:"fragment",children:"Book-List which renders various Books from a Book component"}),e("p",{className:"fragment",children:"The Book component doesn't 'know' what to render so we need to pass the information"})]}),t(r,{children:[e("h2",{children:"Properties (aka Props)"}),e(n,{highlightedLines:"10",children:ee}),e("pre",{children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/03-conditional-rendering-basic/react-training-codeexamples/src/App.tsx",children:"\u{1F680} code example on GitHub"})}),e("aside",{className:"notes",children:"map: this is how we iterate over arrays in React (angular ngFor, vue: v-for)"})]}),t(r,{children:[e("h2",{children:"Properties: not destructured"}),e(n,{className:"fragment",highlightedLines:"7",children:te})]}),t(r,{children:[e("h2",{children:"Properties: destructured"}),e(n,{className:"fragment",highlightedLines:"7",children:re})]}),t(r,{children:[e("h2",{children:"Properties: destructured vs not destructured"}),t("ul",{children:[t("li",{className:"fragment",children:["Pro: easier to apply default values",e(n,{highlightedLines:"1",children:ne})]}),e("li",{className:"fragment",children:"Con: in case of large components you might get confused which variables are defined in the component scope and which ones are passed as props"})]})]}),t(r,{children:[e("h2",{children:"Passing Children"}),t("ul",{children:[e("li",{children:"React allows us to pass other React Elements / Components as children"}),e("li",{children:"Not mandatory but very handy: React's Type 'PropsWithChildren'"}),t("ul",{children:[e("li",{children:"takes your component's Props and returns a union type with the children prop appropriatly typed"}),e("li",{children:"ReactNode Type is a union of ReactChild, ReactFragment, ReactPortal, boolean, null or undefined. You can basically pass any valid React Element."})]})]}),e(n,{className:"fragment",children:me})]}),t(r,{children:[e("h2",{children:"Passing Children - PropsWithChildren"}),e(n,{children:pe}),e("aside",{className:"notes",children:"Example of using PropsWithChildren"})]}),t(r,{children:[e("h2",{children:"Important sidenote: Props are immutable"}),t("ul",{children:[t("li",{children:["this means you ",e("strong",{children:"cannot"})," do something like this:"]}),e(n,{children:oe})]})]}),t(r,{children:[e("h2",{children:"First things first"}),t("p",{children:[e("a",{href:"https://create-react-app.dev/docs/getting-started",children:"Create React App"})," \u{1F40C}"]}),e(n,{language:"bash",children:he}),t("p",{children:[e("a",{href:"https://vitejs.dev/guide/",children:"Vite"})," \u{1F680}"]}),e(n,{language:"bash",children:ue})]}),t(r,{children:[t("div",{style:{display:"flex",justifyContent:"center",gap:24},children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("small",{children:"\u23F1\uFE0F 35min"})]}),t("ul",{children:[e("li",{children:"Implement a small app which renders a list of books (start in App.tsx)."}),e("li",{children:"There should be a Book-Component which accepts a property of type 'Book'."}),t("li",{children:["Find some sample data"," ",e("a",{href:"https://github.com/cap-react-trainings/code-examples/blob/02-conditional-rendering-styled-components/react-training-codeexamples/src/testData/Booklist.ts",target:"_blank",rel:"noreferrer",children:"here"})]})]})]}),t(r,{children:[e("h2",{children:"Let's style our Booklist"}),t("ul",{className:"fragment",children:[e("li",{children:"via css classes"}),e("li",{children:"via inline styling"}),e("li",{children:"CSS in JS"})]})]}),t(r,{children:[e("h2",{children:"className"}),e("p",{className:"fragment",children:"instead of using the 'class'-attribute, React expects 'className'"}),e(n,{className:"fragment",children:ie})]}),t(r,{children:[e("h2",{children:"Inline Styling"}),e("p",{className:"fragment",children:"inline styling is also possible via the well known 'style'-attribute"}),e("p",{className:"fragment",children:"notice the double curly braces, usual CSS-syntax inside"}),e(n,{className:"fragment",children:ae}),e("pre",{className:"fragment",children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/02-conditional-rendering-basic/react-training-codeexamples/src/components/book/Book.tsx",children:"\u{1F680} code example on GitHub"})})]}),t(r,{children:[e("h2",{children:"CSS in JS"}),t("ul",{className:"fragment",children:[e("li",{children:"Style components using JavsScript"}),e("li",{children:"JavaScript power in CSS"}),t("li",{children:["no React built-in-feature -",">"," external library"]}),t("ul",{className:"fragment",children:[t("li",{children:["most popular:"," ",e("a",{href:"https://styled-components.com/",target:"_blank",rel:"noreferrer",children:"Styled Components"})," ","(36K+ stars on GitHub)"]}),t("li",{children:["also used by"," ",e("a",{href:"https://mui.com/system/styled/",target:"_blank",rel:"noreferrer",children:"MUI"})]})]})]}),t("aside",{className:"notes",children:["hint: when working with MUI you should checkout the latest version of styling, `the system`, which implements"," ",e("a",{href:"https://tailwindcss.com/",target:"_blank",rel:"noreferrer",children:"tailwind"})," ","and makes your styling life a lot easier and esp. faster"]})]}),t(r,{children:[e("h2",{children:"CSS in JS - styled components"}),e(n,{className:"fragment",children:se}),e(n,{className:"fragment",highlightedLines:"2,7",children:le}),e("pre",{className:"fragment",children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/02-conditional-rendering-styled-components/react-training-codeexamples/src/components/book/Book.tsx",children:"\u{1F680} code example on GitHub"})})]}),t(r,{children:[t("div",{style:{display:"flex",justifyContent:"center",gap:24},children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("small",{children:"\u23F1\uFE0F 25min"})]}),t("ul",{children:[e("li",{children:"Our booklist isn't very pretty yet ..."}),e("li",{children:"Choose one styling-method you've just learned about and style your BookList."})]})]})]})),fe=`  interface Props {
    userName?: string; // optional
  }
  const SayHi = (props: Props) => {
    if (props.userName) {
      return <h1>Hi {props.userName}!</h1>
    } else {
      return <h1>Hello Guest!</h1>
    }
  }
`,ye=`export default LoginButton = () => {
    return <button>Login</button>
}`,be=`export default LogoutButton = () => {
    return <button>Logout</button>
}`,ke=`const AuthenticationComponent = (props: Props) => {
  let button;
  if (props.userName) {
    button = <LogoutButton />
  } else {
    button = <LoginButton />
  }
  return <div>{button}</div>
}
`,ve=`const UsersList = (props: Props) => {
  const users = props.users
  return (
    <div>
      <h2>My fancy app</h2>
      {users.length > 0 && (
        <p>Your app is used by {users.length} users.</p>
      )}
    </div>
  )
}
`,we=`const UsersList = (props: Props) => {
  const users = props.users
  return (
    <div>
      <h2>My fancy app</h2>
      {users.length > 0 ? (
        <p>Your app is used by {users.length} users.</p>
      ) : (
        <p>No one is interested in your app \u2639\uFE0F</p>
      )}
    </div>
  )
}`,Re=`const UsersList = (props: Props) => {
  if (!props.users) {
    return null;
  }
  return (
    <div>
      <h2>My fancy app</h2>
      <p>Your app is used by {users.length} users.</p>
    </div>
  )
}`,Ne=o=>t(d,c(l({},o),{subtitle:t("ul",{children:[e("li",{children:"rendering different components"}),e("li",{children:"inline conditions"})]}),children:[t(r,{children:[e("h2",{children:"Component uses different return statements"}),e(n,{className:"fragment",children:fe})]}),t(r,{children:[e("h2",{children:"Conditionally assign component to variable"}),t("div",{className:"fragment",children:[e(n,{className:"",children:ye}),e(n,{className:"",children:be})]}),e(n,{className:"fragment",children:ke})]}),t(r,{children:[e("h2",{children:"Inline Logic - variant 1"}),e(n,{className:"fragment",children:ve})]}),t(r,{children:[e("h2",{children:"Inline Logic - variant 2"}),e(n,{className:"fragment",children:we})]}),t(r,{children:[e("h2",{children:"Prevent component from rendering"}),e(n,{className:"fragment",children:Re})]}),t(r,{children:[t("div",{style:{display:"flex",justifyContent:"center",gap:24},children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("small",{children:"\u23F1\uFE0F 35min"})]}),t("ul",{children:[e("li",{children:"Extend your Book-Component with a badge that notifies the user when a book is not available in store. (Pass an additional prop to your Book-Component)."}),e("li",{children:"Bear in mind that there might be a case where no books are available for rendering. Create a UI for that."})]})]})]})),xe=`// fetch user...
<Page user={props.user} />
// ... which renders ...
<PageLayout user={props.user} />
// ... which renders ...
<NavigationBar user={props.user} />
// ... which renders ...
<Link href={props.user.permalink}>
  <Avatar user={props.user} />
</Link>
`,Ce=`const UserContext = React.createContext<User>(null);

// fetch user...

<UserContext.Provider value={user}>
  <Page />
</UserContext.Provider>
`,Se=`const user = useContext(UserContext);

<Link href={user.permalink}>
  <Avatar user={user} />
</Link>
`,Be=`export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
`,Ae=`const {theme, toggleTheme} = useContext(UserContext)

return (
  <div
    style={{ background: theme.back }}
    onClick={() => toggleTheme()}>
    Click me
  </div>
)
`,Fe=o=>t(d,c(l({},o),{subtitle:e("blockquote",{children:'"Context provides a way to pass data through the component tree without having to pass props down manually at every level."'}),children:[e(r,{children:e("img",{style:{width:800},src:"./slide-assets/context.png"})}),t(r,{children:[e("h2",{children:"When to use?"}),t("ul",{className:"fragment",children:[e("li",{children:"locale preferences"}),e("li",{children:"UI theme"}),e("li",{children:"user objects"})]}),e("aside",{className:"notes",children:"Really use with care! Just if many components need all of the data. Resuability gets more difficult."})]}),t(r,{children:[e("h2",{children:"\u{1F575}\uFE0F Be careful!"}),e("p",{className:"fragment",children:"Is it easier to pass down components as props?"}),e("p",{className:"fragment",children:"Be aware of restricted reusability!"}),e("p",{className:"fragment",children:"Only use if many components need the data."}),e("aside",{className:"notes",children:"Really use with care! Just if many components need all of the data. Resuability gets more difficult."})]}),t(r,{children:[e("h2",{children:"From"}),e(n,{children:xe})]}),t(r,{children:[e("h2",{children:"To"}),e(n,{highlightedLines:"1|1-7",children:Ce})]}),t(r,{children:[e("h2",{children:"To"}),e(n,{highlightedLines:"1|1-7",children:Se})]}),t(r,{children:[e("h2",{children:"Update from child"}),e(n,{children:Be}),e(n,{children:Ae})]}),t(r,{children:[e("h2",{children:"Further Reads"}),t("ul",{children:[e("li",{children:e("a",{href:"https://reactjs.org/docs/context.html",target:"_blank",rel:"noreferrer",children:"React Docs"})}),e("li",{children:"Advanced State Management:"}),t("ul",{children:[e("li",{children:e("a",{href:"https://kentcdodds.com/blog/application-state-management-with-react",target:"_blank",rel:"noreferrer",children:"\u{1F680} Application State Management with React"})}),e("li",{children:e("a",{href:"https://kentcdodds.com/blog/how-to-use-react-context-effectively",target:"_blank",rel:"noreferrer",children:"\u{1F680} How to use React Context effectively"})})]})]}),e("aside",{className:"notes",children:"Recommend Kent C. Dotts blog posts. You won't need redux anymore!"})]}),t(r,{children:[t("div",{style:{display:"flex",justifyContent:"center",gap:24},children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("small",{children:"\u23F1\uFE0F 60min"})]}),t("ul",{children:[e("li",{children:"Extract the book list into a separate component"}),t("li",{children:["Use"," ",e("a",{href:"https://reactjs.org/docs/context.html",target:"_blank",rel:"noreferrer",children:"React Context"})," ","to create a context wrapper for light/dark mode switch"]}),e("li",{children:"Apply it to the outmost component (App.tsx)"}),e("li",{children:"Toggle stylings in book list (font color) according to dark mode context"}),e("li",{children:"Add button to App.tsx that toggles the color mode"}),e("li",{children:"Allow child components to toggle the color mode (and demonstrate it with a new component)"})]})]})]})),Te=`  const Numbers = () => {
    const [bookCounter, setBookCounter] = useState<number>(0);

    return (
      <p>{bookCounter}</p>
      <button onClick={() => setBookCounter(bookCounter + 1)}>
        increase bookCounter
      </button>
    )
  }
`,Pe=`const [books, setBooks] = useState<Book>()

useEffect(() => {
  fetch(...)
    .then(data => setBooks(data))
}, [])  // empty array = runs at initial render

return (
  <BookList books={books} />
)
`,Le=`const [currentBooks, setCurrentBooks] = useState<Book[]>()
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
`,Ee=`useEffect(() => {
  BooksApi.subscribeToUpdates(props.user.id);
  /**
   * return function only runs once before 
   * component's lifecycle is being destroyed
   */
  return () => {
    BooksApi.unsubscribeFromUpdates(props.user.id)
  }
}, [])
`,Me=`const useBooks = () => {
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
`,je="const { loading, books } = useBooks()",He=`const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
`,Ie=`import { useQuery } from "react-query";
// query key is used to identify the query
const response = useQuery("users", fetchUsers);
`,De=`data,
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
`,Oe=`const {isLoading, data, error} = useQuery("books", fetchBooks);

return (
  {isLoading ? <p>Loading...</p>
  : error ? <p>Error: {error.message}</p>
  : <BookList books={data} />}
)
`,_e=o=>t(d,c(l({},o),{subtitle:t("ul",{children:[e("li",{children:"Hooks"}),e("li",{children:"Databinding"}),e("li",{children:"Databinding and Hooks: influence the component's rendering"}),e("li",{children:"Custom Hooks"}),e("li",{children:"useQuery-Hook"})]}),children:[t(r,{children:[e("h2",{children:"Hooks"}),e("p",{children:"work with React state and lifecycle features from function components"}),e("p",{children:"No more need for Class Components \u{1F601}"}),e("p",{children:"most important React Hooks: useState, useEffect, (useContext, useReducer, useCallback, useMemo, ...)"})]}),t(r,{children:[e("h2",{children:"useState-Hook"}),t("ul",{children:[e("li",{className:"fragment",children:"add state management to function components"}),e("li",{className:"fragment",children:"component rerenders when state in hook changes"}),e("li",{className:"fragment",children:"syntax: array destructuring"}),t("ul",{children:[e("li",{className:"fragment",children:"first value is set to the state value"}),e("li",{className:"fragment",children:"second value is used to update the value"})]})]})]}),t(r,{children:[e("h2",{children:"useState-Hook"}),e(n,{children:Te}),e("pre",{className:"fragment",children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/03-hooks-usestate/react-training-codeexamples/src/App.tsx",children:"\u{1F680} code example on GitHub"})})]}),t(r,{children:[t("div",{style:{display:"flex",justifyContent:"center",gap:24},children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("small",{children:"\u23F1\uFE0F 40min"})]}),t("ul",{children:[e("li",{children:"Implement some buttons, that determine how many books should be rendered inside your book-list."}),e("li",{children:"As you might have already guessed: the useState-hook is your friend!"})]})]}),t(r,{children:[e("h2",{children:"useEffect-Hook"}),t("ul",{children:[e("li",{className:"fragment",children:"perform side effects in components"}),e("li",{className:"fragment",children:"e.g. for data fetching"}),e("li",{className:"fragment",children:"cleanup when a component's lifecycle is over"}),e("li",{className:"fragment",children:"define when to run it with the dependency array"})]})]}),t(r,{children:[e("h2",{children:"useEffect-Hook: Data Fetching"}),e(n,{className:"fragment",children:Pe}),e("pre",{className:"fragment",children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/03-hooks-useeffect/react-training-codeexamples/src/App.tsx",children:"\u{1F680} code example on GitHub"})})]}),t(r,{children:[e("h2",{children:"useEffect-Hook: Dependency Array"}),e(n,{className:"fragment",highlightedLines:"8",children:Le})]}),t(r,{children:[e("h2",{children:"useEffect-Hook: Unmount of Component"}),e(n,{className:"fragment",children:Ee})]}),t(r,{children:[e("h2",{children:"Rules of Hooks"}),t("ul",{children:[e("li",{className:"fragment",children:"only call Hooks at the top level of a component. React will run into problems when calling hooks after determining conditions"}),e("li",{className:"fragment",children:"Don't call Hooks from regular JS functions, the only other valid place are custom Hooks"})]})]}),t(r,{children:[e("h2",{children:"Custom Hooks"}),e("ul",{children:e("li",{className:"fragment",children:"extract component logic into reusable functions"})}),e(n,{className:"fragment",children:Me}),e(n,{className:"fragment",children:je})]}),t(r,{children:[t("div",{style:{display:"flex",justifyContent:"center",gap:24},children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("small",{children:"\u23F1\uFE0F 55min"})]}),t("ul",{children:[t("li",{children:["As of now: we'd like to get rid of our dummy book-data and use an"," ",e("a",{href:"https://api.itbook.store/1.0/new",target:"_blank",rel:"noreferrer",children:"API"})," ","instead."]}),e("li",{children:"Fetch the books to display from the API."}),e("li",{children:`Update your conditional rendering in Book.tsx: Place a badge "cheap" when the book's price is less than 30$, else the badge should display "expensive".`}),e("li",{children:"Since data fetching takes some time, also provide a loading spinner that tells the user you are fetching data while there are no books to display yet."}),t("li",{children:["Brownie points: In case you're finished early: learn about the"," ",e("a",{href:"https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useQuery",children:"useQuery-Hook"}),", do some refactoring and implement your datafetching by using useQuery."]})]})]}),t(r,{children:[e("h2",{children:"Excursus: useQuery (React Query)"}),t("ul",{children:[e("li",{className:"fragment",children:"data-fetching library for React"}),e("li",{className:"fragment",children:"fetching, caching, synchronizing and updating server state in React applications"}),e("li",{className:"fragment",children:"useQuery-Hook: handle various states in the fetching process, e.g. loading, error, data, ..."}),e("li",{className:"fragment",children:"React Query provides further Hooks"})]})]}),t(r,{children:[e("h2",{children:"Excursus: useQuery (React Query)"}),e(n,{className:"fragment",children:He}),e(n,{className:"fragment",children:Ie})]}),t(r,{children:[e("h2",{children:"Excursus: useQuery (React Query)"}),e("p",{children:"Response Object"}),e(n,{className:"fragment",children:De})]}),t(r,{children:[e("h2",{children:"Excursus: useQuery (React Query)"}),e("p",{children:"save code, no need to handle states by yourself"}),e(n,{className:"fragment",children:Oe}),e("pre",{className:"fragment",children:e("a",{style:{fontSize:"1.7rem",marginTop:4},target:"_blank",rel:"noreferrer",href:"https://github.com/cap-react-trainings/code-examples/blob/03-hooks-use-query-with-material/react-training-codeexamples/src/components/book-list/BookList.tsx",children:"\u{1F680} code example on GitHub"})})]}),t(r,{children:[t("div",{style:{display:"flex",justifyContent:"center",gap:24},children:[e("h2",{children:"\u{1F4AA} Bonus"}),e("small",{children:"\u23F1\uFE0F 40min"})]}),e("ul",{children:e("li",{children:"If not done yet: refactor your code and implement the data fetching part by using the useQuery-Hook."})})]}),t(r,{children:[e("h2",{children:"Angular Excursus: Observable vs State"}),e("p",{className:"fragment",children:"When coming from Angular it is often asked what happened to the Observables"}),e("p",{className:"fragment",children:"You just simply don't need them :) The state listening in a useEffect for example is like a simple pipe in Angular"}),e("p",{className:"fragment",children:'However it is possible to have "real" subscribe with mobx for example.'})]})]})),Ue=`<Formik
 initialValues={{ email: '', password: '' }}
 validate={true}
 onSubmit={console.log}
>
 {({ isSubmitting }) => (
   <Form>
     <Field type="email" name="email" />
     <ErrorMessage name="email" component="div" />
     <button type="submit" disabled={isSubmitting}>
       Submit
     </button>
   </Form>
 )}
</Formik>
`,We=`interface MyForm {
  fName: string;
  lName: string;
}
const { register, 
  handleSubmit, 
  formState: {errors, isDirty}
} = useForm<MyForm>({
  mode: "onChange",
  defaultValues: {
    fName: 'Erika',
    lName: 'Musterfrau'
 }});
const onSubmit = (data) => console.log(data);

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input defaultValue="test" {...register("fName")} />
    <input {...register("lName", { required: true, minLength: 5 })} />
    {errors.lName.type === "required" && <span>required!</span>}
    {errors.lName.type === "minLength" && <span>Your input is too short!</span>}
    <input type="submit" />
  </form>
);
`,Je=`const { register, 
  handleSubmit, 
  formState: {errors}
} = useForm<MyForm>({
  mode: "onChange",
  reValidateMode: "onChange"
});
`,ze=`{
  fName: {
    type: 'required,
    message: '',
    ref: input#fname,
  }
}
`,Ve=o=>t(d,c(l({},o),{children:[t(r,{children:[t("p",{children:["More of a personal preference,",e("br",{}),"but there are a few popular libs:"]}),t("ul",{className:"fragment",children:[t("li",{children:[e("a",{href:"https://github.com/jaredpalmer/formik",target:"_blank",rel:"noreferrer",children:"Formik"}),e("div",{children:e("small",{children:"(34k stars on github)"})})]}),t("li",{children:[e("a",{href:"https://github.com/react-hook-form/react-hook-form",target:"_blank",rel:"noreferrer",children:"React Hook Form"}),e("div",{children:e("small",{children:"(40k stars on github)"})})]})]}),e("aside",{className:"notes",children:"Depends on personal preference, used UI libs/frameworks and performance requirements."})]}),e(r,{children:t("div",{children:[e("h2",{children:"Components based"}),e(n,{children:Ue})]})}),t(r,{children:[t("div",{children:[e("h2",{children:"Hook based"}),e(n,{children:We})]}),e("aside",{className:"notes",children:t("ul",{children:[e("li",{children:"Better performance wise. Just updates necessary children."}),e("li",{children:"very mighty: we'll focus on the basics here"}),e("li",{children:"register a form by using 'useForm': make it typesafe"}),e("li",{children:"you can add custom logic to submit behaviour, but you need to use useForms handleSubmit Method"}),e("li",{children:"By using the formState Attribute, you're able to see every field's state: has it been touched? is it dirty? are there any errors?"})]})})]}),t(r,{children:[t("div",{children:[e("h2",{children:"Validation with useForm-Hook"}),t("ul",{children:[t("li",{children:[e("b",{children:"formState: "}),"access errors"]}),t("li",{children:[e("b",{children:"mode: "}),"Validation strategy before submitting"]}),t("li",{children:[e("b",{children:"reValidateMode: "}),"Validation strategy after submitting"]})]})]}),e(n,{highlightedLines:"3,5,6",className:"fragment",children:Je})]}),t(r,{children:[t("div",{children:[e("h2",{children:"Validation with useForm-Hook - Error Type"}),t("ul",{children:[e("li",{children:"Object containing the name of your registered fields as keys in case they contain errors"}),e("li",{children:"each field contains the error type, which your're able to react to."})]})]}),e(n,{children:ze})]}),t(r,{children:[e("h2",{children:"Further Reads"}),e("ul",{children:e("li",{children:e("a",{href:"https://dev.to/pmbanugo/looking-for-the-best-react-form-library-in-2021-it-s-probably-on-this-list-e2h",target:"_blank",rel:"noreferrer",children:"\u{1F4C4} Comparison of four form libraries"})})})]}),t(r,{children:[t("div",{style:{display:"flex",justifyContent:"center",gap:24},children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("small",{children:"\u23F1\uFE0F 45min"})]}),t("ul",{children:[e("li",{children:e("code",{children:"git checkout 05-routing-chapter"})}),e("li",{children:"extend your booklist with the possibility to add a new book to your list: Add a button, that opens a form on click"}),t("li",{children:["install"," ",e("a",{href:"https://react-hook-form.com/api/useform/",target:"_blank",rel:"noreferrer",children:"react-hook-form"})]}),t("li",{children:["Do not forget to validate your form (",e("a",{href:"https://react-hook-form.com/docs/useform/register",children:"Doc will help \u{1F913}"}),")",t("ul",{children:[e("li",{children:"inputs should never be empty before the user submits the form"}),e("li",{children:"one input field should require a maxLength of 20 characters"}),e("li",{children:"one input field should require a minLength of 3 characters"}),e("li",{children:"one field should only allow character inputs [a-zA-Z]"})]})]}),t("li",{children:["In case you're finished early: try to use"," ",e("a",{href:"https://formik.org/docs/overview",target:"_blank",rel:"noreferrer",children:"Formik"})," ","\u{1F913}"]})]})]})]})),qe=`import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<div>Hi</div>);
`,Qe=`import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const data = { name: "Hans" };

root.render(<div>Hi {data.name}</div>);
`,Ge=`npx create-react-app my-app
# or better
npm create vite@latest my-app -- --template react-ts

# then
cd my-app
npm install
npm start
`,Ye="const element = <h1>Welcome to React!</h1>",$e=`export default MyButton = () => {
    return <button>Click Me!</button>
}`,Xe=`import MyButton from './myButton';
<MyButton /> // ok
<MySuperSpecialButton /> // error
`,Ke=`const element = {
  const formatUser = user => user.firstName + user.lastName
  const mySource = "https://mylink.com"
  return (
    <div>
      <h1>Hello {formatUser(user)}</h1>
      <img src={mySource}/> 
    </div>
)}
  `,Ze=o=>t(d,c(l({},o),{subtitle:e("p",{children:"Minimal App, Bootstrapping & Templating"}),children:[t(r,{children:[e("h2",{children:"Minimal App"}),e(n,{className:"fragment",children:qe})]}),t(r,{children:[e("h2",{children:"Bootstrapping a Project"}),e(n,{className:"fragment",language:"bash",children:Ge})]}),t(r,{children:[e("h2",{children:"Templating with JSX / TSX"}),e("p",{className:"fragment",children:"syntax extension to JavaScript"}),e("p",{className:"fragment",children:"describe what the UI looks like"}),e("p",{className:"fragment",children:"full power of JavaScript"}),e("p",{className:"fragment",children:"produces React elements"}),e("p",{className:"fragment",children:"TSX enhances JSX in terms of type checking"}),e(n,{className:"fragment",children:Ye})]}),t(r,{children:[e("h2",{children:"JSX / TSX Elements"}),t("ul",{className:"fragment",children:[e("li",{children:"elements are looked up by identifiers"}),e("li",{children:"naming convention starts with capital letter"}),e("li",{children:"You can import them as a component in your app"})]}),e(n,{className:"fragment",children:$e}),e(n,{className:"fragment",children:Xe})]}),t(r,{children:[e("h2",{children:"JavaScript in Elements"}),e(n,{children:Ke}),e("p",{children:"notice the following:"}),t("ul",{children:[t("li",{children:["JSX Elements can have mutlitple children but need ",e("b",{children:"one"})," root element"]}),t("li",{children:["empty tags may be closed immediatly with `","/>","`"]}),t("li",{children:["JavaScript can be used inside JSX (","{}",")"]})]})]}),t(r,{children:[e("h2",{children:"Minimal App with data"}),e(n,{children:Qe})]})]})),et="<AddButton onClick={() => setIsAddOpen(true)} />",tt=`const moizedOpen = useCallback(() => {
    setIsAddOpen(true);
}, []);`,rt=`export const AddButton = React.memo(
  function AddButton({ onClick }) {
    return (
        <button onClick={onClick}>Add</button>
    )
})`,nt=`export const AddButton = React.memo(
  function AddButton({ onClick, books[] }) {
    return (
        <button onClick={onClick}>Add {books.length} books</button>
    )
}, (p1, p2) => p1.books.length === p2.books.length);`,ot=`const [books, setBooks] = useState(props.books);
const moizedBook = useMemo(() => {
  return books.find(book => book.author === props.author);
}, [books, props.author]);
`,it=`const AddModal = lazy(() => import('./AddModal))

return(
  <div>
    /* render other components */
    <Suspense fallback={<div>Loading...</div>}>
      <AddModal />
    </Suspense>
  <div>
)
`,at=`const About = React.lazy(() => import("./pages/About"));
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about"
        element={
          <React.Suspense fallback={<div>...</div>}>
            <About />
          </React.Suspense>
        }
      />
    <Routes>
  )
`,st=`const App = () => {
  const [additionCount, setAdditionCount] = useState(0);
  const [subtractionCount, setSubtractionCount] = useState(0);
  
  console.log("Component Rendering");
  ...
}
`,lt=`const handleOnClickAsync = () => {
  fetch(\u201Chttps://jsonplaceholder.typicode.com/books/1").then(() => {
    setAdditionCount(additionCount + 1);
    setSubstractionCount(substractionCount \u2014 1);
  });
};
`,ct=`ReactDOM.createRoot(document.getElementById('app'))
  .render(<App /> );
`,dt=o=>t(d,c(l({},o),{children:[t(r,{children:[e("h2",{children:"Ways to improve the performance of your app:"}),t("ul",{children:[e("li",{children:"avoiding wasted re-renders"}),e("li",{children:"Automatic Batching"}),e("li",{children:"caching expensive operations"}),e("li",{children:"lazy loading components"})]})]}),t(r,{children:[e("h2",{children:"Wasted Re-renders"}),e("div",{style:{position:"relative",width:"auto",height:"34rem",margin:"0 auto"},children:e("img",{className:"fragment fade-in","data-fragment-index":"0",width:"auto",height:"100%",src:"./slide-assets/wasted-re-renders.png",style:{position:"absolute",top:0,left:"25%"}})}),t("aside",{className:"notes",children:[e("p",{children:"React has a cheap represenation of the DOM: Virtual DOM"}),e("p",{children:"react sends mutations with nodes to the DOM"}),e("p",{children:"'knows' when to send mutations to DOM: only if content actually changes"}),e("p",{children:"when having wasted rerenders the virtualy DOM updates and rerenders without sending mutations to the actual DOM since there was no change of content"})]})]}),t(r,{children:[e("h2",{children:"React DEV Tools"}),t("ul",{children:[e("li",{children:e("a",{href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",target:"_blank",rel:"noreferrer",children:"install Chrome Extension"})}),e("li",{children:"inspect your app with the profiler"})]}),e("img",{className:"fragment fade-in",src:"./slide-assets/pilot-devtools.png"}),t("aside",{className:"notes",children:[e("p",{children:'inspect the app together "live session"'}),e("p",{children:"record navigation through the app"}),e("p",{children:"profiler shows rerenders"}),t("p",{children:["#TODO: decision yet to make: inspect our own app or example from"," ",e("a",{href:"https://github.com/hendrikswan/pluralsight-react-performance",target:"_blank",rel:"noreferrer",children:"GitHub"})]}),e("p",{children:"image shows profiler. you can navigate through the rerender cycles and see components that are being rerendered"})]})]}),t(r,{children:[e("h2",{children:"Typical pitfalls when detecting wasted rerenders"}),e(n,{className:"fragment",children:et}),t("ul",{className:"fragment",children:[e("li",{className:"fragment",children:"new on click function is rendered each time parent rerenders"}),t("li",{className:"fragment",children:["solution:"," ",e("a",{href:"https://reactjs.org/docs/hooks-reference.html#usecallback",target:"_blank",rel:"noreferrer",children:"useCallback-hook"})]}),e("li",{className:"fragment",children:"returns memoized version of the callback, only changes if a dependency changes"})]})]}),t(r,{children:[e("h2",{children:"Typical pitfalls when detecting wasted rerenders"}),e(n,{className:"fragment",children:tt}),t("aside",{className:"notes",children:[e("p",{children:"you can also pass dependecies in the array, might be useful on more complex operations"}),e("p",{children:"only using useCallback won't fix the whole problem, it's only one part of the solution"}),e("p",{children:"we need to tell the ChildComponent to only rerender when Props Change"}),e("p",{children:"children need to be optimzed as well: rely on reference equality"})]})]}),t(r,{children:[e("h2",{children:"Typical pitfalls when detecting wasted rerenders"}),t("ul",{children:[e("li",{className:"fragment",children:"children need to be optimized as well"}),t("li",{className:"fragment",children:["only rerender, when Props or references change by using"," ",e("a",{href:"https://reactjs.org/docs/react-api.html#reactmemo",target:"_blank",rel:"noreferrer",children:"React.memo"})]}),e("li",{className:"fragment",children:"In case React.memo has useState, useReducer or useContext Hook in its implementation, it will still rerender on according changes"})]}),e(n,{className:"fragment",children:rt})]}),t(r,{children:[e("h2",{children:"Typical pitfalls when detecting wasted rerenders"}),t("ul",{children:[e("li",{className:"fragment",children:"by default only shallow comparison of props object"}),e("li",{className:"fragment",children:"React.memo takes a second argument where you could provide a comparison function"})]}),e(n,{className:"fragment",children:nt}),t("aside",{className:"notes",children:[e("p",{children:"comparions function always needs to return a boolean, telling the component to rerender or not"}),e("p",{children:"p1, p2 stands for props before, props after"}),e("p",{children:"additional pitfall: parent component passing the props needs to make sure the reference doesn't change too early. e.G. for state updates: copy your state by using the spread operator and then set your State again."}),e("p",{children:"you gain a perfomance boost but still should use it wise, benefits are dependent the components actualy cost of computation so it's rather for medium size to big components"})]})]}),t(r,{children:[e("h2",{children:"When to use React.memo()?"}),e("div",{className:"fragment fade-in",children:t("ul",{children:[t("li",{children:["Pure functional Component",e("ul",{children:e("li",{children:"Your Component is functional and given the same Props, always renders the same output."})})]}),e("li",{children:"Renders often"}),t("li",{children:["Re-renders with the same Props",e("ul",{children:e("li",{children:"Your Component is usually provided with the same props during re-rendering"})})]}),t("li",{children:["Medium to big size",e("ul",{children:e("li",{children:"Your component contains a decent amount of UI-Elements to reason Props equality check."})})]})]})}),e("a",{className:"fragment",href:"https://dmitripavlutin.com/use-react-memo-wisely/",target:"_blank",rel:"noreferrer",children:"\u{1F680} use React.memo() wisely"})]}),t(r,{children:[e("h2",{children:"Automatic Batching"}),t("ul",{children:[e("li",{className:"fragment",children:"New in React 18: Automated Batching"}),e("li",{className:"fragment",children:"batching group state updates, native event handlers are batched as well"})]}),e(n,{className:"fragment",children:st}),e("aside",{className:"notes",children:"this batching example already works since React 17"})]}),t(r,{children:[e("h2",{children:"Automatic Batching"}),e("ul",{children:e("li",{className:"fragment",children:"Since React 18 this also works for state updates inside a context that is not associated with the browser, e.g. for fetch()"})}),e(n,{className:"fragment",children:lt}),e("aside",{className:"notes",children:"this would rerender twice, because rerender would be triggered by both the state update AND the callback of fetch()"})]}),t(r,{children:[e("h2",{children:"Automatic Batching"}),e("ul",{className:"fragment",children:e("li",{className:"fragment",children:"By upgrading the render-method in index.tsx state updates in asynchronous function will cause only one re-rendering process"})}),e(n,{className:"fragment",children:ct}),e("a",{className:"fragment",href:"https://dmitripavlutin.com/use-react-memo-wisely/",target:"_blank",rel:"noreferrer",children:"\u{1F680} read more about automatic batching"})]}),t(r,{children:[e("h2",{children:"Caching expensive operations"}),e("ul",{children:t("li",{className:"fragment",children:[e("a",{href:"https://reactjs.org/docs/hooks-reference.html#usememo",target:"_blank",rel:"noreferrer",children:"useMemo"})," ","is your friend: it returns a memoized value that is only re-calculated when your dependencies change"]})}),e(n,{className:"fragment",children:ot}),e("ul",{className:"fragment",children:e("li",{children:"caution: be aware of the dependecies - always double check"})}),e("aside",{className:"notes",children:e("p",{children:"you might find yourself wondering why component doesn't rerender when you expect it to: typical cause is a missing dependy in the useMemo hook"})})]}),t(r,{children:[e("h2",{children:"Lazy loading expensive components"}),t("ul",{children:[e("li",{className:"fragment",children:"import lazy and Supense from React"}),e("li",{className:"fragment",children:"downloads the component's bundle on demand, renders rest of component and displays Suspense's fallback as long as the lazy loaded component isn't available"}),e("li",{className:"fragment",children:"only makes sense for big component, e.g. when rendering lots of data there"})]}),e(n,{className:"fragment",children:it})]}),t(r,{children:[e("h2",{children:"Lazy loading with React Router"}),t("ul",{children:[e("li",{className:"fragment",children:"lazy load individual route elements or portions of router hierarchy"}),e("li",{className:"fragment",children:"pages that are not required on the landing page can be split into seperate bundles, decreasing load time on initial page and improving performance"})]}),e(n,{className:"fragment",children:at})]}),t(r,{children:[e("h2",{children:"Measure page performance"}),t("ul",{children:[t("li",{className:"fragment",children:[e("a",{href:"https://pagespeed.web.dev/",target:"_blank",rel:"noreferrer",children:"web vital"})," ","or Chrome DevTools 'Lighthouse'"]}),e("li",{className:"fragment",children:"will analyze your performance on mobile and desktop"}),e("li",{className:"fragment",children:"reveals painpoints you can work on"})]}),e("aside",{className:"notes",children:"do a short live session, show some insights"})]})]})),ht=`import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
`,ut=`const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
`,mt=o=>t(d,c(l({},o),{subtitle:e("blockquote",{children:'"Just like React but for mobile devices "'}),children:[t(r,{children:[e("h2",{children:"Basics"}),e("p",{className:"fragment",children:"React Native is a library for building mobile apps with React. It is based on React, and uses the same components, but with some changes to make it work on native platforms like Android and iOS."})]}),t(r,{children:[e("h2",{children:"Components"}),t("p",{className:"fragment",children:["Instead of using HTML tags, React Native uses"," ",e("a",{href:"https://reactnative.dev/docs/next/components-and-apis#basic-components",children:"Components"})," ."]}),e(n,{className:"fragment",children:"<div></div> -> <View></View>"}),e(n,{className:"fragment",children:"<p></p> -> <Text></Text>"})]}),t(r,{children:[e("h2",{children:"Logic"}),e("p",{className:"fragment",children:"The logic can stay the same. We may need to adapt image uploads or other logic to use native components from React Native."})]}),t(r,{children:[e("h2",{children:"Web & App?"}),e("p",{className:"fragment",children:'"Normal" React and React native can live together in a mono-repo!'}),e("p",{className:"fragment",children:"Business logic shall be shared whilst the view needs to be implemented twice."})]}),t(r,{children:[e("h2",{children:"How to start"}),e("p",{className:"fragment",children:"We can simply add the imports for react native and add them to our repo and then restructure the code."}),e("p",{className:"fragment",children:"We could also use expo, which is a platform for building native apps more easily as it also includes approaches to directly test on iOS and Android Emulators and devices."})]}),t(r,{children:[e("h2",{children:"Bootsstrapping with expo"}),t("p",{className:"fragment",children:["Just have a look here ",e("a",{href:"https://expo.dev/",children:"expo"})]}),e("p",{className:"fragment",children:"We start by installing the expo-cli"}),e(n,{className:"fragment",children:"npm install --global expo-cli"}),e("p",{className:"fragment",children:"Then simply use npx to create the expo application"}),e(n,{className:"fragment",children:"npx create-expo-app my-app"})]}),t(r,{children:[e("h2",{children:"Styling"}),t("p",{children:["You'll use the ",e("a",{href:"https://reactnative.dev/docs/next/layout-props",children:"Stylesheet"})," Component from react native. It is almost similar to CSS. Have a look at the Stylesheet link to get all stylings for the different components"]}),e(n,{highlightedLines:"4|9|10-15",children:ht})]}),t(r,{children:[e("h2",{children:"Navigation"}),t("p",{children:["You can have different ",e("a",{href:"https://github.com/react-navigation/react-navigation",children:"Routingnavigators"}),". The most common ones are the Stack and Bottom Tab"]}),e(n,{children:ut})]}),t(r,{children:[e("h2",{children:"Monorepo - Structure"}),e("img",{style:{width:800},src:"./slide-assets/monorepo.webp"})]}),t(r,{children:[e("h2",{children:"Further Reads"}),t("ul",{children:[e("li",{children:e("a",{href:"https://reactnative.dev/docs/environment-setup",target:"_blank",rel:"noreferrer",children:"React Native"})}),e("li",{children:e("a",{href:"https://docs.expo.dev/get-started/installation/",target:"_blank",rel:"noreferrer",children:"Expo"})})]})]}),e(r,{children:e("h2",{children:"FIN \u{1F92A}"})})]})),pt=`import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
`,gt=o=>{const i=({id:a,pixel:u})=>e(r,{dataAutoAnimate:!0,children:t("div",{style:{position:"relative"},children:[e("img",{src:"./slide-assets/atomic-design-example.png"}),e("div",{"data-id":a,style:{position:"absolute",background:"#191919",height:"100%",width:"100%",top:0,marginLeft:u}})]})});return t(d,c(l({},o),{children:[e(r,{children:e("h2",{children:"Atomic Design"})}),[207,390,572,755,979].map(a=>e(i,{id:"hi",pixel:a},a)),t(r,{children:[e("h2",{children:"Storybook"}),e("video",{autoPlay:!0,playsInline:!0,loop:!0,"data-autoplay":!0,children:e("source",{src:"https://storybook.js.org/cdb19b23da5e96c112ff3b8fded28a82/storybook-hero-video-optimized-lg.mp4",type:"video/mp4"})})]}),t(r,{children:[e("h2",{children:"Why you should use it"}),t("ul",{children:[e("li",{className:"fragment",children:"faster and easier development (isolation)"}),e("li",{className:"fragment",children:"better awareness about components"}),e("li",{className:"fragment",children:"easier to test edge cases"}),e("li",{className:"fragment",children:"better documentation"})]})]}),t(r,{children:[e("h2",{children:"Example"}),e(n,{highlightedLines:"5,13",children:pt})]}),t(r,{children:[e("h2",{children:"How to Storybook"}),e("p",{children:"It's really easy! You can set it up from scratch with a new project or simply add it to an existing one."}),e("p",{children:"For existing projects, Storybook will even notice your Framework & Bundler during install"}),t("p",{children:[e("a",{href:"https://storybook.js.org/docs/get-started",children:"Docs: Get Started with Storybook"}),e(n,{children:"npx storybook@latest init"})]})]}),t(r,{children:[e("h2",{children:"Addons"}),e("img",{src:"./slide-assets/storybook-a11y-plugin.png"})]}),t(r,{children:[e("h2",{children:"Component library"}),e("img",{src:"./slide-assets/component-lib-approach.png"})]}),t(r,{children:[e("h2",{children:"Further Reads"}),t("ul",{children:[e("li",{children:e("a",{href:"https://storybook.js.org/docs/react/get-started/introduction",target:"_blank",rel:"noreferrer",children:"Storybook Docs"})}),e("li",{children:e("a",{href:"https://bradfrost.com/blog/post/atomic-web-design/",target:"_blank",rel:"noreferrer",children:"Atomic Design"})}),e("li",{children:e("a",{href:"https://bradfrost.com/blog/post/atomic-design-and-storybook/",target:"_blank",rel:"noreferrer",children:"Atomic Design & Storybook"})})]})]}),t(r,{children:[t("div",{style:{display:"flex",justifyContent:"center",gap:24},children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("small",{children:"\u23F1\uFE0F 40min"})]}),t("ul",{children:[t("li",{children:["Extend your current App with Storybook following the ",e("a",{href:"https://storybook.js.org/docs/get-started",children:"Docs"})]}),e("li",{children:"Create a 'Story' for your Book-Component"}),e("li",{children:"Write an interaction test using Storybook's 'play'-function: "}),t("ul",{children:[e("li",{children:"Create another Story for our Add-Book-Form"}),e("li",{children:"Test the form by automating the user's input in our form fields and submitting it."})]})]})]})]}))},ft=`test("loads and displays book list", async () => {
    render(<BookOverview />);
    expect(await screen.findByText("Hans")).toBeDefined();
});
`,yt=`screen.findByAltText();
screen.findByDisplayValue();
screen.findByLabelText();
screen.findByPlaceholderText();
screen.findByRole();
screen.findByTestId();
screen.findByText();
screen.findByTitle();
`,bt=`beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () =>
        Promise.resolve({
          books: [
            {
              "title": "An Introduction to C & GUI Programming, 2nd Edition",
              ...
            }
          ]
        })
    } as Response)
  );
});
`,kt=`test("Fetches and displays books", async () => {
  await act(() => {
    render(<BookList />);
  }); 
  await waitFor(() => expect(screen.getByText("Snowflake: The Definitive Guide")).toBeInTheDocument());
});
`,vt=`const handleClick = jest.fn()
render(<Button onClick={handleClick}>Click Me</Button>)
fireEvent.click(screen.getByText(/click me/i))
expect(handleClick).toHaveBeenCalledTimes(1)
`,wt=`const user = { name: "John", age: 25 };

test('user has correct properties', () => {
  expect(user).toEqual({ name: "John", age: 25 });
  expect(user).toHaveProperty('name', "John");
});
`,Rt="yarn add -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom",Nt="yarn add -D ts-jest @types/jest @types/testing-library__react @types/testing-library__jest-dom",xt=`//jest.config.js
/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};`,Ct=`// package.json
...
"scripts": {
  ...
  "test": "jest"
}
...`,St=o=>t(d,c(l({},o),{children:[t(r,{children:[e("h2",{children:"Ways of testing"}),t("ul",{children:[e("li",{className:"fragment",children:"Unit Tests"}),e("li",{className:"fragment",children:"e2e Tests (Running the complete app)"}),e("li",{className:"fragment",children:"Component Tests (Rendering components)"})]}),e("aside",{className:"notes",children:"We only want to look at rendering & testing the components, since unit and e2e tests are not react specific."})]}),t(r,{children:[e("h2",{children:"React Testing Library"}),t("p",{children:["A set of helpers to test React ",e("strong",{children:"components"}),", without relying on implementation details."]})]}),t(r,{children:[e("h2",{children:"Example"}),e(n,{className:"fragment",children:ft})]}),t(r,{children:[e("h2",{children:"Helper functions"}),e(n,{className:"fragment",children:yt})]}),t(r,{children:[e("h2",{children:"API Mocking"}),e(n,{className:"fragment",children:bt})]}),e(r,{children:e(n,{className:"fragment",children:kt})}),t(r,{children:[e("h2",{children:"Simulate actions"}),e(n,{className:"fragment",children:vt})]}),t(r,{children:[e("h2",{children:"Further Reads"}),t("ul",{children:[e("li",{children:e("a",{href:"https://reactjs.org/docs/testing.html",target:"_blank",rel:"noreferrer",children:"React Docs"})}),e("li",{children:e("a",{href:"https://testing-library.com/docs/react-testing-library/intro",target:"_blank",rel:"noreferrer",children:"React Testing Library"})}),e("li",{children:e("a",{href:"https://jestjs.io/docs/jest-object",target:"_blank",rel:"noreferrer",children:"Jest object"})})]})]}),e(r,{children:t("h2",{children:[e("a",{href:"https://jestjs.io/docs/jest-object",target:"_blank",rel:"noreferrer",children:"Jest object"}),e(n,{className:"fragment",children:wt})]})}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("code",{children:"git checkout 06-forms-chapter"}),e("p",{children:"Setup for testing"}),e(n,{language:"bash",children:Rt}),e(n,{language:"bash",children:Nt})]}),t(r,{children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("p",{children:"Create / modify files"}),e(n,{language:"bash",children:xt}),e(n,{language:"bash",children:Ct})]}),t(r,{children:[t("div",{style:{display:"flex",justifyContent:"center",gap:24},children:[e("h2",{children:"\u{1F4AA} Exercise"}),e("small",{children:"\u23F1\uFE0F 55min"})]}),t("ul",{children:[e("li",{children:"Implement test that verifies isCheap-badge logic"}),t("ul",{children:[e("li",{children:'show "cheap" on price < 30'}),e("li",{children:'show "expensive" on price > 30'})]}),e("li",{children:"If you're done, feel free to implement further tests."})]})]})]}));const y=({scale:o=1})=>t("div",{className:"app","data-id":"logo",style:{transform:"scale("+o+")"},children:[e("div",{className:"react"}),e("div",{className:"dot"})]});const Bt={plugins:[S],slideNumber:!0,history:!0},At=o=>(p.exports.useEffect(()=>{new C(Bt).initialize()},[]),e("div",{className:"reveal",children:e("div",{className:"slides",children:o.children})})),Ft=()=>{const o=[{title:"Comparison of Frameworks",component:X},{title:"React in a nutshell \u{1F95C}",component:Ze},{title:"Components & Styling",component:ge},{title:"Conditional Rendering",component:Ne},{title:"Hooks & Databinding",component:_e},{title:"Context",component:Fe},{title:"Routing",component:z},{title:"Forms",component:Ve},{title:"Testing",component:St},{title:"Atomic Design & Storybook",component:gt},{title:"Improving Performance",component:dt},{title:"React Native",component:mt}];return t(At,{children:[e(r,{isMain:!0,dataAutoAnimate:!0,children:e(y,{scale:2})}),t(r,{isMain:!0,"data-auto-animate":!0,dataAutoAnimate:!0,children:[e("h2",{children:"React Training"}),e("div",{style:{marginTop:50},children:e(y,{})})]}),t(r,{isMain:!0,children:[e("h2",{children:"Why we are here"}),e("p",{children:"React: A JavaScript library for building user interfaces"}),t("p",{children:["\u{1F5A5} ",e("a",{href:"https://reactjs.org/",children:"https://reactjs.org"})]}),e("aside",{className:"notes",children:"Heavily used in the industry. Makes it painless to create interactive UIs. React = `it reacts to user inputs``"})]}),e(V,{chapter:o}),o.map((i,a)=>e(i.component,{title:i.title,index:a+1},a)),t(r,{isMain:!0,children:[e("h2",{children:"Thanks a lot!"}),e("p",{children:"Please fill out our survey, so that we can keep on improving! \u{1F60A}"})]})]})};B.render(e(A.StrictMode,{children:e(Ft,{})}),document.getElementById("root"));
