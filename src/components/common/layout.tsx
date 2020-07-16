import React from 'react';
import Footer from './footer';
import ThemeToggle from './theme-toggle';
import AsyncComponent from './async-component';
import './layout.css';

const Layout = React.memo(() => {
  return (
    <div id="layout" className="pt-3 mx-auto h-100">
      <div className="text-right" style={{ height: '5%' }}>
        <ThemeToggle />
      </div>

      <div style={{ height: '85%' }}>
        <AsyncComponent getComponent={() => import('../game')} />
      </div>

      <Footer />
    </div>
  );
});

export default Layout;
