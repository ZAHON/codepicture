import type { HTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export type ScrollAreaCornerProps = Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit>;
