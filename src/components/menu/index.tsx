import React from 'react';
import { Link } from 'react-router-dom';
import Store from '../../store';
import Adsense from '../common/adsense';
import TopRankins from './top-rankings';
import Header from './header';

const Menu = React.memo(() => {
  const store = Store.useStore();

  return (
    <div className="h-100">
      <div className="text-center" style={{ height: '40%' }}>
        <Header />
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
              <TopRankins />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ height: '15%' }}>
        <Adsense slot="9105371896" style={{ display: 'inline-block', width: '920px', height: '96px' }} />
      </div>
    </div>
  );
});

export default Menu;
