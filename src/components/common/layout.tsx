import React from 'react';
import Footer from './footer';
import ThemeToggle from './theme-toggle';
import AsyncComponent from './async-component';
import { HashRouter, Route } from 'react-router-dom';
import './layout.css';
import Menu from '../menu';

const Layout = React.memo(() => {
  return (
    <div id="layout" className="pt-3 mx-auto h-100">
      <div className="text-right" style={{ height: '5%' }}>
        <ThemeToggle />
      </div>

      <div style={{ height: '85%' }}>
        <HashRouter basename="/">
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/game">
            <AsyncComponent getComponent={() => import('../game')} />
          </Route>
        </HashRouter>
      </div>

      <Footer />
    </div>
  );
});

export default Layout;
