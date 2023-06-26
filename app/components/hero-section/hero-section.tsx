import { GettingStartedLink, InfiniteAutoplayCarousel } from '..';

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
      {/* @ts-expect-error Server Component */}
      <GettingStartedLink size="lg" className="w-fit" />
      <InfiniteAutoplayCarousel />
    </section>
  );
}
