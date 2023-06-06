'use client';
import AutosizeInput from 'react-input-autosize';
import { useStore, selectWindowTabContent, selectSetWindowTabContent } from '@/store';
import { wrapperStyles, inputStyles } from './sandbox-window-tab.styles';

export function SandboxWindowTab() {
  const tabContent = useStore(selectWindowTabContent);
  const setTabContent = useStore(selectSetWindowTabContent);

  const tabAccent = true;

  return (
    <div className={wrapperStyles({ tabAccent })}>
      <AutosizeInput
        type="text"
        placeholder="Untitled"
        value={tabContent}
        onChange={(e) => setTabContent(e.target.value)}
        inputClassName={inputStyles()}
      />
    </div>
  );
}
