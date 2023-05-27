import type { NativeSelectProps } from './native-select.types';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { NativeSelect } from '.';

function NativeSelectTest(props: Omit<Partial<NativeSelectProps>, 'children'>) {
  return (
    <NativeSelect {...props}>
      <option value="angular">Angular</option>
      <option value="react">React</option>
      <option value="svelte">Svelte</option>
      <option value="vue">Vue</option>
    </NativeSelect>
  );
}

function itSupportsSharedDataSet(
  getElement: (container?: HTMLElement) => HTMLElement | null | undefined
) {
  it('should have not data-disabled attribute when disabled property not provided', () => {
    const { container } = render(<NativeSelectTest disabled={false} />);
    expect(getElement(container)).not.toHaveAttribute('data-disabled');
  });

  it('should have data-disabled attribute when disabled property provided', () => {
    const { container } = render(<NativeSelectTest disabled={true} />);
    expect(getElement(container)).toHaveAttribute('data-disabled');
  });

  it('should have not data-invalid attribute when invalid property not provided', () => {
    const { container } = render(<NativeSelectTest invalid={false} />);
    expect(getElement(container)).not.toHaveAttribute('data-invalid');
  });

  it('should have data-invalid attribute when invalid property provided', () => {
    const { container } = render(<NativeSelectTest invalid={true} />);
    expect(getElement(container)).toHaveAttribute('data-invalid');
  });
}

describe('NativeSelect', () => {
  describe('Wrapper element', () => {
    function getWrapperElement() {
      // eslint-disable-next-line testing-library/no-node-access
      return screen.getByRole('combobox').parentElement;
    }

    itSupportsSharedDataSet(getWrapperElement);
  });

  describe('Input element', () => {
    itSupportsSharedDataSet(() => screen.getByRole('combobox'));

    it('should support ref', () => {
      const ref = createRef<HTMLSelectElement>();

      render(
        <NativeSelect ref={ref}>
          <option value="react">React</option>
        </NativeSelect>
      );
      expect(ref.current).toBeInstanceOf(HTMLSelectElement);
    });

    it('should have not placeholder when placeholder property not provided', () => {
      const placeholder = 'Select option';

      render(<NativeSelectTest />);
      expect(screen.getByRole('combobox')).not.toHaveDisplayValue(placeholder);
    });

    it('should have placeholder when placeholder property provided', () => {
      const placeholder = 'Select option';

      render(<NativeSelectTest placeholder={placeholder} />);
      expect(screen.getByRole('combobox')).toHaveDisplayValue(placeholder);
    });

    it('should be not disabled when disabled property not provided', () => {
      render(<NativeSelectTest disabled={false} />);
      expect(screen.getByRole('combobox')).toBeEnabled();
    });

    it('should be disabled when disabled property provided', () => {
      render(<NativeSelectTest disabled={true} />);
      expect(screen.getByRole('combobox')).toBeDisabled();
    });

    it('should be not required when required property not provided', () => {
      render(<NativeSelectTest required={false} />);
      expect(screen.getByRole('combobox')).not.toBeRequired();
    });

    it('should be required when required property provided', () => {
      render(<NativeSelectTest required={true} />);
      expect(screen.getByRole('combobox')).toBeRequired();
    });

    it('should be not invalid when invalid property not provided', () => {
      render(<NativeSelectTest invalid={false} />);
      expect(screen.getByRole('combobox')).toBeValid();
    });

    it('should be invalid when invalid property provided', () => {
      render(<NativeSelectTest invalid={true} />);
      expect(screen.getByRole('combobox')).toBeInvalid();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<NativeSelectTest className={className} />);
      expect(screen.getByRole('combobox')).toHaveClass(className);
    });
  });

  describe('Right section wrapper element', () => {
    function getRightSectionWrapperElement(container?: HTMLElement) {
      if (container) {
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        return container.querySelector('svg')?.parentElement;
      }
    }

    itSupportsSharedDataSet(getRightSectionWrapperElement);
  });
});
