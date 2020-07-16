import React from 'react';
import './theme-toggle.css';
import Store from '../../store';

const ThemeToggle = React.memo(() => {
  const store = Store.useStore();

  const handleToggle = () => {
    store.switchTheme();
  };

  return (
    <div className="d-inline-block position-relative" style={{ cursor: 'pointer' }} onClick={handleToggle}>
      <div style={{ width: 50, height: 24, borderRadius: 50, backgroundColor: '#0f1114' }}>
        <div className="position-absolute text-center w-100 h-100" style={{ left: 0, top: 0 }}>
          <img
            src={require('../../assets/moon.png')}
            width={16}
            height={16}
            alt="moon"
            style={{ verticalAlign: 'inherit', marginTop: '4px' }}
          />
          <img
            src={require('../../assets/sun.png')}
            width={16}
            height={16}
            alt="sun"
            className="ml-2"
            style={{ verticalAlign: 'inherit', marginTop: '4px' }}
          />
        </div>
        <div className={`thumb ${store.theme === 'dark' ? 'checked' : ''}`} />
      </div>
    </div>
  );
});

export default ThemeToggle;
