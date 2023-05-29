import { LabelAsSpanProps } from '.';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LabelAsSpan } from '.';

const labelAsSpanContent = 'Label';

function LabelAsSpanTest(props: Omit<LabelAsSpanProps, 'children'>) {
  return <LabelAsSpan {...props}>{labelAsSpanContent}</LabelAsSpan>;
}

describe('LabelAsSpan', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<LabelAsSpan ref={ref}>Label</LabelAsSpan>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('should prevent text selection when double clicking label', async () => {
    const user = userEvent.setup();
    render(<LabelAsSpanTest />);

    const labelElement = screen.getByText(labelAsSpanContent);
    await user.dblClick(labelElement);

    const clipboard = await user.copy();
    expect(clipboard).toBeUndefined();
  });

  it('should contain required indicator element when withRequiredIndicator property provided', () => {
    const requiredIndicator = '[required]';

    render(<LabelAsSpanTest withRequiredIndicator requiredIndicator={requiredIndicator} />);

    const labelElement = screen.getByText(labelAsSpanContent);
    const requiredIndicatorElement = screen.getByText(requiredIndicator);

    expect(labelElement).toContainElement(requiredIndicatorElement);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<LabelAsSpanTest className={className} />);
    expect(screen.getByText(labelAsSpanContent)).toHaveClass(className);
  });
});
