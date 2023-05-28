import { ButtonProps } from './button.types';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import { Button } from './button';

const buttonContent = 'Button';
const iconPlaceholderTestId = 'icon-placeholder-test-id';

function ButtonTest(props: Partial<ButtonProps>) {
  return <Button {...props}>{buttonContent}</Button>;
}

describe('Button', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should be not disabled when disabled property not provided', () => {
    render(<ButtonTest disabled={false} />);
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should be disabled when disabled property provided', () => {
    render(<ButtonTest disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should be not disabled when loading property not provided', () => {
    render(<ButtonTest loading={false} />);
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should be disabled when loading property provided', () => {
    render(<ButtonTest loading={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should contain icon element when icon property provided', () => {
    render(<ButtonTest icon={<div data-testid={iconPlaceholderTestId} />} />);

    const buttonElement = screen.getByRole('button');
    const iconElement = screen.getByTestId(iconPlaceholderTestId);

    expect(iconElement).toBeInTheDocument();
    expect(buttonElement).toContainElement(iconElement);
  });

  it('should not contain loader when loading property not provided', () => {
    render(<ButtonTest loading={false} />);

    const buttonElement = screen.getByRole('button');
    const loaderElement = screen.queryByRole('status');

    expect(loaderElement).not.toBeInTheDocument();
    expect(buttonElement).not.toContainElement(loaderElement);
  });

  it('should contain loader when loading property provided', () => {
    render(<ButtonTest loading={true} />);

    const buttonElement = screen.getByRole('button');
    const loaderElement = screen.getByRole('status');

    expect(loaderElement).toBeInTheDocument();
    expect(buttonElement).toContainElement(loaderElement);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<ButtonTest className={className} />);
    expect(screen.getByRole('button')).toHaveClass(className);
  });
});
