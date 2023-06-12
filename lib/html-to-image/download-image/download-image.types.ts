export interface DownloadImageArgs {
  /**
   * The image data url.
   */
  dataUrl: string;

  /**
   * The image extension.
   */
  extension: 'png' | 'svg' | 'jpeg';

  /**
   * The image name.
   */
  name: string;
}
