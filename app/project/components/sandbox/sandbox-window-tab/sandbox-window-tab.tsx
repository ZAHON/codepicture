'use client';
import AutosizeInput from 'react-input-autosize';
import { twMerge } from 'tailwind-merge';
import {
  useProjectPageStore,
  selectWindowTabVisible,
  selectWindowTabAccent,
  selectWindowTabContent,
  selectSetWindowTabContent,
} from '@project/store';
import {
  sandboxWindowTabStyles,
  sandboxWindowTabInnerStyles,
  sandboxWindowTabInputStyles,
} from './sandbox-window-tab.styles';
import { SandboxWindowTabIcon } from '../sandbox-window-tab-icon';

export function SandboxWindowTab() {
  const windowTabVisible = useProjectPageStore(selectWindowTabVisible);
  const windowTabAccent = useProjectPageStore(selectWindowTabAccent);
  const windowTabContent = useProjectPageStore(selectWindowTabContent);
  const setWindowTabContent = useProjectPageStore(selectSetWindowTabContent);

  if (!windowTabVisible) {
    return null;
  }

  return (
    <div id="sandbox-window-tab" className={sandboxWindowTabStyles()}>
      <div className={twMerge(sandboxWindowTabInnerStyles({ withAccent: windowTabAccent }))}>
        <SandboxWindowTabIcon />
        <AutosizeInput
          type="text"
          placeholder="Untitled"
          value={windowTabContent}
          onChange={(e) => setWindowTabContent(e.target.value)}
          inputClassName={sandboxWindowTabInputStyles()}
        />
      </div>
    </div>
  );
}
