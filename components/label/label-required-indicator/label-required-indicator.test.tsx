import type { LabelRequiredIndicatorProps } from './label-required-indicator.types';
import { render, screen } from '@testing-library/react';
import { LabelRequiredIndicator } from './label-required-indicator';

const labelRequiredIndicatorContent = '[required]';

function LabelRequiredIndicatorTest(props: Omit<LabelRequiredIndicatorProps, 'children'>) {
  return (
    <LabelRequiredIndicator {...props}>{labelRequiredIndicatorContent}</LabelRequiredIndicator>
  );
}

describe('LabelRequiredIndicator', () => {
  it('should have aria-hidden="true"', () => {
    render(<LabelRequiredIndicatorTest />);
    expect(screen.getByText(labelRequiredIndicatorContent)).toHaveAttribute('aria-hidden', 'true');
  });

  it('should have role="presentation"', () => {
    render(<LabelRequiredIndicatorTest />);
    expect(screen.getByText(labelRequiredIndicatorContent)).toHaveAttribute('role', 'presentation');
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<LabelRequiredIndicatorTest className={className} />);
    expect(screen.getByText(labelRequiredIndicatorContent)).toHaveClass(className);
  });
});
