export type FontId =
  | 'anonymous-pro'
  | 'cascadia-code'
  | 'courier-prime'
  | 'cousine'
  | 'droid-sans-mono'
  | 'fantasque-sans-mono'
  | 'fira-code'
  | 'fragment-mono'
  | 'hack'
  | 'hasklig'
  | 'ia-writer-mono'
  | 'ibm-plex-mono'
  | 'inconsolata'
  | 'intel-one-mono'
  | 'jetbrains-mono'
  | 'juliamono'
  | 'liberation-mono'
  | 'lotion'
  | 'menlo'
  | 'monoid'
  | 'noto-mono'
  | 'overpass-mono'
  | 'pt-mono'
  | 'recursive'
  | 'roboto-mono'
  | 'san-francisco-mono'
  | 'sometype-mono'
  | 'source-code-pro'
  | 'space-mono'
  | 'sudo'
  | 'ubuntu-mono'
  | 'victor-mono';

export type Font = {
  id: FontId;
  cssVariable: string;
  label: string;
  ligatures: boolean;
};
