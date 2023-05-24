export function applayComponentDefaultProps<
  T extends Record<string, any>, // eslint-disable-line  @typescript-eslint/no-explicit-any
  U extends Partial<T> = {} // eslint-disable-line  @typescript-eslint/ban-types
>(
  defaultProps: U,
  props: T
): [keyof U] extends [keyof T]
  ? T
  : {
      [Key in Exclude<keyof T, keyof U>]: T[Key];
    } & {
      [Key in Extract<keyof T, keyof U>]-?: U[Key] & T[Key];
    } {
  return { ...defaultProps, ...filterProps(props) };
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
