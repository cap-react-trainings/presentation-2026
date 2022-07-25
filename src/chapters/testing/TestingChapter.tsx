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
        <Code className='fragment' style={{ marginBottom: 10 }}>
          {snippet3}
        </Code>
        <Code className='fragment'>{snippet4}</Code>
      </Slide>
      <Slide>
        <h2>Further Reads</h2>
        <ul>
          <li>
            <a href='https://reactjs.org/docs/testing.html'>React Docs</a>
          </li>
          <li>
            <a href='https://testing-library.com/docs/react-testing-library/intro'>React Testing Library</a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
      </Slide>
    </Chapter>
  );
};

export default TestingChapter;
