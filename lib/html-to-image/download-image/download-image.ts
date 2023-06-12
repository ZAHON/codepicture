import type { DownloadImageArgs } from './download-image.types';
import download from 'downloadjs';
import { getMimeType } from '../utils';

export function downloadImage(args: DownloadImageArgs) {
  const { dataUrl, extension, name } = args;

  const fileName = `${name}.${extension}`;
  const mimeType = getMimeType(extension);

  download(dataUrl, fileName, mimeType);
}
