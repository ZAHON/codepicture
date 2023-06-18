import { LinkAsButton } from '@/components';

export function HeroSection() {
  return (
    <section className="flex flex-col justify-center gap-8 py-8">
      <h1 className="text-5xl font-bold md:text-7xl">
        Create <span className="text-primary-11">beautiful</span>
        <br />
        pictures of your
        <br />
        <span className="text-primary-11">source code</span>
      </h1>
      <LinkAsButton href="/project" size="lg" className="w-fit">
        Getting started
      </LinkAsButton>
      <div className="h-fit w-full overflow-hidden rounded-lg border border-neutral-5 bg-[linear-gradient(120deg,#c6d4f9,#f9d8e7)] py-4 drop-shadow-md dark:bg-[linear-gradient(120deg,#1c274f,#341a34)]">
        <div className="flex h-fit w-[calc(25.875rem*12)] animate-scroll [--slide-width:25.875rem] [--slides-count:6]">
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-1-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-1-dark.png')]" />
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-2-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-2-dark.png')]" />
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-3-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-3-dark.png')]" />
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-4-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-4-dark.png')]" />
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-5-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-5-dark.png')]" />
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-6-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-6-dark.png')]" />
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-1-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-1-dark.png')]" />
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-2-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-2-dark.png')]" />
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-3-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-3-dark.png')]" />
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-4-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-4-dark.png')]" />
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-5-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-5-dark.png')]" />
          <div className="h-[17.75rem] w-[25.875rem] flex-shrink-0 bg-[url('/images/hero-image-6-light.png')] bg-contain bg-no-repeat dark:bg-[url('/images/hero-image-6-dark.png')]" />
        </div>
      </div>
    </section>
  );
}
