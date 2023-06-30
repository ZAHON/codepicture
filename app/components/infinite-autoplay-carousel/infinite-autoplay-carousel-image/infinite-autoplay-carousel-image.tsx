import { InfiniteAutoplayCarouselImageProps } from './infinite-autoplay-carousel-image.types';
import Image from 'next/image';

export function InfiniteAutoplayCarouselImage(props: InfiniteAutoplayCarouselImageProps) {
  return <Image height={284} width={414} alt="" quality={100} unoptimized {...props} />;
}
