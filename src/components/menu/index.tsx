import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Store from '../../store';
import Adsense from '../common/adsense';
import { API } from '../../lib/api';

const RANKING_MOCK = [
  { name: 'Hakjoon', score: 1100 },
  { name: 'Hakjoon', score: 1000 },
  { name: 'Hakjoon', score: 999 },
  { name: 'Hakjoon', score: 999 },
  { name: 'Hakjoon', score: 999 },
];

const Menu = React.memo(() => {
  const store = Store.useStore();

  useEffect(() => {
    const fetchRankings = async () => {
      const res = await API.getRankins({ lang: 'ko', limit: 5 });
      console.log(res);
    };

    fetchRankings();
  }, []);

  return (
    <div className="h-100">
      <div className="text-center" style={{ height: '35%' }}>
        <img className="rounded h-75" src={require('../../assets/typing.gif')} alt="Typing animation" />
      </div>

      <div style={{ height: '45%' }}>
        <div className="container-fluid">
          <div className="row pt-3">
            <div className="col-6 text-center align-self-center">
              <div>
                <Link
                  to="game"
                  className={`btn btn-${store.theme} border-theme-2px`}
                  role="button"
                  style={{ width: 200 }}
                >
                  시작
                </Link>
              </div>
              <div className="mt-3">
                <Link
                  to="options"
                  className={`btn btn-${store.theme} border-theme-2px`}
                  role="button"
                  style={{ width: 200 }}
                >
                  설정
                </Link>
              </div>
              <div className="mt-3">
                <Link
                  to="rankings"
                  className={`btn btn-${store.theme} border-theme-2px`}
                  role="button"
                  style={{ width: 200 }}
                >
                  랭킹
                </Link>
              </div>
            </div>

            <div className="col-6 border-left text-center">
              <div className="d-inline-block mx-auto border-bottom-3px">
                <h4>최고 득점자</h4>
              </div>
              {RANKING_MOCK.map((ranking, i) => (
                <div key={i} className="mt-3">
                  #{i + 1} {ranking.name}: {ranking.score}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 text-center" style={{ height: '20%' }}>
        <Adsense slot="9105371896" style={{ display: 'inline-block', width: '720px', height: '120px' }} />
      </div>
    </div>
  );
});

export default Menu;
