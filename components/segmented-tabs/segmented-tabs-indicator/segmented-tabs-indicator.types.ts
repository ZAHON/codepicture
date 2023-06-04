import type { HTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export type SegmentedTabsIndicatorProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  HTMLAttributesToOmit
>;
