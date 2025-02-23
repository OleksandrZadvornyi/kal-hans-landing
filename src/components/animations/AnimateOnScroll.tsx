import { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?:
    | 'fade'
    | 'slide-up'
    | 'slide-down'
    | 'slide-left'
    | 'slide-right'
    | 'scale';
  duration?: 'fast' | 'normal' | 'slow';
  delay?: 'none' | 'short' | 'medium' | 'long';
  once?: boolean;
}

const animations = {
  fade: 'opacity-0',
  'slide-up': 'opacity-0 translate-y-8',
  'slide-down': 'opacity-0 -translate-y-8',
  'slide-left': 'opacity-0 translate-x-8',
  'slide-right': 'opacity-0 -translate-x-8',
  scale: 'opacity-0 scale-95',
} as const;

const durations = {
  fast: 'duration-500',
  normal: 'duration-700',
  slow: 'duration-1000',
} as const;

const delays = {
  none: '',
  short: 'delay-100',
  medium: 'delay-300',
  long: 'delay-500',
} as const;

export const AnimateOnScroll = ({
  children,
  className = '',
  animation = 'fade',
  duration = 'slow',
  delay = 'none',
  once = false,
}: AnimateOnScrollProps) => {
  const [ref, isInView] = useInView({ once });

  return (
    <div
      ref={ref}
      className={`transform transition-all ease-out ${animations[animation]} ${durations[duration]} ${delays[delay]} ${isInView ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : ''} ${className} `}
    >
      {children}
    </div>
  );
};
