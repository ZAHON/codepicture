import {
  useStore,
  selectWindowBorderRadius,
  selectWindowControlsType,
  selectWindowHeaderVisible,
  selectWindowReflection,
  selectWindowShadow,
  selectWindowTabAccent,
  selectWindowTabContent,
  selectWindowTabVisible,
  selectWindowTabIconVisible,
  selectWindowTabIconSize,
  selectWindowWatermark,
} from '@project/store';

export function useWindowState() {
  const windowBorderRadius = useStore(selectWindowBorderRadius);
  const windowControlsType = useStore(selectWindowControlsType);
  const windowHeaderVisible = useStore(selectWindowHeaderVisible);
  const windowReflection = useStore(selectWindowReflection);
  const windowShadow = useStore(selectWindowShadow);
  const windowTabAccent = useStore(selectWindowTabAccent);
  const windowTabContent = useStore(selectWindowTabContent);
  const windowTabVisible = useStore(selectWindowTabVisible);
  const windowTabIconVisible = useStore(selectWindowTabIconVisible);
  const windowTabIconSize = useStore(selectWindowTabIconSize);
  const windowWatermark = useStore(selectWindowWatermark);

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
