export type FontId =
  | 'cascadia-code'
  | 'fira-code'
  | 'intel-one-mono'
  | 'jetbrains-mono'
  | 'overpass-mono'
  | 'source-code-pro'
  | 'space-mono';

export type Font = {
  id: FontId;
  cssVariable: string;
  label: string;
  ligatures: boolean;
};
