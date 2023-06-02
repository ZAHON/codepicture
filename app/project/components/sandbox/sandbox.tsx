'use client';
import { useStore, selectHighlighter } from '@/store';

import { SandboxOverlay } from './sandbox-overlay';
import { SandboxFrame } from './sandbox-frame';
import { SandboxContent } from './sandbox-content';
import { SandboxWindow } from './sandbox-window';
import { SandboxLineNumbers } from './sandbox-line-numbers';
import { SandboxEditor } from './sandbox-editor';
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
            <SandboxEditor>
              <SandboxLineNumbers />
              <SandboxSimpleCodeEditor>
                <SandboxSyntaxHighlighter />
              </SandboxSimpleCodeEditor>
            </SandboxEditor>
          </SandboxWindow>
        </SandboxContent>
      </SandboxFrame>
    </SandboxOverlay>
  );
}
