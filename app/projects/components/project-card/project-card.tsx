import type { ProjectCardProps } from './project-card.types';
import Image from 'next/image';
import { languages } from '@/data';
import { formatDistanceToNow } from '@/utils';
import { ProjectCardMenu } from './project-card-menu';

export function ProjectCard(props: ProjectCardProps) {
  const { id, name, createdAt, updatedAt, editorLanguage } = props;

  const languageLabel = languages.find(({ id }) => id === editorLanguage)?.label;

  return (
    <li>
      <a
        href={`/project/${id}`}
        className="flex flex-col gap-y-4 rounded-lg border border-neutral-5 bg-white p-4 hover:bg-neutral-1 focus:bg-neutral-1 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-9 motion-safe:transition motion-safe:duration-150 dark:bg-neutral-2 dark:hover:bg-neutral-3 dark:focus:bg-neutral-3"
      >
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-between gap-x-4">
            <h2 className="truncate text-lg font-medium">{name}</h2>
            <ProjectCardMenu key={id} projectId={id} projectName={name} />
          </div>
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
