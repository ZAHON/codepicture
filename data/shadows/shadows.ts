import type { Shadows } from './shadows.types';

export const shadows: Shadows = [
  {
    id: 'none',
    label: 'None',
    value: 'unset',
  },
  {
    id: 'small',
    label: 'Small',
    value: 'rgba(0, 0, 0, 0.5) 0px 0px 5px 0px, rgba(0, 0, 0, 0.5) 0px 0px 1px 0px',
  },
  {
    id: 'medium',
    label: 'Medium',
    value: 'rgb(0 0 0 / 40%) 0px 30px 55px',
  },
  {
    id: 'large',
    label: 'Large',
    value: 'rgba(0, 0, 0, 0.60) 0px 45px 70px 4px',
  },
  {
    id: 'bottom',
    label: 'Bottom',
    value: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
  },
  {
    id: '3d-effect',
    label: '3D Effect',
    value:
      'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
  },
];
