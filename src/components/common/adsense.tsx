import React, { useEffect } from 'react';

const Adsense = React.memo(({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const adsbygoogle: any = (window as { adsbygoogle?: unknown }).adsbygoogle || [];
    adsbygoogle.push({});
  }, []);

  return <>{children}</>;
});

export default Adsense;
