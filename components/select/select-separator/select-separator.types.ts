import type { HTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export type SelectSeparatorProps = Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit>;
