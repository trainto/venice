import React from 'react';
import Footer from './footer';
import ThemeToggle from './theme-toggle';
import AsyncComponent from './async-component';
import { HashRouter, Route } from 'react-router-dom';
import Menu from '../menu';
import { WIDTH } from '../../lib/game-engine';

const Layout = React.memo(() => {
  return (
    <div id="layout" className="pt-3 mx-auto h-100" style={{ width: WIDTH }}>
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
