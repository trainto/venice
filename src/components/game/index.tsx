import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useInterval } from '../../lib/custom-hooks';
import { doInterval, Word, checkHit, MAX_DAMAGE } from '../../lib/game-engine';
import WordRainDrop from './word-raindrop';
import Input from './input';
import ScoreBorad from './score-board';
import Blocks from './blocks';
import './game-screen.css';

const Game = React.memo(() => {
  const [words, setWords] = useState<Word[]>([]);
  const [running, setRunning] = useState(true);

  const damageRef = useRef(0);
  const scoreRef = useRef(0);

  const heightDivRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef<number>(0);

  useEffect(() => {
    const div = heightDivRef.current;
    if (!div) {
      return;
    }

    heightRef.current = div.clientHeight;
  }, []);

  useInterval(
    () => {
      const [newWords, damage] = doInterval(words, 1, heightRef.current);
      if (damageRef.current !== null) {
        damageRef.current += damage;

        if (damageRef.current === MAX_DAMAGE) {
          setRunning(false);
        }
      }
      setWords(newWords);
    },
    running ? 1500 : null
  );

  const handleInput = useCallback(
    (input: string) => {
      const result = checkHit(words, input);
      if (result) {
        if (scoreRef.current !== null) {
          // TODO: Need score policy
          scoreRef.current = scoreRef.current + 10;
        }
        setWords(result);
      }
    },
    [words]
  );

  return (
    <div className="h-100 position-relative" ref={heightDivRef}>
      <ScoreBorad score={scoreRef.current} />

      {words.map((word, i) => (
        <WordRainDrop key={i} {...word} />
      ))}

      <div className="position-absolute" style={{ width: 300, bottom: 0, left: '50%', marginLeft: -150, zIndex: 1010 }}>
        <Input onEnter={handleInput} />
        <Blocks damage={damageRef.current} />
      </div>

      <div className="position-absolute w-100" id="wave" style={{ bottom: 0, height: 20, zIndex: 1000 }} />
    </div>
  );
});

export default Game;
