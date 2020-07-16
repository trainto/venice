import React, { useState, useRef, useEffect } from 'react';
import { useInterval } from '../../lib/custom-hooks';
import { doInterval, Word, checkHit } from '../../lib/game-engine';
import WordRainDrop from './word-raindrop';
import Input from './input';

const Game = React.memo(() => {
  const [words, setWords] = useState<Word[]>([]);

  const heightDivRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef<number>(0);

  useEffect(() => {
    const div = heightDivRef.current;
    if (!div) {
      return;
    }

    heightRef.current = div.clientHeight;
  }, []);

  useInterval(() => {
    const newWords = doInterval(words, 1, heightRef.current);
    setWords(newWords);
  }, 1500);

  const handleInput = (input: string) => {
    const result = checkHit(words, input);
    if (result) {
      setWords(result);
    }
  };

  return (
    <div className="h-100 position-relative" ref={heightDivRef}>
      {words.map((word, i) => (
        <WordRainDrop key={i} {...word} />
      ))}

      <div className="position-absolute" style={{ bottom: 0 }}>
        <Input onEnter={handleInput} />
      </div>
    </div>
  );
});

export default Game;
