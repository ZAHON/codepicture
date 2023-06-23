import type { LoadLanguageArgs } from './load-language.types';
import type { LanguageId } from '@/data';
import { languages } from '@/data';

export async function loadLanguage(args: LoadLanguageArgs) {
  const { highlighter, language } = args;

  if (!highlighter) {
    throw Error('Highlighter does not exist!');
  }

  if (highlighter.getLoadedLanguages().includes(language)) {
    return;
  }

  const languagesToLoad: LanguageId[] = [];

  async function getLanguagesToLoad(idLanguageToLoad: LanguageId) {
    const languageData = languages.find(({ id }) => id === idLanguageToLoad);

    if (languageData && highlighter) {
      if (!languagesToLoad.includes(languageData.id)) {
        if (languageData.embeddedLanguages) {
          for (const embeddedLanguage of languageData.embeddedLanguages) {
            if (!languagesToLoad.includes(embeddedLanguage)) {
              getLanguagesToLoad(embeddedLanguage);
            }
          }
        }

        languagesToLoad.push(languageData.id);
      }
    }
  }

  await getLanguagesToLoad(language);

  for (const languageToLoad of languagesToLoad) {
    if (!highlighter.getLoadedLanguages().includes(languageToLoad)) {
      await highlighter.loadLanguage(languageToLoad);
    }
  }
}
