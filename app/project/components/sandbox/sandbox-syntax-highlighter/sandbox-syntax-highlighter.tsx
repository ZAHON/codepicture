'use client';
import { useStore, selectFontBolds, selectFontItalics } from '@project/store';
import { useSandboxSyntaxHighlighter } from './hooks';
import { getTokenStyle, getLineKey, getTokenKey } from './utils';
import {
  sandboxSyntaxHighlighterStyles,
  sandboxSyntaxHighlighterLineStyles,
  sandboxSyntaxHighlighterTokenStyles,
} from './sandbox-syntax-highlighter.styles';

export function SandboxSyntaxHighlighter() {
  const fontBolds = useStore(selectFontBolds);
  const fontItalics = useStore(selectFontItalics);
  const linesWithTokens = useSandboxSyntaxHighlighter();

  if (typeof linesWithTokens === 'string') {
    return <code>{linesWithTokens}</code>;
  }

  return (
    <code className={sandboxSyntaxHighlighterStyles()}>
      {linesWithTokens.map((tokens, lineIndex) => (
        <span key={getLineKey(lineIndex)} className={sandboxSyntaxHighlighterLineStyles()}>
          {tokens.map(({ content, color, fontStyle }, tokenIndex) => (
            <span
              key={getTokenKey(lineIndex, tokenIndex)}
              style={getTokenStyle({ color, fontStyle, bolds: fontBolds, italics: fontItalics })}
              className={sandboxSyntaxHighlighterTokenStyles()}
            >
              {content}
            </span>
          ))}
        </span>
      ))}
    </code>
  );
}
