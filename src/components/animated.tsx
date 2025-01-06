import React from 'react';

import { InfoIconsState } from '../@types';
import classes from './animated.module.sass';

export type AnimatedProps = {
  status: InfoIconsState;
  children: React.ReactNode;
  type?: 'vertical' | 'horizontal';
};

function Animated({ status, children, type = 'horizontal' }: AnimatedProps) {
  const animatedClassName = React.useMemo(() => {
    switch (status) {
      case 'hide':
        return type === 'horizontal' ? classes.animatedBeginHorizontal : classes.animatedBeginVertical;
      case 'appear':
        return type === 'horizontal' ? classes.animatedAnimateHorizontal : classes.animatedAnimateVertical;
      default:
        return type === 'horizontal' ? classes.animatedEndHorizontal : classes.animatedEndVertical;
    }
  }, [type, status]);

  return <div className={`${classes.animated} ${animatedClassName}`}>{children}</div>;
}

export default Animated;
