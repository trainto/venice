import React from 'react';
import './blocks.css';

const Blocks = React.memo(({ damage }: { damage: number }) => {
  return (
    <div className="container-fluid blocks rounded">
      <div className="row">
        <div className={`col-4 rounded block ${damage <= -1 ? 'broken' : ''}`} />
        <div className={`col-4 rounded block ${damage <= -2 ? 'broken' : ''}`} />
        <div className={`col-4 rounded block ${damage <= -3 ? 'broken' : ''}`} />
      </div>
      <div className="row">
        <div className={`col-4 rounded block ${damage <= -4 ? 'broken' : ''}`} />
        <div className={`col-4 rounded block ${damage <= -5 ? 'broken' : ''}`} />
        <div className={`col-4 rounded block ${damage <= -6 ? 'broken' : ''}`} />
      </div>
      <div className="row">
        <div className={`col-4 rounded block ${damage <= -7 ? 'broken' : ''}`} />
        <div className={`col-4 rounded block ${damage <= -8 ? 'broken' : ''}`} />
        <div className={`col-4 rounded block ${damage <= -9 ? 'broken' : ''}`} />
      </div>
      <div className="row ">
        <div className={`col-4 rounded block ${damage <= -10 ? 'broken' : ''}`} />
        <div className={`col-4 rounded block ${damage <= -11 ? 'broken' : ''}`} />
        <div className={`col-4 rounded block ${damage <= -12 ? 'broken' : ''}`} />
      </div>
    </div>
  );
});

export default Blocks;
