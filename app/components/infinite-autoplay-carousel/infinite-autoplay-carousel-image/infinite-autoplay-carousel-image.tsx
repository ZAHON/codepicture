import { InfiniteAutoplayCarouselImageProps } from './infinite-autoplay-carousel-image.types';
import Image from 'next/image';

export function InfiniteAutoplayCarouselImage(props: InfiniteAutoplayCarouselImageProps) {
  const { src } = props;

  return <Image height={284} width={414} src={src} alt="" quality={100} unoptimized />;
}
