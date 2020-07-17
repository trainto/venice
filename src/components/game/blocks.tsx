import React from 'react';
import './blocks.css';

const Blocks = React.memo(({ damage }: { damage: number }) => {
  return (
    <div className="container-fluid border-right border-left">
      <div className="row">
        <div className="col-4 block" />
        <div className="col-4 block" />
        <div className="col-4 block" />
      </div>
      <div className="row">
        <div className="col-4 block" />
        <div className="col-4 block" />
        <div className="col-4 block" />
      </div>
      <div className="row">
        <div className="col-4 block" />
        <div className="col-4 block" />
        <div className="col-4 block" />
      </div>
      <div className="row">
        <div className="col-4 block" />
        <div className="col-4 block" />
        <div className="col-4 block" />
      </div>
    </div>
  );
});

export default Blocks;
