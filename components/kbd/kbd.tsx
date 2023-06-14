import type { KbdProps } from './kbd.types';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { kbdStyles } from './kbd.styles';

const defaultProps: Partial<KbdProps> = {
  fontSize: 'md',
};

export function Kbd(props: KbdProps) {
  const { fontSize, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <kbd className={twMerge(kbdStyles({ fontSize }), className)} {...others}>
      {children}
    </kbd>
  );
}
