import type { Font } from './fonts.types';

export const fonts: Font[] = [
  {
    id: 'cascadia-code',
    cssVariable: '--font-cascadia-code',
    label: 'Cascadia Code',
    ligatures: true,
  },
  {
    id: 'fira-code',
    cssVariable: '--font-fira-code',
    label: 'Fira Code',
    ligatures: true,
  },
  {
    id: 'intel-one-mono',
    cssVariable: '--font-intel-one-mono',
    label: 'Intel One Mono',
    ligatures: false,
  },
  {
    id: 'jetbrains-mono',
    cssVariable: '--font-jetbrains-mono',
    label: 'JetBrains Mono',
    ligatures: true,
  },
  {
    id: 'overpass-mono',
    cssVariable: '--font-overpass-mono',
    label: 'Overpass Mono',
    ligatures: false,
  },
  {
    id: 'source-code-pro',
    cssVariable: '--font-source-code-pro',
    label: 'Source Code Pro',
    ligatures: false,
  },
  {
    id: 'space-mono',
    cssVariable: '--font-space-mono',
    label: 'Space Mono',
    ligatures: false,
  },
];
