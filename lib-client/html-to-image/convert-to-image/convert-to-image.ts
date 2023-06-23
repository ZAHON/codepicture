import type { ConvertToImageArgs } from './convert-to-image.types';
import { toPng, toSvg, toJpeg } from 'html-to-image';
import { getMimeType } from '../utils';

export async function convertToImage(args: ConvertToImageArgs) {
  const { node, extension, scale, quality, filter } = args;

  const options = {
    cacheBust: true,
    pixelRatio: scale,
    filter,
  };

  switch (extension) {
    case 'png': {
      const mimeType = getMimeType('png');
      const dataUrl = await toPng(node, {
        ...options,
        type: mimeType,
      });

      return dataUrl;
    }
    case 'svg': {
      const mimeType = getMimeType('svg');
      const dataUrl = await toSvg(node, {
        ...options,
        type: mimeType,
      });

      return dataUrl;
    }
    case 'jpeg': {
      const mimeType = getMimeType('jpeg');
      const dataUrl = await toJpeg(node, {
        ...options,
        type: mimeType,
        quality: quality / 100,
      });

      return dataUrl;
    }
    default: {
      throw Error(`Unknown extension: ${extension}`);
    }
  }
}
