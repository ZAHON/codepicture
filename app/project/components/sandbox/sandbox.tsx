'use client';
import { useStore, selectHighlighter } from '@project/store';

import { SandboxOverlay } from './sandbox-overlay';
import { SandboxFrame } from './sandbox-frame';
import { SandboxContent } from './sandbox-content';
import { SandboxWindow } from './sandbox-window';
import { SandboxWindowWatermark } from './sandbox-window-watermark';
import { SandboxWindowReflection } from './sandbox-window-reflection';
import { SandboxWindowHeader } from './sandbox-window-header';
import { SandboxWindowControls } from './sandbox-window-controls';
import { SandboxWindowTab } from './sandbox-window-tab';
import { SandboxEditor } from './sandbox-editor';
import { SandboxEditorLineNumbers } from './sandbox-editor-line-numbers';
import { SandboxSimpleCodeEditor } from './sandbox-simple-code-editor';
import { SandboxSyntaxHighlighter } from './sandbox-syntax-highlighter';

export function Sandbox() {
  const highlighter = useStore(selectHighlighter);

  if (!highlighter) {
    return null;
  }

  return (
    <SandboxOverlay>
      <SandboxFrame>
        <SandboxContent>
          <SandboxWindow>
            <SandboxWindowWatermark />
            <SandboxWindowReflection>
              <SandboxWindowHeader>
                <SandboxWindowControls />
                <SandboxWindowTab />
              </SandboxWindowHeader>
              <SandboxEditor>
                <SandboxEditorLineNumbers />
                <SandboxSimpleCodeEditor>
                  <SandboxSyntaxHighlighter />
                </SandboxSimpleCodeEditor>
              </SandboxEditor>
            </SandboxWindowReflection>
          </SandboxWindow>
        </SandboxContent>
      </SandboxFrame>
    </SandboxOverlay>
  );
}
