'use client';
import { Item as RadioItem } from '@radix-ui/react-radio-group';

type FrameFillControlFillSwatchProps = {
  type: 'color' | 'gradient';
  id: string;
  value: string;
  label: string;
  getSwatchesMap: () => Map<string, HTMLButtonElement>;
};

export function FrameFillControlFillSwatch(props: FrameFillControlFillSwatchProps) {
  const { type, id, value, label, getSwatchesMap } = props;

  const radioItemAriaLabel =
    type === 'color' ? `Color ${label.toLocaleLowerCase()}` : label.toLocaleLowerCase();

  function addItemToSwatchesMap(node: HTMLButtonElement | null) {
    const swatches = getSwatchesMap();

    if (node) {
      swatches.set(id, node);
    } else {
      swatches.delete(id);
    }
  }

  return (
    <RadioItem
      ref={addItemToSwatchesMap}
      value={id}
      aria-label={radioItemAriaLabel}
      style={{ background: value }}
      className="h-8 w-8 rounded-full drop-shadow-sm focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-9 data-[state=checked]:outline data-[state=checked]:outline-2 data-[state=checked]:outline-offset-2 data-[state=checked]:outline-primary-9"
    />
  );
}
