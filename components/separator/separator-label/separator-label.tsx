import type { SeparatorLabelProps } from './separator-label.types';
import { twMerge } from 'tailwind-merge';
import { separatorLabelStyles } from './separator-label.styles';

export function SeparatorLabel(props: SeparatorLabelProps) {
  const { fontSize, className, children, ...others } = props;

  return (
    <span className={twMerge(separatorLabelStyles({ fontSize }), className)} {...others}>
      {children}
    </span>
  );
}
