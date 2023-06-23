'use client';
import { useProjectPageStore, selectWindowControlsType } from '@project/store';
import {
  MacOSFilledColor,
  MacOSFilledGray,
  MacOSOutlineColor,
  MacOSOutlineGray,
  Windows,
} from '@/svgs';
import { sandboxWindowControlsStyles } from './sandbox-window-controls.styles';

export function SandboxWindowControls() {
  const windowControlsType = useProjectPageStore(selectWindowControlsType);

  function getWindowControls() {
    switch (windowControlsType) {
      case 'macos-filled-color': {
        return <MacOSFilledColor />;
      }
      case 'macos-filled-gray': {
        return <MacOSFilledGray />;
      }
      case 'macos-outline-color': {
        return <MacOSOutlineColor />;
      }
      case 'macos-outline-gray': {
        return <MacOSOutlineGray />;
      }
      case 'windows': {
        return <Windows />;
      }
      default: {
        return null;
      }
    }
  }

  if (windowControlsType === 'none') {
    return null;
  }

  return <div className={sandboxWindowControlsStyles()}>{getWindowControls()}</div>;
}
