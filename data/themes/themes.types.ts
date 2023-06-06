import type { CSSProperties } from 'react';

export type ThemeId = 'github-dark' | 'github-light';

export type Theme = {
  id: ThemeId;
  label: string;
  type: 'dark' | 'light';
};

export interface ThemeCSSProperties extends CSSProperties {
  '--sandbox-editor-background'?: string;
  '--sandbox-editor-foreground'?: string;
  '--sandbox-editor-cursor-foreground'?: string;
  '--sandbox-line-number-inactive-foreground'?: string;
  '--sandbox-window-header-background'?: string;
  '--sandbox-window-tab-active-foreground'?: string;
  '--sandbox-window-tab-inactive-foreground'?: string;
}
