import React from 'react';
import Store from '../../store';
import imgGithubDark from '../../assets/github-dark.png';
import imgGithubLight from '../../assets/github-light.png';

const Footer = React.memo(() => {
  const store = Store.useStore();

  return (
    <footer className="px-5">
      <hr />
      <a href="https://github.com/trainto/venice" target="_blank" rel="noopener noreferrer">
        <img src={store.theme === 'dark' ? imgGithubDark : imgGithubLight} alt="github" width={24} height={24} />
      </a>

      <span className="float-right text-muted">trainto ©2020</span>
    </footer>
  );
});

export default Footer;
