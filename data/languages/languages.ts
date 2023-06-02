import type { Language } from './languages.types';

export const languages: Language[] = [
  {
    id: 'css',
    label: 'CSS',
    public: true,
  },
  {
    id: 'html',
    label: 'HTML',
    public: true,
    embeddedLanguages: ['javascript', 'css'],
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    public: true,
  },
  {
    id: 'json',
    label: 'JSON',
    public: true,
  },
  {
    id: 'jsx',
    label: 'JSX',
    public: true,
  },
  {
    id: 'tsx',
    label: 'TSX',
    public: true,
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    public: true,
  },
];
