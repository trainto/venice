import { ko2 } from './dict';

const ROW_COUNT = 15;
export const WIDTH = 960;

export const MAX_DAMAGE = -12;

export interface Word {
  word: string;
  top: number;
  left?: number;
  right?: number;
  magic?: string;
}

export const doInterval = (words: Word[], level: number, height: number): [Word[], number] => {
  // Push down the words
  const offset = Math.floor(height / ROW_COUNT);
  let i = 0;
  const len = words.length;
  for (; i < len; i += 1) {
    words[i].top += offset;
  }

  // Remove words hit the bottom and calc damage
  // TODO: Need bottom margin
  const filteredWords = words.filter((word) => word.top < height);
  const damage = filteredWords.length - words.length;

  // Insert a new word
  const newWord: Word = { word: '', top: 0 };
  // TODO: Pick a word as level
  const wordRandomIndex = Math.floor(Math.random() * ko2.length);
  newWord.word = ko2[wordRandomIndex];

  const horizontalOffset = Math.floor(Math.random() * (WIDTH / 2));
  if (Math.random() * 2 < 1) {
    newWord.left = horizontalOffset;
  } else {
    newWord.right = horizontalOffset;
  }

  return [[...filteredWords, newWord], damage];
};

export const checkHit = (words: Word[], input: string): Word[] | null => {
  let i = 0;
  const len = words.length;
  for (; i < len; i += 1) {
    if (words[i].word === input) {
      return [...words.slice(0, i), ...words.slice(i + 1)];
    }
  }

  return null;
};
