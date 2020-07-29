import React, { ReactNode, CSSProperties } from 'react';

type Props = {
  width?: number;
  height?: number;
  children: ReactNode;
};

const PopupWrapper = (props: Props) => {
  const styleDimmed: CSSProperties = {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 2000,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  };

  const styleWindow: CSSProperties = {
    position: 'absolute',
    width: props.width || 480,
    height: props.height || 540,
    backgroundColor: 'white',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2001,
  };

  return (
    <div style={styleDimmed}>
      <div className="rounded p-2" style={styleWindow}>
        {props.children}
      </div>
    </div>
  );
};

export default PopupWrapper;
