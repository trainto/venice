import React from 'react';
import Store from '../../store';

const Header = React.memo(() => {
  const store = Store.useStore();

  return (
    <div>
      <h1
        style={{
          fontSize: '5rem',
          textShadow: store.theme === 'dark' ? '5px 5px rgba(255, 255, 255, 0.4)' : '5px 5px rgba(0, 0, 0, 0.4)',
        }}
      >
        베네치아: Web
      </h1>
      <br />
      <img className="rounded-circle" src={require('../../assets/typing.gif')} alt="Typing animation" />
    </div>
  );
});

export default Header;
