import React, { useRef, CSSProperties, useState, useEffect, useCallback, createRef } from 'react';
import Store from '../../store';
import { useInterval, useWindowResized } from '../../lib/custom-hooks';
import { WIDTH } from '../../lib/game-engine';

const Header = React.memo(() => {
  const [containerHeight, setContainerHeight] = useState(0);

  const store = Store.useStore();

  const charsRef = useRef([
    { char: '베네치아', count: 0 },
    { char: '추억', count: 0 },
    { char: '산성비', count: 0 },
    { char: '거머리', count: 0 },
    { char: '몸뚱이', count: 0 },
    { char: '미역', count: 0 },
    { char: '가람', count: 0 },
    { char: '가온', count: 0 },
    { char: '가랑비', count: 0 },
    { char: '그루잠', count: 0 },
    { char: '나래', count: 0 },
    { char: '나비잠', count: 0 },
    { char: '다님길', count: 0 },
    { char: '돌개바람', count: 0 },
    { char: '또바기', count: 0 },
    { char: '모꼬지', count: 0 },
    { char: 'Venice', count: 0 },
    { char: 'rain', count: 0 },
    { char: 'history', count: 0 },
    { char: 'Web', count: 0 },
    { char: 'Typescript', count: 0 },
    { char: 'React', count: 0 },
    { char: 'MongoDB', count: 0 },
    { char: 'KOA', count: 0 },
    { char: 'Bootstrap', count: 0 },
    { char: 'around', count: 0 },
    { char: 'complain', count: 0 },
    { char: 'improve', count: 0 },
    { char: 'sweet', count: 0 },
    { char: 'arrange', count: 0 },
    { char: 'complete', count: 0 },
    { char: 'notice', count: 0 },
    { char: 'represent', count: 0 },
    { char: 'work', count: 0 },
    { char: 'complex', count: 0 },
    { char: 'speed', count: 0 },
    { char: 'honest', count: 0 },
  ]);

  const countRef = useRef(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const divRefs: React.RefObject<HTMLDivElement>[] = charsRef.current.map(() => createRef<HTMLDivElement>());

  const calcContainerHeight = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerHeight(rect.height);
    }
  }, []);

  useEffect(() => {
    calcContainerHeight();
  }, [calcContainerHeight]);

  useWindowResized(() => calcContainerHeight());

  useInterval(() => {
    const candidateIndices = charsRef.current.reduce((memo, char, i) => {
      if (char.count === 0) {
        memo.push(i);
        return memo;
      }
      return memo;
    }, [] as number[]);

    const targetIndex = candidateIndices[Math.floor(Math.random() * candidateIndices.length)];

    if (Number.isInteger(targetIndex) && divRefs[targetIndex].current) {
      charsRef.current[targetIndex].count = countRef.current;
      // divRefs[targetIndex].current?.classList.add('ani');
      const target = divRefs[targetIndex].current;
      if (target) {
        target.style.visibility = 'visible';
        target.style.transform = `translateY(${containerHeight - 30}px)`;
      }
    }

    charsRef.current.forEach((char, i) => {
      if (char.count > 0 && char.count <= countRef.current - 5) {
        char.count = -5;
        const div = divRefs[i].current;
        const containerDiv = containerRef.current;
        if (div && containerDiv) {
          div.style.top = `${containerDiv.offsetTop}px`;
          div.style.visibility = 'hidden';
          div.style.transform = '';
        }
      } else if (char.count < 0) {
        char.count += 1;
      }
    });

    countRef.current = countRef.current + 1;
  }, 1000);

  return (
    <div className="h-100" ref={containerRef}>
      {charsRef.current.map((char, i) => {
        const style: CSSProperties = {
          left: '50%',
          zIndex: 1000,
          transition: 'transform 5s linear',
          visibility: 'hidden',
        };
        const offset = Math.floor(Math.random() * (WIDTH / 2)) - 50;
        if (i % 2 === 0) {
          style.marginLeft = offset;
        } else {
          style.marginLeft = -offset;
        }
        return (
          <div key={i} className="position-fixed text-muted" ref={divRefs[i]} style={style}>
            {char.char}
          </div>
        );
      })}

      <h1
        style={{
          fontSize: '5rem',
          textShadow: store.theme === 'dark' ? '5px 5px rgba(255, 255, 255, 0.4)' : '5px 5px rgba(0, 0, 0, 0.4)',
          zIndex: 1010,
          position: 'absolute',
          top: containerHeight / 2,
          left: '50%',
          transform: 'translate(-50%, 0)',
        }}
      >
        베네치아: Web
      </h1>
    </div>
  );
});

export default Header;
