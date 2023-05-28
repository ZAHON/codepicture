import type { ButtonInnerProps } from './button-inner.types';
import { twMerge } from 'tailwind-merge';
import { buttonInnerStyles } from './button-inner.styles';

export function ButtonInner(props: ButtonInnerProps) {
  const { loading, className, children, ...others } = props;

  return (
    <span className={twMerge(buttonInnerStyles({ loading }), className)} {...others}>
      {children}
    </span>
  );
}
