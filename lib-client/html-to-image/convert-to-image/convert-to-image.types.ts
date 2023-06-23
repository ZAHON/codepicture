export interface ConvertToImageArgs {
  /**
   * The node reference to convert to image.
   */
  node: HTMLElement;

  /**
   * The image extension.
   */
  extension: 'png' | 'svg' | 'jpeg';

  /**
   * The image scale.
   */
  scale: 1 | 2 | 4 | 8 | 16;

  /**
   * The image quality.
   */
  quality: number;

  /**
   * A function taking DOM node as argument. Should return `true` if passed node should be included in the output. Excluding node means excluding it's children as well.
   */
  filter?: (node: HTMLElement) => boolean;
}
