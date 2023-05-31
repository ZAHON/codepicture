import { NotificationProps } from '.';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Notification } from '.';

const notificationDataTestId = 'notification';
const notificationTtle = 'notification title';
const notificationMessage = 'notification message';

function NotificationTest(props: Partial<NotificationProps>) {
  return (
    <Notification
      data-testid={notificationDataTestId}
      visible
      type="info"
      message={notificationMessage}
      {...props}
    />
  );
}

describe('Notification', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Notification ref={ref} visible type="info" message={notificationMessage} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should have role="status"', () => {
    render(<NotificationTest />);
    expect(screen.getByTestId(notificationDataTestId)).toHaveAttribute('role', 'status');
  });

  it('should have aria-live="polite"', () => {
    render(<NotificationTest />);
    expect(screen.getByTestId(notificationDataTestId)).toHaveAttribute('aria-live', 'polite');
  });

  it('should not contain title element when title property not provided', () => {
    render(<NotificationTest title="" />);

    const notificationElement = screen.getByTestId(notificationDataTestId);
    const notificationTtleElement = screen.queryByText(notificationTtle);

    expect(notificationTtleElement).not.toBeInTheDocument();
    expect(notificationElement).not.toContainElement(notificationTtleElement);
  });

  it('should contain title element when title property provided', () => {
    render(<NotificationTest title={notificationTtle} />);

    const notificationElement = screen.getByTestId(notificationDataTestId);
    const notificationTtleElement = screen.getByText(notificationTtle);

    expect(notificationTtleElement).toBeInTheDocument();
    expect(notificationElement).toContainElement(notificationTtleElement);
  });

  it('should not contain close button element when withCloseButton property not provided', () => {
    render(<NotificationTest withCloseButton={false} />);

    const notificationElement = screen.getByTestId(notificationDataTestId);
    const notificationCloseButtonElement = screen.queryByRole('button');

    expect(notificationCloseButtonElement).not.toBeInTheDocument();
    expect(notificationElement).not.toContainElement(notificationCloseButtonElement);
  });

  it('should contain close button element when withCloseButton property provided', () => {
    render(<NotificationTest withCloseButton={true} />);

    const notificationElement = screen.getByTestId(notificationDataTestId);
    const notificationCloseButtonElement = screen.getByRole('button');

    expect(notificationCloseButtonElement).toBeInTheDocument();
    expect(notificationElement).toContainElement(notificationCloseButtonElement);
  });

  it('should invoke onClose handler when user click close button', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<NotificationTest withCloseButton={true} onClose={onClose} />);

    const notificationCloseButtonElement = screen.getByRole('button');
    await user.click(notificationCloseButtonElement);

    expect(onClose).toHaveBeenCalled();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<NotificationTest className={className} />);
    expect(screen.getByTestId(notificationDataTestId)).toHaveClass(className);
  });
});
