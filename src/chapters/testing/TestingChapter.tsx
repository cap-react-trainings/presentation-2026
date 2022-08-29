import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const snippet = `test("loads and displays book list", async () => {
    render(<BookOverview />);
    expect(await screen.findByText("Hans")).toBeDefined();
});
`;

const snippet2 = `screen.findByAltText();
screen.findByDisplayValue();
screen.findByLabelText();
screen.findByPlaceholderText();
screen.findByRole();
screen.findByTestId();
screen.findByText();
screen.findByTitle();
`;

const snippet3 = `server.use(
    rest.get("/books", (req, res, ctx) => {
    return res(
        ctx.json([{ id: 1 })
    )})
);
`;

const snippet4 = `server.use(
    rest.get("/books", (req, res, ctx) => {
        return res(ctx.status(500));
    })
);
`;

const setup1 = `yarn add -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom`;
const setup2 = `yarn add -D ts-jest @types/jest @types/testing-library__react @types/testing-library__jest-dom`;
const setup3 = `//jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};`;
const setup4 = `// package.json
...
"scripts": {
  ...
  "test": "jest"
}
...`;

const TestingChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter {...props}>
      <Slide>
        <h2>Ways of testing</h2>
        <ul>
          <li className='fragment'>Unit Tests</li>
          <li className='fragment'>e2e Tests (Running the complete app)</li>
          <li className='fragment'>Component Tests (Rendering components)</li>
        </ul>
        <aside className='notes'>
          We only want to look at rendering &amp; testing the components, since unit and e2e tests are not react specific.
        </aside>
      </Slide>
      <Slide>
        <h2>React Testing Library</h2>
        <p>
          A set of helpers to test React <strong>components</strong>, without relying on implementation details.
        </p>
      </Slide>
      <Slide>
        <h2>Example</h2>
        <Code className='fragment'>{snippet}</Code>
      </Slide>
      <Slide>
        <h2>Helper functions</h2>
        <Code className='fragment'>{snippet2}</Code>
      </Slide>
      <Slide>
        <h2>API Mocking with MSW</h2>
        <Code className='fragment'>{snippet3}</Code>
        <Code className='fragment'>{snippet4}</Code>
      </Slide>
      <Slide>
        <h2>Further Reads</h2>
        <ul>
          <li>
            <a href='https://reactjs.org/docs/testing.html' target='_blank' rel='noreferrer'>
              React Docs
            </a>
          </li>
          <li>
            <a href='https://testing-library.com/docs/react-testing-library/intro' target='_blank' rel='noreferrer'>
              React Testing Library
            </a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <p>Setup for testing</p>
        <Code language='bash'>{setup1}</Code>
        <Code language='bash'>{setup2}</Code>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <p>Create / modify files</p>

        <Code language='bash'>{setup3}</Code>
        <Code language='bash'>{setup4}</Code>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <ul>
          <li>Implement test that verifies isCheap-badge logic</li>
          <ul>
            <li>show &quot;cheap&quot; on price &lt; 30</li>
            <li>show &quot;expensive&quot; on price &gt; 30</li>
          </ul>
          <li>If you're done, feel free to implement further tests.</li>
        </ul>
      </Slide>
    </Chapter>
  );
};

export default TestingChapter;
