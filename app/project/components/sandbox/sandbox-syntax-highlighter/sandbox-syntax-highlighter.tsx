'use client';
import { useSandboxSyntaxHighlighter } from './hooks';
import { getTokenStyle, getLineKey, getTokenKey } from './utils';
import { codeStyles, lineStyles } from './sandbox-syntax-highlighter.styles';

export function SandboxSyntaxHighlighter() {
  const italics = true;
  const linesWithTokens = useSandboxSyntaxHighlighter();

  if (typeof linesWithTokens === 'string') {
    return <code>{linesWithTokens}</code>;
  }

  return (
    <code className={codeStyles()}>
      {linesWithTokens.map((tokens, lineIndex) => (
        <span key={getLineKey(lineIndex)} className={lineStyles()}>
          {tokens.map(({ content, color, fontStyle }, tokenIndex) => (
            <span
              key={getTokenKey(lineIndex, tokenIndex)}
              style={getTokenStyle({ color, fontStyle, italics })}
            >
              {content}
            </span>
          ))}
        </span>
      ))}
    </code>
  );
}
