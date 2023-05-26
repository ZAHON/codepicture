import { createRef } from 'react';
import { screen, render } from '@testing-library/react';
import { SegmentedSwitch } from '.';

describe('SegmentedSwitch', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<SegmentedSwitch ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should support custom labels', () => {
    const uncheckedLabel = 'False';
    const checkedLabel = 'True';

    render(<SegmentedSwitch uncheckedLabel={uncheckedLabel} checkedLabel={checkedLabel} />);
    expect(screen.getByText(uncheckedLabel)).toBeInTheDocument();
    expect(screen.getByText(checkedLabel)).toBeInTheDocument();
  });

  it('should support inverted property', () => {
    const segmentedSwitchLabelId = 'segmented-switch-label';
    const uncheckedLabel = 'False';
    const checkedLabel = 'True';

    function getSegmentedSwitchLabels() {
      // eslint-disable-next-line testing-library/no-node-access
      return document.querySelectorAll(`#${segmentedSwitchLabelId}`);
    }

    const { rerender } = render(
      <SegmentedSwitch
        labelProps={{ id: segmentedSwitchLabelId }}
        uncheckedLabel={uncheckedLabel}
        checkedLabel={checkedLabel}
        inverted={false}
      />
    );
    const segmentedSwitchLabels = getSegmentedSwitchLabels();
    expect(segmentedSwitchLabels).toHaveLength(2);
    expect(segmentedSwitchLabels[0]).toHaveTextContent(uncheckedLabel);
    expect(segmentedSwitchLabels[1]).toHaveTextContent(checkedLabel);

    rerender(
      <SegmentedSwitch
        labelProps={{ id: segmentedSwitchLabelId }}
        uncheckedLabel={uncheckedLabel}
        checkedLabel={checkedLabel}
        inverted={true}
      />
    );

    const invertedSegmentedSwitchLabels = getSegmentedSwitchLabels();
    expect(invertedSegmentedSwitchLabels).toHaveLength(2);
    expect(invertedSegmentedSwitchLabels[0]).toHaveTextContent(checkedLabel);
    expect(invertedSegmentedSwitchLabels[1]).toHaveTextContent(uncheckedLabel);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<SegmentedSwitch className={className} />);
    expect(screen.getByRole('switch')).toHaveClass(className);
  });
});
