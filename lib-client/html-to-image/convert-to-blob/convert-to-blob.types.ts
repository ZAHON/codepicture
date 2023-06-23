export interface ConvertToBlobArgs {
  /**
   * The node reference to convert to image.
   */
  node: HTMLElement;

  /**
   * A function taking DOM node as argument. Should return `true` if passed node should be included in the output. Excluding node means excluding it's children as well.
   */
  filter?: (node: HTMLElement) => boolean;
}
