export function getMimeType(extension: 'png' | 'svg' | 'jpeg') {
  switch (extension) {
    case 'png': {
      return 'image/png';
    }
    case 'svg': {
      return 'image/svg+xml';
    }
    case 'jpeg': {
      return 'image/jpeg';
    }
    default: {
      throw Error(`Unknown extension: ${extension}`);
    }
  }
}
