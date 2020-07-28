import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useInterval, useWindowResized } from '../../lib/custom-hooks';
import { doInterval, Word, checkHit, MAX_DAMAGE, LEVEL } from '../../lib/game-engine';
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

  const levelRef = useRef(0);
  const damageRef = useRef(0);
  const hitCountPerLevelRef = useRef(0);
  const scoreRef = useRef(0);

  const heightDivRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef<number>(0);
  const blockDivRef = useRef<HTMLDivElement>(null);
  const blockAreaRef = useRef({ top: 0, left: 0, right: 0 });

  const calcDamageBoundary = useCallback(() => {
    const divScreen = heightDivRef.current;
    const divInput = blockDivRef.current;
    if (!divScreen || !divInput) {
      return;
    }

    heightRef.current = divScreen.clientHeight;
    const inputBox = divInput.getBoundingClientRect();
    blockAreaRef.current = { top: inputBox.top - divScreen.offsetTop, left: inputBox.left, right: inputBox.right };
  }, []);

  useEffect(() => {
    calcDamageBoundary();
  }, [calcDamageBoundary]);

  useWindowResized(() => {
    calcDamageBoundary();
  });

  useInterval(
    () => {
      const [newWords, damage] = doInterval(
        levelRef.current,
        words,
        heightRef.current,
        blockAreaRef.current,
        BOTTOM_MARGIN
      );
      if (damageRef.current !== null) {
        damageRef.current += damage;

        if (damageRef.current <= MAX_DAMAGE) {
          setRunning(false);
        }
      }
      setWords(newWords);
    },
    running ? LEVEL[levelRef.current].interval : null
  );

  const handleInput = useCallback(
    (input: string) => {
      const result = checkHit(words, input, levelRef.current, hitCountPerLevelRef.current);
      if (result) {
        hitCountPerLevelRef.current += 1;
        scoreRef.current += result.score;
        if (result.levelCompleted) {
          levelRef.current = levelRef.current + 1;
          hitCountPerLevelRef.current = 0;
        }
        setWords(result.words);
      }
    },
    [words]
  );

  const calcBox = (ref: HTMLSpanElement | null, i: number) => {
    if (ref) {
      if (!words[i].boxHeight) {
        const newWords = [...words];
        const box = ref.getBoundingClientRect();
        newWords[i].boxHeight = box.height;
        newWords[i].boxLeft = box.left;
        newWords[i].boxRight = box.right;
        setWords(newWords);
      }
    }
  };

  return (
    <div className="h-100 position-relative" ref={heightDivRef}>
      <ScoreBorad level={levelRef.current} score={scoreRef.current} />

      {words.map((word, i) => (
        <WordRainDrop key={i} {...word} ref={(ref) => calcBox(ref, i)} />
      ))}

      <div
        className="position-absolute"
        style={{ width: 300, bottom: 0, left: '50%', marginLeft: -150, zIndex: 1010 }}
        ref={blockDivRef}
      >
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
