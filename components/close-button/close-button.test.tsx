import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import { CloseButton } from './close-button';

function getIconElement() {
  return screen.getByRole('button').querySelector('svg');
}

describe('CloseButton', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<CloseButton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should have type="button"', () => {
    render(<CloseButton />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('should support custom icon size when iconSize property provided as number', () => {
    const iconSize = 10;

    render(<CloseButton iconSize={iconSize} />);

    const iconElement = getIconElement();

    expect(iconElement).toHaveAttribute('height', `${iconSize}`);
    expect(iconElement).toHaveAttribute('width', `${iconSize}`);
  });

  it('should support custom icon size when iconSize property provided as string', () => {
    const iconSize = '10rem';

    render(<CloseButton iconSize={iconSize} />);

    const iconElement = getIconElement();

    expect(iconElement).toHaveAttribute('height', iconSize);
    expect(iconElement).toHaveAttribute('width', iconSize);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<CloseButton className={className} />);
    expect(screen.getByRole('button')).toHaveClass(className);
  });
});
