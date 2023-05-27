import type { IconButtonProps } from '.';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import { IconButton } from '.';

const IconPlaceholderTestId = 'icon-placeholder-test-id';

function IconButtonTest(props: Partial<IconButtonProps>) {
  return (
    <IconButton aria-label="icon-button" {...props}>
      <div data-testid={IconPlaceholderTestId} />
    </IconButton>
  );
}

describe('IconButton', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <IconButton ref={ref} aria-label="icon-button">
        <div data-testid={IconPlaceholderTestId} />
      </IconButton>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should have type="button"', () => {
    render(<IconButtonTest />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('should be not disabled when disabled property not provided', () => {
    render(<IconButtonTest disabled={false} />);
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should be disabled when disabled property provided', () => {
    render(<IconButtonTest disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should be not disabled when loading property not provided', () => {
    render(<IconButtonTest loading={false} />);
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should be disabled when loading property provided', () => {
    render(<IconButtonTest loading={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should contain loader which replace icon when loading property provided', () => {
    const { rerender } = render(<IconButtonTest loading={false} />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByTestId(IconPlaceholderTestId)).toBeInTheDocument();

    rerender(<IconButtonTest loading={true} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByTestId(IconPlaceholderTestId)).not.toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<IconButtonTest className={className} />);
    expect(screen.getByRole('button')).toHaveClass(className);
  });
});
