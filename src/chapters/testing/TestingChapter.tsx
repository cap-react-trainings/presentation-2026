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

const snippet3 = `beforeEach(() => {
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
`;

const snippet4 = `test("Fetches and displays books", async () => {
  await act(() => {
    render(<BookList />);
  }); 
  await waitFor(() => expect(screen.getByText("Snowflake: The Definitive Guide")).toBeInTheDocument());
});
`;

const snippet5 = `const handleClick = jest.fn()
render(<Button onClick={handleClick}>Click Me</Button>)
fireEvent.click(screen.getByText(/click me/i))
expect(handleClick).toHaveBeenCalledTimes(1)
`;

const snippet6 = `const user = { name: "John", age: 25 };

test('user has correct properties', () => {
  expect(user).toEqual({ name: "John", age: 25 });
  expect(user).toHaveProperty('name', "John");
});
`;

const setup1 = `yarn add -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom`;
const setup2 = `yarn add -D ts-jest @types/jest @types/testing-library__react @types/testing-library__jest-dom`;
const setup3 = `//jest.config.js
/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
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
        <h2>API Mocking</h2>
        <Code className='fragment'>{snippet3}</Code>
      </Slide>
      <Slide>
        <Code className='fragment'>{snippet4}</Code>
      </Slide>
      <Slide>
        <h2>Simulate actions</h2>
        <Code className='fragment'>{snippet5}</Code>
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
          <li>
            <a href='https://jestjs.io/docs/jest-object' target='_blank' rel='noreferrer'>
              Jest object
            </a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>
          <a href='https://jestjs.io/docs/jest-object' target='_blank' rel='noreferrer'>
            Jest object
          </a>
          <Code className='fragment'>{snippet6}</Code>
        </h2>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <code>git checkout 06-forms-chapter</code>
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
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <h2>💪 Exercise</h2>
          <small>⏱️ 55min</small>
        </div>
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
