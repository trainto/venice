import React, { useState, useEffect } from 'react';
import { API } from '../../lib/api';
import imgCrown from '../../assets/crown.png';

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
        <div key={i} className="row justify-content-around mt-3">
          <div className="col-3 text-right">
            {i === 0 ? (
              <img src={imgCrown} className="align-bottom mr-1" alt="crown" style={{ width: '1.5rem' }} />
            ) : null}
            #{i + 1}
          </div>
          <div className="col-5 text-center text-truncate">{ranking.name}</div>
          <div className="col-4 text-center">{ranking.score.toLocaleString()}</div>
        </div>
      ))}
    </>
  );
});

export default TopRankins;
