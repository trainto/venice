import React, { Suspense, ComponentType, ReactNode } from 'react';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getComponent: () => Promise<{ default: ComponentType<any> }>;
  loading?: ReactNode;
}

const AsyncComponent = React.memo(({ getComponent, loading }: Props) => {
  const LazyComponent = React.lazy(getComponent);

  return (
    <Suspense fallback={loading ? loading : null}>
      <LazyComponent />
    </Suspense>
  );
});

export default AsyncComponent;
