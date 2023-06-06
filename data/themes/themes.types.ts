import type { CSSProperties } from 'react';

export type ThemeId =
  | 'atom-one-light'
  | 'dark-modern'
  | 'github-dark'
  | 'github-light'
  | 'light-modern'
  | 'one-dark-pro';

export type Theme = {
  id: ThemeId;
  label: string;
  type: 'dark' | 'light';
};

export interface ThemeCSSProperties extends CSSProperties {
  '--sandbox-editor-background'?: string;
  '--sandbox-editor-foreground'?: string;
  '--sandbox-editor-cursor-foreground'?: string;
  '--sandbox-editor-selection-background'?: string;
  '--sandbox-line-number-inactive-foreground'?: string;
  '--sandbox-window-header-background'?: string;
  '--sandbox-window-tab-active-foreground'?: string;
  '--sandbox-window-tab-inactive-foreground'?: string;
}
