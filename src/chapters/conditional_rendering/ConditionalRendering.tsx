import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const sayHiComponent = `  interface Props {
    userName?: string; // optional
  }
  const SayHi: React.FC = (props: Props) => {
    if (props.userName) {
      return <h1>Hi {props.userName}!</h1>
    } else {
      return <h1>Hello Guest!</h1>
    }
  }
`;

const loginBtn = `export default LoginButton: React.FC = () => {
    return <button>Login</button>
}`;

const logoutBtn = `export default LogoutButton: React.FC = () => {
    return <button>Logout</button>
}`;

const renderButton = `const AuthenticationComponent: React.FC = (props: Props) => {
  let button;
  if (props.userName) {
    button = <LogoutButton />
  } else {
    button = <LoginButton />
  }
  return <div>{button}</div>
}
`;

const users = `const UsersList: React.FC = (props: Props) => {
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
`;

const users2 = `const UsersList: React.FC = (props: Props) => {
  const users = props.users
  return (
    <div>
      <h2>My fancy app</h2>
      {users.length > 0 ? (
        <p>Your app is used by {users.length} users.</p>
      ) : (
        <p>No one is interested in your app ☹️</p>
      )}
    </div>
  )
}`;

const users3 = `const UsersList: React.FC = (props: Props) => {
  if (!props.users) {
    return null;
  }
  return (
    <div>
      <h2>My fancy app</h2>
      <p>Your app is used by {users.length} users.</p>
    </div>
  )
}`;

const ConditionalRenderingChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter
      {...props}
      subtitle={
        <ul>
          <li>rendering different components</li>
          <li>inline conditions</li>
        </ul>
      }
    >
      <Slide>
        <h2>Component uses different return statements</h2>
        <Code className='fragment'>{sayHiComponent}</Code>
      </Slide>
      <Slide>
        <h2>Conditionally assign component to variable</h2>
        <div className='fragment'>
          <Code className=''>{loginBtn}</Code>
          <Code className=''>{logoutBtn}</Code>
        </div>
        <Code className='fragment'>{renderButton}</Code>
      </Slide>
      <Slide>
        <h2>Inline Logic - variant 1</h2>
        <Code className='fragment'>{users}</Code>
      </Slide>
      <Slide>
        <h2>Inline Logic - variant 2</h2>
        <Code className='fragment'>{users2}</Code>
      </Slide>
      <Slide>
        <h2>Prevent component from rendering</h2>
        <Code className='fragment'>{users3}</Code>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <ul>
          <li>
            Extend your Book-Component with a badge that notifies the user when a book is not available in store. (Pass an additional prop
            to your Book-Component).
          </li>
          <li>Bear in mind that there might be a case where no books are available for rendering. Create a UI for that.</li>
        </ul>
      </Slide>
    </Chapter>
  );
};

export default ConditionalRenderingChapter;
