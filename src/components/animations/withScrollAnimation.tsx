import { ComponentType } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

interface WithScrollAnimationOptions {
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

export const withScrollAnimation = <P extends object>(
  WrappedComponent: ComponentType<P>,
  options: WithScrollAnimationOptions = {}
) => {
  const WithScrollAnimation = (props: P) => {
    return (
      <AnimateOnScroll {...options}>
        <WrappedComponent {...props} />
      </AnimateOnScroll>
    );
  };

  // Set display name for better debugging
  WithScrollAnimation.displayName = `WithScrollAnimation(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithScrollAnimation;
};
