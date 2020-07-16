import React, { CSSProperties } from 'react';
import { Word } from '../../lib/game-engine';

const WordRainDrop = React.memo((props: Word) => {
  const styles: CSSProperties = {
    top: props.top,
    fontSize: '1.2rem',
  };

  if (props.left !== undefined) {
    styles.left = props.left;
  } else if (props.right !== undefined) {
    styles.right = props.right;
  } else {
    styles.left = '50%';
  }

  return (
    <span className="position-absolute" style={styles}>
      {props.word}
    </span>
  );
});

export default WordRainDrop;
