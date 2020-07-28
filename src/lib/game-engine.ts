import { ko } from './dict';

export const LEVEL: { interval: number; maxHit: number; score: number }[] = [
  { interval: 1500, maxHit: 20, score: 10 },
  { interval: 1000, maxHit: 30, score: 20 },
  { interval: 1000, maxHit: 30, score: 30 },
  { interval: 1000, maxHit: 30, score: 40 },
  { interval: 1000, maxHit: 30, score: 50 },
  { interval: 1000, maxHit: 30, score: 60 },
];

const ROW_COUNT = 15;
export const WIDTH = 960;

export const MAX_DAMAGE = -12;

export interface Word {
  word: string;
  row: number;
  boxTop: number;
  boxHeight?: number;
  boxRight?: number;
  boxLeft?: number;
  left?: number;
  right?: number;
  magic?: string;
}

const getDictPool = (level: number, lang: Lang): string[] => {
  switch (level) {
    case 0:
    case 1:
      return ko[2];
    case 3:
      return [...ko[2], ...ko[3]];
    default:
      return [];
  }
};

export const doInterval = (
  level: number,
  lang: Lang,
  words: Word[],
  height: number,
  blockArea: { top: number; left: number; right: number },
  bottomMargin: number
): [Word[], number] => {
  // Push down the words
  const offset = Math.floor(height / ROW_COUNT);
  let i = 0;
  const len = words.length;
  for (; i < len; i += 1) {
    words[i].row += 1;
    words[i].boxTop = words[i].row * offset;
  }

  // Remove words hit the bottom and calc damage
  const filteredWords = words.filter((word) => {
    const y = word.boxTop + (word.boxHeight || 0);
    if (y > blockArea.top) {
      if (word.boxLeft !== undefined && word.boxRight !== undefined) {
        if (word.boxLeft < blockArea.right && word.boxLeft >= blockArea.left) {
          return false;
        }

        if (word.boxRight > blockArea.left && word.boxRight <= blockArea.right) {
          return false;
        }
      }
    }

    return y < height - bottomMargin;
  });
  const damage = filteredWords.length - words.length;

  // Insert a new word
  const wordPool = getDictPool(level, lang);
  const newWord: Word = { word: '', row: 0, boxTop: 0 };
  const wordRandomIndex = Math.floor(Math.random() * wordPool.length);
  newWord.word = wordPool[wordRandomIndex];

  const horizontalOffset = Math.floor(Math.random() * (WIDTH / 2));
  if (Math.random() * 2 < 1) {
    newWord.left = horizontalOffset;
  } else {
    newWord.right = horizontalOffset;
  }

  return [[...filteredWords, newWord], damage];
};

export const checkHit = (
  words: Word[],
  input: string,
  level: number,
  hitCount: number
): { levelCompleted: boolean; score: number; words: Word[] } | null => {
  let i = 0;
  const len = words.length;
  for (; i < len; i += 1) {
    if (words[i].word === input) {
      const newScore = LEVEL[level].score;
      if (LEVEL[level].maxHit <= hitCount + 1) {
        return { levelCompleted: true, score: newScore, words: [] };
      }
      return { levelCompleted: false, score: newScore, words: [...words.slice(0, i), ...words.slice(i + 1)] };
    }
  }

  return null;
};
