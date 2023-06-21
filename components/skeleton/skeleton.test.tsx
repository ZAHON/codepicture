import type { SkeletonProps } from '.';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import { Skeleton } from '.';

const skeletonTestId = 'skeleton-test';

function SkeletonTest(props: SkeletonProps) {
  return <Skeleton data-testid={skeletonTestId} {...props} />;
}

describe('Skeleton', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should contain children element when children provided', () => {
    const children = 'children';
    render(<SkeletonTest>{children}</SkeletonTest>);

    const childrenElement = screen.getByText(children);
    const skeletonElement = screen.getByText(children);

    expect(skeletonElement).toContainElement(childrenElement);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<SkeletonTest className={className} />);
    expect(screen.getByTestId(skeletonTestId)).toHaveClass(className);
  });
});
