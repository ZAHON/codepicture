import type { NativeSelectRightSectionWrapperProps } from './native-select-right-section-wrapper.types';
import { twMerge } from 'tailwind-merge';
import { nativeSelectRightSectionWrapperStyles } from './native-select-right-section-wrapper.styles';

export function NativeSelectRightSectionWrapper(props: NativeSelectRightSectionWrapperProps) {
  const { size, className, children, ...others } = props;

  return (
    <div
      className={twMerge(nativeSelectRightSectionWrapperStyles({ size }), className)}
      {...others}
    >
      {children}
    </div>
  );
}
