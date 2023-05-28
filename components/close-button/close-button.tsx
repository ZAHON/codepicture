import type { CloseButtonProps } from './close-button.types';
import { forwardRef } from 'react';
import { IconX } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { getCloseButtonIconSize } from './utils';
import { closeButtonStyles } from './close-button.styles';

const defaultProps: Partial<CloseButtonProps> = {
  'aria-label': 'Close',
  size: 'md',
  variant: 'light',
};

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { size, variant, pill, iconSize, className, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <button
      ref={ref}
      type="button"
      className={twMerge(closeButtonStyles({ size, variant, pill }), className)}
      {...others}
    >
      <IconX
        size={iconSize ? iconSize : getCloseButtonIconSize(size)}
        focusable="false"
        aria-hidden="true"
      />
    </button>
  );
});

CloseButton.displayName = 'CloseButton';
