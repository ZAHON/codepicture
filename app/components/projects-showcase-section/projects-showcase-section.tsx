import { LinkAsButton } from '@/components';

export function ProjectsShowcaseSection() {
  return (
    <section className="my-8 flex flex-col items-center justify-center gap-8 rounded-lg border border-neutral-5 bg-neutral-1 p-8 dark:bg-neutral-2 md:flex-row">
      <div className="flex flex-col items-center justify-center gap-y-8">
        <h2 className="text-center text-5xl font-bold">Store your snippets</h2>
        <p className="text-center text-lg">
          You want to keep track of your snippets, and have a safe place to save them.
        </p>
        <LinkAsButton href="/project" size="lg" className="w-fit">
          Getting started
        </LinkAsButton>
        <p className="text-center text-neutral-11">
          *You must be authenticated to save your snippets remotely.
        </p>
      </div>
      <div className="aspect-square w-full max-w-[27.75rem] bg-[url('/images/projects-showcase-light.png')] bg-contain bg-center bg-no-repeat drop-shadow-lg dark:bg-[url('/images/projects-showcase-dark.png')]" />
    </section>
  );
}
