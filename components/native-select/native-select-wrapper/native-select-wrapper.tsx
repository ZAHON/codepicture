import type { NativeSelectWrapperProps } from './native-select-wrapper.types';
import { twMerge } from 'tailwind-merge';
import { nativeSelectWrapperStyles } from './native-select-wrapper.styles';

export function NativeSelectWrapper(props: NativeSelectWrapperProps) {
  const { className, children, ...others } = props;

  return (
    <div className={twMerge(nativeSelectWrapperStyles(), className)} {...others}>
      {children}
    </div>
  );
}
