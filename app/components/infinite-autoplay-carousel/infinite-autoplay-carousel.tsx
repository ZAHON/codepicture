import { InfiniteAutoplayCarouselImage } from './infinite-autoplay-carousel-image';

import heroImage1 from '@/public/images/hero-image-1.png';
import heroImage2 from '@/public/images/hero-image-2.png';
import heroImage3 from '@/public/images/hero-image-3.png';
import heroImage4 from '@/public/images/hero-image-4.png';
import heroImage5 from '@/public/images/hero-image-5.png';
import heroImage6 from '@/public/images/hero-image-6.png';

const images = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6];

export function InfiniteAutoplayCarousel() {
  return (
    <div className="h-fit w-full overflow-hidden rounded-lg border border-neutral-5 bg-[linear-gradient(120deg,#c6d4f9,#f9d8e7)] py-4 drop-shadow-md dark:bg-[linear-gradient(120deg,#1c274f,#341a34)]">
      <div className="flex h-fit w-[calc(25.875rem*12)] [--slide-width:25.875rem] [--slides-count:6] motion-safe:animate-scroll">
        {images.map((image, index) => (
          <InfiniteAutoplayCarouselImage key={index} src={image} />
        ))}

        {images.map((image, index) => (
          <InfiniteAutoplayCarouselImage key={index} src={image} />
        ))}
      </div>
    </div>
  );
}
