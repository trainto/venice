import React, { useEffect } from 'react';

interface Props {
  style?: Record<string, unknown>;
  slot: string;
}

const Adsense = React.memo((props: Props) => {
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const adsbygoogle: any = (window as { adsbygoogle?: unknown }).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (_err) {
      // Do nothing!
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={props.style ? props.style : { display: 'block' }}
      data-ad-client="ca-pub-6978978720477594"
      data-ad-slot={props.slot}
    />
  );
});

export default Adsense;
