import type { SeparatorProps } from '.';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import { Separator } from '.';

const sepratorTestId = 'seprator-test';

function SeparatorTest(props: SeparatorProps) {
  return <Separator data-testid={sepratorTestId} {...props} />;
}

describe('Separator', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Separator ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should have role="separator" when label property not provided', () => {
    render(<SeparatorTest />);
    expect(screen.getByTestId(sepratorTestId)).toHaveAttribute('role', 'separator');
  });

  it('should have role="none" when label property provided', () => {
    render(<SeparatorTest label="Label" />);
    expect(screen.getByTestId(sepratorTestId)).toHaveAttribute('role', 'none');
  });

  it('should not contain label element when label property not provided', () => {
    render(<SeparatorTest />);

    const separatorElement = screen.getByTestId(sepratorTestId);
    expect(separatorElement).toBeEmptyDOMElement();
  });

  it('should contain label element when label property provided', () => {
    const separatorLabel = 'Label';
    render(<SeparatorTest label={separatorLabel} />);

    const separatorElement = screen.getByTestId(sepratorTestId);
    const separatorLabelElement = screen.getByText(separatorLabel);

    expect(separatorElement).toContainElement(separatorLabelElement);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<SeparatorTest className={className} />);
    expect(screen.getByTestId(sepratorTestId)).toHaveClass(className);
  });
});
