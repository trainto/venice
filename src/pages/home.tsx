import React from 'react';

const Home = React.memo(() => {
  return (
    <div>
      <ul>
        <li>시작</li>
        <li>언어</li>
        <li>점수판</li>
      </ul>
    </div>
  );
});

export default Home;
