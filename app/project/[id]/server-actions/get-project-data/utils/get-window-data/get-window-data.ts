import type { GetWindowDataArgs } from './get-window-data.types';
import type { WindowControlsType, WindowTabIconSize } from '@project/store/slices';
import { shadows } from '@/data';

const windowControlsTypes = [
  'macos-filled-color',
  'macos-filled-gray',
  'macos-outline-color',
  'macos-outline-gray',
  'windows',
  'none',
];

const windowTabIconSizes = [16, 20, 24];

export function getWindowData(args: GetWindowDataArgs) {
  const {
    borderRadius,
    controlsType,
    headerVisible,
    reflection,
    shadow,
    tabAccent,
    tabContent,
    tabVisible,
    tabIconVisible,
    tabIconSize,
    watermark,
  } = args;

  const windowBorderRadius = borderRadius;
  const windowControlsType = windowControlsTypes.includes(controlsType)
    ? (controlsType as WindowControlsType)
    : undefined;
  const windowHeaderVisible = headerVisible;
  const windowReflection = reflection;
  const windowShadow = shadows.find(({ id }) => id === shadow)?.id;
  const windowTabAccent = tabAccent;
  const windowTabContent = tabContent;
  const windowTabVisible = tabVisible;
  const windowTabIconVisible = tabIconVisible;
  const windowTabIconSize = windowTabIconSizes.includes(tabIconSize)
    ? (tabIconSize as WindowTabIconSize)
    : undefined;
  const windowWatermark = watermark;

  if (
    typeof windowBorderRadius !== 'number' ||
    !windowControlsType ||
    typeof windowHeaderVisible !== 'boolean' ||
    typeof windowReflection !== 'boolean' ||
    !windowShadow ||
    typeof windowTabAccent !== 'boolean' ||
    typeof windowTabContent !== 'string' ||
    typeof windowTabVisible !== 'boolean' ||
    typeof windowTabIconVisible !== 'boolean' ||
    !windowTabIconSize ||
    typeof windowWatermark !== 'boolean'
  ) {
    throw Error('Invalid window data');
  }

  return {
    windowBorderRadius,
    windowControlsType,
    windowHeaderVisible,
    windowReflection,
    windowShadow,
    windowTabAccent,
    windowTabContent,
    windowTabVisible,
    windowTabIconVisible,
    windowTabIconSize,
    windowWatermark,
  };
}
