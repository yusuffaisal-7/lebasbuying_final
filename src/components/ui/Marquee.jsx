import React from 'react';
import cn from '../../lib/utils';

export function Marquee({ children, reverse = false, pauseOnHover = false, className = '' }) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden [--duration:25s]',
        pauseOnHover && 'hover:[animation-play-state:paused] group',
        className
      )}
    >
      <div
        className={cn(
          'flex min-w-full shrink-0 items-center gap-4 whitespace-nowrap',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export default Marquee;


