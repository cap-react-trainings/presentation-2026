import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import ArrowDown from '../../components/helper/icons/ArrowDown';
import Slide from '../../components/reveal/Slide';

const angularHtml = `<ul>
  <li *ngFor="let todo of todos">{{todo}}</li>
</ul>
<form (ngSubmit)="addTodo()">
  <!-- Binding -->
  <input name="todotext" [(ngModel)]="todoText">
  <input type="submit" value="Add Todo">
</form>

        `;

const angularTs = `import { Component } from '@angular/core';
@Component({
  selector: 'app-root’,
  templateUrl: './app.component.html’,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: string[] = [];
  todoText = ’’;
  ngOnInit() {
    const existingTodos = localStorage.getItem('todos’);
    this.todos = JSON.parse(existingTodos as string) || [];
  }
}
`;

const react = `import { useEffect, useState } from "react";
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
`;

const vue = `<template>
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
</script>

`;

const ComparisonChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter {...props}>
      <Slide>
        <h2>Some number crunching</h2>
      </Slide>
      <Slide>
        <h2>Stats at github</h2>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th></th>
              <th>Angular</th>
              <th>React</th>
              <th>Vue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Watchers</td>
              <td>3200</td>
              <td>6700</td>
              <td>6300</td>
            </tr>
            <tr>
              <td>Stars</td>
              <td>71k</td>
              <td>164k</td>
              <td>200k</td>
            </tr>
            <tr>
              <td>Forks</td>
              <td>19k</td>
              <td>33k</td>
              <td>32k</td>
            </tr>
            <tr>
              <td>Contributers</td>
              <td>1350</td>
              <td>1550</td>
              <td>380</td>
            </tr>
            <tr>
              <td>Used by</td>
              <td>1.7M</td>
              <td>5.7M</td>
              <td>167k</td>
            </tr>
          </tbody>
        </table>
        <small>https://www.codeinwp.com/blog/angular-vs-vue-vs-react/</small>
      </Slide>
      <Slide>
        <h2>Github Stars</h2>
        <img src='./slide-assets/framework-github-starts.png' />
        <small>https://www.codeinwp.com/blog/angular-vs-vue-vs-react/</small>
      </Slide>
      <Slide>
        <h2>Stackoverflow</h2>
        <img src='./slide-assets/framework-stackoverflow.png' />
        <small>https://scand.com/company/blog/top-5-front-end-development-frameworks/</small>
      </Slide>
      <Slide>
        <h2>npm downloads</h2>
        <img src='./slide-assets/framework-npm.png' />
        <small>https://os-system.com/blog/best-front-end-frameworks-for-web-development/</small>
      </Slide>
      <Slide>
        <h2>user satisfaction</h2>
        <img src='./slide-assets/framework-dx.png' />
        <small>https://os-system.com/blog/best-front-end-frameworks-for-web-development/</small>
      </Slide>
      <Slide>
        <h2>jobs</h2>
        <img src='./slide-assets/framework-jobs.png' />
        <small>https://www.codeinwp.com/blog/angular-vs-vue-vs-react/</small>
      </Slide>
      <Slide>
        <h2>More Details</h2>
      </Slide>
      <Slide>
        <h2>Facts</h2>
        <table style={{ width: '100%', fontSize: '1.75rem' }}>
          <thead>
            <tr>
              <th></th>
              <th>Angular</th>
              <th>React</th>
              <th>Vue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Type</td>
              <td>Framework</td>
              <td>Library</td>
              <td>Library</td>
            </tr>
            <tr>
              <td>Languages</td>
              <td>HTML, SASS, TypeScript</td>
              <td>HTML, CSS, JS/TS</td>
              <td>HTML, CSS, JS/TS</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>Ionic (CSS needs adaption)</td>
              <td>React Native (HTML needs adaption)</td>
              <td>Vue Native (comiled to react native)</td>
            </tr>
          </tbody>
        </table>
      </Slide>
      <Slide>
        <h2>Facts</h2>
        <table style={{ width: '100%', fontSize: '1.75rem' }}>
          <thead>
            <tr>
              <th></th>
              <th>Angular</th>
              <th>React</th>
              <th>Vue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Upgrading</td>
              <td>Needed every year (major version change). Quite difficult.</td>
              <td>No upgrade needed, built for stability. One upgrade command.</td>
              <td>Not regulary. Migration tool exists.</td>
            </tr>
            <tr>
              <td>Payload</td>
              <td>500KB</td>
              <td>35KB</td>
              <td>20KB</td>
            </tr>
            <tr>
              <td>Loading time (mean of DOM, Memory & Startup)</td>
              <td>1.54s</td>
              <td>1.17s</td>
              <td>1.11s</td>
            </tr>
          </tbody>
        </table>
      </Slide>
      <Slide>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div>HTML, CSS, JS</div>
          <div style={{ paddingTop: 20, paddingBottom: 10 }}>
            <ArrowDown />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
            <div style={{ background: 'grey', borderRadius: '10%', padding: 10 }}>
              <h5>React</h5>
              <small>App.tsx</small>
            </div>
            <div style={{ background: 'grey', borderRadius: '10%', padding: 10 }}>
              <h5>Vue</h5>
              <small>App.vue</small>
            </div>
            <div style={{ background: 'grey', borderRadius: '10%', padding: 10 }}>
              <h5>Angular</h5>
              <small>App.component.css</small>
              <br />
              <small>App.component.html</small>
              <br />
              <small>App.component.ts</small>
              <br />
              <small>main.module.ts</small>
            </div>
          </div>
        </div>
      </Slide>
      <Slide>
        <h2>Example: TODO App</h2>
        <img src='./slide-assets/framework-todo.png' />
        <small>https://www.youtube.com/watch?v=cuHDQhDhvPE</small>
      </Slide>
      <Slide>
        <h2>Angular</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
          <Code>{angularHtml}</Code>
          <Code>{angularTs}</Code>
        </div>
      </Slide>
      <Slide>
        <h2>React</h2>
        <div>
          <Code>{react}</Code>
        </div>
      </Slide>
      <Slide>
        <h2>Vue</h2>
        <div>
          <Code>{vue}</Code>
        </div>
      </Slide>
      <Slide>
        <h2>Same App: 10 Frameworks</h2>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/cuHDQhDhvPE'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      </Slide>
    </Chapter>
  );
};

export default ComparisonChapter;
