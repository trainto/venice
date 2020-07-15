import React, { useState, useRef } from 'react';
import './theme-toggle.css';

const ThemeToggle = React.memo(() => {
  const [checked, setChecked] = useState(false);

  const checkBoxRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    const checkBox = checkBoxRef.current;
    if (!checkBox) {
      return;
    }

    checkBox.checked = !checkBox.checked;
    setChecked(checkBox.checked);
  };

  return (
    <div className="d-inline-block position-relative" style={{ cursor: 'pointer' }} onClick={handleToggle}>
      <input type="checkbox" className="d-none" ref={checkBoxRef} />

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
        <div className={`thumb ${checked ? 'checked' : ''}`} />
      </div>
    </div>
  );
});

export default ThemeToggle;
