import type { LoaderProps } from '.';
import { render, screen } from '@testing-library/react';
import { Loader } from '.';

describe('Loader', () => {
  describe('Dots variant', () => {
    function LoaderDotsVariantTest(props: Omit<LoaderProps, 'variant'>) {
      return <Loader variant="dots" {...props} />;
    }

    it('should have role="status"', () => {
      render(<LoaderDotsVariantTest />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should support custom size when size property provided as number', () => {
      const size = 48;

      render(<LoaderDotsVariantTest size={size} />);
      expect(screen.getByRole('status')).toHaveAttribute('width', `${size / 16}rem`);
    });

    it('should support custom animation speed provided by speed property', () => {
      const speed = 500;

      render(<LoaderDotsVariantTest speed={speed} />);
      const loaderElement = screen.getByRole('status');
      // eslint-disable-next-line testing-library/no-node-access
      const animateElements = loaderElement.querySelectorAll('animate');
      animateElements.forEach((animateElement) =>
        expect(animateElement).toHaveAttribute('dur', `${speed}ms`)
      );
    });

    it('should have fallback text provided by label property', () => {
      const label = 'Loading...';

      render(<LoaderDotsVariantTest label={label} />);
      const loaderElement = screen.getByRole('status');
      // eslint-disable-next-line testing-library/no-node-access
      const titleElement = loaderElement.querySelector('title');
      expect(titleElement).toHaveTextContent(label);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<LoaderDotsVariantTest className={className} />);
      expect(screen.getByRole('status')).toHaveClass(className);
    });
  });

  describe('Oval variant', () => {
    function LoaderOvalVariantTest(props: Omit<LoaderProps, 'variant'>) {
      return <Loader variant="oval" {...props} />;
    }

    it('should have role="status"', () => {
      render(<LoaderOvalVariantTest />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should support custom size when size property provided as number', () => {
      const size = 48;

      render(<LoaderOvalVariantTest size={size} />);
      const loaderElement = screen.getByRole('status');
      expect(loaderElement).toHaveAttribute('height', `${size / 16}rem`);
      expect(loaderElement).toHaveAttribute('width', `${size / 16}rem`);
    });

    it('should support custom animation speed provided by speed property', () => {
      const speed = 500;

      render(<LoaderOvalVariantTest speed={speed} />);
      const loaderElement = screen.getByRole('status');
      // eslint-disable-next-line testing-library/no-node-access
      const animateTransformElement = loaderElement.querySelector('animateTransform');
      expect(animateTransformElement).toHaveAttribute('dur', `${speed}ms`);
    });

    it('should have fallback text provided by label property', () => {
      const label = 'Loading...';

      render(<LoaderOvalVariantTest label={label} />);
      const loaderElement = screen.getByRole('status');
      // eslint-disable-next-line testing-library/no-node-access
      const titleElement = loaderElement.querySelector('title');
      expect(titleElement).toHaveTextContent(label);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<LoaderOvalVariantTest className={className} />);
      expect(screen.getByRole('status')).toHaveClass(className);
    });
  });
});
