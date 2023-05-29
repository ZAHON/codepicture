import { LabelProps } from '.';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Label } from '.';

const labelContent = 'Label';

function LabelTest(props: Omit<LabelProps, 'htmlFor' | 'children'>) {
  return (
    <Label htmlFor="test" {...props}>
      {labelContent}
    </Label>
  );
}

describe('Label', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLLabelElement>();

    render(
      <Label ref={ref} htmlFor="test">
        Label
      </Label>
    );
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });

  it('should prevent text selection when double clicking label', async () => {
    const user = userEvent.setup();
    render(<LabelTest />);

    const labelElement = screen.getByText(labelContent);
    await user.dblClick(labelElement);

    const clipboard = await user.copy();
    expect(clipboard).toBeUndefined();
  });

  it('should contain required indicator element when withRequiredIndicator property provided', () => {
    const requiredIndicator = '[required]';

    render(<LabelTest withRequiredIndicator requiredIndicator={requiredIndicator} />);

    const labelElement = screen.getByText(labelContent);
    const requiredIndicatorElement = screen.getByText(requiredIndicator);

    expect(labelElement).toContainElement(requiredIndicatorElement);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<LabelTest className={className} />);
    expect(screen.getByText(labelContent)).toHaveClass(className);
  });
});
