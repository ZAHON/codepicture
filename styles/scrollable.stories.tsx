const meta = {
  title: 'Styles/Scrollable',
};

export default meta;

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const Scrollable = {
  render: () => (
    <div className="container mx-auto flex flex-col items-center gap-y-8 px-4">
      <div className="flex w-full flex-col gap-y-2">
        <h2 className="text-2xl font-bold">
          <code>scrollable</code> utility class
        </h2>
      </div>

      <div className="flex w-full flex-col gap-y-2">
        <h2 className="text-lg font-bold">overflow-y-auto</h2>
        <div className="scrollable flex h-80 w-full flex-col items-center gap-y-4 overflow-y-auto border border-neutral-5 p-4">
          {tags.map((tag) => (
            <div key={tag} className="whitespace-nowrap bg-neutral-4 px-3 py-2 text-sm">
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-2">
        <h2 className="text-lg font-bold">overflow-x-auto</h2>
        <div className="scrollable flex h-32 w-full items-center justify-start gap-x-4 overflow-x-auto border border-neutral-5 p-4">
          {tags.map((tag) => (
            <div key={tag} className="whitespace-nowrap bg-neutral-4 px-3 py-2 text-sm">
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-2">
        <h2 className="text-lg font-bold">overflow-auto</h2>
        <div className="scrollable h-80 w-full overflow-auto border border-neutral-5 p-4">
          <div className="h-[112.5rem] w-[312.5rem] bg-purple-600" />
        </div>
      </div>
    </div>
  ),
};
