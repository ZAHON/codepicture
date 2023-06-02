export type LanguageId = 'css' | 'html' | 'javascript' | 'json' | 'jsx' | 'tsx' | 'typescript';

export type Language = {
  id: LanguageId;
  label: string;
  public: boolean;
  embeddedLanguages?: LanguageId[];
};
