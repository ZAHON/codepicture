'use client';
import { SelectContentProps } from './select-content.types';
import { Portal, Content } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { SelectViewport } from '../select-viewport';
import { selectContentStyles } from './select-content.styles';

const defaultProps: Partial<SelectContentProps> = {
  side: 'bottom',
  sideOffset: 10,
  align: 'start',
  alignOffset: 0,
  avoidCollisions: true,
  collisionBoundary: [],
  collisionPadding: 10,
  sticky: 'partial',
  hideWhenDetached: false,
};

export function SelectContent(props: SelectContentProps) {
  const { container, className, children, viewportProps, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Portal container={container}>
      <Content position="popper" className={twMerge(selectContentStyles(), className)} {...others}>
        <SelectViewport {...viewportProps}>{children}</SelectViewport>
      </Content>
    </Portal>
  );
}
