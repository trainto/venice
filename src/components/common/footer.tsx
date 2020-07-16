import React from 'react';
import Store from '../../store';

const Footer = React.memo(() => {
  const store = Store.useStore();

  return (
    <footer className="px-5">
      <hr />
      <a href="https://github.com/trainto/venice" target="_blank" rel="noopener noreferrer">
        <img src={require(`../../assets/github-${store.theme}.png`)} alt="github" width={24} height={24} />
      </a>

      <span className="float-right text-muted">trainto ©2020</span>
    </footer>
  );
});

export default Footer;
