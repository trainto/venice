import React, { useState } from 'react';

const Input = React.memo(({ onEnter }: { onEnter: (input: string) => void }) => {
  const [value, setValue] = useState('');

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onEnter(value);
      setValue('');
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleEnter}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            onEnter(value);
            setValue('');
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
});

export default Input;
