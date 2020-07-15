import React from 'react';
import './layout.css';
import Footer from './footer';

const Layout = React.memo(() => {
  return (
    <div id="layout" className="pt-3 mx-auto h-100">
      <div className="text-right" style={{ height: '5%' }}>
        Theme
      </div>

      <div style={{ height: '80%' }}>Content</div>

      <Footer />
    </div>
  );
});

export default Layout;
