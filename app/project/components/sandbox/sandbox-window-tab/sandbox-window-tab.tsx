'use client';
import AutosizeInput from 'react-input-autosize';
import { twMerge } from 'tailwind-merge';
import {
  useStore,
  selectWindowTabVisible,
  selectWindowTabAccent,
  selectWindowTabContent,
  selectSetWindowTabContent,
} from '@/store';
import { wrapperStyles, inputStyles } from './sandbox-window-tab.styles';

export function SandboxWindowTab() {
  const windowTabVisible = useStore(selectWindowTabVisible);
  const windowTabAccent = useStore(selectWindowTabAccent);
  const windowTabContent = useStore(selectWindowTabContent);
  const setWindowTabContent = useStore(selectSetWindowTabContent);

  if (!windowTabVisible) {
    return null;
  }

  return (
    <div className={twMerge(wrapperStyles({ accent: windowTabAccent }))}>
      <AutosizeInput
        type="text"
        placeholder="Untitled"
        value={windowTabContent}
        onChange={(e) => setWindowTabContent(e.target.value)}
        inputClassName={inputStyles()}
      />
    </div>
  );
}
