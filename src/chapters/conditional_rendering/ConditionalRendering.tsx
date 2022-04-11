import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Slide from '../../components/reveal/Slide';

const sayHiComponent = `
  interface Props {
    userName?: string;
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

const logoutBtn = `export default LoginButton: React.FC = () => {
    return <button>Logout</button>
}`;

const renderButton = `
  const AuthenticationComponent: React.FC = (props: Props) => {
    let button;
    if (props.userName) {
      button = <LogoutButton />
    } else {
      button = <LoginButton />
    }
    return <div>{button}</div>
  }
`;

const users = `
  const UsersList: React.FC = (props: Props) => {
    const users = props.users
    return (
      <div>
        <h2>My fancy app</h2>
       { users.legnth > 0 &&  // alternative: !!users.length
        <p>Your app is used by {users.length} users.</p>
      }
      </div>
    )
  }
`;

const users2 = `
  const UsersList: React.FC = (props: Props) => {
    const users = props.users
    return (
      <div>
        <h2>My fancy app</h2>
       { users.legnth > 0 ?
        <p>Your app is used by {users.length} users.</p>
        :
        <p>No one is interested in you app :-( </p>
      }
      </div>
    )
  }`;

const users3 = `
  const UsersList: React.FC = (props: Props) => {
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
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {sayHiComponent}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Conditionally assign component to varible</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {loginBtn} <br />
            {logoutBtn}
          </code>
        </pre>
        <pre className='fragment'>
          <code data-trim data-noescap data-line-numbers>
            {renderButton}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Inline Logic - variant 1</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {users}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Inline Logic - variant 2</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {users2}
          </code>
        </pre>
      </Slide>
      <Slide>
        <h2>Prevent component from rendering</h2>
        <pre className='fragment'>
          <code data-trim data-noescape data-line-numbers>
            {users3}
          </code>
        </pre>
      </Slide>
    </Chapter>
  );
};

export default ConditionalRenderingChapter;
