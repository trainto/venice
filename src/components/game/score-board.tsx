import React from 'react';

const ScoreBorad = React.memo(({ level, score }: { level: number; score: number }) => {
  return (
    <div
      className="position-fixed mt-2 text-center rounded-pill border-theme-2px"
      style={{ width: 300, top: 0, left: '50%', marginLeft: -150 }}
    >
      <span>레벨: {level + 1}</span>
      <span className="ml-2">점수: {score}</span>
    </div>
  );
});

export default ScoreBorad;
