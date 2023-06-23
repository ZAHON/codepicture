import { convertToBlob } from './convert-to-blob';
import { convertToImage } from './convert-to-image';
import { downloadImage } from './download-image';

export const htmlToImage = {
  convert: convertToImage,
  convertToBlob: convertToBlob,
  download: downloadImage,
};
