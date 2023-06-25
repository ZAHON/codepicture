import {
  IconLanguage,
  IconColorSwatch,
  IconTypography,
  IconBrightnessHalf,
} from '@tabler/icons-react';
import { Separator } from '@/components';

export function FeaturesSection() {
  return (
    <section className="flex flex-col gap-y-8 p-8">
      <h2 className="text-center text-5xl font-bold">
        Start now to <span className="text-primary-11">beautify</span> your snippets
      </h2>
      <ul className="flex flex-col gap-4 py-4 md:flex-row">
        <li className="flex flex-col gap-y-2 rounded-lg border border-neutral-5 bg-panel p-4 drop-shadow-md md:flex-1">
          <div className="flex items-center gap-x-4">
            <IconLanguage size="1.5rem" aria-hidden="true" focusable="false" />
            <h3 className="text-xl font-bold">Languages</h3>
          </div>
          <Separator />
          <p>60+ Languages. Multi-language code highlighting.</p>
        </li>
        <li className="flex flex-col gap-y-2 rounded-lg border border-neutral-5 bg-panel p-4 drop-shadow-md md:flex-1">
          <div className="flex items-center gap-x-4">
            <IconColorSwatch size="1.5rem" aria-hidden="true" focusable="false" />
            <h3 className="text-xl font-bold">Themes</h3>
          </div>
          <Separator />
          <p>50+ Themes. Variety of styles both light and dark.</p>
        </li>
        <li className="flex flex-col gap-y-2 rounded-lg border border-neutral-5 bg-panel p-4 drop-shadow-md md:flex-1">
          <div className="flex items-center gap-x-4">
            <IconTypography size="1.5rem" aria-hidden="true" focusable="false" />
            <h3 className="text-xl font-bold">Fonts</h3>
          </div>
          <Separator />
          <p>30+ Fonts. Variety of styles both with ligatures and without.</p>
        </li>
        <li className="flex flex-col gap-y-2 rounded-lg border border-neutral-5 bg-panel p-4 drop-shadow-md md:flex-1">
          <div className="flex items-center gap-x-4">
            <IconBrightnessHalf size="1.5rem" aria-hidden="true" focusable="false" />
            <h3 className="text-xl font-bold">Dark Mode</h3>
          </div>
          <Separator />
          <p>Automatically adjust the appearance from light to dark.</p>
        </li>
      </ul>
    </section>
  );
}
