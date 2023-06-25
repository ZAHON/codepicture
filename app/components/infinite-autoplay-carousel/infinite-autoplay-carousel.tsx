import { InfiniteAutoplayCarouselImage } from './infinite-autoplay-carousel-image';

const images = [
  '/images/hero-image-1.png',
  '/images/hero-image-2.png',
  '/images/hero-image-3.png',
  '/images/hero-image-4.png',
  '/images/hero-image-5.png',
  '/images/hero-image-6.png',
];

export function InfiniteAutoplayCarousel() {
  return (
    <div className="h-fit w-full overflow-hidden rounded-lg border border-neutral-5 bg-[linear-gradient(120deg,#c6d4f9,#f9d8e7)] py-4 drop-shadow-md dark:bg-[linear-gradient(120deg,#1c274f,#341a34)]">
      <div className="flex h-fit w-[calc(25.875rem*12)] animate-scroll [--slide-width:25.875rem] [--slides-count:6]">
        {images.map((image) => (
          <InfiniteAutoplayCarouselImage key={image} src={image} />
        ))}

        {images.map((image) => (
          <InfiniteAutoplayCarouselImage key={image} src={image} />
        ))}
      </div>
    </div>
  );
}
