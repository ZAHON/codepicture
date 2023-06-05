export type ShadowId = 'none' | 'small' | 'medium' | 'large' | 'bottom' | '3d-effect';

export type Shadow = {
  id: ShadowId;
  label: string;
  value: string;
};

export type Shadows = Shadow[];
