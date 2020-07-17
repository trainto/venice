import React, { useState, useRef, useEffect } from 'react';

const Input = React.memo(({ onEnter }: { onEnter: (input: string) => void }) => {
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
        ref={inputRef}
        onBlur={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      />
    </div>
  );
});

export default Input;
