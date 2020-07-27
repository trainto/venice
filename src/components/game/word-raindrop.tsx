import React from 'react';
import { Word } from '../../lib/game-engine';

const WordRainDrop = React.memo(
  React.forwardRef<HTMLSpanElement, Word>((props, ref) => {
    const styles: React.CSSProperties = {
      top: props.boxTop,
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
      <span className="position-absolute" style={styles} ref={ref}>
        {props.word}
      </span>
    );
  })
);

export default WordRainDrop;
