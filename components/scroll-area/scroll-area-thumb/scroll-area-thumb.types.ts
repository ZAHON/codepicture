import type { HTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export type ScrollAreaThumbProps = Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit>;
