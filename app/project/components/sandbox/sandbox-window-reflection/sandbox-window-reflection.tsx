'use client';
import type { SandboxWindowReflectionProps } from './sandbox-window-reflection.types';
import { useStore, selectEditorTheme, selectWindowReflection } from '@project/store';
import { twMerge } from 'tailwind-merge';
import { getThemeTypeById } from '@/utils';
import { sandboxWindowReflectionStyles } from './sandbox-window-reflection.styles';

export function SandboxWindowReflection(props: SandboxWindowReflectionProps) {
  const { children } = props;

  const editorTheme = useStore(selectEditorTheme);
  const windowReflection = useStore(selectWindowReflection);

  const themeType = getThemeTypeById(editorTheme);

  return (
    <div
      className={twMerge(
        sandboxWindowReflectionStyles({ type: themeType, visible: windowReflection })
      )}
    >
      {children}
    </div>
  );
}
