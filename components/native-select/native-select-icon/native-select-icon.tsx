import type { NativeSelectIconProps } from './native-select-icon.types';
import { IconSelector } from '@tabler/icons-react';
import { getNativeSelectIconSize } from './utils';

export function NativeSelectIcon(props: NativeSelectIconProps) {
  const { size, ...others } = props;

  const iconSize = getNativeSelectIconSize(size);

  return <IconSelector size={iconSize} aria-hidden="true" focusable="false" {...others} />;
}
