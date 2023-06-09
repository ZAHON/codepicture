import type { CSSProperties } from 'react';

export type ThemeId =
  | 'atom-one-light'
  | 'ayu-dark'
  | 'ayu-light'
  | 'ayu-mirage'
  | 'bluloco-dark'
  | 'bluloco-light'
  | 'brackets-light-pro'
  | 'catppuccin-frappe'
  | 'catppuccin-latte'
  | 'catppuccin-macchiato'
  | 'catppuccin-mocha'
  | 'cobalt2'
  | 'darcula'
  | 'dark-modern'
  | 'dracula'
  | 'github-dark-colorblind'
  | 'github-dark-default'
  | 'github-dark-dimmend'
  | 'github-dark'
  | 'github-light-default'
  | 'github-light-colorblind'
  | 'github-light'
  | 'houston'
  | 'kanagawa'
  | 'light-modern'
  | 'monokai-dimmend'
  | 'monokai'
  | 'night-owl-light'
  | 'night-owl'
  | 'nord'
  | 'one-dark-pro-darker'
  | 'one-dark-pro-mix'
  | 'one-dark-pro'
  | 'one-monokai'
  | 'panda-syntax'
  | 'quiet-light'
  | 'shades-of-purple-sd'
  | 'shades-of-purple'
  | 'sublime-material-dark'
  | 'sublime-material-light'
  | 'tokyo-night-light'
  | 'tokyo-night-storm'
  | 'tokyo-night'
  | 'vitesse-black'
  | 'vitesse-dark-soft'
  | 'vitesse-dark'
  | 'vitesse-light-soft'
  | 'vitesse-light';

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
  '--sandbox-editor-line-number-inactive-foreground'?: string;
  '--sandbox-window-header-background'?: string;
  '--sandbox-window-tab-active-foreground'?: string;
  '--sandbox-window-tab-inactive-foreground'?: string;
}
