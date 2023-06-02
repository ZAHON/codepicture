export function getTokenKey(lineIndex: number, tokenIndex: number) {
  return `line-${lineIndex + 1}-token-${tokenIndex}`;
}
