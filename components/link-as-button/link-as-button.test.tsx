import { LinkAsButtonProps } from './link-as-button.types';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import { LinkAsButton } from './link-as-button';

const linkContent = 'Link';
const iconPlaceholderTestId = 'icon-placeholder-test-id';

function LinkAsButtonTest(props: Partial<LinkAsButtonProps>) {
  return (
    <LinkAsButton href="#" {...props}>
      {linkContent}
    </LinkAsButton>
  );
}

describe('LinkAsButton', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLAnchorElement>();

    render(
      <LinkAsButton ref={ref} href="#">
        Link
      </LinkAsButton>
    );
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });

  it('should contain icon element when icon property provided', () => {
    render(<LinkAsButtonTest icon={<div data-testid={iconPlaceholderTestId} />} />);

    const buttonElement = screen.getByText(linkContent);
    const iconElement = screen.getByTestId(iconPlaceholderTestId);

    expect(iconElement).toBeInTheDocument();
    expect(buttonElement).toContainElement(iconElement);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<LinkAsButtonTest className={className} />);
    expect(screen.getByText(linkContent)).toHaveClass(className);
  });
});
