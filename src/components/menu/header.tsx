import React, { useRef, useState } from 'react';
import Store from '../../store';
import './header.css';
import { useInterval } from '../../lib/custom-hooks';
import { isNumber } from 'util';

const Header = React.memo(() => {
  const [count, setCount] = useState(1);

  const store = Store.useStore();

  const charsRef = useRef([
    { char: 'ㄱ', count: 0 },
    { char: 'ㄴ', count: 0 },
    { char: 'ㄷ', count: 0 },
    { char: 'A', count: 0 },
    { char: 'b', count: 0 },
    { char: 'c', count: 0 },
    { char: 'D', count: 0 },
    { char: 'g', count: 0 },
    { char: 'H', count: 0 },
    { char: 'j', count: 0 },
    { char: 'M', count: 0 },
    { char: 'O', count: 0 },
    { char: 'Q', count: 0 },
    { char: 't', count: 0 },
    { char: 'Z', count: 0 },
  ]);

  const divRefs: React.RefObject<HTMLDivElement>[] = charsRef.current.map(() => useRef<HTMLDivElement>(null));

  useInterval(() => {
    const candidateIndices = charsRef.current.reduce((memo, char, i) => {
      if (char.count === 0) {
        memo.push(i);
        return memo;
      }
      return memo;
    }, [] as number[]);

    const targetIndex = candidateIndices[Math.floor(Math.random() * candidateIndices.length)];

    if (isNumber(targetIndex) && divRefs[targetIndex].current) {
      divRefs[targetIndex].current?.classList.add('ani');
      charsRef.current[targetIndex].count = count;
    }

    charsRef.current.forEach((char, i) => {
      if (char.count && char.count <= count - 5) {
        char.count = 0;
        divRefs[i].current?.classList.remove('ani');
        const div = divRefs[i].current;
        if (div) {
          const box = div.getBoundingClientRect();
          div.style.top = `${box.top - 280}px`;
        }
      }
    });

    setCount((prev) => prev + 1);
  }, 1000);

  return (
    <div>
      {charsRef.current.map((char, i) => (
        <div key={i} className="char position-fixed" ref={divRefs[i]}>
          {char.char}
        </div>
      ))}

      <h1
        style={{
          fontSize: '5rem',
          textShadow: store.theme === 'dark' ? '5px 5px rgba(255, 255, 255, 0.4)' : '5px 5px rgba(0, 0, 0, 0.4)',
        }}
      >
        베네치아: Web
      </h1>
      <br />
      {/* <img className="rounded-circle" src={require('../../assets/typing.gif')} alt="Typing animation" /> */}
    </div>
  );
});

export default Header;
