import type { ButtonLoaderProps } from './button-loader.types';
import { Loader } from '@/components';
import { buttonLoaderStyles } from './button-loader.styles';

export function ButtonLoader(props: ButtonLoaderProps) {
  return (
    <div className={buttonLoaderStyles()}>
      <Loader size={28} variant="dots" color="currentColor" {...props} />
    </div>
  );
}
