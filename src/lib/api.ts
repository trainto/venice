import queryString from 'query-string';

const BASE_URL = 'https://api.trainto.me/venice';

interface Res<T> {
  ok: boolean;
  status: number;
  msg?: string;
  result?: T;
}

const doFetch = async <T>(path: string, method: 'GET' | 'POST', data?: Record<string, unknown>): Promise<Res<T>> => {
  const requestInit: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method === 'POST' && data) {
    requestInit.body = JSON.stringify(data);
  }

  let newPath = path;
  if (method === 'GET' && data) {
    newPath = path + '?' + queryString.stringify(data);
  }

  try {
    const res = await fetch(BASE_URL + newPath, requestInit);
    if (res.ok) {
      return {
        ok: true,
        status: res.status,
        result: await res.json(),
      };
    } else {
      return {
        ok: false,
        status: res.status,
        msg: (await res.text()) || 'Empty',
      };
    }
  } catch (err) {
    return {
      ok: false,
      status: -1,
      msg: err.message as string | 'Empty',
    };
  }
};

export const API = {
  getRankins: (query: { lang: Lang; skip?: number; limit?: number }): Promise<Res<Score[]>> => {
    return doFetch<Score[]>('/rankings', 'GET', query);
  },
  postScore: (name: string, score: number, lang: Lang) => {},
};
