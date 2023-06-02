import type { Highlighter, Lang, Theme } from 'shiki';
import type { ThemeId } from '@/data';

type GetThemedTokensArgs = {
  highlighter: Highlighter | undefined;
  code: string;
  language: Lang;
  theme: ThemeId;
};

export function getThemedTokens({ highlighter, code, language, theme }: GetThemedTokensArgs) {
  if (
    highlighter &&
    highlighter.getLoadedLanguages().includes(language) &&
    highlighter.getLoadedThemes().includes(theme as Theme)
  ) {
    const themedTokens = highlighter.codeToThemedTokens(code, language, theme, {
      includeExplanation: false,
    });

    return themedTokens;
  }

  return code;
}
