import type { HTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export type SliderRangeProps = Omit<HTMLAttributes<HTMLSpanElement>, HTMLAttributesToOmit>;
