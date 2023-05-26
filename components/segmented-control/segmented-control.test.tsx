import { SegmentedControlProps } from '.';
import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import { SegmentedControl, SegmentedControlItem } from '.';

type Item = {
  value: string;
  label: string;
};

const data: Item[] = [
  { value: 'angular', label: 'Angular' },
  { value: 'react', label: 'React' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

function SegmentedControlTest(props: Partial<SegmentedControlProps>) {
  return (
    <SegmentedControl {...props}>
      {data.map(({ value, label }) => (
        <SegmentedControlItem key={value} value={value}>
          {label}
        </SegmentedControlItem>
      ))}
    </SegmentedControl>
  );
}

describe('SegmentedControl', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <SegmentedControl ref={ref}>
        {data.map(({ value, label }) => (
          <SegmentedControlItem key={value} value={value}>
            {label}
          </SegmentedControlItem>
        ))}
      </SegmentedControl>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should correctly renders items', () => {
    render(<SegmentedControlTest />);
    expect(screen.getAllByRole('radio')).toHaveLength(data.length);
  });

  it('should have css variables with appropriate values', () => {
    const checkedItemIndex = 1;

    render(<SegmentedControlTest defaultValue={data[checkedItemIndex].value} />);

    expect(screen.getByRole('radiogroup')).toHaveStyle({
      '--segmented-control-items-count': `${data.length}`,
      '--segmented-control-checked-item-index': `${checkedItemIndex}`,
    });
  });

  it('should have style handed over by style property', () => {
    const style = { backgroundColor: 'test' };

    render(<SegmentedControlTest style={style} />);
    expect(screen.getByRole('radiogroup')).toHaveStyle(style);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<SegmentedControlTest className={className} />);
    expect(screen.getByRole('radiogroup')).toHaveClass(className);
  });
});
