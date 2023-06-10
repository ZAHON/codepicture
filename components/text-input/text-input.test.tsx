import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { TextInput } from '.';

describe('TextInput', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLInputElement>();

    render(<TextInput ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('should be not disabled when disabled property not provided', () => {
    render(<TextInput disabled={false} />);
    expect(screen.getByRole('textbox')).toBeEnabled();
  });

  it('should be disabled when disabled property provided', () => {
    render(<TextInput disabled={true} />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should be not required when required property not provided', () => {
    render(<TextInput required={false} />);
    expect(screen.getByRole('textbox')).not.toBeRequired();
  });

  it('should be required when required property provided', () => {
    render(<TextInput required={true} />);
    expect(screen.getByRole('textbox')).toBeRequired();
  });

  it('should be not invalid when invalid property not provided', () => {
    render(<TextInput invalid={false} />);
    expect(screen.getByRole('textbox')).toBeValid();
  });

  it('should be invalid when invalid property provided', () => {
    render(<TextInput invalid={true} />);
    expect(screen.getByRole('textbox')).toBeInvalid();
  });

  it('should have not data-disabled attribute when disabled property not provided', () => {
    render(<TextInput disabled={false} />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('data-disabled');
  });

  it('should have data-disabled attribute when disabled property provided', () => {
    render(<TextInput disabled={true} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('data-disabled');
  });

  it('should have not data-invalid attribute when invalid property not provided', () => {
    render(<TextInput invalid={false} />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('data-invalid');
  });

  it('should have data-invalid attribute when invalid property provided', () => {
    render(<TextInput invalid={true} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('data-invalid');
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<TextInput className={className} />);
    expect(screen.getByRole('textbox')).toHaveClass(className);
  });
});
