import React from 'react';

const ScoreBorad = React.memo(({ score }: { score: number }) => {
  return (
    <div
      className="position-fixed mt-2 text-center rounded-pill border-theme-2px"
      style={{ width: 200, top: 0, left: '50%', marginLeft: -100 }}
    >
      점수: {score}
    </div>
  );
});

export default ScoreBorad;
