'use client';
import type { KeyboardEvent, ChangeEvent } from 'react';
import type {
  SandboxSimpleCodeEditorProps,
  Record,
  History,
} from './sandbox-simple-code-editor.types';
import { useState, useRef, useEffect } from 'react';
import { isMac, isWindowsOrLinux } from './utils';
import {
  useStore,
  selectEditorCode,
  selectEditorLanguageIsLoading,
  selectEditorThemeIsLoading,
  selectSetEditorCode,
} from '@/store';
import {
  sandboxSimpleCodeEditorStyles,
  sandboxSimpleCodeEditorTextareaStyles,
  sandboxSimpleCodeEditorPreStyles,
} from './sandbox-simple-code-editor.styles';

const insertSpaces = true;
const ignoreTabKey = false;

export function SandboxSimpleCodeEditor(props: SandboxSimpleCodeEditorProps) {
  const { children } = props;

  const editorCode = useStore(selectEditorCode);
  const editorLanguageIsLoading = useStore(selectEditorLanguageIsLoading);
  const editorThemeIsLoading = useStore(selectEditorThemeIsLoading);
  const editorTabSize = 2;

  const setCode = useStore(selectSetEditorCode);

  const [capture, setCapture] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const history = useRef<History>({ stack: [], offset: -1 });
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      recordCurrentState();
    }
  }, []);

  function recordCurrentState() {
    if (!textareaRef.current) return;

    // Save current state of the input
    const { value, selectionStart, selectionEnd } = textareaRef.current;

    recordChange({ value, selectionStart, selectionEnd });
  }

  function recordChange(record: Record, overwrite = false) {
    const { stack, offset } = history.current;

    if (stack.length && offset > -1) {
      // When something updates, drop the redo operations
      history.current.stack = stack.slice(0, offset + 1);

      // Limit the number of operations to 100
      const count = history.current.stack.length;

      if (count > 100) {
        const extras = count - 100;

        history.current.stack = stack.slice(extras, count);
        history.current.offset = Math.max(history.current.offset - extras, 0);
      }
    }

    const timestamp = Date.now();

    if (overwrite) {
      const last = history.current.stack[history.current.offset];

      if (last && timestamp - last.timestamp < 3000) {
        // A previous entry exists and was in short interval

        // Match the last word in the line
        const re = /[^a-z0-9]([a-z0-9]+)$/i;

        // Get the previous line
        const previous = getLines(last.value, last.selectionStart).pop()?.match(re);

        // Get the current line
        const current = getLines(record.value, record.selectionStart).pop()?.match(re);

        if (previous?.[1] && current?.[1]?.startsWith(previous[1])) {
          // The last word of the previous line and current line match
          // Overwrite previous entry so that undo will remove whole word
          history.current.stack[history.current.offset] = { ...record, timestamp };

          return;
        }
      }
    }

    // Add the new operation to the stack
    history.current.stack.push({ ...record, timestamp });
    history.current.offset++;
  }

  function getLines(text: string, position: number) {
    return text.substring(0, position).split('\n');
  }

  function updateInput(record: Record) {
    if (!textareaRef.current) return;

    // Update values and selection state
    textareaRef.current.value = record.value;
    textareaRef.current.selectionStart = record.selectionStart;
    textareaRef.current.selectionEnd = record.selectionEnd;

    setCode(record.value);
  }

  function applyEdits(record: Record) {
    // Save last selection state
    const last = history.current.stack[history.current.offset];

    if (last && textareaRef.current) {
      history.current.stack[history.current.offset] = {
        ...last,
        selectionStart: textareaRef.current.selectionStart,
        selectionEnd: textareaRef.current.selectionEnd,
      };
    }

    // Save the changes
    recordChange(record);
    updateInput(record);
  }

  function undoEdit() {
    const { stack, offset } = history.current;

    // Get the previous edit
    const record = stack[offset - 1];

    if (record) {
      // Apply the changes and update the offset
      updateInput(record);
      history.current.offset = Math.max(offset - 1, 0);
    }
  }

  function redoEdit() {
    const { stack, offset } = history.current;

    // Get the next edit
    const record = stack[offset + 1];

    if (record) {
      // Apply the changes and update the offset
      updateInput(record);
      history.current.offset = Math.min(offset + 1, stack.length - 1);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Escape') {
      e.currentTarget.blur();
    }

    const { value, selectionStart, selectionEnd } = e.currentTarget;

    const tabCharacter = (insertSpaces ? ' ' : '\t').repeat(editorTabSize ? editorTabSize : 2);

    if (e.key === 'Tab' && !ignoreTabKey && capture) {
      // Prevent focus change
      e.preventDefault();

      if (e.shiftKey) {
        // Unindent selected lines
        const linesBeforeCaret = getLines(value, selectionStart);
        const startLine = linesBeforeCaret.length - 1;
        const endLine = getLines(value, selectionEnd).length - 1;
        const nextValue = value
          .split('\n')
          .map((line, i) => {
            if (i >= startLine && i <= endLine && line.startsWith(tabCharacter)) {
              return line.substring(tabCharacter.length);
            }

            return line;
          })
          .join('\n');

        if (value !== nextValue) {
          const startLineText = linesBeforeCaret[startLine];

          applyEdits({
            value: nextValue,
            // Move the start cursor if first line in selection was modified
            // It was modified only if it started with a tab
            selectionStart: startLineText?.startsWith(tabCharacter)
              ? selectionStart - tabCharacter.length
              : selectionStart,
            // Move the end cursor by total number of characters removed
            selectionEnd: selectionEnd - (value.length - nextValue.length),
          });
        }
      } else if (selectionStart !== selectionEnd) {
        // Indent selected lines
        const linesBeforeCaret = getLines(value, selectionStart);
        const startLine = linesBeforeCaret.length - 1;
        const endLine = getLines(value, selectionEnd).length - 1;
        const startLineText = linesBeforeCaret[startLine];

        applyEdits({
          value: value
            .split('\n')
            .map((line, i) => {
              if (i >= startLine && i <= endLine) {
                return tabCharacter + line;
              }

              return line;
            })
            .join('\n'),
          // Move the start cursor by number of characters added in first line of selection
          // Don't move it if it there was no text before cursor
          selectionStart:
            startLineText && /\S/.test(startLineText)
              ? selectionStart + tabCharacter.length
              : selectionStart,
          // Move the end cursor by total number of characters added
          selectionEnd: selectionEnd + tabCharacter.length * (endLine - startLine + 1),
        });
      } else {
        const updatedSelection = selectionStart + tabCharacter.length;

        applyEdits({
          // Insert tab character at caret
          value: value.substring(0, selectionStart) + tabCharacter + value.substring(selectionEnd),
          // Update caret position
          selectionStart: updatedSelection,
          selectionEnd: updatedSelection,
        });
      }
    } else if (e.key === 'Backspace') {
      const hasSelection = selectionStart !== selectionEnd;
      const textBeforeCaret = value.substring(0, selectionStart);

      if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
        // Prevent default delete behaviour
        e.preventDefault();

        const updatedSelection = selectionStart - tabCharacter.length;

        applyEdits({
          // Remove tab character at caret
          value:
            value.substring(0, selectionStart - tabCharacter.length) +
            value.substring(selectionEnd),
          // Update caret position
          selectionStart: updatedSelection,
          selectionEnd: updatedSelection,
        });
      }
    } else if (e.key === 'Enter') {
      // Ignore selections
      if (selectionStart === selectionEnd) {
        // Get the current line
        const line = getLines(value, selectionStart).pop();
        const matches = line?.match(/^\s+/);

        if (matches?.[0]) {
          e.preventDefault();

          // Preserve indentation on inserting a new line
          const indent = '\n' + matches[0];
          const updatedSelection = selectionStart + indent.length;

          applyEdits({
            // Insert indentation character at caret
            value: value.substring(0, selectionStart) + indent + value.substring(selectionEnd),
            // Update caret position
            selectionStart: updatedSelection,
            selectionEnd: updatedSelection,
          });
        }
      }
    } else if (e.key === '(' || e.key === '{' || e.key === "'" || e.key === '`') {
      let chars;

      if (e.key === '(' && e.shiftKey) {
        chars = ['(', ')'];
      } else if (e.key === '{') {
        if (e.shiftKey) {
          chars = ['{', '}'];
        } else {
          chars = ['[', ']'];
        }
      } else if (e.key === "'") {
        if (e.shiftKey) {
          chars = ['"', '"'];
        } else {
          chars = ["'", "'"];
        }
      } else if (e.key === '`' && !e.shiftKey) {
        chars = ['`', '`'];
      }

      // If text is selected, wrap them in the characters
      if (selectionStart !== selectionEnd && chars) {
        e.preventDefault();

        applyEdits({
          value:
            value.substring(0, selectionStart) +
            chars[0] +
            value.substring(selectionStart, selectionEnd) +
            chars[1] +
            value.substring(selectionEnd),
          // Update caret position
          selectionStart,
          selectionEnd: selectionEnd + 2,
        });
      }
    } else if (
      (isMac
        ? // Trigger undo with ⌘+Z on Mac
          e.metaKey && e.key === 'z'
        : // Trigger undo with Ctrl+Z on other platforms
          e.ctrlKey && e.key === 'z') &&
      !e.shiftKey &&
      !e.altKey
    ) {
      e.preventDefault();

      undoEdit();
    } else if (
      (isMac
        ? // Trigger redo with ⌘+Shift+Z on Mac
          e.metaKey && e.key === 'z' && e.shiftKey
        : isWindowsOrLinux
        ? // Trigger redo with Ctrl+Y on Windows
          e.ctrlKey && e.key === 'y'
        : // Trigger redo with Ctrl+Shift+Z on other platforms
          e.ctrlKey && e.key === 'z' && e.shiftKey) &&
      !e.altKey
    ) {
      e.preventDefault();

      redoEdit();
    } else if (e.key === 'm' && e.ctrlKey && (isMac ? e.shiftKey : true)) {
      e.preventDefault();

      // Toggle capturing tab key so users can focus away
      setCapture((capture) => !capture);
    }
  }

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value, selectionStart, selectionEnd } = e.currentTarget;

    recordChange({ value, selectionStart, selectionEnd }, true);

    setCode(value);
  }

  // function handleSelect(e: SyntheticEvent<HTMLTextAreaElement>) {
  //   const { value, selectionStart, selectionEnd } = e.currentTarget;

  //   const linesBeforeCaret = getLines(value, selectionStart);
  //   const startLine = linesBeforeCaret.length;
  //   const endLine = getLines(value, selectionEnd).length;

  //   const selection: Selection = [startLine - 1, endLine - 1];

  //   console.log(selection);
  // }

  return (
    <div className={sandboxSimpleCodeEditorStyles()}>
      <textarea
        ref={textareaRef}
        value={editorCode}
        disabled={editorLanguageIsLoading || editorThemeIsLoading}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        // onSelect={handleSelect}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        data-gramm={false}
        aria-label="Type some code"
        className={sandboxSimpleCodeEditorTextareaStyles()}
      />
      <pre aria-hidden className={sandboxSimpleCodeEditorPreStyles()}>
        {children}
      </pre>
    </div>
  );
}
