import type { ProjectCardProps } from './project-card.types';
import Image from 'next/image';
import { languages } from '@/data';
import { formatDistanceToNow } from '@/utils';

export function ProjectCard(props: ProjectCardProps) {
  const { id, name, createdAt, updatedAt, editorLanguage } = props;

  const languageLabel = languages.find(({ id }) => id === editorLanguage)?.label;

  return (
    <li className="rounded-lg border border-neutral-5 bg-panel p-4 drop-shadow-md focus-within:bg-neutral-1 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary-9 hover:bg-neutral-1 motion-safe:transition motion-safe:duration-150 dark:focus-within:bg-neutral-4 dark:hover:bg-neutral-4">
      <a href={`/project/${id}`} className="flex flex-col gap-y-4 focus:outline-none">
        <div className="flex flex-col gap-y-2">
          <h2 className="truncate text-lg font-medium">{name}</h2>
          <div className="flex items-center gap-x-2">
            <Image
              src={`/languages-icons/${editorLanguage}.svg`}
              alt="Language icon"
              height={16}
              width={16}
            />
            <span className="text-xs">{languageLabel && languageLabel}</span>
          </div>
        </div>
        <div className="text-xs">
          <span>
            Created <time dateTime={createdAt.toISOString()}>{formatDistanceToNow(createdAt)}</time>{' '}
          </span>
          <span> / </span>
          <span>
            Updated <time dateTime={updatedAt.toISOString()}>{formatDistanceToNow(updatedAt)}</time>
          </span>
        </div>
      </a>
    </li>
  );
}
