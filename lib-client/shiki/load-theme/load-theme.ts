import type { Theme } from 'shiki';
import type { LoadThemeArgs } from './load-theme.types';

export async function loadTheme(args: LoadThemeArgs) {
  const { highlighter, theme } = args;

  if (!highlighter) {
    throw Error('Highlighter does not exist!');
  }

  if (highlighter.getLoadedThemes().includes(theme as Theme)) {
    return;
  }

  await highlighter.loadTheme(theme);
}
