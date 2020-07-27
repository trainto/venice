import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useInterval, useWindowResized } from '../../lib/custom-hooks';
import { doInterval, Word, checkHit, MAX_DAMAGE } from '../../lib/game-engine';
import WordRainDrop from './word-raindrop';
import Input from './input';
import ScoreBorad from './score-board';
import Blocks from './blocks';
import Adsense from '../common/adsense';
import './game-screen.css';

const BOTTOM_MARGIN = 20;

const Game = React.memo(() => {
  const [words, setWords] = useState<Word[]>([]);
  const [running, setRunning] = useState(true);

  const damageRef = useRef(0);
  const scoreRef = useRef(0);

  const heightDivRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef<number>(0);

  const calcGameHeight = useCallback(() => {
    const div = heightDivRef.current;
    if (!div) {
      return;
    }

    heightRef.current = div.clientHeight;
  }, []);

  useEffect(() => {
    calcGameHeight();
  }, [calcGameHeight]);

  useWindowResized(() => {
    calcGameHeight();
  });

  useInterval(
    () => {
      const [newWords, damage] = doInterval(1, words, heightRef.current, BOTTOM_MARGIN);
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

  const calcBox = (ref: HTMLSpanElement | null, i: number) => {
    if (ref) {
      const box = ref.getBoundingClientRect();
      words[i].boxBottom = box.bottom;
      words[i].boxLeft = box.left;
      words[i].boxRight = box.left + box.right;
    }
  };

  return (
    <div className="h-100 position-relative" ref={heightDivRef}>
      <ScoreBorad score={scoreRef.current} />

      {words.map((word, i) => (
        <WordRainDrop key={i} {...word} ref={(ref) => calcBox(ref, i)} />
      ))}

      <div className="position-absolute" style={{ width: 300, bottom: 0, left: '50%', marginLeft: -150, zIndex: 1010 }}>
        <Input onEnter={handleInput} />
        <Blocks damage={damageRef.current} />
      </div>

      <div className="position-absolute w-100" id="wave" style={{ bottom: 0, height: BOTTOM_MARGIN, zIndex: 1000 }} />

      <div id="right-ad">
        <Adsense style={{ display: 'inline-block', width: '160px', height: '600px' }} slot="8494642588" />
      </div>
    </div>
  );
});

export default Game;
