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

const snippet3 = `responseData = {
  books: [
    {
      title: "Snowflake: The Definitive Guide",
      subtitle:
        "Architecting, Designing, and Deploying on the Snowflake Data Cloud",
      isbn13: "9781098103828",
      price: "$58.90",
      image: "https://itbook.store/img/books/9781098103828.png",
      url: "https://itbook.store/books/9781098103828",
    },
    ...
  ]
};

beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: vi.fn().mockResolvedValue(resonseData),
      }),
    );
  });
`;

const snippet4 = `test("Fetches and displays books", async () => {
  await act(() => {
    render(
      <MemoryRouter>
        <BookList />
      </MemoryRouter>
    );
  }); 
  await waitFor(() => expect(screen.getByText("Snowflake: The Definitive Guide")).toBeInTheDocument());
});
`;

const snippet5 = `const handleClick = vi.fn();
render(<Button onClick={handleClick}>Click Me</Button>);

const button = await screen.findByText("Click Me");
await user.click(button);

expect(handleClick).toHaveBeenCalledTimes(1);
`;

const snippet6 = `const user = { name: "John", age: 25 };

test('user has correct properties', () => {
  expect(user).toEqual({ name: "John", age: 25 });
  expect(user).toHaveProperty('name', "John");
});
`;

const setup1 = `yarn add -D vitest jsdom`;
const setup2 = `yarn add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event`;
const setup21 = `yarn add -D @types/jest @types/testing-library__react @types/testing-library__jest-dom`;
const setup3 = `//src/test/setup-test
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});`;
const setup4 = `//vite.config.ts
export default defineConfig({
  ...
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup-test"],
  },
});`;
const setup5 = `// package.json
...
"scripts": {
  ...
  "test": "vitest run",
  "test:watch": "vitest"
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
        <Code>{snippet}</Code>
      </Slide>
      <Slide>
        <h2>Helper functions</h2>
        <Code>{snippet2}</Code>
      </Slide>
      <Slide>
        <h2>API Mocking</h2>
        <Code>{snippet3}</Code>
      </Slide>
      <Slide>
        <Code>{snippet4}</Code>
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
            <a href='https://vitest.dev/guide/mocking' target='_blank' rel='noreferrer'>
              Mocking with vitest
            </a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <p>Usual setup for testing:</p>
        <Code language='bash'>{setup1}</Code>
        <Code language='bash'>{setup2}</Code>
      </Slide>
      <Slide>
        <Code language='bash'>{setup3}</Code>
        <Code language='bash'>{setup4}</Code>
      </Slide>
      <Slide>
        <Code language='bash'>{setup5}</Code>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <code>git checkout 07-initial-testing-setup</code>
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
