import type { ReactNode, ReactElement } from 'react';
import { Children, isValidElement } from 'react';

export function getValidChildren(children: ReactNode) {
  return Children.toArray(children).filter((child) => isValidElement(child)) as ReactElement[];
}
