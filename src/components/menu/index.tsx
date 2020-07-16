import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <Link to="game">
        <button type="button" className="button">
          시작
        </button>
      </Link>
    </div>
  );
};

export default Menu;
