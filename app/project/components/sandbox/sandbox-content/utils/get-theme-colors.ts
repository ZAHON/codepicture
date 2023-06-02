import type { Highlighter, Theme } from 'shiki';
import type { ThemeId, ThemeCSSProperties } from '@/data';

type GetThemeColorsArgs = {
  highlighter: Highlighter | undefined;
  theme: ThemeId;
};

export function getThemeColors({ highlighter, theme }: GetThemeColorsArgs): ThemeCSSProperties {
  if (highlighter && highlighter.getLoadedThemes().includes(theme as Theme)) {
    const { colors } = highlighter.getTheme(theme);
    const themeColors = colors ? (colors as ThemeCSSProperties) : {};

    return themeColors;
  }

  return {};
}
