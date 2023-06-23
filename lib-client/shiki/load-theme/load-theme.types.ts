import type { Highlighter } from 'shiki';
import type { ThemeId } from '@/data';

export interface LoadThemeArgs {
  highlighter: Highlighter | undefined;
  theme: ThemeId;
}
