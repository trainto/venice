import React, { useContext, useState } from 'react';

const LOCAL_STORAGE_THEME_KEY = 'theme';

type Theme = 'dark' | 'light';

const createStore = <T extends Record<string, unknown>>(useHook: () => T, storeName: string) => {
  const context = React.createContext<T | null>(null);
  context.displayName = storeName;

  const Provider = ({ children }: { children: React.ReactNode }) => {
    return <context.Provider value={useHook()}>{children}</context.Provider>;
  };

  const useStore = (): T => {
    const store = useContext(context);
    if (!store) {
      throw new Error(`Component must be wrapped with <${storeName}.Provider>`);
    }

    return store;
  };

  return { Provider, useStore };
};

const useGlobal = () => {
  const [theme, setTheme] = useState<Theme>((localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'dark');

  const switchTheme = () => {
    let tempTheme = theme;
    if (theme === 'light') {
      tempTheme = 'dark';
    } else {
      tempTheme = 'light';
    }

    setTheme(tempTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, tempTheme);
  };

  return {
    theme,

    switchTheme,
  };
};

const Store = createStore(useGlobal, 'GlobalStore');

export default Store;
