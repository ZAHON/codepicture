'use client';
import AutosizeInput from 'react-input-autosize';
import {
  useStore,
  selectWindowTabVisible,
  selectWindowTabContent,
  selectSetWindowTabContent,
} from '@/store';
import { wrapperStyles, inputStyles } from './sandbox-window-tab.styles';

export function SandboxWindowTab() {
  const windowTabVisible = useStore(selectWindowTabVisible);
  const windowTabContent = useStore(selectWindowTabContent);
  const setWindowTabContent = useStore(selectSetWindowTabContent);

  const tabAccent = true;

  if (!windowTabVisible) {
    return null;
  }

  return (
    <div className={wrapperStyles({ tabAccent })}>
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
