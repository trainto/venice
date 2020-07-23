import React, { useState, useEffect } from 'react';
import { API } from '../../lib/api';

const TopRankins = React.memo(() => {
  const [rankins, setRankins] = useState<Score[]>([]);

  const fetchTopRankins = async (lang: Lang) => {
    const res = await API.getRankins({ lang: 'ko', limit: 5 });
    if (res.ok && res.result) {
      setRankins(res.result);
    }
  };

  useEffect(() => {
    fetchTopRankins('ko');
  }, []);

  return (
    <>
      <div className="d-inline-block mx-auto border-bottom-3px">
        <h4>최고 득점자</h4>
      </div>
      {rankins.map((ranking, i) => (
        <div key={i} className="mt-3">
          #{i + 1} {ranking.name}: {ranking.score}
        </div>
      ))}
    </>
  );
});

export default TopRankins;
