'use client';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { useProjectPageStore, selectFrameFill } from '@project/store';
import { getFillValueById } from '@/utils';

type FrameFillControlTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const FrameFillControlTrigger = forwardRef<HTMLButtonElement, FrameFillControlTriggerProps>(
  (props, ref) => {
    const frameFill = useProjectPageStore(selectFrameFill);

    const frameFillValue = getFillValueById(frameFill);

    return (
      <button
        ref={ref}
        id="frame-fill-control-trigger"
        aria-label="Change frame fill"
        style={{ background: frameFillValue }}
        className="col-span-2 h-9 rounded-lg border-4 border-neutral-6 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-9 motion-safe:transition-[background] motion-safe:duration-150 motion-safe:ease-linear md:h-8"
        {...props}
      />
    );
  }
);

FrameFillControlTrigger.displayName = 'FrameFillControlTrigger';
