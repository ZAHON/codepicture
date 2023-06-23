import type { ConvertToBlobArgs } from './convert-to-blob.types';
import { toBlob } from 'html-to-image';
import { getMimeType } from '../utils';

export async function convertToBlob(args: ConvertToBlobArgs) {
  const { node, filter } = args;

  const mimeType = getMimeType('png');

  const blob = await toBlob(node, {
    type: mimeType,
    cacheBust: true,
    pixelRatio: Math.floor(window.devicePixelRatio),
    filter,
  });

  return blob;
}
