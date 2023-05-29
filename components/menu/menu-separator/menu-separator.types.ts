import type { HTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export type MenuSeparatorProps = Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit>;
