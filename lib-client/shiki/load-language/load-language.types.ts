import type { Highlighter } from 'shiki';
import type { LanguageId } from '@/data';

export interface LoadLanguageArgs {
  highlighter: Highlighter | undefined;
  language: LanguageId;
}
